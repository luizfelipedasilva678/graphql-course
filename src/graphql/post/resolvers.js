export const postResolvers = {
  Query: {
    post: async (_, { id }, { dataSources }) => {
      const post = await dataSources.postApi.getPost(id);

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

    posts: async (_, { input }, { dataSources }) => {
      const posts = await dataSources.postApi.getPosts(input);
      return posts;
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
  Mutation: {
    createPost: async (_, args, { dataSources }) => {
      console.log(args, dataSources);
      return {
        id: '601',
        title: 'DSFASFSAF',
        body: 'sdfsdfsadfsdaf',
        userId: '502',
        indexRef: 19,
        createdAt: '2017-04-26T19:39.05.420Z',
      };
    },
  },
};
