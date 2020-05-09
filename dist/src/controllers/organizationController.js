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
const organisationModel_1 = require("../models/organisationModel");
const userModel_1 = require("../models/userModel");
exports.createOrgnizationUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("organization user created ");
    // check whether org is active and exist 
});
exports.listOfOrganization = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let orgData = yield organisationModel_1.Organisation.find({}).lean();
        res.send({ orgData: orgData });
    }
    catch (e) {
        console.log("Exception Occur", e);
    }
});
exports.listOfOrgUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("req.body.organisation  ", req.body.organisation);
        const org = yield organisationModel_1.Organisation.find({ name: { $regex: req.body.organization, $options: '$i' } });
        console.log("org org ", org);
        if (org.length > 0) {
            console.log("org name ", org[0].toObject().name);
            const userList = yield userModel_1.User.find({ organisation: mongoose.Types.ObjectId(org[0]._id) }).lean();
            res.send({ organisation: org[0].toObject().name, userList: userList });
        }
        else {
            res.send({ message: "Organisation doesn't exist" });
        }
    }
    catch (e) {
        console.log("Exception Occur", e);
        res.send({ message: "Exception Occur" });
    }
});
