package createuser

import usershared "twitter_clone/api/features/users/shared"


type CreateUserPayload struct {
	Name            string 	  `json:"name"`
	Surname         string 	  `json:"surname"`
	Username        string 	  `json:"username"`
	Email           string 	  `json:"email"`
	Password        string 	  `json:"password"`
	ProfileImgUrl   string    `json:"profileImgUrl"`
	ProfileBgImgUrl string    `json:"profileBgImgUrl"`
}

type CreateUserResponse struct {
	UserCreated usershared.User   `json:"userCreated"`
}