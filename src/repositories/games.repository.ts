import { Games } from "../protocols";
import db from "../config/database.connection";

function get() {
    return db.query<Games>("SELECT * FROM games")
}

function create(title: string, platform: string) {
    return db.query("INSERT INTO games (title, platform) VALUES ($1, $2)", [title, platform])
}

function update(id: number, title: string, platform: string) {
    return db.query("UPDATE games SET title = $1, platform = $2 WHERE id = $3", [title, platform, id]);
}

function deleteGame(id: number) {
    return db.query("DELETE FROM games WHERE id = $1", [id]);
}


const gamesRepository = {
    get,
    create,
    update,
    deleteGame
}

export default gamesRepository