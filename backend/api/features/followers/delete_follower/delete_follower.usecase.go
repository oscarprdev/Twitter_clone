package deletefollower

import (
	"encoding/json"
	"fmt"
	"net/http"
	"twitter_clone/api"
	usershared "twitter_clone/api/features/users/shared"
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

	unfollowToId, err := uuid.Parse(params.UnfollowTo)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("unfollowTo id not uuid valid: %v", err))
		return
	}

	follower, err := api.DB.DeleteFollower(r.Context(), database.DeleteFollowerParams{
		UserID: userId,
		FollowTo: unfollowToId,
	})

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error deleting user from DB: %v", err))
		return
	}

	userDb, err := api.DB.GetUserById(r.Context(), follower.UserID)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving user by userId param: %v", err))
		return
	}

	unfollowToDb, err := api.DB.GetUserById(r.Context(), follower.FollowTo)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving user by followTo param: %v", err))
		return
	}

	responses.RespondWithJSON(w, 200, DeleteFollowerResponse{
		User: usershared.DatabaseUserToUser(userDb),
		UnfollowTo: usershared.DatabaseUserToUser(unfollowToDb),
	})
}