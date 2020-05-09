import * as jwt from 'jsonwebtoken';
import UserInterface from '../interface/userInterface';
import { TokenData, TokenPayload } from '../interface/tokenData';
import { Request,Response, NextFunction } from 'express';

import { NotAuthorizedException } from '../exception/notFoundException';
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
            phone: user.phone,
        };
        return {
          expiresIn,
          token: jwt.sign(dataStoredInToken, secret, { expiresIn }),
        };
      };

      verifyToken(req: Request, res: Response, next: NextFunction): TokenPayload {
        try{
        const verificationResponse = jwt.verify(req.headers.Authorization,process.env.JWT_SECRET) as TokenPayload;
        const id = verificationResponse.userId;
        return verificationResponse;
        }catch(e){
            res.status(401).send({ message:"Not Authorized" });
        }
      }
};

//Singleton class 
export default new Authentication();