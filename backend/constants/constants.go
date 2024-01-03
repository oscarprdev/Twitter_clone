package constants

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func Env() (string, string ){
	godotenv.Load()
	
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("PORT is not found")
	}

	dbURL := os.Getenv("DB_URL")
	if dbURL == "" {
		log.Fatal("DB_URL is not found")
	}

	return port, dbURL
}