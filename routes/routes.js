import { Router } from "express";
import { 
    show_categories_Handler ,add_category ,delete_Category ,
    add_new_item_handler, show_form_handler,show_items_handler
    ,delete_item_handler
} from "../controllers/homeController.js";
import multer from "multer";

const router =  Router();
let file_save_Time ;
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images'); // Save files to 'uploads' directory
    },
    filename: (req, file, cb) => {
        file_save_Time = Date.now();
        const filename = file.originalname.split('.')[0] + Date.now() + '.'+  file.originalname.split('.')[1]; 
      cb(null, filename); // Save file with original name
    }
  });
  
  const upload = multer({ storage: storage });


router.get('/' , (req , res)=>{res.render('home')})

router.get('/categories' , show_categories_Handler);

router.get('/items' ,show_items_handler );

router.get('/new/item' , show_form_handler);


router.post('/new/category' , add_category)

router.post('/categories/delete/:id' , delete_Category)

router.post('/new/item' , upload.single('image_url')  ,add_new_item_handler )

router.post('/items/delete/:id' ,delete_item_handler )

export {file_save_Time};
export default router;