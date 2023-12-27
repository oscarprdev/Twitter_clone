package responses

import (
	"log"
	"net/http"
)

func RespondWithError(w http.ResponseWriter, codeStatus int, msg string) {
	if codeStatus > 499 {
		log.Println("Responding with 5xx", msg)
	}

	type errResponse struct {
		Error string `json:"Error"`
	}

	RespondWithJSON(w, codeStatus, errResponse{
		Error: msg,
	})
}