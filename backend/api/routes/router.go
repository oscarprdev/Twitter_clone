package routes

import (
	"database/sql"
	"twitter_clone/api"
	"twitter_clone/internal/database"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
)

func Router(conn *sql.DB) *chi.Mux {
	router := chi.NewRouter()
	router.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://*"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders: []string{"Content-Type", "Authorization"},
		MaxAge: 		300,
	}))
	
	api := &api.ApiConfig{
		DB: database.New(conn),
	}

	handleUserRoutes(api, router)
	handlePostsRoutes(api, router)
	handleLikesRoutes(api, router)
	handleFollowersRoutes(api, router)

	return router
}