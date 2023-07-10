import Joi from 'joi';
import { CreateGame, GameId } from 'protocols';

const createGame = Joi.object<CreateGame>({
    title: Joi.string().required(),
    platform: Joi.string().valid('PC', 'Playstation 5', 'XBox 360', 'Game Boy').required()
});

const updateGame = createGame

const idParams = Joi.object<GameId>({
    id: Joi.string().required()
})


const gamesSchemas = {
    createGame,
    updateGame,
    idParams
}

export default gamesSchemas