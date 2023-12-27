package routes

import (
	"twitter_clone/api"
	createlike "twitter_clone/api/features/likes/create_like"
	deletelike "twitter_clone/api/features/likes/delete_like"

	"github.com/go-chi/chi"
)

func handleLikesRoutes(api *api.ApiConfig, router *chi.Mux) {
	createLikeUsecase := createlike.CreateLikeProvider(api)
	deleteLikeUsecase := deletelike.DeleteLikeProvider(api)

	router.Post("/likes", createLikeUsecase.CreateLike)
	router.Delete("/likes/{id}", deleteLikeUsecase.DeleteLike)
}