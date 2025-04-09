import express from 'express';
import pg from 'pg';
const { Client } = pg;

const config = {
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DATABASE_PORT,
    ssl: true
  }

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`listening at http://localhost:${port} `)
});

// API ENDPOINTS
// Login
// checks, database


// Get all suggestion cards
// For front end
let suggestionCard = {
    id: "serial",
    title: "string",
    category: "choice",
    detail: "varchar",
    roadmapStatus: "choice",
    upvotes: 12,
    comments: 4
}


// Conversation
// gets conversation topics for one id of suggestion