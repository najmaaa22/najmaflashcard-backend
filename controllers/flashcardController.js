const mongoose = require("mongoose");
const Flashcard = require('../models/Flashcard');

// Create Flashcard
// exports.createFlashcard = async (req, res) => {
//     try {
//         const { question, answer, category } = req.body;
//         const newFlashcard = new Flashcard({ question, answer, category });
//         await newFlashcard.save();
//         res.status(201).json(newFlashcard);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };
exports.createFlashcard = async (req, res) => {
    try {
        const { question, answer, category } = req.body;

        const newFlashcard = new Flashcard({
            question,
            answer,
            category
        });

        await newFlashcard.save();

        res.status(201).json(newFlashcard);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get Flashcards by Category
// exports.getFlashcardsByCategory = async (req, res) => {
//     try {
//         const { categoryId } = req.params;
//         const flashcards = await Flashcard.find({ category: categoryId });
//         res.status(200).json(flashcards);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

exports.getFlashcardsByCategory = async(req,res)=>{

    try {

        const {categoryId}=req.params;


        const flashcards = await Flashcard.find({
            category: new mongoose.Types.ObjectId(categoryId)
        });


        console.log("RESULT:", flashcards);


        res.json(flashcards);


    }catch(error){

        console.log(error);

        res.status(500).json({
            message:error.message
        });

    }

};