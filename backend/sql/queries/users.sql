-- name: GetUsers :many
SELECT * FROM users;

-- name: CreateUser :one
INSERT INTO users (id, created_at, updated_at, username, email, name, surname, password, profile_img_url, profile_bg_img_url) 
VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
RETURNING *;

-- name: UpdateUser :one
UPDATE users
SET
    name = $1,
    surname = $2,
    password = $3,
    profile_img_url = $4,
    profile_bg_img_url = $5,
    updated_at = $6
WHERE
    id = $7
RETURNING *;

-- name: DeleteUser :one
DELETE FROM users WHERE id = $1
RETURNING *;

-- name: GetUserById :one
SELECT * FROM users WHERE id = $1;

-- name: GetUserByEmail :one
SELECT * FROM users WHERE email = $1;

-- name: GetUserByUsername :one
SELECT * FROM users WHERE username = $1;

-- name: GetUsersFromLikes :many
SELECT users.*
FROM likes
JOIN users ON likes.user_id = users.id
WHERE likes.post_id = $1;