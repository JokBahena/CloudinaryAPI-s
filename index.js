const express = require("express");
// const bodyParser = require("body-parser");}}
const getImage = require("./src/shared/get-image");
const uploadImage = require("./src/shared/upload-image");
const updateImage = require("./src/shared/change-image");
const deleteImage = require("./src/shared/delete-image");

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/get-image", getImage);
app.post("/upload-image", uploadImage);
app.put("/update-image", updateImage);
app.delete("/delete-image", deleteImage);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
