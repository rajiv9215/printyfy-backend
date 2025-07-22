import Product from "../models/Product.js"; // ✅ This was missing

export const addProduct = async (req, res) => {
  try {
    const { title, description, price, inStock, tags, category } = req.body;

    const imageUrls = req.files.map((file) => file.path); // Cloudinary URLs

    const newProduct = new Product({
      title,
      description,
      price,
      inStock,
      category, // ✅ Don't forget to accept category too
      tags: Array.isArray(tags) ? tags : [tags], // fallback
      imageUrl: imageUrls,
    });

    await newProduct.save();
    res.status(201).json({ success: true, product: newProduct });
  } catch (error) {
    console.error("Add Product Error:", error.message);
    res.status(500).json({ error: "Server error while adding product" });
  }
};
