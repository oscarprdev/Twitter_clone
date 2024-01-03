package createuser

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
	"twitter_clone/api"
	usershared "twitter_clone/api/features/users/shared"
	"twitter_clone/api/responses"
	"twitter_clone/internal/database"

	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

type ApiConfig struct {
    *api.ApiConfig
}

func (api *ApiConfig) CreateUser(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := CreateUserPayload{}
	err := decoder.Decode(&params)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing JSON: %v", err))
		return
	}

	// 	Hash password
	hash, err := bcrypt.GenerateFromPassword([]byte(params.Password), 10)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error hashing password: %v", err))
		return
	}

	user, err := api.DB.CreateUser(r.Context(), database.CreateUserParams{
		ID: uuid.New(),
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
		Name: params.Name,
		Surname: params.Surname,
		Username: params.Username,
		Email: params.Email,
		Password: string(hash),
		ProfileImgUrl: params.ProfileImgUrl,
		ProfileBgImgUrl: params.ProfileBgImgUrl,
	})

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Could not create user: %v", err))
		return
	}

	responses.RespondWithJSON(w, 201, CreateUserResponse{
		UserCreated: usershared.DatabaseUserToUser(user),
	})
}