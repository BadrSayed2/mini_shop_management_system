import { Router } from "express";
import { show_categories_Handler ,add_category ,delete_Category ,add_new_item_handler, show_form_handler} from "../controllers/homeController.js";
import multer from "multer";

const router =  Router();
const upload = multer({dest : 'public/images'})


router.get('/' , (req , res)=>{res.render('home')})

router.get('/categories' , show_categories_Handler);

router.get('/new/item' , show_form_handler);


router.post('/new/category' , add_category)

router.post('/categories/delete/:id' , delete_Category)

router.post('/new/item' , upload.single('image_url')  ,add_new_item_handler )

export default router;