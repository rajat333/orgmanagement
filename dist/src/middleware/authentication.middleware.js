"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
class Authentication {
    constructor() {
        this.jwt = jwt;
        this.secret = process.env.JWT_SECRET;
    }
    createToken(user) {
        const expiresIn = parseInt(process.env.Token_Expire);
        const secret = process.env.JWT_SECRET;
        const dataStoredInToken = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userId: user._id,
            phone: user.phone,
        };
        return {
            expiresIn,
            token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
        };
    }
    ;
    verifyToken(req, res, next) {
        try {
            console.log("in verify token ");
            const verificationResponse = jwt.verify(req.headers.Authorization, process.env.JWT_SECRET);
            console.log("verificationResponse verificationResponse", verificationResponse);
            const id = verificationResponse.userId;
            return verificationResponse;
        }
        catch (e) {
            console.log("exception occur", e);
            res.status(401).send({ message: "Not Authorized" });
        }
    }
}
;
//Singleton class 
exports.default = new Authentication();
