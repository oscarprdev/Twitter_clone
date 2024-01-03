package getlikesbypost

import (
	"fmt"
	"net/http"
	"twitter_clone/api"
	"twitter_clone/api/responses"

	"github.com/go-chi/chi"
	"github.com/google/uuid"
)

type ApiConfig struct {
	*api.ApiConfig
}

func (api *ApiConfig) GetLikesByPost(w http.ResponseWriter, r *http.Request) {
	postIdStr := chi.URLParam(r, "id")
	postId, err := uuid.Parse(postIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Not valid post id: %v\n", err))
		return
	}

	getLikesResponse, err := api.DB.GetLikesByPost(r.Context(), postId)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error counting likes: %v\n", err))
		return
	}

	responses.RespondWithJSON(w, 200, GetLikesByPostResponse{
		PostID: getLikesResponse.PostID,
		Post: getLikesResponse.Post,
		UserID: getLikesResponse.UserID,
		NumLikes: getLikesResponse.LikesCount,
	})
}