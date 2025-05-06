import { Router } from "express";
import { CreateClient, GetClients } from "../Controller/ClientController";
import { ErrorValidation } from "../Service/middlewares/ErrorValidation";

const route =  Router();

route.get('/', GetClients);
route.post('/', ErrorValidation, CreateClient)