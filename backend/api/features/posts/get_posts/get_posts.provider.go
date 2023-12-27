package getposts

import "twitter_clone/api"

func GetPostsProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}