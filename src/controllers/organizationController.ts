import { Request, Response  } from 'express';
import * as mongoose from 'mongoose';
import { Organisation } from '../models/organisationModel';
import { User } from '../models/userModel';

export const createOrgnizationUser = async(req: Request, res:Response)=>{
    
    console.log("organization user created ");
    // check whether org is active and exist 
};

export const listOfOrganization =  async(req: Request, res:Response)=>{

   try{ 
    let orgData = await Organisation.find({}).lean();
    res.send({ orgData :orgData });
    }catch(e){
       console.log("Exception Occur",e);
   }
};

export const listOfOrgUser =  async(req: Request, res:Response)=>{
    try{
        const org = await Organisation.find({  name: { $regex: req.body.organization , $options: '$i'} });
        if(org.length >0){
            const userList = await User.find({ organisation : mongoose.Types.ObjectId(org[0]._id) }).lean();
            res.send({ organisation: org[0].toObject().name, userList: userList });
        }else{
            res.send({ message: "Organisation doesn't exist" });
        }
    }catch(e){
        console.log("Exception Occur",e);
        res.send({ message:"Exception Occur" });
    }
 };