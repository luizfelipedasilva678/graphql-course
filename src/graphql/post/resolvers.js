export const postResolvers = {
  Query: {
    post: async (_, { id }, { getPosts }) => {
      const response = await getPosts('/' + id);
      const post = await response.json();

      if (Math.random() > 0.5) {
        return {
          statusCode: 500,
          message: 'Post timeout',
          timeout: 123,
        };
      }

      if (typeof post.id === 'undefined') {
        return {
          statusCode: 404,
          message: 'Post not found',
          postId: id,
        };
      }

      return post;
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
    user: async ({ userId }, _, { userDataLoader }) => {
      return userDataLoader.load(userId);
    },
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') {
        return 'PostNotFoundError';
      }

      if (typeof obj.timeout !== 'undefined') {
        return 'PostTimeoutError';
      }

      if (typeof obj.id !== 'undefined') {
        return 'Post';
      }

      return null;
    },
  },
  PostError: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== 'undefined') {
        return 'PostNotFoundError';
      }

      if (typeof obj.timeout !== 'undefined') {
        return 'PostTimeoutError';
      }

      return null;
    },
  },
};
