package db

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

func Connection(dbUrl string) *sql.DB {
	conn, err := sql.Open("postgres", dbUrl)
	if err != nil {
		log.Fatal("Can not connect to database", err)
	}

	return conn
}