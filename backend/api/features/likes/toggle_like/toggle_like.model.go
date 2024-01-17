package togglelike

type ToggleLikePayload struct {
	UserId string `json:"userId"`
	PostId string `json:"postId"`
}

type ToggleLikeResponse struct {
	IsLikeDeleted bool `json:"isLikeDeleted"`
	NumLikes 	  int  `json:"numLikes"`
}
