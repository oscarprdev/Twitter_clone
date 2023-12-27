package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
	"twitter_clone/internal/database"
	"twitter_clone/mappers"
	"twitter_clone/models"
	"twitter_clone/responses"

	"github.com/google/uuid"
)

func (api *ApiConfig) CreateUser(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := models.CreateUserPayload{}
	err := decoder.Decode(&params)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing JSON: %v", err))
		return
	}

	user, err := api.DB.CreateUser(r.Context(), database.CreateUserParams{
		ID: uuid.New(),
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
		Name: params.Name,
		Username: params.Username,
		Email: params.Email,
		Password: params.Password,
		ProfileImgUrl: params.ProfileImgUrl,
		ProfileBgImgUrl: params.ProfileBgImgUrl,
	})

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Could not create user: %v", err))
		return
	}

	responses.RespondWithJSON(w, 201, mappers.DatabaseUserToUser(user))
}