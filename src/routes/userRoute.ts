import { getUserList, addNewUser,updateUser,deleteUser, fetchUser } from '../controllers/userController';

const userRoutes = (app) => {
    
    app.route('/user')
    .get((req, res, next) => {
        // middleware
        console.log(`User Route Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        res.send("User Route Work Successfully");
        next();
    }, getUserList)
    // Create User
    .post(addNewUser)
    //Update User
    .put(updateUser)
    // delete request
    .delete(deleteUser);

   app.route('/user/:id')
     .get( (req,res,next)=>{
        console.log("Fetching user"); 
     },fetchUser); 
}

export default userRoutes;
