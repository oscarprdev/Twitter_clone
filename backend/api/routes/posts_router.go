package routes

import (
	"twitter_clone/api"
	createpost "twitter_clone/api/features/posts/create_post"
	getposts "twitter_clone/api/features/posts/get_posts"

	"github.com/go-chi/chi"
)

func handlePostsRoutes(api *api.ApiConfig, router *chi.Mux) {
	getPostsUsecase := getposts.GetPostsProvider(api)
	createPostUsecase := createpost.CreatePostProvider(api)

	router.Get("/posts", getPostsUsecase.GetPosts)
	router.Post("/posts", createPostUsecase.CreatePost)

	router.Get("/posts/followers/{id}", getPostsUsecase.GetPostsByParam)
	router.Get("/posts/user/{id}", getPostsUsecase.GetPostsByParam)
}