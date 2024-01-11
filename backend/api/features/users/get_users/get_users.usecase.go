package getusers

import (
	"database/sql"
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

func (api *ApiConfig) GetUsersFromLikes(w http.ResponseWriter, r *http.Request) {
	postIdStr := chi.URLParam(r, "postId")
	postId, err := uuid.Parse(postIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing post id: %v", err))
		return
	}

	dbUsers, err := api.DB.GetUsersFromLikes(r.Context(), postId)
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

func (api *ApiConfig) GetUsersByUsernameOrName(w http.ResponseWriter, r *http.Request) {
	name := chi.URLParam(r, "name")
	nameValue := sql.NullString{
		String: name,
		Valid:  true, 
	}

	dbUsers, err := api.DB.GetUsersByUsernameOrName(r.Context(), nameValue)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving users by name or username: %v", err))
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