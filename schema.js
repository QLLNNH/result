'use strict';

module.exports = {
    // 成功
    100: ({ message = 'done', front = message, back = message, data = null }) => {
        return {
            code: 100,
            grade: 'INFO',
            message: back,
            result: { code: 100, message: front, data }
        };
    },

    // 服务类
    201: (s = '') => {
        return {
            code: 201,
            grade: 'FATAL',
            message: `service ${ s } not found`,
            result: { code: 201, message: `service ${ s } not found`, data: null }
        };
    },
    202: (m = '') => {
        return {
            code: 202,
            grade: 'FATAL',
            message: `method ${ m } not found`,
            result: { code: 202, message: `method ${ m } not found`, data: null }
        };
    },
    203: (p = '') => {
        return {
            code: 203,
            grade: 'FATAL',
            message: `path ${ p } not found`,
            result: { code: 203, message: `path ${ p } not found`, data: null }
        };
    },
    204: (r) => {
        return {
            code: 204,
            grade: 'FATAL',
            message: `router ${ r } not found`,
            result: { code: 204, message: `router ${ r } not found`, data: null }
        };
    },

    // 令牌类
    211: () => {
        return {
            code: 211,
            grade: 'FATAL',
            message: 'token not found',
            result: { code: 211, message: 'token not found', data: null }
        };
    },
    212: () => {
        return {
            code: 212,
            grade: 'FATAL',
            message: 'token mistake',
            result: { code: 212, message: 'token mistake', data: null }
        };
    },
    213: () => {
        return {
            code: 213,
            grade: 'INFO',
            message: 'token overdue',
            result: { code: 213, message: 'token overdue', data: null }
        };
    },

    // 数据格式
    221: () => {
        return {
            code: 221,
            grade: 'FATAL',
            message: 'json format mistake',
            result: { code: 221, message: 'json format mistake', data: null }
        };
    },

    // 参数类
    301: ({ message = 'incorrect parameters', front = message, back = message }) => {
        return {
            code: 301,
            grade: 'FATAL',
            message: back,
            result: { code: 301, message: front, data: null }
        };
    },

    // DB类
    500: ({ message = 'storage mistake', front = message, back = message }) => {
        return {
            code: 500,
            grade: 'FATAL',
            message: back,
            result: { code: 500, message: front, data: null }
        };
    },

    // 内网通信类
    801: ({ origin = 'internal upstream' }) => {
        return {
            code: 801,
            grade: 'FATAL',
            message: `${ origin } timeout`,
            result: { code: 801, message: `${ origin } timeout`, data: null }
        };
    },
    802: ({ origin = 'internal upstream' }) => {
        return {
            code: 802,
            grade: 'FATAL',
            message: `${ origin } refused`,
            result: { code: 802, message: `${ origin } refused`, data: null }
        };
    },
    803: ({ origin = 'internal upstream' }) => {
        return {
            code: 803,
            grade: 'FATAL',
            message: `${ origin } mistake`,
            result: { code: 803, message: `${ origin } mistake`, data: null }
        };
    },
    804: ({ origin = 'internal upstream', data = 500 }) => {
        return {
            code: 804,
            grade: 'FATAL',
            message: `${ origin } return ${ data }`,
            result: { code: 804, message: `${ origin } return ${ data }`, data: null }
        };
    },

    999: () => {
        return {
            code: 999,
            grade: 'FATAL',
            message: 'Result Class Error',
            result: { code: 999, message: 'Result Class Error', data: null }
        };
    },

    // 自定义
    custom: (code, { grade = 'INFO', message = 'done', front = message, back = message, data = null }) => {
        return {
            code,
            grade,
            message: back,
            result: { code, message: front, data }
        };
    }
};