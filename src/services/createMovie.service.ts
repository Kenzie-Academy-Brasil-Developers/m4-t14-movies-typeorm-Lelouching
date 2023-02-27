import { AppDataSource } from "./../data-source"
import { Movie } from "../entities"
import { iMovieCreate } from "./../interfaces/movies.interfaces"

export const createMovieService = async (payload: iMovieCreate): Promise<Movie> => {
    const movieRepo = AppDataSource.getRepository(Movie)
    const movie = movieRepo.create(payload)

    await movieRepo.save(movie)

    return movie
}