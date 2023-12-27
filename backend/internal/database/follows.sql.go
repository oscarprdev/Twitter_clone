// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.24.0
// source: follows.sql

package database

import (
	"context"
	"time"

	"github.com/google/uuid"
)

const createFollower = `-- name: CreateFollower :one
INSERT INTO followers (id, created_at, updated_at, user_id, follow_to) 
VALUES ($1, $2, $3, $4, $5)
RETURNING id, created_at, updated_at, user_id, follow_to
`

type CreateFollowerParams struct {
	ID        uuid.UUID
	CreatedAt time.Time
	UpdatedAt time.Time
	UserID    uuid.UUID
	FollowTo  uuid.UUID
}

func (q *Queries) CreateFollower(ctx context.Context, arg CreateFollowerParams) (Follower, error) {
	row := q.db.QueryRowContext(ctx, createFollower,
		arg.ID,
		arg.CreatedAt,
		arg.UpdatedAt,
		arg.UserID,
		arg.FollowTo,
	)
	var i Follower
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.UserID,
		&i.FollowTo,
	)
	return i, err
}

const deleteFollower = `-- name: DeleteFollower :one
DELETE FROM followers WHERE user_id = $1
RETURNING id, created_at, updated_at, user_id, follow_to
`

func (q *Queries) DeleteFollower(ctx context.Context, userID uuid.UUID) (Follower, error) {
	row := q.db.QueryRowContext(ctx, deleteFollower, userID)
	var i Follower
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.UserID,
		&i.FollowTo,
	)
	return i, err
}

const getFollowersByUser = `-- name: GetFollowersByUser :many
SELECT id, created_at, updated_at, user_id, follow_to FROM followers WHERE user_id = $1
`

func (q *Queries) GetFollowersByUser(ctx context.Context, userID uuid.UUID) ([]Follower, error) {
	rows, err := q.db.QueryContext(ctx, getFollowersByUser, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Follower
	for rows.Next() {
		var i Follower
		if err := rows.Scan(
			&i.ID,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.UserID,
			&i.FollowTo,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const getNoFollowersByUser = `-- name: GetNoFollowersByUser :many
SELECT users.id, users.created_at, users.updated_at, users.username, users.email, users.name, users.surname, users.password, users.profile_img_url, users.profile_bg_img_url
FROM users
LEFT JOIN followers ON users.id = followers.follow_to AND followers.user_id = $1
WHERE followers.user_id IS NULL
`

func (q *Queries) GetNoFollowersByUser(ctx context.Context, userID uuid.UUID) ([]User, error) {
	rows, err := q.db.QueryContext(ctx, getNoFollowersByUser, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []User
	for rows.Next() {
		var i User
		if err := rows.Scan(
			&i.ID,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.Username,
			&i.Email,
			&i.Name,
			&i.Surname,
			&i.Password,
			&i.ProfileImgUrl,
			&i.ProfileBgImgUrl,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}