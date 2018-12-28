import express from 'express';
import {graphqlExpress} from 'apollo-server-express';
import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import bodyParser from 'body-parser';
import models from './entities/models.graphql';
import modelResolvers from './entities/models.js';
import cors from 'cors';
const resolvers = {};

const rootSchema = makeExecutableSchema({
  typeDefs: models,
});

addMockFunctionsToSchema({schema: rootSchema});

const app = express();
app.use(
  '/graphql',
  bodyParser.json(),
  cors(),
  graphqlExpress({schema: rootSchema})
);
export default app;
