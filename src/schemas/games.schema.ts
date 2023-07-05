import Joi from 'joi';

const createGame = Joi.object({
    title: Joi.string().required(),
    platform: Joi.string().valid('PC', 'Playstation 5', 'XBox 360', 'Game Boy').required()
});
