package createpost

import (
	postshared "twitter_clone/api/features/posts/shared"
)

type CreatePostPayload struct {
	UserId string `json:"userId"`
	Post   string `json:"post"`
}

type CreatePostResponse struct {
	Post postshared.Post `json:"post"`
}