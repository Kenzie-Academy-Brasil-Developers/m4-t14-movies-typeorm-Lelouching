import "express-async-errors"
import { movieRoute } from "./routes/movie.routes"
import express, { Application } from "express"
import { handleErrors } from "./errors"

export const app: Application = express()
app.use(express.json())

app.use("/movies", movieRoute)

app.use(handleErrors)