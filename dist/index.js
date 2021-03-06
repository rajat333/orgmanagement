"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const crmRoutes_1 = require("./src/routes/crmRoutes");
const userRoute_1 = require("./src/routes/userRoute");
const organisationRoute_1 = require("./src/routes/organisationRoute");
const createMessage_1 = require("./src/controllers/createMessage");
const settings_1 = require("./settings");
const loggerMiddleware_1 = require("./src/middleware/loggerMiddleware");
const app = express();
dotenv.config();
// instance of our class
let messages = new createMessage_1.default(process.env.PORT);
const dataConnection = (user, pass) => {
    return `mongodb://localhost/${process.env.DB_Name}`;
};
let database = dataConnection(process.env.DB_User, process.env.DB_Password);
// mongoose connection
mongoose.connect(database, {
    useMongoClient: true
});
// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(loggerMiddleware_1.default);
crmRoutes_1.default(app);
userRoute_1.default(app);
organisationRoute_1.default(app);
// generics
function nameCreator(name) {
    return name;
}
let myName = nameCreator('Rajat,');
let ninja = { weapon: "Shuriken", skills: 5, name: "Manny" };
// serving static files
app.use(express.static('public'));
app.get('/health', (req, res) => res.send({
    messages: 'Server is working fine'
}));
app.listen(settings_1.Settings.PORT, () => console.log(myName, messages.messagePrint()));
