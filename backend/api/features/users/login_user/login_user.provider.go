package loginuser

import (
	"twitter_clone/api"
)

func LoginUserProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}