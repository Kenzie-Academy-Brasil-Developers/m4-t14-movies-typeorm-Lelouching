import { AppDataSource } from "./../data-source"
import { Movie } from "../entities"

export const deleteMovieService = async (movieId: number): Promise<void> => {
    const movieRepo = AppDataSource.getRepository(Movie)

    await movieRepo.delete({
        id: movieId
    })
}