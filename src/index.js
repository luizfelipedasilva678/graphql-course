import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
      id: ID
      age: Int
      average: Float
      married: Boolean!
      arrayString: [String!]!
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
      id: () => '213123',
      age: () => 30,
      average: () => 4.5,
      married: () => true,
      arrayString: () => ['Hi', 'Hello'],
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
