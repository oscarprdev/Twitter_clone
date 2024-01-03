-- name: GetFollowersByUser :many 
SELECT * FROM followers WHERE user_id = $1;

-- name: GetNoFollowersByUser :many
SELECT users.*
FROM users
LEFT JOIN followers ON users.id = followers.follow_to AND followers.user_id = $1
WHERE followers.user_id IS NULL;

-- name: CreateFollower :one 
INSERT INTO followers (id, created_at, updated_at, user_id, follow_to) 
VALUES ($1, $2, $3, $4, $5)
RETURNING *;

-- name: DeleteFollower :one
DELETE FROM followers WHERE user_id = $1 AND follow_to = $2
RETURNING *;