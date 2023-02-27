import { AppDataSource } from "../data-source"
import { Movie } from "../entities";
import { iMovieRepo, iMovies } from "../interfaces"

export const getMoviesService = async (pageNumber: number, perPageNumber: number, orderMovie: string, sortMovie: string): Promise<iMovies> => {
    const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie)

    let perPage: number = Number(perPageNumber) || 5
    let page: number = Number(pageNumber) || 1

    if(perPage < 0 || perPage > 5) {
        perPage = 5
    }

    if(page < 0) {
        page = 1
    }

    let order: string = orderMovie || "asc"
    let sort: string = sortMovie || "id"

    const requiredOrderString: string[] = ["asc", "desc"]
    const requiredSortString: string[] = ["price", "duration"]

    const validateOrder: boolean = requiredOrderString.some((key: string) => order.includes(key))
    const validateSort: boolean = requiredSortString.some((key: string) => sort.includes(key))

    if(!validateOrder) {
        order = "asc"
    }

    if(!validateSort) {
        sort = "id"
    }

    let ordenation: any = {
        id: order
    }

    if(sort.toLowerCase() === "price") {
        ordenation = {
            price: order
        }
    }

    if(sort.toLowerCase() === "duration") {
        ordenation = {
            duration: order
        }
    }
    
    const movies: Movie[] = await movieRepo.find({
        take: perPage,
        skip: perPage * (page - 1),
        order: ordenation
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