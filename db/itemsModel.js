import pool from "./migration.js";

async function get_items(){
    const sql = `SELECT items.id , items.name , items.price , items.description , items.image_url , categories.name as category_name 
    FROM items
    JOIN categories 
    ON items.category_id = categories.id; `
    return await pool.query(sql);
    
}

async function get_item_by_id(item_id){
    const sql = `SELECT items.id , items.name , items.price , items.description , items.image_url , categories.name as category_name 
    FROM items
    JOIN categories 
    ON items.category_id = categories.id
    WHERE items.id = `+item_id+`;`
    return await pool.query(sql);
    
}

async function delete_item(item_id){
    const sql = `DELETE FROM items WHERE id = ` + item_id + `;`
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

export  { get_items , delete_item , add_new_item , update_item , get_item_by_id} 