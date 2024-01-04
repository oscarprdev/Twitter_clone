package deletelike

import (
	"encoding/json"
	"fmt"
	"net/http"
	"twitter_clone/api"
	likeshared "twitter_clone/api/features/likes/shared"
	"twitter_clone/api/responses"
	"twitter_clone/internal/database"

	"github.com/google/uuid"
)

type ApiConfig struct {
	*api.ApiConfig
}

func (api *ApiConfig) DeleteLike(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := DeleteLikePayload{}
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

	like, err := api.DB.DeleteLike(r.Context(), database.DeleteLikeParams{
		UserID: userId,
		PostID: postId,
	})
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error deleting like: %v", err))
		return
	}

	responses.RespondWithJSON(w, 203, DeleteLikeResponse{
		LikeDeleted: likeshared.LikeDatabaseToLike(like),
	})
}