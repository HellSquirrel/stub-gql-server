import express from 'express';
import {graphqlExpress} from 'apollo-server-express';
import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import bodyParser from 'body-parser';
import models from './entities/models.graphql';
import modelResolvers from './entities/models.js';
const resolvers = {};

// Put together a schema
const rootSchema = makeExecutableSchema({
  typeDefs: models,
  resolvers: modelResolvers,
});

addMockFunctionsToSchema({schema});

const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema: rootSchema}));
export default app;
