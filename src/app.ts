import express from "express"
import cors from "cors"
import routes from "./routes/games.router"



const app = express()

app.use(express.json())
app.use(cors())

app.use(routes)

const PORT: number = 5000
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))