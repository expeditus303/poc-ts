import gamesRepository from "../repositories/games.repository"

async function get(){
    const result = await gamesRepository.get()

    return result.rows
}

async function create(title: string, platform: string){
    const result = await gamesRepository.create(title, platform)

    return result.rows
}

async function update(id: number, title: string, platform: string){
    const result = await gamesRepository.update(id, title, platform)

    return result.rows
}

async function deleteGame(id: number){
    const result = await gamesRepository.deleteGame(id)

    return result.rows
}

const gamesService = {
    get,
    create,
    update,
    deleteGame
}

export default gamesService