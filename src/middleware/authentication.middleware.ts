import * as jwt from 'jsonwebtoken';
import UserInterface from '../interface/userInterface';
import { TokenData, TokenPayload } from '../interface/tokenData';
import { Request,Response } from 'express';

class Authentication {

    private jwt = jwt;
    private secret =  process.env.JWT_SECRET;
    constructor(){
    }

    createToken(user): TokenData {
        const expiresIn = parseInt(process.env.Token_Expire);
        const secret = process.env.JWT_SECRET;
        const dataStoredInToken: TokenPayload = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userId: user._id,
        };
        return {
          expiresIn,
          token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
        };
      };

      verifyToken(req: Request): TokenPayload {
        const verificationResponse = jwt.verify(req.headers.Authorization,this.secret) as TokenPayload;
        const id = verificationResponse.userId;
        return verificationResponse;
      }
};

//Singleton class 
export default new Authentication();