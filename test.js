'use strict';
const Result = require('./index');

const r = Result.of(201, { service: 'abc' });

console.log(r);