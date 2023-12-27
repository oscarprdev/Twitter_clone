package deletelike

import likeshared "twitter_clone/api/features/likes/shared"

type DeleteLikeResponse struct {
	LikeDeleted likeshared.Like `json:"likeDeleted"`
}