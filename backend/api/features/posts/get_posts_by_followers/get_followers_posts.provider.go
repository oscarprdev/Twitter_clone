package getpostsbyfollowers

import "twitter_clone/api"

func GetPostsByFollowersProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}