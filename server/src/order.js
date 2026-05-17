import mongoose, { Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
  items: Array,
});

export const Order = mongoose.model('Order', orderSchema);