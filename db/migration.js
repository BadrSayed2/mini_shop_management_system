import { configDotenv } from "dotenv";
import pg from 'pg';

const { Pool } = pg;

configDotenv();


const pool = new Pool({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

const categoriesTableQuery = `
CREATE TABLE categories (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
name VARCHAR (50)
);
`;

const itemsTableQuery = `
CREATE TABLE items (
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
name VARCHAR (50) ,
price INTEGER ,
description TEXT,
image_url VARCHAR (255) ,
category_ID INTEGER ,
CONSTRAINT fk FOREIGN KEY (category_ID )REFERENCES categories(id)
);
`;

// pool.query(categoriesTableQuery + itemsTableQuery);

export default pool;
// console.log(tableQuery);
