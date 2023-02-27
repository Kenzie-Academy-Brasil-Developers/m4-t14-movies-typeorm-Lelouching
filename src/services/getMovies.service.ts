import { AppDataSource } from "../data-source"
import { Movie } from "../entities";
import { iMovieRepo, iMovies } from "../interfaces"

export const getMoviesService = async (pageNumber: number, perPageNumber: number): Promise<iMovies> => {
    const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie)

    let perPage: number = Number(perPageNumber) || 5
    let page: number = Number(pageNumber) || 1

    if(perPage < 0 || perPage > 5) {
        perPage = 5
    }

    if(page < 0) {
        page = 1
    }
    
    const movies: Movie[] = await movieRepo.find({
        take: perPage,
        skip: perPage * (page - 1)
    })

    const nextPageMovies: Movie[] = await movieRepo.find({
        take: perPage,
        skip: perPage * page
    })

    const allMovies: Movie[] = await movieRepo.find()

    const response: iMovies = {
        prevPage: page - 1 <= 0 ? null : `http://localhost:3000/movies?page=${page - 1}&perPage=${perPage}`,
        nextPage: nextPageMovies.length === 0 ? null : `http://localhost:3000/movies?page=${page + 1}&perPage=${perPage}`,
        count: allMovies.length,
        data: movies
    }

    return response
}