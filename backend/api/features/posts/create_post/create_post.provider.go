package createpost

import "twitter_clone/api"


func CreatePostProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}