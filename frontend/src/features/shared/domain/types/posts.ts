export interface Post {
	id: string;
	userId: string;
	post: string;
	image: string;
	updatedAt: string;
	owner: PostOwner;
	isNew?: boolean;
}

export interface PostOwner {
	id: string;
	name: string;
	surname: string;
	username: string;
	profileImgUrl: string;
	email: string;
}
