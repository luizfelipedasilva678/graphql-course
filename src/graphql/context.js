import fetch from 'node-fetch';
import { getUsers } from './user/utils';
import { getPosts } from './post/utils';

export const context = () => {
  return {
    getUsers: getUsers(fetch),
    getPosts: getPosts(fetch),
  };
};
