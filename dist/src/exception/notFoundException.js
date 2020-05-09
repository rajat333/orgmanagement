"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = require("./HttpException");
class NotFoundException extends HttpException_1.default {
    constructor(id, message) {
        super(404, `${message}`);
    }
}
exports.NotFoundException = NotFoundException;
;
class NormalException extends HttpException_1.default {
    constructor(id, message) {
        super(404, `${message}`);
    }
}
exports.NormalException = NormalException;
;
