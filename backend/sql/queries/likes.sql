-- name: GetUserLikes :one
SELECT like_to, COUNT(*) AS likes_count
FROM likes
WHERE like_to = $1
GROUP BY like_to;

-- name: GetUsersFromLikes :many
SELECT users.username, users.id AS user_like
FROM likes
JOIN users ON likes.user_id = users.id
WHERE likes.like_to = $1;

-- name: CreateLike :one
INSERT INTO likes (id, created_at, updated_at, user_id, like_to) 
VALUES ($1, $2, $3, $4, $5)
RETURNING *;

-- name: DeleteLike :one
DELETE FROM likes WHERE user_id = $1
RETURNING *;