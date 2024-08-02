import { get_categories ,add_new_category ,delete_category} from "../db/categoriesModel.js";
import { add_new_item } from "../db/itemsModel.js";

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

async function add_new_item_handler(req , res ){
   
    const image_url = req.file.originalname.split('.')[0] + Date.now() + req.body.name +  req.file.originalname.split('.')[1];
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

export {show_categories_Handler , add_category , delete_Category , add_new_item_handler  , show_form_handler}
