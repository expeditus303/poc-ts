import { Request, Response } from "express";
import gamesService from "../services/games.service";
import { Games } from "protocols";

async function get(req: Request, res: Response){
    try {
        const games: Games[] = await gamesService.get()

        res.status(200).send(games)
    } catch (err) {
        res.status(500).send(err)
    }
}

type CreateGame = Omit<Games, "id">

async function create(req: Request, res: Response){
    const {title, platform} = req.body as CreateGame

    try {
        await gamesService.create(title, platform)

        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err)
    }
}

type UpdateOrDeleteGame = {id: string}

async function update(req: Request, res: Response){
    const {id} = req.params as UpdateOrDeleteGame
    const {title, platform} = req.body as CreateGame

    try {
        await gamesService.update(+id, title, platform)

        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err)
    }
}

async function deleteGame(req: Request, res: Response){
    const {id} = req.params as UpdateOrDeleteGame

    try {
        await gamesService.deleteGame(+id)

        res.sendStatus(200)
    } catch (err) {
        res.status(500).send(err)
    }
}

const gamesController = {
    get,
    create,
    update,
    deleteGame
}

export default gamesController