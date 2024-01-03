package getlikesbypost

import "github.com/google/uuid"

type GetLikesByPostResponse struct {
	PostID     uuid.UUID `json:"postId"`
	Post       string	 `json:"post"`
	UserID     uuid.UUID `json:"userId"`
	NumLikes   int32	 `json:"numLikes"`
}

