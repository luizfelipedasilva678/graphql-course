export const userResolvers = {
  Query: {
    user: async (_, { id }, { dataSources }) => {
      const user = await dataSources.usersApi.getUser(id);
      return user;
    },
    users: async (_, __, { dataSources }) => {
      const users = await dataSources.usersApi.getUsers();
      return users;
    },
  },
  User: {
    posts: ({ id }, _, { dataSources }) => {
      return dataSources.postApi.batchLoadByUserId(id);
    },
  },
};
