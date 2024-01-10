export interface Post {
	id: string;
	userId: string;
	post: string;
	updatedAt: string;
	owner: PostOwner;
}

export interface PostOwner {
	name: string;
	surname: string;
	username: string;
	profileImgUrl: string;
	email: string;
}
