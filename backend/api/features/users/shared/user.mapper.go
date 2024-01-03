package usershared

import (
	"twitter_clone/internal/database"
)

func DatabaseUserToUser(dbUser database.User) User{
	return User{
		Id:				 dbUser.ID,
		CreatedAt:		 dbUser.CreatedAt,
		UpdatedAt:		 dbUser.UpdatedAt,
		Name:			 dbUser.Name,
		Surname:  		 dbUser.Surname,
		Username: 		 dbUser.Username,
		Email: 			 dbUser.Email,
		ProfileImgUrl:   dbUser.ProfileImgUrl,
		ProfileBgImgUrl: dbUser.ProfileBgImgUrl,
	}
}