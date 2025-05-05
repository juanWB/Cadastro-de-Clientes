import { Request, Response } from "express";
import { ClienSchema } from "../Schema/ClientSchema";
import { createClient } from "../Model/ClientModel";
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