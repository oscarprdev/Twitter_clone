package createfollower

import (
	usershared "twitter_clone/api/features/users/shared"
)

type CreateFollowerPayload struct {
	UserId   string `json:"userId"`
	FollowTo string `json:"followTo"`
}

type CreateFollowerResponse struct {
	User 	 usershared.User `json:"user"`
	FollowTo usershared.User `json:"followTo"`
}