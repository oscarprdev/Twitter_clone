package getuser

import "twitter_clone/api"

func GetUserProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}