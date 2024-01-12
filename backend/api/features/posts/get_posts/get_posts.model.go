package getposts

import postshared "twitter_clone/api/features/posts/shared"

type GetPostsResponse struct {
	Posts       []postshared.Post `json:"posts"`
	Posts_Count int 			  `json:"postsCount"`
}

type GetPostsQuery struct {
	limit string
	offset string
}