package getusers

import "twitter_clone/api"

func GetUsersProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}