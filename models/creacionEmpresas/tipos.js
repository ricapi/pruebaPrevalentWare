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
    numEmpleados: Int
    
  }
  type Query {
    Creaciones: [Creacion]
    otherFields: File
  }
  type Mutation {
    crearEmpresa(
      nombre: String
      razonSocial: String
      nit: String
      identificacion: String
      numEmpleados: Int
    ): Creacion

    singleUpload(file: Upload): File

    editarEmpresa(
      _id: String
      nombre: String
      razonSocial: String
      nit: String
      identificacion: String
      numEmpleados: Int
    ): Creacion

    eliminarEmpresa(_id: String): Creacion
  }
`;

export { tiposCreacionEm };
