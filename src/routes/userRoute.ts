import { getUserList, addNewUser,updateUser,
    deleteUser, fetchUser ,createOrgnizationAdmin,
    login
} from '../controllers/userController';
import AuthMiddleware from  '../middleware/authentication.middleware';
const userRoutes = (app) => {
    
    app.route('/user')
    .get((req, res, next) => {
        // middleware
        console.log(`User Route Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
      }, AuthMiddleware.verifyToken,getUserList)
    // Create Org Admin User
    .post(createOrgnizationAdmin)
    //Update User
    .put(updateUser)
    // delete request
    .delete(deleteUser);

   app.route('/user/:id')
     .get( (req,res,next)=>{
        console.log("Fetching user"); 
     },AuthMiddleware.verifyToken, fetchUser); 

    app.route('/user/login')
    .post(login); 
}

export default userRoutes;
