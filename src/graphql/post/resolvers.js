export const postResolvers = {
  Query: {
    post: async (_, { id }, { getPosts }) => {
      const response = await getPosts('/' + id);
      return response.json();
    },

    posts: async (_, __, { getPosts }) => {
      const response = await getPosts();
      return response.json();
    },
  },
};
