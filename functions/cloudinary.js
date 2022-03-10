import cloudinary from "cloudinary";
cloudinary.config({
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
});

const uploader = async (file) => {
  return new Promise((resolve) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        folder: "recognito",
        public_id: "recognito_" + Date.now(),
        use_filename: true,
        unique_filename: true,
      },

      (error, result) => {
        if (result) {
          resolve({
            url: result.url,
            id: result.public_id,
          });
        } else {
          resolve(error);
        }
      },
      { resource_type: "auto" }
    );
  });
};
const deleteCloudImage = (id) => {
  cloudinary.v2.uploader.destroy(
    id,
    {
      type: "upload",
      resource_type: "auto",
    },
    (error, result) => {
      if (result) {
        return result;
      } else {
        return error;
      }
    }
  );
};
export { uploader, deleteCloudImage };
