package postshared

import "twitter_clone/internal/database"

func DatabasePostToPost(dbPost database.Post, dbUser database.User) Post{
	return Post{
		Id:				 dbPost.ID,
		CreatedAt:		 dbPost.CreatedAt,
		UpdatedAt:		 dbPost.UpdatedAt,
		UserId:			 dbPost.UserID,
		Post:			 dbPost.Post,
		Image:           dbPost.Image,
		Owner: 			 Owner{
			Id:			   dbUser.ID,
			Username: 	   dbUser.Username,
			Name: 		   dbUser.Name,
			Surname: 	   dbUser.Surname,
			Email: 		   dbUser.Email,
			ProfileImgUrl: dbUser.ProfileImgUrl,
		},
	}
}
