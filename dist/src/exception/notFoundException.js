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
class NotAuthorizedException extends HttpException_1.default {
    constructor() {
        super(401, "You're not authorized");
    }
}
exports.NotAuthorizedException = NotAuthorizedException;
;
class WrongCredentialsException extends HttpException_1.default {
    constructor() {
        super(401, 'Wrong credentials provided');
    }
}
exports.WrongCredentialsException = WrongCredentialsException;
;
