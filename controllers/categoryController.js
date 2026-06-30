// const Category = require('../models/Category');

// // Create Category
// exports.createCategory = async (req, res) => {
//     try {
//         const { name } = req.body;
//         const newCategory = new Category({ name });
//         await newCategory.save();
//         res.status(201).json(newCategory);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// // Get Categories
// exports.getCategories = async (req, res) => {
//     try {
//         const categories = await Category.find();
//         res.status(200).json(categories);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
const Category=require("../models/Category");


exports.createCategory=async(req,res)=>{

try{

const category=new Category(req.body);

await category.save();

res.json(category);


}catch(error){

res.status(500).json({
message:error.message
})

}

}



exports.getCategories=async(req,res)=>{

try{


const categories=await Category.find();


res.json(categories);



}catch(error){

res.status(500).json({
message:error.message
})

}
}