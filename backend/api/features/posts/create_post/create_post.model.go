package createpost

import (
	postshared "twitter_clone/api/features/posts/shared"
)

type CreatePostPayload struct {
	UserId string `json:"userId"`
	Post   string `json:"post"`
	Image  string `json:"image"`
}

type CreatePostResponse struct {
	Post  postshared.Post  `json:"post"`
}