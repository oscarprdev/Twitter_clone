package getlikesbypost

import "twitter_clone/api"

func GetLikesByPostProvider(api *api.ApiConfig) *ApiConfig {
    return &ApiConfig{
        ApiConfig: api,
    }
}