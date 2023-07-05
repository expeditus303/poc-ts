import express from "express"
import cors from "cors"
import routes from "./routes/games.router"
import errorsMiddleware from "./middlewares/errors.middleware"




const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

app.use(errorsMiddleware)

const PORT: number = 5000
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))