import pg from 'pg'

const { Pool } = pg

const db = new Pool ({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "root",
    database: "exe_ts_db"
})

export default db