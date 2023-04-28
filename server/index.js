import "dotenv/config";
import express from "express";
import cors from "cors";
import conn from "./src/database/index.js";
import authRouter from "./src/routes/auth.js";
import productsRouter from "./src/routes/products.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

conn();

app.use("/", authRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.json({ message: "XD" });
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
