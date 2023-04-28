import express from "express";
import multer from "multer";
import Products from "../models/Products.js";
import cloudinary from "cloudinary";

const multerx = multer();
const productsRouter = express.Router();
cloudinary.config({
  cloud_name: "dbxkusypn",
  api_key: "467826675218695",
  api_secret: "wxpcHkkwekVYLf9tzCAtuhZxeTw",
});

productsRouter.get("/", async (req, res) => {
  const products = await Products.find({});

  res.status(200).json(products);
});

productsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const product = await Products.findById(id);

  if (product) {
    res.status(200).json(product);
    return;
  } else {
    res.status(400).json({ message: "Error al encontrar el producto" });
    return;
  }
});

productsRouter.post("/", multerx.none(), async (req, res) => {
  const fileImg = req.file;

  if (fileImg) {
    const { secure_url: url, public_id } = await cloudinary.v2.uploader.upload(
      req.file.path
    );
    req.body.image = { url, public_id };
  } else {
    req.body.image = { secure_url: "XD", public_id: "XD" };
  }
  const product = await Products.create(req.body);
  if (product) {
    res.status(200).json(product);
    return;
  } else {
    res.json({ message: "Error al crear el producto" });
    return;
  }
});

export default productsRouter;
