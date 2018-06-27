import express from 'express';
import {graphqlExpress} from 'apollo-server-express';
import {makeExecutableSchema} from 'graphql-tools';
import bodyParser from 'body-parser';

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

const resolvers = {
  Query: {books: () => books},
};

// Put together a schema
const rootSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema: rootSchema}));
export default app;
