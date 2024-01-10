package getpostsbyfollowers

import (
	"fmt"
	"net/http"
	"twitter_clone/api"
	postshared "twitter_clone/api/features/posts/shared"
	"twitter_clone/api/responses"

	"github.com/go-chi/chi"
	"github.com/google/uuid"
)

type ApiConfig struct {
	*api.ApiConfig
}

func (api *ApiConfig) GetPostsByFollowers(w http.ResponseWriter, r *http.Request) {
	userIdStr := chi.URLParam(r, "id")
	userId, err := uuid.Parse(userIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("User not found: %v", err))
		return
	}

	dbPosts, err := api.DB.GetPostsByFollowers(r.Context(), userId)

	posts := []postshared.Post{}
	for _, post := range dbPosts {
		userDB, err := api.DB.GetUserById(r.Context(), post.UserID)

		if err != nil {
			responses.RespondWithError(w, 400, fmt.Sprintf("Error Providing post owner: %v", err))
			return
		}

		posts = append(posts, postshared.DatabasePostToPost(post, userDB))
	}

	responses.RespondWithJSON(w, 200, GetPostsByFollowersResponse{
		Posts: posts,
	})
}