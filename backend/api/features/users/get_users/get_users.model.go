package getusers

import usershared "twitter_clone/api/features/users/shared"

type GetUsersResponse struct {
	Users []usershared.User  `json:"users"`
}