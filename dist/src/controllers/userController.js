"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = require("../models/userModel");
exports.getUserList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userList = yield userModel_1.User.find({}).lean();
        res.send(userList);
    }
    catch (e) {
        console.log("Exception Occur");
    }
});
exports.addNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let userData = req.body;
    //create new user 
    let newUser = new userModel_1.User(userData);
    newUser.save(function (err, userDetail) {
        if (err)
            return Error(err);
        res.send(userDetail);
    });
});
exports.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.fetchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
