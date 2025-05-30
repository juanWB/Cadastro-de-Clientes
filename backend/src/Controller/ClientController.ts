import { Request, Response, NextFunction as next} from "express";
import { ClientSchema } from "../Schema/ClientSchema";
import { clientExist, createClient, deleteById, getClients, updateById } from "../Model/ClientModel";
import { StatusCodes } from "http-status-codes";
import { ErrorValidation } from "../Service/middlewares/ErrorValidation";


export const CreateClient = async(req: Request, res: Response) => {
    try{

        const newClient = ClientSchema.parse(req.body);

        if(await clientExist(newClient.cnpj)){
            res.status(StatusCodes.BAD_REQUEST).json({
                message: "Cliente já cadastrado."
            });
            return;
        }
        
        await createClient(newClient);
        res.status(StatusCodes.CREATED).json({
            message: 'Novo cliente criado com sucesso.'
        });
        return;
    }catch(error){  
        ErrorValidation(error, res);
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
        ErrorValidation(error, res);
        return;
    }
}

export const UpdateClient = async(req: Request, res: Response) => {
    try{

        const id = parseInt(req.params.id);
        const updatedClient = ClientSchema.parse(req.body);

        await updateById(id, updatedClient);
        res.status(StatusCodes.OK).json({
            message: 'Cliente atualizado com sucesso.'
        })
    }catch(error){
        ErrorValidation(error, res);
        return;
    }
}

export const DeleteClient = async(req: Request, res: Response) => {
    try{  
        const id = parseInt(req.params.id);
        await deleteById(id);
        res.status(StatusCodes.OK).json({
            message: 'Cliente deletado com sucesso.'
        })
    }catch(error){
        ErrorValidation(error, res);
        return;
    }
}