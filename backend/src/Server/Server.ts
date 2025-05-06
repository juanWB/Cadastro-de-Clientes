import express from "express";
import "dotenv/config";
import { ErrorValidation } from "../Service/middlewares/ErrorValidation";
import { route } from "../Router/Router";

const app = express();

app.use(express.json());
app.use(route);

export { app };