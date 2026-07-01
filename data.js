const mongoose = require('mongoose');
require('dotenv').config();

const Category = require('./models/Category');
const Flashcard = require('./models/Flashcard');


const seedData = async () => {

    try {

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Connected to MongoDB for seeding...");


        // clear old data

        await Category.deleteMany({});
        await Flashcard.deleteMany({});

        console.log("Old data cleared");


        // Categories

        const jsCategory = await Category.create({
            name: "JavaScript"
        });

        const reactCategory = await Category.create({
            name: "React"
        });

        const cssCategory = await Category.create({
            name: "CSS"
        });


        const htmlCategory = await Category.create({
            name: "HTML"
        });

        const nodeCategory = await Category.create({
            name: "Node.js"
        });


        const mongoCategory = await Category.create({
            name: "MongoDB"
        });


        const expressCategory = await Category.create({
            name: "Express.js"
        });


        const bootstrapCategory = await Category.create({
            name: "Bootstrap"
        });



        console.log("Categories seeded");



        const flashcards = [


            // JavaScript

            {
                question: "What are primitive data types in JavaScript?",
                answer: "String, Number, BigInt, Boolean, undefined, symbol and null.",
                category: jsCategory._id
            },

            {
                question: "Difference between == and ===?",
                answer: "== checks value, === checks value and type.",
                category: jsCategory._id
            },

            {
                question: "What is closure?",
                answer: "Closure is a function with access to its outer scope.",
                category: jsCategory._id
            },



            // React

            {
                question: "What is useEffect Hook?",
                answer: "It is used for side effects like API calls.",
                category: reactCategory._id
            },


            {
                question: "What are props?",
                answer: "Props are data passed from parent to child component.",
                category: reactCategory._id
            },


            {
                question: "What is state in React?",
                answer: "State stores changing data inside a component.",
                category: reactCategory._id
            },



            // CSS


            {
                question: "What is Flexbox?",
                answer: "Flexbox is used to create one dimensional layouts.",
                category: cssCategory._id
            },


            {
                question: "What is CSS Grid?",
                answer: "CSS Grid creates layouts using rows and columns.",
                category: cssCategory._id
            },


            {
                question: "What is margin and padding?",
                answer: "Margin is outside space and padding is inside space.",
                category: cssCategory._id
            },


            {
                question: "What is specificity?",
                answer: "Specificity decides which CSS rule has priority.",
                category: cssCategory._id
            },



            // HTML


            {
                question: "What is HTML?",
                answer: "HTML creates the structure of web pages.",
                category: htmlCategory._id
            },


            {
                question: "What are semantic tags?",
                answer: "Tags that describe meaning like header, section and article.",
                category: htmlCategory._id
            },



            // Node.js


            {
                question: "What is Node.js?",
                answer: "Node.js allows JavaScript to run outside browser.",
                category: nodeCategory._id
            },


            {
                question: "What is npm?",
                answer: "npm is a package manager for Node.js.",
                category: nodeCategory._id
            },



            // MongoDB


            {
                question: "What is MongoDB?",
                answer: "MongoDB is a NoSQL database.",
                category: mongoCategory._id
            },


            {
                question: "What is collection in MongoDB?",
                answer: "Collection stores a group of documents.",
                category: mongoCategory._id
            },



            // Express


            {
                question: "What is Express.js?",
                answer: "Express is a Node.js framework for creating APIs.",
                category: expressCategory._id
            },


            {
                question: "What is middleware?",
                answer: "Middleware runs between request and response.",
                category: expressCategory._id
            },



            // Bootstrap


            {
                question: "What is Bootstrap?",
                answer: "Bootstrap is a CSS framework for responsive design.",
                category: bootstrapCategory._id
            },


            {
                question: "What are Bootstrap components?",
                answer: "Reusable UI elements like cards, buttons and navbar.",
                category: bootstrapCategory._id
            }


        ];



        await Flashcard.insertMany(flashcards);


        console.log("Flashcards seeded successfully");

        process.exit(0);


    } catch (error) {

        console.log(error);

        process.exit(1);

    }

};


seedData();