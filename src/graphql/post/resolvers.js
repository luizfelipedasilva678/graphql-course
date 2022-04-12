export const postResolvers = {
  Query: {
    post: async (_, { id }, { getPosts }) => {
      const response = await getPosts('/' + id);
      return response.json();
    },

    posts: async (_, { input }, { getPosts }) => {
      const apiFiltersInput = new URLSearchParams(input);
      const response = await getPosts('/?' + apiFiltersInput);
      return response.json();
    },
  },
  Post: {
    unixTimeStamp: ({ createdAt }) => {
      const timeStamp = new Date(createdAt).getTime() / 1000;
      return `${Math.floor(timeStamp)}`;
    },
  },
};
