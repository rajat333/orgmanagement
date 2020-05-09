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

export const userInOrganization =  async(req: Request, res:Response)=>{

    try{
        const org = Organisation.find({  name: { $regex: req.body.organisation , $option: 'i'} });
        const userList = await User.find({ organisation : mongoose.Types.ObjectId(org[0]._id) }).lean();
        res.send({ organisation:org[0].name, userList: userList });
    }catch(e){
        console.log("Exception Occur");
        res.send({ message:"Exception Occur" });
    }
 };