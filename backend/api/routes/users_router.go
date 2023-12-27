package routes

import (
	"twitter_clone/api"
	createuser "twitter_clone/api/features/users/create_user"
	getusers "twitter_clone/api/features/users/get_users"
	loginuser "twitter_clone/api/features/users/login_user"

	"github.com/go-chi/chi"
)

func handleUserRoutes(api *api.ApiConfig, router *chi.Mux) {
	getUsersUsecase := getusers.GetUsersProvider(api)
	createUserUsecase := createuser.CreateUserProvider(api)
	loginUserUsecase := loginuser.LoginUserProvider(api)
	
	router.Get("/users", getUsersUsecase.GetUsers)
	router.Post("/users", createUserUsecase.CreateUser)
	router.Post("/users/login", loginUserUsecase.LogIn)
}