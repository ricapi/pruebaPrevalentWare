import { ModeloCreacion } from "./creacion.js";
const resolversCreacion = {
  Query: {
    Creaciones: async (parent, args) => {
      const creacionEmpresa = await ModeloCreacion.find();
      return creacionEmpresa;
    },
  },
  //Mutation: {},
};

export { resolversCreacion };
