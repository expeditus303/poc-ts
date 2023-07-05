export type CreateOrUpdateGame = {
    title: string;
    platform: string;
}

export type Error = {
    status?: number;
    message?: string;
}

export type returnStatus = {
    title: string;
    platform: string;
    status: string;
}