package routes

import (
	"database/sql"
	"twitter_clone/handlers"
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
	api := handlers.ApiConfig{
		DB: database.New(conn),
	}

	router.Get("/users", api.CreateUser)

	return router
}