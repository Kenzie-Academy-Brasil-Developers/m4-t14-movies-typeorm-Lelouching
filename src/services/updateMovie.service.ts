import { iMovieCreated, iMovieRepo, iMovieUpdate } from "../interfaces"
import { AppDataSource } from "./../data-source"
import { Movie } from "./../entities"

export const updateMovieService = async (oldMovieInfo: iMovieCreated, newMovieInfo: iMovieUpdate): Promise<Movie> => {
    const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie)

    return await movieRepo.save({
        ...oldMovieInfo,
        ...newMovieInfo
    })
}