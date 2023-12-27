package createlike

import (
	likeshared "twitter_clone/api/features/likes/shared"
)

type CreateLikePayload struct {
	UserId string `json:"userId"`
	LikeTo string `json:"likeTo"`
}

type CreateLikeResponse struct {
	Like likeshared.Like `json:"like"`
}