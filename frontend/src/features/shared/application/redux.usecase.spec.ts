/* eslint-disable @typescript-eslint/no-unused-vars */

import { Post } from '../domain/types/posts';
import { User } from '../domain/types/user';
import { StateUsecase } from './redux.usecase';

export class ReduxUsecaseTest implements StateUsecase {
	updateUserLogged(_: User): void {}
	updateUnfollowers(_: User[]): void {}
	addUser(_: User): void {}
	addPost(_: Post): void {}
	getProfilePosts(_: Post[]): void {}
	getPosts(_: Post[]): void {}
	addFollow(_: User): void {}
	removeFollow(_: User): void {}
	updateErrorState(_: string): void {}
}
