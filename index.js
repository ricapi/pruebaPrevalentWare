import express from "express";
import conectarDB from "./db/db.js";
import { ApolloServer } from "apollo-server-express";
import { tipos } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";
import dotenv from "dotenv";
import cors from "cors";
import { graphqlUploadExpress } from "graphql-upload";

const app = express();
dotenv.config();

//construcción server con tipos y resolvers
const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
});

app.use(express.json());
app.use(cors());

//puerto de escucha al servidor iniciado y conexión a la DB
app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarDB();
  await server.start();
  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app });

  console.log(`Servidor Listo`);
});
