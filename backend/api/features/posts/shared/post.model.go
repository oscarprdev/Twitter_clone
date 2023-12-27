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
}