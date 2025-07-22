// routes/paymentRoutes.js
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import Razorpay from "razorpay";

const router = express.Router();

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

router.post("/orders", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // amount in smallest currency unit (paisa)
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error("Razorpay error:", error);
    res.status(500).json({ error: "Failed to create Razorpay order" });
  }
});

export default router;
