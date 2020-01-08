# Phaser 3 TS Starter

[![dependencies status](https://david-dm.org/pinkkis/phaser-starter/status.svg?style=flat-square)](https://david-dm.org/pinkkis/phaser-starter)
[![License: Mit](https://img.shields.io/badge/License-MIT-greenbright.svg?style=flat-square)](https://opensource.org/licenses/MIT)
![Phaser Version](https://img.shields.io/github/package-json/v/pinkkis/phaser-starter.svg?style=flat-square)


Starter template for [Phaser 3](https://phaser.io/), using [Typescript](https://www.typescriptlang.org/), [Babel](https://babeljs.io/) and [Webpack](https://webpack.js.org/).

Provides support for webworker loading in webpack and [AVA](https://github.com/avajs/ava) unit tests. Create zip files for Itch.io releases.

## Requirements
* [Node.js](https://nodejs.org/en/download/) - version 12.x or newer
* [Typescript](https://www.typescriptlang.org/) 3.7

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

Make sure you have local certificates that are trusted. Use [mkcert](https://github.com/FiloSottile/mkcert) for example. Put certificate files in `./ssl/` and make sure filenames in package.json script match

# Build a production version into /dist
$ npm run build

# Bundle an Itch.io release zip
# Creates a release-version.zip in /build
$ npm run itchio
```
