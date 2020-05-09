import { createOrgnizationUser } from '../controllers/organizationController';

const organisationRoutes = (app) => {
    
    app.route('/organisationRoute')
    .get((req, res, next) => {
        // middleware
        console.log(`organisationRoutes Route Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        res.send("organisationRoutes Route Work Successfully");
        // next();
    });

    app.post('/organisationUserAdd')
    .post( createOrgnizationUser )
}
export default organisationRoutes;
