package createpost

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
	"twitter_clone/api"
	postshared "twitter_clone/api/features/posts/shared"
	"twitter_clone/api/responses"
	"twitter_clone/internal/database"

	"github.com/google/uuid"
)

type ApiConfig struct {
	*api.ApiConfig
}

func (api *ApiConfig) CreatePost(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := CreatePostPayload{}
	err := decoder.Decode(&params)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing JSON: %v", err))
		return
	}

	userId, err := uuid.Parse(params.UserId)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing UserId: %v", err))
		return
	}

	post, err := api.DB.CreatePost(r.Context(), database.CreatePostParams{
		ID: uuid.New(),
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
		UserID: userId,
		Post: params.Post,
	})

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error creating post: %v", err))
		return
	}

	userDB, err := api.DB.GetUserById(r.Context(), userId)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error Providing post owner: %v", err))
		return
	}

	responses.RespondWithJSON(w, 201, CreatePostResponse{
		Post: postshared.DatabasePostToPost(post, userDB),
	})
}