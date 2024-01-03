package updateuser

import usershared "twitter_clone/api/features/users/shared"

type UpdateUserPayload struct {
	Password        string 	  `json:"password"`
	Name            string 	  `json:"name"`
	Surname         string 	  `json:"surname"`
	Username        string 	  `json:"username"`
	ProfileImgUrl   string    `json:"profileImgUrl"`
	ProfileBgImgUrl string    `json:"profileBgImgUrl"`
}

type UpdateUserResponse struct {
	User usershared.User `json:"user"`
}