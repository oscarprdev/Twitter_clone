package loginuser

import (
	"encoding/json"
	"fmt"
	"net/http"
	"twitter_clone/api"
	usershared "twitter_clone/api/features/users/shared"
	"twitter_clone/api/responses"

	"golang.org/x/crypto/bcrypt"
)

type ApiConfig struct {
    *api.ApiConfig
}

func (api *ApiConfig) LogIn(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := LoginPayload{}

	err := decoder.Decode(&params)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing JSON: %v", err))
		return
	}

	user, err := api.DB.GetUserByEmail(r.Context(), params.Email)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Email or password not valid: %v", err))
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(params.Password))
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Email or password not valid: %v", err))
		return
	}

	// Create JWT
	token, err := usershared.GenerateUserJWT(user.ID)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error generating JWT: %v", err))
		return
	}

	responses.RespondWithJSON(w, 201, LoginResponse{
		UserLogged: usershared.DatabaseUserToUser(user),
		JWT: token,
	})
}