"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = {
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    userName: {
        type: String,
        required: true
    },
    organisation: {
        type: Schema.Types.ObjectId,
        ref: 'Organisation'
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'Default'
    },
    phone: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
};
const UserSchema = new mongoose.Schema(schema);
exports.User = mongoose.model('User', UserSchema);
