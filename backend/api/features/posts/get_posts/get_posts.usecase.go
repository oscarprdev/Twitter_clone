package getposts

import (
	"fmt"
	"net/http"
	"twitter_clone/api"
	postshared "twitter_clone/api/features/posts/shared"
	"twitter_clone/api/responses"
)

type ApiConfig struct {
    *api.ApiConfig
}

func (api *ApiConfig) GetPosts(w http.ResponseWriter, r *http.Request) {
	dbPosts, err := api.DB.GetAllPosts(r.Context())

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error providing posts: %v", err))
		return
	}

	posts := []postshared.Post{}

	for _, post := range dbPosts {
		posts = append(posts, postshared.DatabasePostToPost(post))
	}

	responses.RespondWithJSON(w, 200, GetPostsResponse{
		Posts: posts,
	})
}