'use strict';
const schema = require('./schema');

class Result {
    constructor() {
    }

    get [Symbol.toStringTag]() {
        return 'Result';
    }

    static of(...p) {
        return new Result().status(...p);
    }

    static trans(result) {
        const r = new Result();
        r.content = { grade: 'INFO', code: 100, message: 'done', result };
        return r;
    }

    status(code, opt) {
        if (isNaN(+ code)) code = 999;
        opt = opt ?? {};

        if (schema.hasOwnProperty(+ code)) this.content = schema[+ code](opt);
        else this.content = schema.custom(+ code, opt);

        return this;
    }

    done() {
        return this.content;
    }
}

module.exports = Result;