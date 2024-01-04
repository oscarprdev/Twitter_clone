package routes

import (
	"twitter_clone/api"
	createlike "twitter_clone/api/features/likes/create_like"
	deletelike "twitter_clone/api/features/likes/delete_like"
	getlikesbypost "twitter_clone/api/features/likes/get_likes_by_post"

	"github.com/go-chi/chi"
)

func handleLikesRoutes(api *api.ApiConfig, router *chi.Mux) {
	createLikeUsecase := createlike.CreateLikeProvider(api)
	deleteLikeUsecase := deletelike.DeleteLikeProvider(api)
	getLikesByPostUsecase := getlikesbypost.GetLikesByPostProvider(api)

	router.Post("/likes", createLikeUsecase.CreateLike)
	router.Delete("/likes", deleteLikeUsecase.DeleteLike)
	router.Get("/likes/post/{id}", getLikesByPostUsecase.GetLikesByPost)
}