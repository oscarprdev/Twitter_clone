package routes

import (
	"database/sql"
	"twitter_clone/api"
	createuser "twitter_clone/api/features/users/create_user"
	loginuser "twitter_clone/api/features/users/login_user"
	"twitter_clone/internal/database"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
)

func Router(conn *sql.DB) *chi.Mux {
	// Router
	router := chi.NewRouter()
	router.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://*"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
		MaxAge: 		300,
	}))

	// Api handlers
	api := &api.ApiConfig{
		DB: database.New(conn),
	}

	// Create user usecase
	createUserUsecase := createuser.CreateUserProvider(api)
	router.Post("/users", createUserUsecase.CreateUser)

	// Login usecase
	loginUserUsecase := loginuser.LoginUserProvider(api)
	router.Post("/login", loginUserUsecase.LogIn)

	return router
}