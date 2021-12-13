import express from "express";
import conectarDB from "./db/db.js";
import { ApolloServer } from "apollo-server-express";
import { tipos } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import { graphqlUploadExpress } from "graphql-upload";

const app = express();
dotenv.config();
app.use(express.json());
//app.use(cors());

const httpServer = http.createServer(app);

//construcción server con tipos y resolvers
const startApolloServer = async (app, httpServer) => {
  const server = new ApolloServer({
    typeDefs: tipos,
    resolvers: resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
};
startApolloServer(app, httpServer);




//puerto de escucha al servidor iniciado y conexión a la DB
app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarDB();
  app.use(graphqlUploadExpress());
  console.log(`Servidor Listo`);
});

export default httpServer;