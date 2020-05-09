import * as mongoose from 'mongoose';
import {  Request, Response } from 'express';
import * as express from 'express';
import { User } from '../models/userModel';
import { Organisation } from '../models/organisationModel';
import UserInterface  from  '../interface/userInterface';
import OrganisationAdminInterface from '../interface/organisationAdminInterface';
import OrganisationInterface from '../interface/organisationInterface';
import LoginInterface from  '../interface/loginInterface';
import  {WrongCredentialsException, NotAuthorizedException  } from  '../exception/notFoundException';
import AuthMiddleware from '../middleware/authentication.middleware';

export const getUserList = async(req: Request, res:Response) => {
    try{
        const org = Organisation.find({  name: { $regex: req.body.organisation , $option: 'i'} });
        const userList = await User.find({ organisation : mongoose.Types.ObjectId(org[0]._id) }).lean();
        res.send({ userList: userList });
    }catch(e){
        console.log("Exception Occur");
        res.send({ message:"Exception Occur" });
    }
};
export const addNewUser = async(req :Request ,res: Response)=>{

    let userData: UserInterface = req.body;
    //create new user 
    let newUser = new User(userData);
    newUser.save(function(err,userDetail){

        if(err) return Error(err);
        res.send(userDetail);    
    });
};

export const updateUser = async(req: Request, res:Response)=>{
    
};
export const deleteUser = async(req: Request, res:Response)=>{
    
};

export const fetchUser = async(req: Request, res:Response)=>{
    
};
export const login = async( req:Request, res:Response , next: express.NextFunction)=>{

        try{    
            let loginData: LoginInterface = req.body;
            let validUser =  await User.find({ userName:{ $regex: loginData.username , $options: 'i'} }).lean();
            if(validUser.length >0){
                // generate Token 
                let tokenData = AuthMiddleware.createToken( validUser);
                res.send({ message:'Successful Login', ...validUser[0], token: tokenData.token });
            }else{
                next( new NotAuthorizedException());
            }
        }catch(e){
            console.log('Login Exception',e);
            next(  new WrongCredentialsException() );
        }

};
export const createOrgnizationAdmin = async(req: Request, res:Response)=>{
    try{
    let orgData : OrganisationAdminInterface = req.body;
    let existOrg  = await Organisation.find({  name: orgData.organisation }).lean();
    if( existOrg && existOrg.length<1 ){
        console.log(" in if ");
                // create user for organisation and org as well 
            let newOrg: OrganisationInterface = { name: orgData.organisation, isActive: true }; 
            let createdOrg = new Organisation(newOrg);
            createdOrg.save(function(err,data){

                if(err) throw err;
                let orgAdminUser : UserInterface = { ...orgData, organisation: data._id ,role:'OrgAdmin'};
                console.log("orgAdminUser orgAdminUser",orgAdminUser);
                let newlyOrgUser =  new User(orgAdminUser);
                newlyOrgUser.save(function(err,data){
                    if(err) throw err;
                    console.log('org Admin User is ',data);
                    const responsebj  = {
                        firstName: data.toObject().firstName,
                        userName: data.toObject().userName,
                        lastName: data.toObject().lastName,
                        email: data.toObject().email,
                        userId: data.toObject()._id,
                    }
                    res.send( responsebj );
                })

            })
        }else{
        res.send({ message: "Org aleady exist or not an active organisation" });
    }
    }catch(e){
        console.log("Exception occur ",e);
        res.send({ message:"Exception Occur" });
    }
};