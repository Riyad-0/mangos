import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  items: Array
});

export const Cart = mongoose.model('Cart', cartSchema);