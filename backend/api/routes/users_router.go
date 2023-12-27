package routes

import (
	"twitter_clone/api"
	createuser "twitter_clone/api/features/users/create_user"
	loginuser "twitter_clone/api/features/users/login_user"

	"github.com/go-chi/chi"
)

func handleUserRoutes(api *api.ApiConfig, router *chi.Mux) {
	createUserUsecase := createuser.CreateUserProvider(api)
	router.Post("/users", createUserUsecase.CreateUser)

	loginUserUsecase := loginuser.LoginUserProvider(api)
	router.Post("/users/login", loginUserUsecase.LogIn)
}