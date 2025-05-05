import mysql from "mysql2/promise";

export const DbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST
}

export const DbConnection = mysql.createPool(DbConfig);