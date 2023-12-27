package getusers

import (
	"fmt"
	"net/http"
	"twitter_clone/api"
	usershared "twitter_clone/api/features/users/shared"
	"twitter_clone/api/responses"
)

type ApiConfig struct {
    *api.ApiConfig
}

func (api *ApiConfig) GetUsers(w http.ResponseWriter, r *http.Request) {
	dbUsers, err := api.DB.GetUsers(r.Context())
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving users: %v", err))
		return
	}

	users := []usershared.User{}
	for _, user := range dbUsers {
		users = append(users, usershared.DatabaseUserToUser(user))
	}

	responses.RespondWithJSON(w, 200, GetUsersResponse{
		Users: users,
	})
}