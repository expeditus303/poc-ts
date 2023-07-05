import { NextFunction, Request, Response } from "express";
import gamesService from "../services/games.service";
import { CreateOrUpdateGame } from "protocols";
import { StatusCodes } from "http-status-codes";

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const games = await gamesService.get();

    res.status(200).send(games);
  } catch (err) {
    next(err);
  }
}

type GameTitle = { gameTitle: string };

async function getGame(req: Request, res: Response, next: NextFunction) {
  const { gameTitle } = req.params as GameTitle;

  if (!gameTitle || typeof gameTitle !== "string")
    return res.sendStatus(StatusCodes.UNPROCESSABLE_ENTITY);

  try {
    const games = await gamesService.getGame(gameTitle);

    res.status(200).send(games);
  } catch (err) {
    next(err)
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  const { title, platform } = req.body as CreateOrUpdateGame;

  try {
    const game = await gamesService.create(title, platform);

    res.status(201).send(game);
  } catch (err) {
    next(err)
  }
}

type UpdateOrDeleteGame = { id: string };

async function update(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params as UpdateOrDeleteGame;
  const { title, platform } = req.body as CreateOrUpdateGame;

  try {
    const gameUpdated = await gamesService.update(+id, title, platform);

    res.status(StatusCodes.OK).send(gameUpdated);
  } catch (err) {
    next(err)
  }
}

async function deleteGame(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params as UpdateOrDeleteGame;

  try {
    const gameDeleted = await gamesService.deleteGame(+id);

    res.status(200).send(gameDeleted)
  } catch (err) {
    next(err)
  }
}

const gamesController = {
  get,
  getGame,
  create,
  update,
  deleteGame,
};

export default gamesController;
