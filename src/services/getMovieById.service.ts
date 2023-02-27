import { AppDataSource } from "./../data-source"
import { Movie } from "../entities";
import { iMovieRepo } from "../interfaces";

export const getMovieByIdService = async (movieId: number): Promise<Movie | null> => {
    const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie)

    return await movieRepo.findOneBy({
        id: movieId
    })
}