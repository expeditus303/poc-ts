import schemaMiddleware from "../middlewares/schemas.middleware";
import gamesController from "../controllers/games.controller";
import { Router } from "express";

const routes = Router();

routes
  .get("/", gamesController.get)
  .get("/:gameTitle", gamesController.getGame)
  .post("/", schemaMiddleware(), gamesController.create)
  .put("/:id", gamesController.update)
  .delete("/:id", gamesController.deleteGame);

export default routes;
