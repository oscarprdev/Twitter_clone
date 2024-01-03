package followershared

import (
	"time"

	"github.com/google/uuid"
)

type Follower struct {
	Id              uuid.UUID `json:"id"`
	CreatedAt       time.Time `json:"created_at"`
	UpdatedAt       time.Time `json:"updated_at"`
	UserId          uuid.UUID `json:"userId"`
	FollowTo        uuid.UUID `json:"followTo"`
}
