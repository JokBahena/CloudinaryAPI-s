const cloudinary = require("../config/cloudinary-config");

const image = "C:\\Users\\MYE-A3E-135\\Downloads\\download.jpg";

// const uploadImage = async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(image);
//     console.log(result.secure_url);
//     res.json({ result });
//   } catch (error) {
//     console.log(error);
//     res.json({ error });
//   }
// }

//subir las imagenes a cloudinary con el nombre del archivo y la carpeta
const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(image, {
      public_id: "test-image",
      folder: "test",
    });
    console.log(result.secure_url);
    res.json({ result });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

module.exports = uploadImage;
