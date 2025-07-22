// routes/productRoutes.js
import express from "express";
import { addProduct } from "../controllers/productController.js";
import { upload } from "../middlewares/upload.js";
import Product from "../models/Product.js";


const router = express.Router();

// Accept multiple images
router.post("/add", upload.array("images", 5), addProduct);

router.get("/", async (req, res) => {
   try {
    const { category } = req.query;

    const query = category ? { category } : {};

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET /api/products/trending-tshirts
router.get('/trending-tshirts', async (req, res) => {
  try {
    const trendingTshirts = await Product.find({
      category: 'tshirt',
      tags: { $in: ['trending'] },
    });
    res.json(trendingTshirts);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});
router.get('/trending-keychain', async (req, res) => {
  try {
    const trendingKeyChain = await Product.find({
      category: 'keychain',
      tags: { $in: ['trending'] },
    });
    res.json(trendingKeyChain);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});



export default router;
