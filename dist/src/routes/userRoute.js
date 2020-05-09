"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
const userRoutes = (app) => {
    app.route('/user')
        .get((req, res, next) => {
        // middleware
        console.log(`User Route Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        res.send("User Route Work Successfully");
        next();
    }, userController_1.getUserList)
        // Create Org Admin User
        .post(userController_1.createOrgnizationAdmin)
        //Update User
        .put(userController_1.updateUser)
        // delete request
        .delete(userController_1.deleteUser);
    app.route('/user/:id')
        .get((req, res, next) => {
        console.log("Fetching user");
    }, userController_1.fetchUser);
};
exports.default = userRoutes;
