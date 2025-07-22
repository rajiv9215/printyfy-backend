import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true },
  phone: { type: String, required: true },

  items: [
    {
      _id: String,
      title: String,
      price: Number,
      quantity: Number,
    },
  ],

  razorpayOrderId: { type: String, required: true },
  razorpayPaymentId: { type: String, required: true },
  razorpay_signature: { type: String }, // Optional but helpful for validation

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);
