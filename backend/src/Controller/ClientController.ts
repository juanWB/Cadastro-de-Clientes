import { Request, Response } from "express";
import { ClienSchema } from "../Schema/ClientSchema";
import { createClient, getClients, updateById } from "../Model/ClientModel";
import { StatusCodes } from "http-status-codes";

export const CreateClient = async(req: Request, res: Response) => {
    try{
        const newClient = ClienSchema.parse(req.body);
        await createClient(newClient);
        res.status(StatusCodes.CREATED).json({
            message: 'Novo cliente criado com sucesso.'
        });
        return;
    }catch(error){
        console.log(error);
        return;
    }
}

export const GetClients = async(req: Request, res: Response) => {
    try{
        const clients = await getClients();
        res.status(StatusCodes.OK).json({
            clients
        });
        return;
    }catch(error){
        console.log(error);
        return;
    }
}

export const UpdateClient = async(req: Request, res: Response) => {
    try{
        const id = 
        const updatedClient = ClienSchema.parse(req.body);
        await updateById(id, updatedClient);
        res.status(StatusCodes.OK).json({
            message: 'Cliente atualizado com sucesso.'
        })
    }catch(error){
        console.log(error);
    }
}

export const DeleteClient = async(req: Request, res: Response) => {
    try{  

    }catch(error){
        console.log(error);
    }
}