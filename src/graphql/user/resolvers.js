export const userResolvers = {
  Query: {
    user: async (_, { id }, { getUsers }) => {
      const user = await getUsers('/' + id);
      return user.json();
    },
    users: async (_, __, { getUsers }) => {
      const users = await getUsers();
      return users.json();
    },
  },
  User: {
    posts: ({ id }, _, { dataSources }) => {
      return dataSources.postApi.batchLoadByUserId(id);
    },
  },
};
