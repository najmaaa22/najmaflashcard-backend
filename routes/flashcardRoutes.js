const router=require("express").Router();

const controller=require("../controllers/flashcardController");


router.post("/",controller.createFlashcard);


router.get("/:categoryId",
controller.getFlashcardsByCategory);



module.exports=router;