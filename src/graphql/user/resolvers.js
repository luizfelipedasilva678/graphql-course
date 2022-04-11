export const userResolvers = {
  Query: {
    user: async (_, { id }, { fetch }) => {
      const user = await fetch(`http://localhost:3000/users/${id}`);
      return user.json();
    },
    users: async (_, __, { fetch }) => {
      const users = await fetch('http://localhost:3000/users');
      return users.json();
    },
  },
};
