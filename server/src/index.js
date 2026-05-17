import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { exit } from 'process';
import { fillMenu, getMenu } from './menu';
import { fileURLToPath } from 'url';
import { Order } from './order';
import { Cart } from './cart';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const port = 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());

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

app.post('/api/cart', async (req, res) => {
  const sessionId = req.cookies.session;
  const items = req.body.items;
  if (typeof sessionId === "string" && sessionId.length <= 24) {
    const existing = await Cart.findById(sessionId)
    if (existing !== null) {
      existing.items = items;
      existing.save();
      res.json({ result: "success "});
      return;
    }
  }
  const cart = await new Cart({ items }).save();
  res.cookie("session", cart._id);
  res.json({ result: "success" });
});

app.post('/api/order', async (req, res) => {
  const sessionId = req.cookies.session;
  const items = req.body.items;
  new Order({ items }).save();
  if (typeof sessionId === "string" && sessionId.length <= 24) {
    await Cart.findByIdAndDelete(sessionId);
  }
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