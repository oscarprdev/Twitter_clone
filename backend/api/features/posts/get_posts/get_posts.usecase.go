package getposts

import (
	"fmt"
	"net/http"
	"twitter_clone/api"
	postshared "twitter_clone/api/features/posts/shared"
	"twitter_clone/api/features/utils"
	"twitter_clone/api/responses"
	"twitter_clone/internal/database"

	"github.com/go-chi/chi"
	"github.com/google/uuid"
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
		userDB, err := api.DB.GetUserById(r.Context(), post.UserID)

		if err != nil {
			responses.RespondWithError(w, 400, fmt.Sprintf("Error Providing post owner: %v", err))
			return
		}

		posts = append(posts, postshared.DatabasePostToPost(post, userDB))
	}

	responses.RespondWithJSON(w, 200, GetPostsResponse{
		Posts: posts,
	})
}

func (api *ApiConfig) GetPostsByParam(w http.ResponseWriter, r *http.Request) {
	userIdStr := chi.URLParam(r, "id")
	userId, err := uuid.Parse(userIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("User not found: %v", err))
		return
	}

	dbPosts := []database.Post{}
	switch key := utils.GetKeyFromPath(r); key {
		case "followers":
			dbPosts = api.getPostsByFollowers(w, r, userId)
		case "user":
			dbPosts = api.getPostsByUser(w, r, userId)
	}

	posts := []postshared.Post{}
	for _, post := range dbPosts {
		userDB, err := api.DB.GetUserById(r.Context(), post.UserID)

		if err != nil {
			responses.RespondWithError(w, 400, fmt.Sprintf("Error Providing post owner: %v", err))
			return
		}

		posts = append(posts, postshared.DatabasePostToPost(post, userDB))
	}

	responses.RespondWithJSON(w, 200, GetPostsResponse{
		Posts: posts,
	})
}

func (api *ApiConfig) getPostsByUser(w http.ResponseWriter, r *http.Request, userId uuid.UUID) []database.Post {
	dbPosts, err := api.DB.GetPostsByUser(r.Context(), userId)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving posts by user: %v", err))
	}

	return dbPosts
}

func (api *ApiConfig) getPostsByFollowers(w http.ResponseWriter, r *http.Request, userId uuid.UUID) []database.Post {
	dbPosts, err := api.DB.GetPostsByFollowers(r.Context(), userId)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving posts by followers: %v", err))
	}

	return dbPosts
}
