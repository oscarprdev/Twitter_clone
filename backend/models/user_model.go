package models

import (
	"time"

	"github.com/google/uuid"
)

type User struct {
	Id              uuid.UUID `json:"id"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
	Name            string 	  `json:"name"`
	Surname         string 	  `json:"surname"`
	Username        string 	  `json:"username"`
	Email           string 	  `json:"email"`
	ProfileImgUrl   string    `json:"profileImgUrl"`
	ProfileBgImgUrl string    `json:"profileBgImgUrl"`
}

type UserResponse struct {
	Id              uuid.UUID `json:"id"`
	Name            string 	  `json:"name"`
	Surname         string 	  `json:"surname"`
	Username        string 	  `json:"username"`
	Email           string 	  `json:"email"`
}

type CreateUserPayload struct {
	Name            string 	  `json:"name"`
	Surname         string 	  `json:"surname"`
	Username        string 	  `json:"username"`
	Email           string 	  `json:"email"`
	Password        string 	  `json:"password"`
	ProfileImgUrl   string    `json:"profileImgUrl"`
	ProfileBgImgUrl string    `json:"profileBgImgUrl"`
}

type CreateUserResponse struct {
	UserCreated User   `json:"userCreated"`
}

type LoginPayload struct {
	Email           string 	  `json:"email"`
	Password        string 	  `json:"password"`
}

type LoginResponse struct {
	UserLogged User   `json:"userLogged"`
	JWT  string `json:"jwt"`
}