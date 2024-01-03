package createlike

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
	"twitter_clone/api"
	likeshared "twitter_clone/api/features/likes/shared"
	"twitter_clone/api/responses"
	"twitter_clone/internal/database"

	"github.com/google/uuid"
)

type ApiConfig struct {
	*api.ApiConfig
}

func (api *ApiConfig) CreateLike(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := CreateLikePayload{}
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

	postId, err := uuid.Parse(params.PostId)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing PostId: %v", err))
		return
	}

	like, err := api.DB.CreateLike(r.Context(), database.CreateLikeParams{
		ID: uuid.New(),
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
		UserID: userId,
		PostID: postId,
	})

	responses.RespondWithJSON(w, 201, CreateLikeResponse{
		Like: likeshared.LikeDatabaseToLike(like),
	})
}