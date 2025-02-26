import express, { urlencoded } from "express";
import cors from 'cors'
import bodyParser from "body-parser";
const app = express();

app.use(urlencoded({extended : true}));
app.use(cors());
app.use(bodyParser);