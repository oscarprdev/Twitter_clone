-- name: GetLikesByPost :one
SELECT
    posts.id AS post_id,
    posts.post,  
    posts.user_id,
    COALESCE(COUNT(likes.id), 0)::INT AS likes_count
FROM
    posts
LEFT JOIN
    likes ON posts.id = likes.post_id
WHERE
    posts.id = $1
GROUP BY
    posts.id, posts.post, posts.user_id;

-- name: CreateLike :one
INSERT INTO likes (id, created_at, updated_at, user_id, post_id) 
VALUES ($1, $2, $3, $4, $5)
RETURNING *;

-- name: DeleteLike :one
DELETE FROM likes WHERE post_id = $1 AND user_id = $2
RETURNING *;