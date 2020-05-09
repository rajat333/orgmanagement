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
        required: true
    },
    status: {
        type: Number,
        required: true,
        enum: [0, 1],
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
