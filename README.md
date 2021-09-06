# read-json-lines-sync

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.com/oprogramador/read-json-lines-sync.svg?branch=master)](https://travis-ci.com/oprogramador/read-json-lines-sync
)

[![NPM status](https://nodei.co/npm/read-json-lines-sync.png?downloads=true&stars=true)](https://npmjs.org/package/read-json-lines-sync
)

Synchronous reader of a string containing many lines in JSON format

## installation
with NPM:
```
npm install --save read-json-lines-sync
```
or with yarn:
```
yarn add read-json-lines-sync
```

## usage
```js
import readJsonLines from 'read-json-lines-sync';
// or alternative syntax:
// const readJsonLines = require('read-json-lines-sync').default;

const lines = `{"foo":"bar"}
{"foo2":"bar2"}
`;

const result = readJsonLines(lines);

expect(result).to.deep.equal([
  { foo: 'bar' },
  { foo2: 'bar2' },
]);
```

## specification
* It omits every line which isn't a valid JSON.
* For the remaining lines, it converts every line into an object.
* So it always returns an array (possibly an empty array if there's no line with a valid JSON).
