package routes

import (
	"twitter_clone/api"
	createuser "twitter_clone/api/features/users/create_user"
	getuser "twitter_clone/api/features/users/get_user"
	getusers "twitter_clone/api/features/users/get_users"
	loginuser "twitter_clone/api/features/users/login_user"
	updateuser "twitter_clone/api/features/users/update_user"

	"github.com/go-chi/chi"
)

func handleUserRoutes(api *api.ApiConfig, router *chi.Mux) {
	
	getUsersUsecase := getusers.GetUsersProvider(api)
	createUserUsecase := createuser.CreateUserProvider(api)
	getUserUsecase := getuser.GetUserProvider(api)
	updateUserUsecase := updateuser.UpdateUserProvider(api)
	loginUserUsecase := loginuser.LoginUserProvider(api)

	router.Get("/users", getUsersUsecase.GetUsers)
	router.Post("/users", createUserUsecase.CreateUser)

	router.Get("/users/{id}", getUserUsecase.GetUserById)
	router.Put("/users/{id}", updateUserUsecase.UpdateUser)

	router.Get("/users/email/{email}", getUserUsecase.GetUserByEmail)
	router.Get("/users/auth", getUserUsecase.GetUserByAuth)
	
	router.Get("/users/username/{username}", getUserUsecase.GetUserByUsername)

	router.Get("/users/likes/{postId}", getUsersUsecase.GetUsersFromLikes)
	router.Get("/users/search/{name}", getUsersUsecase.GetUsersByUsernameOrName)

	router.Post("/users/login", loginUserUsecase.LogIn)
}