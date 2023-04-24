import mongoose from "mongoose";
import { config } from "../config/index.js";
const conn = () => {
  mongoose.connect(config.MONGO_URL);
  mongoose.connection.on("error", (err) => {
    console.log("Error de conexion!!: " + err);
  });
  mongoose.connection.on("open", () => {
    console.log("Conexion establecida!!");
  });
};

export default conn;
