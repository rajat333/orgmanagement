import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import  userRoutes from './src/routes/userRoute';
import organisationRoutes from './src/routes/organisationRoute';

import messenger from './src/controllers/createMessage';
import { Settings } from './settings';
import loggerMiddleware from './src/middleware/loggerMiddleware';
 
const app = express();

// instance of our class
let messages = new messenger(Settings.PORT);

const dataConnection = (user: string, pass: string): string => {
    return `mongodb://localhost/amit`
}

let database = dataConnection(Settings.mlabUser, Settings.mlabPass);

// mongoose connection
mongoose.connect(database, {
    useMongoClient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(loggerMiddleware);

routes(app);
userRoutes(app);
organisationRoutes(app);
// generics
function nameCreator<T>(name: T): T {
    return name;
}

let myName = nameCreator<string>('Rajat,');

// declaration merging
interface Warriors {
    weapon: string;
    skills: number;
}

interface Warriors {
    name: string;
}

let ninja: Warriors = {weapon: "Shuriken", skills: 5, name: "Manny"};

// serving static files
app.use(express.static('public'));
app.get('/health', (req, res) =>
    res.send({
        messages:'Server is working fine'
    })
);

app.listen(Settings.PORT, () =>
    console.log(myName,messages.messagePrint())
);