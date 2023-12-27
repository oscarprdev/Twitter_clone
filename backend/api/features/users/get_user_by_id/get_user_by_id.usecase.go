package getuserbyid

import (
	"fmt"
	"net/http"
	"twitter_clone/api"
	usershared "twitter_clone/api/features/users/shared"
	"twitter_clone/api/responses"

	"github.com/go-chi/chi"
	"github.com/google/uuid"
)

type ApiConfig struct {
    *api.ApiConfig
}

func (api *ApiConfig) GetUserById(w http.ResponseWriter, r *http.Request) {
	userIdStr := chi.URLParam(r, "id")
	userId, err := uuid.Parse(userIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Id not valid: %v", err))
		return
	}

	user, err := api.DB.GetUserById(r.Context(), userId)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("User not found: %v", err))
		return
	}

	responses.RespondWithJSON(w, 200, GetUserByIdResponse{
		User: usershared.DatabaseUserToUser(user),
	})
}