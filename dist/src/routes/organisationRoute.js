"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const organizationController_1 = require("../controllers/organizationController");
const organisationRoutes = (app) => {
    app.route('/organisation')
        .get((req, res, next) => {
        console.log("in get list of org");
        next();
    }, organizationController_1.listOfOrganization)
        .post(organizationController_1.createOrgnizationUser);
    app.route('/listOfOrgUser')
        .post(organizationController_1.listOfOrgUser);
};
exports.default = organisationRoutes;
