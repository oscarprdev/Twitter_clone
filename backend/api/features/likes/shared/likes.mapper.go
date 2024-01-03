package likeshared

import "twitter_clone/internal/database"

func LikeDatabaseToLike(dbLike database.Like) Like {
	return Like{
		Id:        dbLike.ID,
		CreatedAt: dbLike.CreatedAt,
		UpdatedAt: dbLike.UpdatedAt,
		UserId:    dbLike.UserID,
		PostID:    dbLike.PostID,
	}
}
