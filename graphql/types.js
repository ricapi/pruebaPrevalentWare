import { gql } from "apollo-server-express";
import { tiposCreacionEm } from "../models/creacionEmpresas/tipos.js";

const tiposGlobales = gql`
  scalar Date
`;

export const tipos = [tiposGlobales, tiposCreacionEm];
