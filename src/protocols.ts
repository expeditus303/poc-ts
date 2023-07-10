export type Game = {
    id: number;
    title: string;
    platform: string;
}

export type CreateGame = Omit<Game, "id">

export type UpdateGame = CreateGame

export type GameId = {id: string}

export type Error = {
    status?: number;
    message?: string;
}

export type returnStatus = {
    title: string;
    platform: string;
    status: string;
}