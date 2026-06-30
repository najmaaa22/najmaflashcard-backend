const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({

    question:{
        type:String,
        required:true
    },

    answer:{
        type:String,
        required:true
    },

    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    }

},{timestamps:true});


module.exports = mongoose.model("Flashcard", flashcardSchema);