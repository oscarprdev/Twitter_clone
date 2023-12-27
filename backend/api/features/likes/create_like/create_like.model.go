package createlike

import (
	likeshared "twitter_clone/api/features/likes/shared"
)

type CreateLikePayload struct {
	UserId string `json:"userId"`
	PostId string `json:"postId"`
}

type CreateLikeResponse struct {
	Like likeshared.Like `json:"like"`
}