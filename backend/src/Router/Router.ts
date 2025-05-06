import { Router } from "express";
import { CreateClient, DeleteClient, GetClients, UpdateClient } from "../Controller/ClientController";

const route =  Router();

route.get('/', GetClients);
route.post('/', CreateClient);
route.put('/:id', UpdateClient);
route.delete('/:id', DeleteClient);


export { route };