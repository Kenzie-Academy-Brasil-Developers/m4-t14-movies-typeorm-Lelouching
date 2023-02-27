import { iMovieCreated } from "../../interfaces/movies.interfaces";

declare global {
    namespace Express {
        interface Request {
            movie: iMovieCreated
        }
    }
}