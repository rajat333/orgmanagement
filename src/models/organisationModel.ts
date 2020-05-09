import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema: any = {
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    isActive:{
        type: Boolean,
        required: true,
    },
    createdAt: {
       type: Date,
       default: Date.now 
    },
    updatedAt:{
        type: Date,
        default: Date.now,
    }
}

const OrganisationSchema = new mongoose.Schema(schema);
export const Organisation = mongoose.model('Organisation', OrganisationSchema);