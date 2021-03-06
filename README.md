# Phaser 3 TS Starter

[![dependencies status](https://david-dm.org/pinkkis/phaser-starter/status.svg?style=flat-square)](https://david-dm.org/pinkkis/phaser-starter)
[![License: Mit](https://img.shields.io/badge/License-MIT-greenbright.svg?style=flat-square)](https://opensource.org/licenses/MIT)
![Phaser Version](https://img.shields.io/github/package-json/v/pinkkis/phaser-starter.svg?style=flat-square)


Starter template for [Phaser 3](https://phaser.io/), using [Typescript](https://www.typescriptlang.org/), [Babel](https://babeljs.io/) and [Webpack](https://webpack.js.org/).

Provides support for:
- webworker loading in webpack
- [AVA](https://github.com/avajs/ava) unit tests
- Creating a zip files for Itch.io releases
- Spine plugin for Phaser

## Requirements
* [Node.js](https://nodejs.org/en/download/) - version 12.x or newer
* [Typescript](https://www.typescriptlang.org/) 3.7

### SSL
Make sure you have local certificates that are trusted. Use [mkcert](https://github.com/FiloSottile/mkcert) for example. Put certificate files in `./ssl/` and make sure filenames in package.json script match

## How to use
```bash
# Clone this repository
$ git clone --depth 1 https://github.com/pinkkis/phaser-starter.git phaser-starter

# Go into the repository
$ cd phaser-starter

# Install dependencies
$ npm install

# Start the local development server (on port 8080)
$ npm start

# Local dev server with ssl (for service worker)
$ npm start:https

# Build a production version into /dist
$ npm run build

# Bundle an Itch.io release zip
# Creates a release-version.zip in /build
$ npm run itchio
```

## 3rd party licenses
This template uses the Phaser 3 Spine plugin. The Spine Runtimes require you to have your own license if you wish to use them in your own project outside of evaluation

See [the 3rd party license file](3RD-PARTY-LICENSES.md) for a list of other software used.
