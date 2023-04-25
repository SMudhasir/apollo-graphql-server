import Express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";
import { typeDefs } from "./Schema/TypeDefs.js";
import { resolvers } from "./Schema/Resolvers.js";

const app = Express();

const server = new ApolloServer({ typeDefs, resolvers });

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

app.listen(3000, () => {
  console.log("server started");
});
