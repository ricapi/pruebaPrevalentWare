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
  imagen: {
    type: String,
    required: false,
  },
  numEmpleados: {
    type: Number,
  },
});

const ModeloCreacion = model("Creacion", creacionSchema);

export { ModeloCreacion };
