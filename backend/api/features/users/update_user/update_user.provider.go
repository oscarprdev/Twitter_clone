package updateuser

import "twitter_clone/api"

func UpdateUserProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}