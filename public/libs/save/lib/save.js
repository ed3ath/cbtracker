module.exports = function (name, opts) {

  var engine
    , defaults =
      { idProperty: '_id'
      , logger: { info: console.info, verbose: console.info }
      , engine: undefined
      , debug: true
      }
    , options = Object.assign({}, defaults, opts)

  if (typeof name !== 'string') {
    throw new Error('A string must be provided for \'name\'')
  }

  // If no engine is passed then default to the memory engine.
  engine = options.engine || require('./memory-engine')(
    { idProperty: options.idProperty })

  // Only log in debug mode
  if (options.debug) {

    engine.on('create', function (object) {
      options.logger.info('Creating \'' + name + '\'', JSON.stringify(object))
    })

    engine.on('update', function (object, overwrite) {
      options.logger.info('Updating \'' + name + '\'', JSON.stringify(object)
        , ' with overwrite ', overwrite)
    })

    engine.on('updateMany', function (query) {
      options.logger.info('Updating many \'' + name + '\'', JSON.stringify(query))
    })

    engine.on('delete', function (id) {
      options.logger.info('Deleting \'' + name + '\'', id)
    })

    engine.on('deleteMany', function (query) {
      options.logger.info('Deleting many \'' + name + '\'', JSON.stringify(query))
    })

    engine.on('read', function (id) {
      options.logger.info('Reading \'' + name + '\'', id)
    })

    engine.on('find', function (query, queryOptions) {
      options.logger.info('Finding \'' + name + '\'', JSON.stringify(query) , JSON.stringify(queryOptions))
    })

    engine.on('findOne', function (query, queryOptions) {
      options.logger.info('Finding One \'' + name + '\'', JSON.stringify(query) , JSON.stringify(queryOptions))
    })

    engine.on('count', function (query) {
      options.logger.info('Count \'' + name + '\'', JSON.stringify(query))
    })

    engine.on('error', function (error) {
      options.logger.error('Error with \'' + name + '\'', error)
    })
  }

  return engine
}
