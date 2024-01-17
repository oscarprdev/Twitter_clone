package deletefollower

import (
	usershared "twitter_clone/api/features/users/shared"
)

type DeleteFollowerPayload struct {
	UserId     string `json:"userId"`
	UnfollowTo string `json:"unfollowTo"`
}

type DeleteFollowerResponse struct {
	User 	   usershared.User `json:"user"`
	UnfollowTo usershared.User `json:"unfollowTo"`
}