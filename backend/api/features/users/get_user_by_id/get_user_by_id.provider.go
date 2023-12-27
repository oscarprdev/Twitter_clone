package getuserbyid

import "twitter_clone/api"

func GetUserByIdProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}