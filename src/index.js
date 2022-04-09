import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]!
    }

    type User {
      id: ID!
      userName: String!
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '1232132',
          userName: 'otaviomiranda',
        };
      },
      users: () => {
        return [
          {
            id: '1232132',
            userName: 'otaviomiranda',
          },
          {
            id: '1232132',
            userName: 'otaviomiranda',
          },
          {
            id: '1232132',
            userName: 'otaviomiranda',
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
