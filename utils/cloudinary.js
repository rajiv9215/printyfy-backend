import dotenv from "dotenv";
dotenv.config(); // ✅ Load env variables

//utils/cloudinary.js
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Export multer storage
export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "velamore-products", // folder name in Cloudinary
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});
