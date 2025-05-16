import pool from "./migration.js";

async function get_categories(){
    const sql = `SELECT * FROM "Category" ;`
    return await pool.query(sql);
    
}

async function delete_category(category_id){
    const sql = `DELETE FROM "Category" WHERE id = ` + category_id + `;`
    await pool.query(sql);
}

async function add_new_category(category_name){
    category_name = '\'' + category_name + '\'';
    const sql =   `INSERT INTO "Category" (name) VALUES (` + category_name + `);`; 
    await pool.query(sql);
}

async function update_category(category_name , category_new_name){
    category_name = '\'' + category_name + '\'';
    category_new_name = '\'' + category_new_name + '\'';
    const sql =   `UPDATE "Category" 
    SET name = ` + category_new_name + `WHERE name = ` + category_name + `;`
    await pool.query(sql);
}

export  { get_categories , delete_category , add_new_category , update_category} 