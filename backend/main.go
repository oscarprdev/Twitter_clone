package main

import (
	"log"
	"net/http"
	"twitter_clone/api/routes"
	"twitter_clone/constants"
	"twitter_clone/db"
)

func main() {
	host, dbUrl := constants.Env()

	dbConnection := db.Connection(dbUrl)

	router := routes.Router(dbConnection)

	srv := &http.Server{
		Handler: router,
		Addr: host,
	}
	log.Printf("Host starting on: %v", host)
	srv.ListenAndServe()
}