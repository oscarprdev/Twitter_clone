package togglelike

import "twitter_clone/api"

func ToggleLikeProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}