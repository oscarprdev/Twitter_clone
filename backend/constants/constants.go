package constants

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

func Env() (string, string ){
	godotenv.Load()
	
	host := os.Getenv("HOST")
	if host == "" {
		log.Fatal("HOST is not found")
	}

	dbURL := os.Getenv("DB_URL")
	if dbURL == "" {
		log.Fatal("DB_URL is not found")
	}

	return host, dbURL
}