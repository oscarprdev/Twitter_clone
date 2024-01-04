package deletelike

import likeshared "twitter_clone/api/features/likes/shared"

type DeleteLikeResponse struct {
	LikeDeleted likeshared.Like `json:"likeDeleted"`
}

type DeleteLikePayload struct {
	UserId string `json:"userId"`
	PostId string `json:"postId"`
}