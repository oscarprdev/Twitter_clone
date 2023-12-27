package loginuser

import usershared "twitter_clone/api/features/users/shared"

type LoginPayload struct {
	Email           string 	  `json:"email"`
	Password        string 	  `json:"password"`
}

type LoginResponse struct {
	UserLogged usershared.User `json:"userLogged"`
	JWT        string      `json:"jwt"`
}