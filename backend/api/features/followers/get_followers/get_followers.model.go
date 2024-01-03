package getfollowers

import usershared "twitter_clone/api/features/users/shared"

type GetFollowersResponse struct {
	Followers []usershared.User `json:"followers"`
	Count 	  int 				`json:"count"`
}

type GetUnfollowersResponse struct {
	Unfollowers []usershared.User `json:"unfollowers"`
	Count 		int 			  `json:"count"`
}