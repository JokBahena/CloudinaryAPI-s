const cloudinary = require("../config/cloudinary-config");

//obtener url de imagen

const getImage = async (req, res) => {
  try {
    const result = await cloudinary.url("test/test-image");
    console.log(result);
    res.json({ result });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

module.exports = getImage;
