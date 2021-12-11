import { ModeloCreacion } from "./creacion.js";
import { GraphQLUpload, graphqlUploadExpress } from "graphql-upload";
//import { finished } from "stream-promise";

const resolversCreacion = {
  Upload: GraphQLUpload,
  Query: {
    Creaciones: async (parent, args) => {
      const creacionEmpresa = await ModeloCreacion.find();
      return creacionEmpresa;
    },
    otherFields: async (parent, args) => {
      const archivos = await ModeloCreacion.find();
      console.log(archivos);
      return archivos;
    },
  },
  Mutation: {
    crearEmpresa: async (parent, args) => {
      const empresaNueva = await ModeloCreacion.create({
        nombre: args.nombre,
        razonSocial: args.razonSocial,
        nit: args.nit,
        identificacion: args.identificacion,
        numEmpleados: args.numEmpleados,
      });
      return empresaNueva;
    },
    editarEmpresa: async (parent, args) => {
      const empresaEditada = await ModeloCreacion.findByIdAndUpdate(
        args._id,
        {
          nombre: args.nombre,
          razonSocial: args.razonSocial,
          nit: args.nit,
          identificacion: args.identificacion,
          numEmpleados: args.numEmpleados,
        },
        { new: true }
      );
      console.log(empresaEditada);
      return empresaEditada;
    },
    eliminarEmpresa: async (parent, args) => {
      if (Object.keys(args).includes("_id")) {
        const empresaEliminada = await ModeloCreacion.findOneAndDelete({
          _id: args._id,
        });
        console.log("Empresa Eliminada");
        return empresaEliminada;
      } else if (Object.keys(args).includes("nombre")) {
        const empresaEliminada = await ModeloCreacion.findOneAndDelete({
          nombre: args.nombre,
        });
        return;
      }
    },
    singleUpload: async (parent, { file }) => {
      const { createReadStream, filename, mimetype, encoding } = await file;
      const stream = createReadStream();
      const out = require("fs").createWriteStream("local-file-output");
      stream.pipe(out);
      //await finished(out);

      return { filename, mimetype, encoding };
    },
  },
};

export { resolversCreacion };
