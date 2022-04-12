import { ApolloServer } from 'apollo-server';
import { context } from './graphql/context';
import { typeDefs, resolvers } from './graphql/schema';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: context,
});

server.listen(4000).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
