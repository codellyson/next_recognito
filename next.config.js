/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI:
      "mongodb+srv://dellyson:dellyson@cluster0.7cfva.mongodb.net/recognito?retryWrites=true&w=majority",
    OCR_KEY: "K84190035788957",
    OCR_URL: "https://api.ocr.space/parse/image",
  },
};

module.exports = nextConfig;
