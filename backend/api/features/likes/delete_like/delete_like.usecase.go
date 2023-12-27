package deletelike

import (
	"fmt"
	"net/http"
	"twitter_clone/api"
	likeshared "twitter_clone/api/features/likes/shared"
	"twitter_clone/api/responses"

	"github.com/go-chi/chi"
	"github.com/google/uuid"
)

type ApiConfig struct {
	*api.ApiConfig
}

func (api *ApiConfig) DeleteLike(w http.ResponseWriter, r *http.Request) {
	postIdStr := chi.URLParam(r, "id")
	postId, err := uuid.Parse(postIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Post not found: %v", err))
		return
	}

	like, err := api.DB.DeleteLike(r.Context(), postId)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error deleting like: %v", err))
		return
	}

	responses.RespondWithJSON(w, 203, DeleteLikeResponse{
		LikeDeleted: likeshared.LikeDatabaseToLike(like),
	})
}