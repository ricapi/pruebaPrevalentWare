import { gql } from "apollo-server-express";


const tiposCreacionEm = gql`
  scalar Upload

  type File {
    filename: String
    mimetype: String
    encoding: String
  }

  type Creacion {
    _id: ID
    nombre: String
    razonSocial: String
    nit: String
    identificacion: String
    numEmpleados: String
    
  }
  type Query {
    Creaciones: [Creacion]
    Empresa(_id: String): Creacion
    otherFields: File
  }
  type Mutation {
    crearEmpresa(
      nombre: String
      razonSocial: String
      nit: String
      identificacion: String
      numEmpleados: String
    ): Creacion

   

    singleUpload(file: Upload): File

    editarEmpresa(
      _id: String
      nombre: String
      razonSocial: String
      nit: String
      identificacion: String
      numEmpleados: String
    ): Creacion

    eliminarEmpresa(_id: String): Creacion
  }
`;

export { tiposCreacionEm };
