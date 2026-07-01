

const mongoose = require("mongoose");
const Flashcard = require("../models/Flashcard");



exports.createFlashcard = async (req, res) => {

    try {


        const card = new Flashcard(req.body);


        await card.save();


        res.json(card);


    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }

}



exports.getFlashcardsByCategory = async (req, res) => {

    try {

        const { categoryId } = req.params;


        const flashcards = await Flashcard.find({
            category: new mongoose.Types.ObjectId(categoryId)
        });


        console.log("RESULT:", flashcards);


        res.json(flashcards);


    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

};