package handlers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"
	"twitter_clone/internal/database"
	"twitter_clone/mappers"
	"twitter_clone/models"
	"twitter_clone/responses"

	"github.com/golang-jwt/jwt/v4"
	"github.com/google/uuid"
	"golang.org/x/crypto/bcrypt"
)

func (api *ApiConfig) CreateUser(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := models.CreateUserPayload{}
	err := decoder.Decode(&params)

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error parsing JSON: %v", err))
		return
	}

	// 	Hash password
	hash, err := bcrypt.GenerateFromPassword([]byte(params.Password), 10)
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Error hashing password: %v", err))
		return
	}

	user, err := api.DB.CreateUser(r.Context(), database.CreateUserParams{
		ID: uuid.New(),
		CreatedAt: time.Now().UTC(),
		UpdatedAt: time.Now().UTC(),
		Name: params.Name,
		Surname: params.Surname,
		Username: params.Username,
		Email: params.Email,
		Password: string(hash),
		ProfileImgUrl: params.ProfileImgUrl,
		ProfileBgImgUrl: params.ProfileBgImgUrl,
	})

	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("Could not create user: %v", err))
		return
	}

	responses.RespondWithJSON(w, 201, models.CreateUserResponse{
		UserCreated: mappers.DatabaseUserToUser(user),
	})
}

func (api *ApiConfig) LogIn(w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)
	params := models.LoginPayload{}

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
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
		"sub": user.ID,
		"exp": time.Now().Add(time.Hour * 24).Unix(),
	})

	tokenString, err := token.SignedString([]byte(os.Getenv("SECRET")))
	if err != nil {
		responses.RespondWithError(w, 400, fmt.Sprintf("JWT creation has failed: %v", err))
		return
	}

	responses.RespondWithJSON(w, 201, models.LoginResponse{
		UserLogged: mappers.DatabaseUserToUser(user),
		JWT: tokenString,
	})
}