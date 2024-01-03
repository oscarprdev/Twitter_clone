package updateuser

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
	"twitter_clone/api"
	usershared "twitter_clone/api/features/users/shared"
	"twitter_clone/api/responses"
	"twitter_clone/internal/database"

	"github.com/go-chi/chi"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

type ApiConfig struct {
	*api.ApiConfig
}

func (api *ApiConfig) UpdateUser(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := UpdateUserPayload{}
	err := decoder.Decode(&params)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing JSON: %v", err))
		return
	}

	userIdStr := chi.URLParam(r, "id")
	userId, err := uuid.Parse(userIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Id not valid: %v", err))
		return
	}

	if params.Password != "" {
		newPassword, err := bcrypt.GenerateFromPassword([]byte(params.Password), 10)
		if err != nil {
			responses.RespondWithError(w, 400, fmt.Sprintf("Error hashing password: %v", err))
			return
		}

		params.Password = string(newPassword)
	} else {
		user, err := api.DB.GetUserById(r.Context(), userId)
		if err != nil {
			responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving user by its id: %v", err))
			return
		}

		params.Password = user.Password
	}
	
	user, err := api.DB.UpdateUser(r.Context(), database.UpdateUserParams{
		Name: params.Name,
		Surname: params.Surname,
		Password: params.Password,
		ProfileImgUrl: params.ProfileImgUrl,
		ProfileBgImgUrl: params.ProfileBgImgUrl,
		ID: userId,
		UpdatedAt: time.Now().UTC(),
	})

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error updating user: %v", err))
		return
	}

	responses.RespondWithJSON(w, 201, UpdateUserResponse{
		User: usershared.DatabaseUserToUser(user),
	})
}