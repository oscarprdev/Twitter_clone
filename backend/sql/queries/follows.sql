-- name: GetFollowersByUser :many 
SELECT users.*
FROM users
JOIN followers ON users.id = followers.user_id
WHERE followers.follow_to = $1;

-- name: GetFollowingByUser :many 
SELECT users.*
FROM users
JOIN followers ON users.id = followers.follow_to
WHERE followers.user_id = $1;

-- name: GetNoFollowersByUser :many
SELECT users.*
FROM users
WHERE users.id NOT IN (
    SELECT follow_to
    FROM followers
    WHERE user_id = $1
)
AND users.id <> $1;

-- name: CreateFollower :one 
INSERT INTO followers (id, created_at, updated_at, user_id, follow_to) 
VALUES ($1, $2, $3, $4, $5)
RETURNING *;

-- name: DeleteFollower :one
DELETE FROM followers WHERE user_id = $1 AND follow_to = $2
RETURNING *;