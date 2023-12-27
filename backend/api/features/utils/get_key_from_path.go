package utils

import (
	"net/http"
	"strings"
)

func GetKeyFromPath(r *http.Request) string {
	path := r.URL.Path
	pathArr := strings.Split(path, "/")

	return pathArr[2]
}