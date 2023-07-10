import { Game } from "protocols";
import db from "../config/database.connection";

function get() {
  return db.games.findMany();
}

function getGame(gameTitle: string) {
  return db.games.findMany({
    where: {
      title: {
        contains: gameTitle,
        mode: "insensitive",
      },
    },
  });
}

function create(title: string, platform: string) {
  return db.games.create({
    data: {
      title,
      platform,
    },
  });
}

function findById(id: number) {
  return db.games.findUnique({
    where: { id },
  });
}

function update(game: Game) {
  return db.games.update({
    where: {
      id: game.id,
    },
    data: {
      title: game.title,
      platform: game.platform,
    },
  });
}

function deleteGame(id: number) {
  return db.games.delete({ where: { id } });
}

const gamesRepository = {
  get,
  getGame,
  create,
  findById,
  update,
  deleteGame
};

export default gamesRepository;
