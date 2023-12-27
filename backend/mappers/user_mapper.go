package mappers

import (
	"twitter_clone/internal/database"
	"twitter_clone/models"
)

func DatabaseUserToUser(dbUser database.User) models.User{
	return models.User{
		Id:				 dbUser.ID,
		CreatedAt:		 dbUser.CreatedAt,
		UpdatedAt:		 dbUser.UpdatedAt,
		Name:			 dbUser.Name,
		Surname:  		 dbUser.Surname,
		Username: 		 dbUser.Username,
		Email: 			 dbUser.Email,
		Password: 		 dbUser.Password,
		ProfileImgUrl:   dbUser.ProfileImgUrl,
		ProfileBgImgUrl: dbUser.ProfileBgImgUrl,
	}
}