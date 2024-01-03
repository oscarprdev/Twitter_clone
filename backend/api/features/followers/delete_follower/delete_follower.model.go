package deletefollower

import "github.com/google/uuid"

type DeleteFollowerPayload struct {
	UserId     string `json:"userId"`
	UnfollowTo string `json:"unfollowTo"`
}

type DeleteFollowerResponse struct {
	Message    string    `json:"message"` 
	UserId     uuid.UUID `json:"userId"`
	UnfollowTo uuid.UUID `json:"unfollowTo"`
}