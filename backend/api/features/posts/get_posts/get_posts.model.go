package getposts

import postshared "twitter_clone/api/features/posts/shared"

type GetPostsResponse struct {
	Posts []postshared.Post `json:"posts"`
}