import { AppDataSource } from "./../data-source"
import { Movie } from "../entities";
import { iMovieRepo } from "../interfaces";

export const getMovieByNameService = async (movieName: string): Promise<Movie | null> => {
    const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie)

    return await movieRepo.findOneBy({
        name: movieName
    })
}