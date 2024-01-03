package createlike

import "twitter_clone/api"

func CreateLikeProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}