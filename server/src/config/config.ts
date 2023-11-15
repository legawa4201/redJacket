import { Sequelize } from "sequelize";

import dotenv from "dotenv"
if(process.env.NODE_ENV !== `production`) dotenv.config()

const connection = new Sequelize({
    dialect: "postgres",
    host: process.env.DATABASE_HOST, // This project uses supabase as the host of the database, but you can use any services that you like
    port: 5432,
    username: "postgres",
    password: process.env.DATABASE_PASSWORD
})

export default connection


