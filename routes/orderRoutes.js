import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// POST /api/orders
router.post("/", async (req, res) => {
  try {
    const {
  firstName,
  lastName,
  address,
  pincode,
  phone,
  items,
  razorpayOrderId,
  razorpayPaymentId,
  razorpay_signature,
} = req.body;

if (
  !firstName ||
  !lastName ||
  !address ||
  !pincode ||
  !phone ||
  !items?.length ||
  !razorpayOrderId ||
  !razorpayPaymentId
) {
  return res.status(400).json({ message: "Please fill all the fields" });
}

    // Create new order
    const newOrder = new Order({
      firstName,
      lastName,
      address,
      pincode,
      phone,
      items,
      razorpayOrderId,
      razorpayPaymentId,
      razorpay_signature,
    });

    await newOrder.save();

    res
      .status(201)
      .json({ message: "✅ Order placed successfully", order: newOrder });
  } catch (err) {
    console.error("❌ Order Save Error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

export default router;
