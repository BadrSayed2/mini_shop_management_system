import pool from "./migratioon.js";

async function get_items(){
    const sql = `SELECT * FROM items ;`
    return await pool.query(sql);
    
}

async function delete_item(item_name){
    item_name = '\'' + item_name + '\'';
    const sql = `DELETE FROM items WHERE name = ` + item_name + `;`
    await pool.query(sql);
}

async function add_new_item( item ){
    item.name = '\'' + item.name + '\'';
    item.description = '\'' + item.description + '\'';
    item.image_url = '\'' + item.image_url + '\'';
    
    const sql =   `INSERT INTO items (name , price , image_url , category_ID , description) 
    VALUES (` + item.name + `,`+ item.price + `,` + item.image_url + ',' + item.category_ID +  ',' + item.description + `);`; 
    await pool.query(sql);
}

async function update_item(item_name , item_new_name){
    item_name = '\'' + item_name + '\'';
    item_new_name = '\'' + item_new_name + '\'';
    const sql =   `UPDATE categories 
    SET name = ` + item_new_name + `WHERE name = ` + item_name + `;`
    await pool.query(sql);
}

export  { get_items , delete_item , add_new_item , update_item} 