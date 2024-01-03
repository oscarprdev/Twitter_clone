package routes

import (
	"twitter_clone/api"
	createfollower "twitter_clone/api/features/followers/create_follower"
	deletefollower "twitter_clone/api/features/followers/delete_follower"
	getfollowers "twitter_clone/api/features/followers/get_followers"

	"github.com/go-chi/chi"
)

func handleFollowersRoutes(api *api.ApiConfig, router *chi.Mux) {
	createFollowerUsecase := createfollower.CreateFollowerProvider(api)
	deleteFollowerUsecase := deletefollower.DeleteFollowerProvider(api)
	getFollowerUsecase := getfollowers.GetFollowerProvider(api)

	router.Get("/followers/{id}", getFollowerUsecase.GetFollowers)
	router.Get("/unfollowers/{id}", getFollowerUsecase.GetUnfollowers)
	router.Post("/follower", createFollowerUsecase.CreateFollower)
	router.Delete("/follower", deleteFollowerUsecase.DeleteFollower)
}