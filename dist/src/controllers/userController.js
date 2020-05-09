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
const mongoose = require("mongoose");
const userModel_1 = require("../models/userModel");
const organisationModel_1 = require("../models/organisationModel");
const notFoundException_1 = require("../exception/notFoundException");
exports.getUserList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const org = organisationModel_1.Organisation.find({ name: { $regex: req.body.organisation, $option: 'i' } });
        const userList = yield userModel_1.User.find({ organisation: mongoose.Types.ObjectId(org[0]._id) }).lean();
        res.send({ userList: userList });
    }
    catch (e) {
        console.log("Exception Occur");
        res.send({ message: "Exception Occur" });
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
exports.login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let loginData = req.body;
        let validUser = yield userModel_1.User.find({ username: { $regex: loginData.username } });
        res.send(Object.assign({ message: 'Successful Login' }, validUser));
    }
    catch (e) {
        console.log('Login Exception', e);
        next(new notFoundException_1.WrongCredentialsException());
    }
});
exports.createOrgnizationAdmin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let orgData = req.body;
        let existOrg = yield organisationModel_1.Organisation.find({ name: orgData.organisation }).lean();
        if (existOrg && existOrg.length < 1) {
            console.log(" in if ");
            // create user for organisation and org as well 
            let newOrg = { name: orgData.organisation, isActive: true };
            let createdOrg = new organisationModel_1.Organisation(newOrg);
            createdOrg.save(function (err, data) {
                if (err)
                    throw err;
                let orgAdminUser = Object.assign(Object.assign({}, orgData), { organisation: data._id, role: 'OrgAdmin' });
                console.log("orgAdminUser orgAdminUser", orgAdminUser);
                let newlyOrgUser = new userModel_1.User(orgAdminUser);
                newlyOrgUser.save(function (err, data) {
                    if (err)
                        throw err;
                    console.log('org Admin User is ', data);
                    res.send(Object.assign({}, data));
                });
            });
        }
        else {
            res.send({ message: "Org aleady exist or not an active organisation" });
        }
    }
    catch (e) {
        console.log("Exception occur ", e);
        res.send({ message: "Exception Occur" });
    }
});
