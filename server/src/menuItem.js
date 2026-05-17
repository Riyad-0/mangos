import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
});

export const MenuItem = mongoose.model('MenuItem', menuItemSchema);