import { movieCreateSchema } from "./../schemas/movies.schemas"
import { ifIdExists, ifMovieNameExists, validateMovieBody } from "./../middlewares/movies.middlewares"
import { createMovie, deleteMovie, getMovieById, getMovies } from "./../controllers/movies.controllers"
import { Router } from "express";

export const movieRoute = Router()

movieRoute.post("", validateMovieBody(movieCreateSchema), ifMovieNameExists, createMovie)
movieRoute.get("", getMovies)
movieRoute.get("/:id", ifIdExists, getMovieById)
movieRoute.delete("/:id", ifIdExists, deleteMovie)