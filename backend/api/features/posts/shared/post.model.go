package postshared

import (
	"time"

	"github.com/google/uuid"
)

type Post struct {
	Id              uuid.UUID `json:"id"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
	UserId          uuid.UUID `json:"userId"`
	Post         	string 	  `json:"post"`
	Image           string    `json:"image"`
	Owner 			Owner	  `json:"owner"`
}

type Owner struct {
	Id uuid.UUID `json:"id"`
	Name string `json:"name"`
	Surname string `json:"surname"`
	Username string `json:"username"`
	ProfileImgUrl string `json:"profileImgUrl"`
	Email string `json:"email"`
}