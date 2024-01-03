package routes

import (
	"twitter_clone/api"
	createfollower "twitter_clone/api/features/followers/create_follower"
	deletefollower "twitter_clone/api/features/followers/delete_follower"

	"github.com/go-chi/chi"
)

func handleFollowersRoutes(api *api.ApiConfig, router *chi.Mux) {
	createFollowerUsecase := createfollower.CreateFollowerProvider(api)
	deleteFollowerUsecase := deletefollower.DeleteFollowerProvider(api)

	router.Post("/follower", createFollowerUsecase.CreateFollower)
	router.Delete("/follower", deleteFollowerUsecase.DeleteFollower)
}