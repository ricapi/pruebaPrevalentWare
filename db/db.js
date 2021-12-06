import mongoose from "mongoose";

const conectarDB = async () => {
  return await mongoose
    .connect(process.env.LINK_DB)
    .then(() => {
      console.log("Conexión Éxitosa");
    })
    .catch((e) => {
      console.error("Error de conexión a la base de datos", e);
    });
};

export default conectarDB;
