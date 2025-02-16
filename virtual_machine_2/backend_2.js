const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Array of random facts
const funFacts = [
    "Bananas are berries, but strawberries are not.",
    "A day on Venus is longer than a year on Venus.",
    "Octopuses have three hearts.",
    "Honey never spoils.",
    "Sharks existed before trees.",
];

// API endpoint to return a random fun fact
app.get('/api/fact', (req, res) => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    res.json({ fact: randomFact });
});

// Start the server
app.listen(port, () => {
    console.log(`Microservice running on port ${port}`);
});
