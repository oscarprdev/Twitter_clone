package getfollowers

import "twitter_clone/api"

func GetFollowerProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}