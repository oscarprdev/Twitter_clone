package postshared

import "twitter_clone/internal/database"

func DatabasePostToPost(dbPost database.Post) Post{
	return Post{
		Id:				 dbPost.ID,
		CreatedAt:		 dbPost.CreatedAt,
		UpdatedAt:		 dbPost.UpdatedAt,
		UserId:			 dbPost.UserID,
		Post:			 dbPost.Post,
	}
}