package likeshared

import (
	"time"

	"github.com/google/uuid"
)

type Like struct {
	Id              uuid.UUID `json:"id"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
	UserId          uuid.UUID `json:"userId"`
	PostID          uuid.UUID `json:"postId"`
}