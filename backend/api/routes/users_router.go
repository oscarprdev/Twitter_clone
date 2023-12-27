package routes

import (
	"twitter_clone/api"
	createuser "twitter_clone/api/features/users/create_user"
	getuserbyid "twitter_clone/api/features/users/get_user_by_id"
	getusers "twitter_clone/api/features/users/get_users"
	loginuser "twitter_clone/api/features/users/login_user"

	"github.com/go-chi/chi"
)

func handleUserRoutes(api *api.ApiConfig, router *chi.Mux) {
	getUsersUsecase := getusers.GetUsersProvider(api)
	createUserUsecase := createuser.CreateUserProvider(api)
	loginUserUsecase := loginuser.LoginUserProvider(api)
	getUserByIdUsecase := getuserbyid.GetUserByIdProvider(api)

	router.Get("/users", getUsersUsecase.GetUsers)
	router.Get("/users/{id}", getUserByIdUsecase.GetUserById)
	router.Post("/users", createUserUsecase.CreateUser)
	router.Post("/users/login", loginUserUsecase.LogIn)
}