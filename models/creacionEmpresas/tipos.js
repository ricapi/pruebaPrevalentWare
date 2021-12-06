import { gql } from "apollo-server-express";

const tiposCreacionEm = gql`
  type Creacion {
    nombre: String
    razonSoc: String
    nit: String
    identifi: String
    numEmple: String
  }
  type Query {
    Creaciones: [Creacion]
  }
 
`;

export { tiposCreacionEm };
