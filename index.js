import express from "express";
import conectarDB from "./db/db.js";
import { ApolloServer } from "apollo-server-express";
import { tipos } from "./graphql/types.js";
import { resolvers } from "./graphql/resolvers.js";
import dotenv from "dotenv";
import cors from "cors";


const app = express();
dotenv.config();

const server = new ApolloServer({
  typeDefs: tipos,
  resolvers: resolvers,
});

app.use(express.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("Hello word");
// });

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarDB();
  await server.start();

  server.applyMiddleware({ app });

  console.log(`Servidor Listo`);
});
