package followershared

import "twitter_clone/internal/database"

func DatabaseFollowerToFollower(dbFollower database.Follower) Follower{
	return Follower{
		Id:				 dbFollower.ID,
		CreatedAt:		 dbFollower.CreatedAt,
		UpdatedAt:		 dbFollower.UpdatedAt,
		UserId:			 dbFollower.ID,
		FollowTo:		 dbFollower.ID,
	}
}