const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const categoryRoutes = require('./routes/categoryRoutes');
const flashcardRoutes = require('./routes/flashcardRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const envOrigins = (process.env.CLIENT_URLS || process.env.CLIENT_URL || '')
    .split(',')
    .map(origin => origin.trim())
    .filter(Boolean);

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    ...envOrigins
].filter(Boolean);

const isAllowedVercelOrigin = origin => {
    try {
        const { hostname, protocol } = new URL(origin);
        return protocol === 'https:' && hostname.endsWith('.vercel.app');
    } catch {
        return false;
    }
};

// Middleware
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin) || isAllowedVercelOrigin(origin)) {
            return callback(null, true);
        }

        console.log("Blocked CORS:", origin);
        return callback(null, false);
    },
    credentials: true
}));

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Flashcard API is running' });
});

app.use('/categories', categoryRoutes);
app.use('/flashcards', flashcardRoutes);

// MongoDB Connection
if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is missing. Set it in your deployment environment variables.');
    process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
