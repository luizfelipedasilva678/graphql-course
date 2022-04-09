export const postResolvers = {
  Query: {
    post: () => {
      return {
        id: '1',
        postName: 'Post 1',
      };
    },
    posts: () => {
      return [
        {
          id: '1',
          postName: 'Post 1',
        },
        {
          id: '2',
          postName: 'Post 2',
        },
        {
          id: '3',
          postName: 'Post 3',
        },
      ];
    },
  },
};
