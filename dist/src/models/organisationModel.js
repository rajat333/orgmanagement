"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = {
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    isActive: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
};
const OrganisationSchema = new mongoose.Schema(schema);
exports.Organisation = mongoose.model('Organisation', OrganisationSchema);
