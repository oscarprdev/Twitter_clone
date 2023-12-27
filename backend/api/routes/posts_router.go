package routes

import (
	"twitter_clone/api"
	createpost "twitter_clone/api/features/posts/create_post"
	getposts "twitter_clone/api/features/posts/get_posts"
	getpostsbyfollowers "twitter_clone/api/features/posts/get_posts_by_followers"

	"github.com/go-chi/chi"
)

func handlePostsRoutes(api *api.ApiConfig, router *chi.Mux) {
	getPostsUsecase := getposts.GetPostsProvider(api)
	createPostUsecase := createpost.CreatePostProvider(api)
	getPostsByFollowersUsecase := getpostsbyfollowers.GetPostsByFollowersProvider(api)

	router.Get("/posts", getPostsUsecase.GetPosts)
	router.Post("/posts", createPostUsecase.CreatePost)

	router.Get("/posts/followers/{id}", getPostsByFollowersUsecase.GetPostsByFollowers)
}