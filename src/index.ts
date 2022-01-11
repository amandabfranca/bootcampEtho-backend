import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import serverless from 'serverless-http';
import { apiRouter } from './routes/api.routes';
import { extRouter } from './routes/external.routes';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(apiRouter);
app.use(extRouter);

export const ENV_VARS = {
    mongoURI: process.env.MONGO_URI,
    token_secret: process.env.TOKEN_SECRET
}

mongoose.connect(ENV_VARS.mongoURI as string);
 

/*app.listen(ENV_VARS.port, async () => {
    console.log('Server funcionando na porta: ', ENV_VARS.port);

    if (ENV_VARS.mongoURI) {
        mongoose.connect(ENV_VARS.mongoURI);
    } else {
        console.log('Erro na conexão com DB.');
    }
});*/

export const handler = serverless(app,  { callbackWaitsForEmptyEventLoop: false });
