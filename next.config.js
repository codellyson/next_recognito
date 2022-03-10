/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI:
      "mongodb+srv://dellyson:dellyson@cluster0.7cfva.mongodb.net/recognito?retryWrites=true&w=majority",
    OCR_KEY: "K84190035788957",
    OCR_URL: "https://api.ocr.space/parse/image",
    CLOUDINARY_API_KEY: "227548547924765",
    CLOUDINARY_API_SECRET: "BDLyBM6q7S23lV64YXgA5SDJIbQ",
    CLOUDINARY_CLOUDNAME: "dellyson",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
