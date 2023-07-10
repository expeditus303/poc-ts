import gamesRepository from "../repositories/games.repository"
import error from "../errors/errors"
import { Game, returnStatus } from "protocols"

async function get(){
    const result = await gamesRepository.get()

    return result
}

async function getGame(gameTitle: string){
    const result = await gamesRepository.getGame(gameTitle)
    if(result.length === 0) throw error.notFound("Game not found :(")

    return result
}

function returnGameStatus(title: string, platform: string, status: string){
    const date = new Date()
    const createdOrUpdatedGame: returnStatus = {
        title,
        platform,
        status: `${status} at ${date}`
    }

    return createdOrUpdatedGame
}

async function create(title: string, platform: string){
    await gamesRepository.create(title, platform)
    return returnGameStatus(title, platform, "created")
}

async function update(game: Game){

    const existingGame = await gamesRepository.findById(game.id)

    if(!existingGame) throw error.notFound("Game ID not found :(")

    const {title, platform} = await gamesRepository.update(game)

    return returnGameStatus(title, platform, "updated")
}

async function deleteGame(id: number){
    const existingGame = await gamesRepository.findById(id)

    if(!existingGame) throw error.notFound("Game ID not found :(")

    await gamesRepository.deleteGame(id)
    
    const {title, platform} = existingGame

    return returnGameStatus(title, platform, "deleted")
}

const gamesService = {
    get,
    getGame,
    create,
    update,
    deleteGame
}

export default gamesService