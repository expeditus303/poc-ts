import { NextFunction, Request, Response } from "express";
import gamesService from "../services/games.service";
import { CreateGame, Game, GameId, UpdateGame } from "protocols";
import { StatusCodes } from "http-status-codes";
import error from "../errors/errors";


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
    const game = await gamesService.getGame(gameTitle);

    res.status(200).send(game);
  } catch (err) {
    next(err);
  }
}

async function create(req: Request, res: Response, next: NextFunction) {
  const { title, platform } = req.body as CreateGame;

  try {
    const game = await gamesService.create(title, platform);

    res.status(201).send(game);
  } catch (err) {
    next(err);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params as GameId
  const { title, platform } = req.body as UpdateGame;

  try {
    let convertId;
    if (id) {
      convertId = +id;
      if (isNaN(convertId)) {
        throw error.unprocessableEntity("id must be a number");
      }
    }

    const gameUpdated = await gamesService.update({ id: +id, title, platform });

    res.status(StatusCodes.OK).send(gameUpdated);
  } catch (err) {
    next(err);
  }
}

async function deleteGame(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params as GameId

  try {
    const gameDeleted = await gamesService.deleteGame(+id);

    res.status(200).send(gameDeleted);
  } catch (err) {
    next(err);
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
