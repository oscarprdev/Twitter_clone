package usershared

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