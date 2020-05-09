import * as mongoose from 'mongoose';
import {  Request, Response } from 'express';
import { User } from '../models/userModel';
import UserInterface  from  '../interface/userInterface';
export const getUserList = async(req: Request, res:Response) => {
    try{
        const userList = await User.find({}).lean();
        res.send(userList);
    }catch(e){
        console.log("Exception Occur");
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
