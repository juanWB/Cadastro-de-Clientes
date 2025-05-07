import express from "express";
import "dotenv/config";
import { route } from "../Router/Router";
import cors from "cors";


const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use(route);


export { app };