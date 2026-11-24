const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:5500', // Replace with your frontend URL
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

//Authentication middleware
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (token !== 'Bearer mysecret-token') {
        return res.status(401) .json({ 
            message: 'Unauthorized! Invalid token.'});}
    next();}

    //Public api
    app.get("/", (req, res) => {
        res.json({ message: "Backend is running successfully!" });});

//Protected api
app.get("/api/public", authenticateToken, (req, res) => {
    res.json({ message: "Authorized access successful.",
        user: {
            name: "Rabia",
            role: "student"
        }
     });});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});