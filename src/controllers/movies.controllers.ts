import { createMovieService } from "./../services/createMovie.service"
import { getMoviesService } from "./../services/getMovies.service"
import { Request, Response } from "express"
import { deleteMovieService } from "../services/deleteMovie.service"
import { updateMovieService } from "../services/updateMovie.service"

export const createMovie = async (req: Request, res: Response): Promise<Response> => {
    const movie = await createMovieService(req.body)

    return res.status(201).json(movie)
}

export const getMovies = async (req: Request, res: Response): Promise<Response> => {
    const movies = await getMoviesService(Number(req.query.page), Number(req.query.perPage), String(req.query.order), String(req.query.sort))

    return res.status(200).json(movies)
}

export const getMovieById = async (req: Request, res: Response): Promise<Response> => {
    const movie = req.movie

    return res.status(200).json(movie)
}

export const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
    await deleteMovieService(Number(req.params.id))

    return res.status(204).send()
}

export const updateMovie = async (req: Request, res: Response): Promise<Response> => {
    const movie = await updateMovieService(req.movie, req.body)

    return res.status(200).json(movie)
}