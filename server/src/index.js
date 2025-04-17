import express from "express";
import pg from "pg";

const config = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
  ssl: true
}

const { Client } = pg;

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
  console.log(`listening at http://localhost:${port} `);
});

// Get all suggestions
app.get("/suggestions/", async (req, res) => {
  let suggestions = await getAllSuggestions();
  let JSONsuggestions = JSON.stringify(suggestions);
  res.send(JSONsuggestions);
});
const getAllSuggestions = async () => {
  const client = new Client(config);
  await client.connect();
  let result = await client.query("SELECT * FROM suggestions");
  await client.end();
  return result.rows;
};

// Add one suggestion
app.post("/suggestions/", async (req, res) => {
  await addOneSuggestion(req.body);
  const updatedSuggestions = await getAllSuggestions();
  res.json(updatedSuggestions);
});
const addOneSuggestion = async (obj) => {
  const client = new Client(config);
  await client.connect();
  await client.query(
    `INSERT INTO suggestions (title, category, detail) VALUES ($1, $2, $3);`,
    [obj.title, obj.category, obj.detail]
  );

  await client.end();
};

// Conversation
// gets conversation topics for one id of suggestion
