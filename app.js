import e from "express";
import router from "./routes/routes.js";
import { configDotenv } from "dotenv";

const app = e();



configDotenv();

app.set('view engine' , 'ejs');

app.use(e.urlencoded({ extended: true }));

app.use(router);

app.listen(process.env.SERVER_PORT , ()=>{console.log('the server is listening on ' + process.env.SERVER_PORT)});
