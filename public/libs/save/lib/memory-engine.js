var emptyFn = function () {}
  , Mingo = require('mingo')
  , es = require('event-stream')

module.exports = function (opts) {
  var options = Object.assign({ idProperty: '_id' }, opts)
    , self = es.map(createOrUpdate)
    , data = []
    , idSeq = 0

  Mingo.setup({ key: options.idProperty })

  function findById(id) {
    var query = {}
    query[ options.idProperty ] = id
    return Mingo.find(data, query).first()
  }

  /**
   * Checks that the object has the ID property present, then checks
   * if the data object has that ID value present.e
   *
   * Returns an Error to the callback if either of the above checks fail
   *
   * @param {Object} object to check
   * @param {Function} callback
   * @api private
   */
  function checkForIdAndData(object, callback) {
    var id = object[options.idProperty]
      , foundObject
    if (id === undefined || id === null) {
      return callback(new Error('Object has no \''
        + options.idProperty + '\' property'))
    }

    foundObject = findById(id)

    if (foundObject === null) {
      return callback(new Error('No object found with \''
        + options.idProperty + '\' = \'' + id + '\''))
    }

    return callback(null, foundObject)
  }

  /**
   * Create a new entity. Emits a 'create' event.
   *
   * @param {Object} object to create
   * @param {Function} callback (optional)
   * @api public
   */
  function create(object, callback) {
    self.emit('create', object)
    callback = callback || emptyFn
    // clone the object
    var extendedObject = Object.assign({}, object)

    if (!extendedObject[options.idProperty]) {
      idSeq += 1
      extendedObject[options.idProperty] = '' + idSeq
    } else {
      if (findById(extendedObject[options.idProperty]) !== null) {
        return callback(new Error('Key ' + extendedObject[options.idProperty] + ' already exists'))
      }
      // if an id is provided, cast to string.
      extendedObject[options.idProperty] = '' + extendedObject[options.idProperty]
    }
    data.push(Object.assign({}, extendedObject))
    self.emit('afterCreate', extendedObject)
    callback(undefined, extendedObject)
  }

  /**
   * Create or update a entity. Emits a 'create' event or a 'update'.
   *
   * @param {Object} object to create or update
   * @param {Function} callback (optional)
   * @api public
   */
  function createOrUpdate(object, callback) {
    if (typeof object[options.idProperty] === 'undefined') {
      // Create a new object
      self.create(object, callback)
    } else {
      // Try and find the object first to update
      var query = {}
      query[options.idProperty] = object[options.idProperty]

      self.findOne(query, function (err, foundObject) {
        if (foundObject) {
          // We found the object so update
          self.update(object, callback)
        } else {
          // We didn't find the object so create
          self.create(object, callback)
        }
      })
    }
  }

  /**
   * Reads a single entity. Emits a 'read' event.
   *
   * @param {Number} id to read
   * @param {Function} callback (optional)
   * @api public
   */
  function read(id, callback) {
    var query = {}

    self.emit('read', id)
    callback = callback || emptyFn
    query[options.idProperty] = '' + id
    findByQuery(query, {}, function (error, objects) {
      if (objects[0] !== undefined) {
        var cloned = Object.assign({}, objects[0])
        self.emit('received', cloned)
        callback(undefined, cloned)
      } else {
        callback(undefined, undefined)
      }
    })
  }

  /**
   * Updates a single entity. Emits an 'update' event. Optionally overwrites
   * the entire entity, by default just Object.assigns it with the new values.
   *
   * @param {Object} object to update
   * @param {Boolean} whether to overwrite or Object.assign the existing entity
   * @param {Function} callback (optional)
   * @api public
   */
  function update(object, overwrite, callback) {
    if (typeof overwrite === 'function') {
      callback = overwrite
      overwrite = false
    }
    self.emit('update', object, overwrite)
    callback = callback || emptyFn
    var id = '' + object[options.idProperty]
      , updatedObject

    checkForIdAndData(object, function (error, foundObject) {
      if (error) {
        return callback(error)
      }

      if (overwrite) {
        updatedObject = Object.assign({}, object)
      } else {
        updatedObject = Object.assign({}, foundObject, object)
      }

      var query = {}
        , copy = Object.assign({}, updatedObject)
      query[ options.idProperty ] = id
      data = Mingo.remove(data, query)
      data.push(updatedObject)
      self.emit('afterUpdate', copy, overwrite)
      callback(undefined, copy)
    })
  }

  /**
   * Deletes entities based on a query. Emits a 'delete' event. Performs a find
   * by query, then calls delete for each item returned. Returns an error if no
   * items match the query.
   *
   * @param {Object} query to delete on
   * @param {Function} callback (optional)
   * @api public
   */
  function deleteMany(query, callback) {
    callback = callback || emptyFn
    self.emit('deleteMany', query)
    data = Mingo.remove(data, query)
    self.emit('afterDeleteMany', query)
    callback()
  }

  /**
   * Deletes one entity. Emits a 'delete' event. Returns an error if the
   * object can not be found or if the ID property is not present.
   *
   * @param {Object} object to delete
   * @param {Function} callback (optional)
   * @api public
   */
  function del(id, callback) {

    callback = callback || emptyFn

    if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function or empty')
    }

    self.emit('delete', id)
    var query = {}
    query[ options.idProperty ] = id
    deleteMany(query, function() {
      self.emit('afterDelete', '' + id)
      callback(undefined)
    })
  }

  /**
   * Performs a find on the data by search query.
   *
   * Sorting can be done similarly to mongo by providing a $sort option to
   * the options object.
   *
   * The query can target fields in a subdocument similarly to mongo by passing
   * a string reference to the subdocument in dot notation.
   *
   * @param {Object} query to search by
   * @param {Object} search options
   * @param {Function} callback
   * @api private
   */
  function findByQuery(query, options, callback) {

    if (typeof options === 'function') {
      callback = options
      options = {}
    }

    var cursor = Mingo.find(data, query, options && options.fields)
    if (options && options.sort) cursor = cursor.sort(options.sort)
    if (options && options.limit) cursor = cursor.limit(options.limit)

    var allData = getObjectCopies(cursor.all())

    if (callback === undefined) {

      return es.readArray(allData).pipe(es.map(function (data, cb) {
          self.emit('received', data)
          cb(null, data)
        }))
    } else {
      callback(null, allData)
    }

  }

  function getObjectCopies(objects) {
    var copies = []
    objects.forEach(function (object) {
      copies.push(Object.assign({}, object))
    })
    return copies
  }

  /**
   * Performs a find on the data. Emits a 'find' event.
   *
   * @param {Object} query to search by
   * @param {Object} options
   * @param {Function} callback
   * @api public
   */
  function find(query, options, callback) {
    if (typeof options === 'function') {
      callback = options
      options = {}
    }

    self.emit('find', query, options)
    if (callback !== undefined) {
      findByQuery(query, options, function(error, data) {
        if (error) return callback(error)
        self.emit('received', data)
        callback(null, data)
      })
    } else {
      return findByQuery(query, options)
    }
  }

  /**
   * Performs a find on the data and limits the result set to 1.
   * Emits a 'findOne' event.
   *
   * @param {Object} query to search by
   * @param {Object} options
   * @param {Function} callback
   * @api public
   */
  function findOne(query, options, callback) {
    if (typeof options === 'function') {
      callback = options
      options = {}
    }
    self.emit('findOne', query, options)
    findByQuery(query, options, function (error, objects) {
      self.emit('received', objects[0])
      callback(undefined, objects[0])
    })
  }

  /**
   * Performs a count by query. Emits a 'count' event.
   *
   * @param {Object} query to search by
   * @param {Function} callback
   * @api public
   */
  function count(query, callback) {
    self.emit('count', query)
    findByQuery(query, options, function (error, objects) {
      self.emit('received', objects.length)
      callback(undefined, objects.length)
    })
  }

  Object.assign(self
    , { create: create
      , read: read
      , update: update
      , 'delete': del
      , deleteMany: deleteMany
      , find: find
      , findOne: findOne
      , count: count
      , idProperty: options.idProperty
      , createOrUpdate: createOrUpdate
      })

  return self

}
