import { AppError } from "./../errors"
import { getMovieByNameService } from "./../services/getMovieByName.service"
import { iMovieCreated } from "./../interfaces/movies.interfaces"
import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";
import { getMovieByIdService } from "../services/getMovieById.service";


export const validateMovieBody = (schema: ZodTypeAny) => async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const movie: any = await schema.parse(req.body)

    req.body = movie

    return next()
}

export const ifMovieNameExists = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    if(req.method === "PATCH" && !req.body.name) {
        return next()
    }
    
    const movie: iMovieCreated | null = await getMovieByNameService(req.body.name)

    if(movie) {
        throw new AppError("Movie already exists.", 409)
    }
    
    return next()
}

export const ifIdExists = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const movie: iMovieCreated | null = await getMovieByIdService(Number(req.params.id))

    if(!movie) {
        throw new AppError("Movie not found", 404)
    }

    req.movie = movie

    return next()
}