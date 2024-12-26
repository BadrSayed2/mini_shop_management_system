import e from "express";
import router from "./routes/routes.js";
import { configDotenv } from "dotenv";
import {join , dirname} from 'path';
import { fileURLToPath } from "url";
const app = e();

const __filename = fileURLToPath(import .meta.url);
const __dirname = dirname(__filename);

configDotenv();

app.set('view engine' , 'ejs');

app.use('/public', e.static(join(__dirname, 'public')));

app.use(e.urlencoded({ extended: true }));

app.use(router);

app.listen(process.env.SERVER_PORT , ()=>{console.log('the server is listening on ' + process.env.SERVER_PORT)});
