package main

import (
	"log"
	"net/http"
	"twitter_clone/constants"
	"twitter_clone/db"
	"twitter_clone/routes"
)

func main() {
	port, dbUrl := constants.Env()

	dbConnection := db.Connection(dbUrl)

	router := routes.Router(dbConnection)

	srv := &http.Server{
		Handler: router,
		Addr: ":" + port,
	}
	log.Printf("Port starting on: %v", port)
	srv.ListenAndServe()
}