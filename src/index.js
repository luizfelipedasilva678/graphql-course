import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Hello';
      },
      hi: () => {
        return 'Hi';
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
