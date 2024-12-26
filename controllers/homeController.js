import { get_categories ,add_new_category ,delete_category} from "../db/categoriesModel.js";
import { add_new_item, get_items , delete_item, get_item_by_id } from "../db/itemsModel.js";
import { file_save_Time } from "../routes/routes.js";
import {unlink} from 'fs';

async function show_categories_Handler (req , res){
    const categories = await get_categories();
    res.render('categories' , {categories});
}

async function add_category(req , res){
    const category = req.body.category;
    await add_new_category(category);

    const categories = await get_categories();
    res.render('categories' , {categories});
}

async function delete_Category(req , res){
    const id = req.params.id;
    await delete_category(id);
    const categories = await get_categories();
    res.render('categories' , {categories});
}

async function show_form_handler(req , res) {
    const categories = await get_categories();
    res.render('itemsForm' , {categories});
}
//############################################################################################################
async function show_items_handler(req , res){
const items = await get_items();
res.render('items' , {items});
}
async function add_new_item_handler(req , res ){
   
    const image_url = req.file.originalname.split('.')[0] + file_save_Time +  '.' + req.file.originalname.split('.')[1];
    const new_item = {
        name: req.body.name,
        price : req.body.price,
        description:req.body.description,
        category_ID :  +req.body.category,
        image_url : image_url
    }
    await add_new_item(new_item);

    res.redirect('/');
}

async function delete_item_handler(req , res){
    const id = req.params.id;
    const item = await get_item_by_id(id);
    const path = 'public/images/' + item.rows[0].image_url; 
    unlink(path , (err) =>{if(err){}});
    await delete_item(id);
    res.redirect('/');
}
export {show_categories_Handler , add_category , delete_Category , 
    add_new_item_handler  , show_form_handler , show_items_handler
    ,delete_item_handler
}
