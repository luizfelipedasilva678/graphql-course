export const userResolvers = {
  Query: {
    user: () => {
      return {
        id: '1',
        userName: 'Luiz',
      };
    },
    users: () => {
      return [
        {
          id: '1',
          userName: 'Luiz',
        },
        {
          id: '2',
          userName: 'Luiz',
        },
        {
          id: '3',
          userName: 'Luiz',
        },
      ];
    },
  },
};
