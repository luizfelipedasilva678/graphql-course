import { ApolloServer } from 'apollo-server';
import { typeDefs, resolvers } from './graphql/schema';
import fetch from 'node-fetch';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: () => {
    return {
      fetch,
    };
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
