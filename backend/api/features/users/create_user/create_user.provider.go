package createuser

import (
	"twitter_clone/api"
)

func CreateUserProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}