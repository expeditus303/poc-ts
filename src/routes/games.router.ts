import schemaMiddleware from "../middlewares/schemas.middleware";
import gamesController from "../controllers/games.controller";
import { Router } from "express";
import gamesSchemas from "../schemas/games.schema";

const routes = Router();

routes
  .get("/", gamesController.get)
  .get("/:gameTitle", gamesController.getGame)
  .post("/", schemaMiddleware(gamesSchemas.createGame), gamesController.create)
  .put("/:id", schemaMiddleware(gamesSchemas.idParams, "params"), schemaMiddleware(gamesSchemas.updateGame), gamesController.update)
  .delete("/:id", gamesController.deleteGame);

export default routes;
