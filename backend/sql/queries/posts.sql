-- name: GetAllPosts :many
SELECT * FROM posts 
ORDER BY updated_at DESC;

-- name: GetPostByPostId :one
SELECT * FROM posts WHERE id = $1;

-- name: GetPostsByFollowers :many
SELECT posts.*
FROM posts
LEFT JOIN followers ON posts.user_id = followers.follow_to
WHERE followers.user_id = $1 OR posts.user_id = $1
ORDER BY posts.updated_at DESC;

-- name: GetPostsByUser :many
SELECT * FROM posts WHERE user_id = $1 
ORDER BY updated_at DESC;

-- name: CreatePost :one 
INSERT INTO posts (id, created_at, updated_at, user_id, post) 
VALUES ($1, $2, $3, $4, $5)
RETURNING *;