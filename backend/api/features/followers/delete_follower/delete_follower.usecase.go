package deletefollower

import (
	"encoding/json"
	"fmt"
	"net/http"
	"twitter_clone/api"
	"twitter_clone/api/responses"
	"twitter_clone/internal/database"

	"github.com/google/uuid"
)

type ApiConfig struct {
	*api.ApiConfig
}

func (api *ApiConfig) DeleteFollower(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := DeleteFollowerPayload{}

	err := decoder.Decode(&params)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Invalid payload: %v", err))
		return
	}

	userId, err := uuid.Parse(params.UserId)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("User id not uuid valid: %v", err))
		return
	}

	unfollowTo, err := uuid.Parse(params.UnfollowTo)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("unfollowTo id not uuid valid: %v", err))
		return
	}

	follower, err := api.DB.DeleteFollower(r.Context(), database.DeleteFollowerParams{
		UserID: userId,
		FollowTo: unfollowTo,
	})

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error deleting user from DB: %v", err))
		return
	}

	responses.RespondWithJSON(w, 200, DeleteFollowerResponse{
		UserId: follower.UserID,
		UnfollowTo: follower.FollowTo,
		Message: "User successfully deleted",
	})

	
}