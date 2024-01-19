import { setupServer } from 'msw/node';
import { followersHandlers } from '../handlers/followers.handlers';
import { likesHandlers } from '../handlers/likes.handlers';
import { postsHandler } from '../handlers/posts.handlers';
import { usersHandler } from '../handlers/users.handlers';

export const server = setupServer(...followersHandlers, ...likesHandlers, ...postsHandler, ...usersHandler);
