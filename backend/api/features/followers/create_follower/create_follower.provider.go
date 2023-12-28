package createfollower

import "twitter_clone/api"

func CreateFollowerProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}