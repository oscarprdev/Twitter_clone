package getpostsbyfollowers

import postshared "twitter_clone/api/features/posts/shared"

type GetPostsByFollowersResponse struct {
	Posts []postshared.Post `json:"posts"`
}