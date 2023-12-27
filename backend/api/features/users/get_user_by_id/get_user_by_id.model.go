package getuserbyid

import usershared "twitter_clone/api/features/users/shared"

type GetUserByIdResponse struct {
	User usershared.User  `json:"user"`
}