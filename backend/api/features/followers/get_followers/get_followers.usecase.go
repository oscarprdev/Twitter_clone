package getfollowers

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

func (api *ApiConfig) GetFollowers(w http.ResponseWriter, r *http.Request) {
	userIdStr := chi.URLParam(r, "id")
	userId, err := uuid.Parse(userIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing post id: %v", err))
		return
	}

	followersDB, err := api.DB.GetFollowersByUser(r.Context(), userId)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving followers: %v", err))
		return
	}

	followers := []usershared.User{}
	for _, user := range followersDB {
		followers = append(followers, usershared.DatabaseUserToUser(user))
	}

	responses.RespondWithJSON(w, 200, GetFollowersResponse{
		Followers: followers,
		Count: len(followers),
	})
}

func (api *ApiConfig) GetUnfollowers(w http.ResponseWriter, r *http.Request) {
	userIdStr := chi.URLParam(r, "id")
	userId, err := uuid.Parse(userIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing post id: %v", err))
		return
	}

	unfollowersDB, err := api.DB.GetNoFollowersByUser(r.Context(), userId)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving unfollowers: %v", err))
		return
	}

	unfollowers := []usershared.User{}
	for _, user := range unfollowersDB {
		unfollowers = append(unfollowers, usershared.DatabaseUserToUser(user))
	}

	responses.RespondWithJSON(w, 200, GetUnfollowersResponse{
		Unfollowers: unfollowers,
		Count: len(unfollowers),
	})
}

func (api *ApiConfig) GetFollowings(w http.ResponseWriter, r *http.Request) {
	userIdStr := chi.URLParam(r, "id")
	userId, err := uuid.Parse(userIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing post id: %v", err))
		return
	}

	followingDB, err := api.DB.GetFollowingByUser(r.Context(), userId)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving followings: %v", err))
		return
	}

	following := []usershared.User{}
	for _, user := range followingDB {
		following = append(following, usershared.DatabaseUserToUser(user))
	}

	responses.RespondWithJSON(w, 200, GetFollowingResponse{
		Following: following,
		Count: len(following),
	})
}