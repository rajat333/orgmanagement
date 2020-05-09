
const organisationRoutes = (app) => {
    
    app.route('/organisationRoutes')
    .get((req, res, next) => {
        // middleware
        console.log(`organisationRoutes Route Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        res.send("organisationRoutes Route Work Successfully");
        // next();
    })
    
}
export default organisationRoutes;
