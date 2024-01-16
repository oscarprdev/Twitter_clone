package getuser

import (
	"fmt"
	"net/http"
	"net/mail"
	"os"
	"twitter_clone/api"
	usershared "twitter_clone/api/features/users/shared"
	"twitter_clone/api/responses"

	"github.com/go-chi/chi"
	"github.com/golang-jwt/jwt/v4"
	"github.com/google/uuid"
)

type ApiConfig struct {
    *api.ApiConfig
}

func (api *ApiConfig) GetUserById(w http.ResponseWriter, r *http.Request) {
	userIdStr := chi.URLParam(r, "id")
	userId, err := uuid.Parse(userIdStr)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Id not valid: %v", err))
		return
	}

	user, err := api.DB.GetUserById(r.Context(), userId)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("User not found: %v", err))
		return
	}

	responses.RespondWithJSON(w, 200, GetUserResponse{
		User: usershared.DatabaseUserToUser(user),
	})
}

func (api *ApiConfig) GetUserByEmail(w http.ResponseWriter, r *http.Request) {
	userEmail := chi.URLParam(r, "email")

	_, err := mail.ParseAddress(userEmail)
    if err != nil {
        responses.RespondWithError(w, 400, fmt.Sprintf("Invalid email address: %v", err))
        return
    }
	
	user, err := api.DB.GetUserByEmail(r.Context(), userEmail)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("User not found: %v", err))
		return
	}

	responses.RespondWithJSON(w, 200, GetUserResponse{
		User: usershared.DatabaseUserToUser(user),
	})
}

func (api *ApiConfig) GetUserByUsername(w http.ResponseWriter, r *http.Request) {
	userName := chi.URLParam(r, "username")
	user, err := api.DB.GetUserByUsername(r.Context(), userName)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("User not found: %v", err))
		return
	}

	responses.RespondWithJSON(w, 200, GetUserResponse{
		User: usershared.DatabaseUserToUser(user),
	})
}

func (api *ApiConfig) GetUserByAuth(w http.ResponseWriter, r *http.Request) {
	tokenString := r.Header.Get("Authorization")
	if tokenString == "" {
		responses.RespondWithError(w, 401, "Unauthorized: Missing Authorization header")
		return
	}

	secret := os.Getenv("SECRET")
	if secret == "" {
		responses.RespondWithError(w, 401, "Impossible to read env variable")
		return
	}

	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return []byte(secret), nil
	})

	if err != nil {
		responses.RespondWithError(w, 401, fmt.Sprintf("Unauthorized: %v", err))
		return
	}

	if !token.Valid {
		responses.RespondWithError(w, 401, "Unauthorized: Invalid token")
		return
	}

	claims, ok := token.Claims.(jwt.MapClaims)
	if !ok {
		responses.RespondWithError(w, 401, "Unauthorized: Unable to parse token claims")
		return
	}

	userIdStr, ok := claims["userId"].(string)
	if !ok {
		responses.RespondWithError(w, 401, "Unauthorized: Missing userId in token claims")
		return
	}

	userId, err := uuid.Parse(userIdStr)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Id not valid: %v", err))
		return
	}

	user, err := api.DB.GetUserById(r.Context(), userId)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("User not found: %v", err))
		return
	}

	responses.RespondWithJSON(w, 200, GetUserResponse{
		User: usershared.DatabaseUserToUser(user),
	})
}