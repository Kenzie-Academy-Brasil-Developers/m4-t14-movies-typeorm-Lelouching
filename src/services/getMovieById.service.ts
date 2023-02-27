import { AppDataSource } from "./../data-source"
import { Movie } from "../entities";

export const getMovieByIdService = async (movieId: number): Promise<Movie | null> => {
    const movieRepo = AppDataSource.getRepository(Movie)

    return await movieRepo.findOneBy({
        id: movieId
    })
}