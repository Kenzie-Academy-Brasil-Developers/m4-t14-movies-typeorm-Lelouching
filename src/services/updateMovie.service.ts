import { iMovieCreated, iMovieRepo } from "../interfaces"
import { AppDataSource } from "./../data-source"
import { Movie } from "./../entities"

export const updateMovieService = async (oldMovieInfo: iMovieCreated, newMovieInfo: any): Promise<Movie> => {
    const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie)

    return await movieRepo.save({
        ...oldMovieInfo,
        ...newMovieInfo
    })
}