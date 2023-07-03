import gamesController from "../controllers/games.controller";
import { Router } from "express";


const routes = Router()

routes
    .get("/", gamesController.get)
    .post("/", gamesController.create)
    .put("/:id", gamesController.update)
    .delete("/:id", gamesController.deleteGame)

export default routes