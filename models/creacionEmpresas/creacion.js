import mongoose from "mongoose";
const { Schema, model } = mongoose;

const creacionSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  razonSocial: {
    type: String,
  },
  nit: {
    type: String,
  },
  identificacion: {
    type: String,
  },
  numEmpleados: {
    type: String,
  },
});

const ModeloCreacion = model("Creacion", creacionSchema);

export { ModeloCreacion };
