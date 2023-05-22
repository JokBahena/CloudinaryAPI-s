const cloudinary = require("../config/cloudinary-config");

//borrar la imagen
const deleteImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.destroy("test/test-image");
    console.log(result);
    res.json({ result });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

module.exports = deleteImage;
