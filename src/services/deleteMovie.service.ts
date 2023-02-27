import { AppDataSource } from "./../data-source"
import { Movie } from "../entities"
import { iMovieRepo } from "../interfaces"

export const deleteMovieService = async (movieId: number): Promise<void> => {
    const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie)

    await movieRepo.delete({
        id: movieId
    })
}