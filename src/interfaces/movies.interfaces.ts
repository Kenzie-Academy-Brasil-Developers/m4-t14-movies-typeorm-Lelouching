import { z } from "zod"
import { movieCreatedSchema, movieCreateSchema } from "../schemas/movies.schemas"
import { DeepPartial, Repository } from 'typeorm'
import { Movie } from '../entities'

type iMovieCreated = z.infer<typeof movieCreatedSchema>
type iMovieCreate = z.infer<typeof movieCreateSchema>;
type iMovieUpdate = DeepPartial<Movie>;
type iMovieRepo = Repository<Movie>;

interface iMovies{
    prevPage: string | null,
    nextPage: string | null,
    count: number,
    data: iMovieCreated[]
}

export { iMovieCreate, iMovieUpdate, iMovieRepo, iMovieCreated, iMovies };