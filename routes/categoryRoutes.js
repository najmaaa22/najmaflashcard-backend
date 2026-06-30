const router=require("express").Router();

const controller=require("../controllers/categoryController");


router.post("/",controller.createCategory);

router.get("/",controller.getCategories);


module.exports=router;