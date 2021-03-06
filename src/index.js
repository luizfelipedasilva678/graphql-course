import { ApolloServer } from 'apollo-server';
import { context } from './graphql/context';
import { PostsApi } from './graphql/post/datasources';
import { UsersApi } from './graphql/user/datasources';
import { typeDefs, resolvers } from './graphql/schema';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  context: context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
      usersApi: new UsersApi(),
    };
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`server listening on url ${url}`);
});
