package main

import (
	"log"
	"net/http"
	"twitter_clone/api/routes"
	"twitter_clone/constants"
	"twitter_clone/db"
)

func main() {
	port, dbUrl := constants.Env()

	dbConnection := db.Connection(dbUrl)

	router := routes.Router(dbConnection)

	srv := &http.Server{
		Handler: router,
		Addr: ":" + port,
	}
	log.Printf("Host starting on: %v", port)
	srv.ListenAndServe()
}