package routes

import (
	"twitter_clone/api"
	createlike "twitter_clone/api/features/likes/create_like"

	"github.com/go-chi/chi"
)

func handleLikesRoutes(api *api.ApiConfig, router *chi.Mux) {
	createLikeUsecase := createlike.CreateLikeProvider(api)

	router.Post("/likes", createLikeUsecase.CreateLike)
}