import express from "express";
import "dotenv/config";
import { ErrorValidation } from "../Service/middlewares/ErrorValidation";

const app = express();

app.use(express.json());

export { app };