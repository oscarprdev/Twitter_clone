import { User } from '../domain/types/user';
import { addFollow, addUser, removeFollow, updateUnfollowers, updateUserLogged } from '../../../framework/store/slices/users-slice';
import { showError } from '../../../framework/store/slices/error-slice';
import { StoreDispatch } from '../../../framework/store/hooks/useDispatch';
import { Post } from '../domain/types/posts';
import { addPost, getPosts, getProfilePosts } from '../../../framework/store/slices/posts-slice';

export interface StateUsecase {
	updateUserLogged(user: User): void;
	updateUnfollowers(users: User[]): void;
	addUser(user: User): void;

	addPost(post: Post): void;
	getProfilePosts(posts: Post[]): void;
	getPosts(posts: Post[]): void;

	addFollow(user: User): void;
	removeFollow(user: User): void;

	updateErrorState(error: string): void;
}

export class DefaultReduxUsecase implements StateUsecase {
	constructor(private readonly dispatch: StoreDispatch) {}

	// Users
	updateUserLogged(user: User): void {
		this.dispatch(updateUserLogged({ user }));
	}

	addUser(user: User) {
		this.dispatch(addUser({ user }));
	}

	// Posts
	getProfilePosts(posts: Post[]) {
		this.dispatch(getProfilePosts({ posts }));
	}

	getPosts(posts: Post[]) {
		this.dispatch(getPosts({ posts }));
	}

	addPost(post: Post) {
		this.dispatch(addPost({ post }));
	}

	// Follow
	addFollow(user: User) {
		this.dispatch(addFollow({ follower: user }));
	}

	updateUnfollowers(users: User[]) {
		this.dispatch(
			updateUnfollowers({
				unfollowers: users,
			})
		);
	}

	removeFollow(user: User) {
		this.dispatch(removeFollow({ follower: user }));
	}

	// Error
	updateErrorState(error: string): void {
		this.dispatch(showError({ errorMessage: error }));
	}
}
