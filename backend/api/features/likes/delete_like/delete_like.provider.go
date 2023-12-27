package deletelike

import "twitter_clone/api"

func DeleteLikeProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}