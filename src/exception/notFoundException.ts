import HttpException from "./HttpException";
 
class NotFoundException extends HttpException {
  constructor(id: string,message:String) {
    super(404, `${message}`);
  }
};

class NormalException extends HttpException {
  constructor(id: string,message:String) {
    super(404, `${message}`);
  }
};

class NotAuthorizedException extends HttpException {
  constructor() {
    super(401, "You're not authorized");
  }
};
class WrongCredentialsException extends HttpException {
  constructor() {
    super(401, 'Wrong credentials provided');
  }
};
export { NotFoundException, NormalException, NotAuthorizedException ,WrongCredentialsException};