package togglelike

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
	"twitter_clone/api"
	"twitter_clone/api/responses"
	"twitter_clone/internal/database"

	"github.com/google/uuid"
)

type ApiConfig struct {
	*api.ApiConfig
}

func (api *ApiConfig) ToggleLike(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := ToggleLikePayload{}
	err := decoder.Decode(&params)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing JSON: %v", err))
		return
	}

	postId, err := uuid.Parse(params.PostId)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing PostId: %v", err))
		return
	}

	users, err := api.DB.GetUsersFromLikes(r.Context(), postId)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving users likes from post: %v", err))
		return
	}

	userId, err := uuid.Parse(params.UserId)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing UserId: %v", err))
		return
	}

	isUserAlreadyLikes := isUserAlreadyLikedPost(users, userId)

	if isUserAlreadyLikes {
		_, err := api.DB.DeleteLike(r.Context(), database.DeleteLikeParams{
			UserID: userId,
			PostID: postId,
		})
		if err != nil {
			responses.RespondWithError(w, 400, fmt.Sprintf("Error deleting like: %v", err))
			return
		}

		numLikes, err := api.DB.GetLikesByPost(r.Context(), postId)
		if err != nil {
			responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving num likes by post: %v", err))
			return
		}
	
		responses.RespondWithJSON(w, 203, ToggleLikeResponse{
			IsLikeDeleted: true,
			NumLikes: int(numLikes.LikesCount),
		})
	} else {
		_, err := api.DB.CreateLike(r.Context(), database.CreateLikeParams{
			ID: uuid.New(),
			CreatedAt: time.Now().UTC(),
			UpdatedAt: time.Now().UTC(),
			UserID: userId,
			PostID: postId,
		})

		if err != nil {
			responses.RespondWithError(w, 400, fmt.Sprintf("Error creating like: %v", err))
			return
		}

		numLikes, err := api.DB.GetLikesByPost(r.Context(), postId)
		if err != nil {
			responses.RespondWithError(w, 400, fmt.Sprintf("Error retrieving num likes by post: %v", err))
			return
		}
	
		responses.RespondWithJSON(w, 203, ToggleLikeResponse{
			IsLikeDeleted: false,
			NumLikes: int(numLikes.LikesCount),
		})
	}
}

func isUserAlreadyLikedPost(users []database.User, userId uuid.UUID) bool {
	for _, user := range users {
		if user.ID == userId {
			return true
		}
	}

	return false
}
