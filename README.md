[CryptoBlades Tracker](https://cbtracker.cwsdev.net/) ![](https://img.shields.io/github/license/ed3ath/cbtracker) ![](https://img.shields.io/github/stars/ed3ath/cbtracker) ![](https://img.shields.io/github/forks/ed3ath/cbtracker) ![](https://img.shields.io/github/issues/ed3ath/cbtracker)
==================================

## Related modules

* express - web application framework for node
* pug - template engine
* stylus - pre-processor CSS
* mongoose - nodejs orm for mongodb
* bower - a package manager for the web
* gulp - automate workflow

## Prerequisites

* Node.js v16 `http://nodejs.org` 

## Project Structure
```sh
.
├── app/
│   └── controllers           # contains controller files
│   └── models                # contains model files
│   └── views                 # contains express view (pug) files
│   └── routes.js             # routes config file
├── config/
│   ├── index.js              # environment config file
│   └── db.js                 # db config
├── public/                   # contains static assets
│   ├── components            # bower components folder
│   │   └── ...
│   ├── favicon               # favicon folder
│   ├── fonts                 # contains font files
│   ├── css                   # all files will generate from gulp
│   ├── styl                  # contains style sheets (stylus)
│   ├── js                    # contains js files
│   └── img                   # contains image files
├── test/
│   └── spec.js               # unit & func tests
├── .bowerrc                  # bower config
├── .bower.json               # bower dependencies
├── .Procfile                 # process file for heroku implementation
├── .gitignore                # specifies intentionally untracked files to ignore
├── .editorconfig.js          # editor config
├── .gulpfile.js              # gulp config
├── .eslintrc.yml             # eslint config
├── .eslintignore             # eslint ignore specific files and directories config file
├── .travis.yml               # travis ci config
├── app.js                    # app setup file
└── package.json              # build scripts and dependencies

```

## Getting Started

The easiest way to get started is to clone the repository:

```sh
# Get the latest snapshot
$ git clone https://github.com/ed3ath/cbtracker
$ cd cbtracker

# Install dependencies
$ npm install

$ node app.js
```

## Development

    npm run dev
    
Your app should now be running on [localhost:3000](http://localhost:3000/).

## Test

    npm test

## Lint

    npm run lint

## Docker Support

* Docker `https://docs.docker.com/engine/installation/`

```
# Build the project
docker-compose build  

# Start the application
docker-compose up
```

## Deploy

Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```
heroku create
git push heroku master
heroku open
```

## License

MIT
