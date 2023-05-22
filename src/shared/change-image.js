const cloudinary = require("../config/cloudinary-config");

//actualizar imagen

const updateImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(
      "C:\\Users\\MYE-A3E-135\\Downloads\\image1.jpg",
      {
        public_id: "test-image",
        folder: "test",
      }
    );
    console.log(result.secure_url);
    res.json({ result });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

module.exports = updateImage;
