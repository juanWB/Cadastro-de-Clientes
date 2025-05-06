import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";


export const ErrorValidation = (error: unknown, res: Response) => {
    if(error instanceof ZodError){
        const validatedError: Record<string, string> = {};

        error.errors.forEach((erro) => {
            validatedError[erro.path[0]] = erro.message;
        })

        res.status(StatusCodes.BAD_REQUEST).json({
            validatedError
        })
        return;
    } else if (error instanceof Error){
        res.status(StatusCodes.BAD_REQUEST).json({
            message: error.message
        })
        return;
    }
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: "Erro interno no servidor."
    })
    return;

}