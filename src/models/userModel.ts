import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema: any = {
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    organisation:{
        type:   Schema.Types.ObjectId,
        ref: 'Organisation'  
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default:'Default'
    },
    phone: {
        type: Number,
        required: true,
    },
    createdAt: {
       type: Date,
       default: Date.now 
    }
}

const UserSchema = new mongoose.Schema(schema);
export const User = mongoose.model('User', UserSchema);