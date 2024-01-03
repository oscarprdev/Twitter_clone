package deletefollower

import "twitter_clone/api"

func DeleteFollowerProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}