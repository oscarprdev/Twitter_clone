package getuser

import (
	"fmt"
	"net/http"
	"net/mail"
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

	responses.RespondWithJSON(w, 200, GetUserResponse{
		User: usershared.DatabaseUserToUser(user),
	})
}

func (api *ApiConfig) GetUserByEmail(w http.ResponseWriter, r *http.Request) {
	userEmail := chi.URLParam(r, "email")

	_, err := mail.ParseAddress(userEmail)
    if err != nil {
        responses.RespondWithError(w, 400, fmt.Sprintf("Invalid email address: %v", err))
        return
    }
	
	user, err := api.DB.GetUserByEmail(r.Context(), userEmail)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("User not found: %v", err))
		return
	}

	responses.RespondWithJSON(w, 200, GetUserResponse{
		User: usershared.DatabaseUserToUser(user),
	})
}

func (api *ApiConfig) GetUserByUsername(w http.ResponseWriter, r *http.Request) {
	userName := chi.URLParam(r, "username")
	user, err := api.DB.GetUserByUsername(r.Context(), userName)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("User not found: %v", err))
		return
	}

	responses.RespondWithJSON(w, 200, GetUserResponse{
		User: usershared.DatabaseUserToUser(user),
	})
}