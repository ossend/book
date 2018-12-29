{
  "name": "gitbook",
  "version": "3.2.3",
  "homepage": "https://legacy.gitbook.com",
  "description": "Library and cmd utility to generate GitBooks",
  "main": "lib/index.js",
  "browser": "./lib/browser.js",
  "dependencies": {
    "bash-color": "0.0.4",
    "cheerio": "0.20.0",
    "chokidar": "1.5.0",
    "cp": "0.2.0",
    "cpr": "1.1.1",
    "crc": "3.4.0",
    "destroy": "1.0.4",
    "direction": "0.1.5",
    "dom-serializer": "0.1.0",
    "error": "7.0.2",
    "escape-html": "^1.0.3",
    "escape-string-regexp": "1.0.5",
    "extend": "^3.0.0",
    "fresh-require": "1.0.3",
    "front-matter": "^2.1.0",
    "gitbook-asciidoc": "1.2.2",
    "gitbook-markdown": "1.3.2",
    "gitbook-plugin-fontsettings": "2.0.0",
    "gitbook-plugin-highlight": "2.0.2",
    "gitbook-plugin-livereload": "0.0.1",
    "gitbook-plugin-lunr": "1.2.0",
    "gitbook-plugin-search": "2.2.1",
    "gitbook-plugin-sharing": "1.0.2",
    "gitbook-plugin-theme-default": "1.0.7",
    "github-slugid": "1.0.1",
    "graceful-fs": "4.1.4",
    "i18n-t": "1.0.1",
    "ignore": "3.1.2",
    "immutable": "^3.8.1",
    "is": "^3.1.0",
    "js-yaml": "^3.6.1",
    "json-schema-defaults": "0.1.1",
    "jsonschema": "1.1.0",
    "juice": "2.0.0",
    "mkdirp": "0.5.1",
    "moment": "2.13.0",
    "npm": "3.9.2",
    "npmi": "2.0.1",
    "nunjucks": "2.5.2",
    "nunjucks-do": "1.0.0",
    "object-path": "^0.9.2",
    "omit-keys": "^0.1.0",
    "open": "0.0.5",
    "q": "1.4.1",
    "read-installed": "^4.0.3",
    "request": "2.72.0",
    "resolve": "1.1.7",
    "rmdir": "1.2.0",
    "semver": "5.1.0",
    "send": "0.13.2",
    "spawn-cmd": "0.0.2",
    "tiny-lr": "0.2.1",
    "tmp": "0.0.28",
    "urijs": "1.18.0"
  },
  "devDependencies": {
    "eslint": "2.10.2",
    "expect": "^1.20.1",
    "mocha": "^2.4.5"
  },
  "scripts": {
    "lint": "eslint .",
    "test": "./node_modules/.bin/mocha ./testing/setup.js \"./lib/**/*/__tests__/*.js\" --bail --reporter=list --timeout=10000"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/GitbookIO/gitbook.git"
  },
  "bin": {
    "gitbook": "./bin/gitbook.js"
  },
  "keywords": [
    "git",
    "book",
    "gitbook"
  ],
  "author": "FriendCode Inc. <contact@gitbook.com>",
  "license": "Apache-2.0",
  "bugs": {
    "url": "https://github.com/GitbookIO/gitbook/issues"
  },
  "contributors": [
    {
      "name": "Aaron O'Mullan",
      "email": "aaron@gitbook.com"
    },
    {
      "name": "Samy Pessé",
      "email": "samy@gitbook.com"
    }
  ]
}