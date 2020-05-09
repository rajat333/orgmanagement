interface TokenData {
    token: string;
    expiresIn: number;
  };

  interface TokenPayload {
      userId: any,
      email:String,
      firstName:String,
      lastName:String,
  }

  export { TokenData ,TokenPayload };
