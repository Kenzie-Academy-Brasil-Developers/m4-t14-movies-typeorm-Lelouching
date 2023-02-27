import { AppDataSource } from "./../data-source"
import { Movie } from "../entities";

export const getMovieByNameService = async (movieName: string): Promise<Movie | null> => {
    const movieRepo = AppDataSource.getRepository(Movie)

    return await movieRepo.findOneBy({
        name: movieName
    })
}