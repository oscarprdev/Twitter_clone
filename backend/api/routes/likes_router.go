package routes

import (
	"twitter_clone/api"
	getlikesbypost "twitter_clone/api/features/likes/get_likes_by_post"
	togglelike "twitter_clone/api/features/likes/toggle_like"

	"github.com/go-chi/chi"
)

func handleLikesRoutes(api *api.ApiConfig, router *chi.Mux) {
	toggleLikeUsecase := togglelike.ToggleLikeProvider(api)
	getLikesByPostUsecase := getlikesbypost.GetLikesByPostProvider(api)

	router.Post("/likes", toggleLikeUsecase.ToggleLike)
	router.Get("/likes/post/{id}", getLikesByPostUsecase.GetLikesByPost)
}