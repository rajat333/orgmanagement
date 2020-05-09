import { createOrgnizationUser, listOfOrganization,
    listOfOrgUser
} from '../controllers/organizationController';

const organisationRoutes = (app) => {
    
    app.route('/organisation')
    .get((req, res, next) => {
        console.log("in get list of org");
        next();
    },listOfOrganization)
    .post( createOrgnizationUser );

    app.route('/listOfOrgUser')
    .post(listOfOrgUser);
}
export default organisationRoutes;
