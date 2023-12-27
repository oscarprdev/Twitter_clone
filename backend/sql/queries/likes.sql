-- name: GetPostLikes :one
SELECT post_id, COUNT(*) AS likes_count
FROM likes
WHERE post_id = $1
GROUP BY post_id;

-- name: GetUsersFromLikes :many
SELECT users.username, users.id AS user_like
FROM likes
JOIN users ON likes.user_id = users.id
WHERE likes.post_id = $1;

-- name: CreateLike :one
INSERT INTO likes (id, created_at, updated_at, user_id, post_id) 
VALUES ($1, $2, $3, $4, $5)
RETURNING *;

-- name: DeleteLike :one
DELETE FROM likes WHERE post_id = $1
RETURNING *;