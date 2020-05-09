import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema: any = {
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status:{
        type: Number,
        required: true,
        enum: [0,1],
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