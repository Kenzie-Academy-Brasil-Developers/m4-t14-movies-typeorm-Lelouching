import { AppDataSource } from "./../data-source"
import { Movie } from "../entities"
import { iMovieCreate, iMovieRepo } from "./../interfaces/movies.interfaces"

export const createMovieService = async (payload: iMovieCreate): Promise<Movie> => {
    const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie)
    const movie: Movie = movieRepo.create(payload)

    await movieRepo.save(movie)

    return movie
}