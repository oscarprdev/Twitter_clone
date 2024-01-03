package getuser

import usershared "twitter_clone/api/features/users/shared"

type GetUserResponse struct {
	User usershared.User  `json:"user"`
}