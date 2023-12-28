package createfollower

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
)

type ApiConfig struct {
	*api.ApiConfig
}

func (api *ApiConfig) CreateFollower(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := CreateFollowerPayload{}

	err := decoder.Decode(&params)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Invalid payload: %v", err))
		return
	}

	userId, err := uuid.Parse(params.UserId)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Invalid userId param: %v", err))
		return
	}

	followToId, err := uuid.Parse(params.FollowTo)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Invalid followTo param: %v", err))
		return
	}

	follow, err := api.DB.CreateFollower(r.Context(), database.CreateFollowerParams{
		ID: uuid.New(),
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
		UserID: userId,
		FollowTo: followToId,
	})
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error creating follow: %v", err))
		return
	}

	user, err := api.DB.GetUserById(r.Context(), follow.UserID)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving user by userId param: %v", err))
		return
	}

	followTo, err := api.DB.GetUserById(r.Context(), follow.FollowTo)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving user by followTo param: %v", err))
		return
	}

	responses.RespondWithJSON(w, 201, CreateFollowerResponse{
		User: usershared.DatabaseUserToUser(user),
		FollowTo: usershared.DatabaseUserToUser(followTo),
	})
}
