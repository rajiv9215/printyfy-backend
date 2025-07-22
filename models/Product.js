import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      type: Number,
      required: true,
    },
    imageUrl: [String],
    category: {
      type: String,
      enum: ["tshirt", "mug", "keychain","hoodies"],
      required:true,
    },
    tags: [String],
    inStock: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
