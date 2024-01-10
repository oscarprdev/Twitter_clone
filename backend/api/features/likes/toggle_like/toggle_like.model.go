package togglelike

import (
	likeshared "twitter_clone/api/features/likes/shared"
)

type ToggleLikePayload struct {
	UserId string `json:"userId"`
	PostId string `json:"postId"`
}

type CreateLikeResponse struct {
	Like 	 likeshared.Like `json:"like"`
	NumLikes int 			 `json:"numLikes"`
}

type DeleteLikeResponse struct {
	LikeDeleted likeshared.Like `json:"likeDeleted"`
	NumLikes    int 			`json:"numLikes"`
}