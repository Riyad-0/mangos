import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { exit } from 'process';
import { fillMenu, getMenu } from './menu';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const port = 3000;
const app = express();

app.get('/api/hello', (req, res) => {
  res.send("Hello!");
});

app.get('/api/menu', async (req, res) => {
  const menu = await getMenu();
  res.json({ result: "success", menu });
});

app.get('/api/menu/fill', async (req, res) => {
  await fillMenu();
  res.json({ result: "success" });
});

if (process.env.MONGODB_URI === undefined) {
  console.error("Expected 'MONGODB_URI' environment variable");
  exit();
}

await mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch(err => {
    console.error("MongoDB connection error:", err);
  });

app.listen(port, () => console.log(`api: http://localhost:${port}`));

export default app;