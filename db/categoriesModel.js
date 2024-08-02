import pool from "./migratioon.js";

async function get_categories(){
    const sql = `SELECT * FROM categories ;`
    return await pool.query(sql);
    
}

async function delete_category(category_id){
    const sql = `DELETE FROM categories WHERE id = ` + category_id + `;`
    await pool.query(sql);
}

async function add_new_category(category_name){
    category_name = '\'' + category_name + '\'';
    const sql =   `INSERT INTO categories (name) VALUES (` + category_name + `);`; 
    await pool.query(sql);
}

async function update_category(category_name , category_new_name){
    category_name = '\'' + category_name + '\'';
    category_new_name = '\'' + category_new_name + '\'';
    const sql =   `UPDATE categories 
    SET name = ` + category_new_name + `WHERE name = ` + category_name + `;`
    await pool.query(sql);
}

export  { get_categories , delete_category , add_new_category , update_category} 