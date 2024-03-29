// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.24.0
// source: posts.sql

package database

import (
	"context"
	"time"

	"github.com/google/uuid"
)

const createPost = `-- name: CreatePost :one
INSERT INTO posts (id, created_at, updated_at, user_id, post, image) 
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING id, created_at, updated_at, user_id, post, image
`

type CreatePostParams struct {
	ID        uuid.UUID
	CreatedAt time.Time
	UpdatedAt time.Time
	UserID    uuid.UUID
	Post      string
	Image     string
}

func (q *Queries) CreatePost(ctx context.Context, arg CreatePostParams) (Post, error) {
	row := q.db.QueryRowContext(ctx, createPost,
		arg.ID,
		arg.CreatedAt,
		arg.UpdatedAt,
		arg.UserID,
		arg.Post,
		arg.Image,
	)
	var i Post
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.UserID,
		&i.Post,
		&i.Image,
	)
	return i, err
}

const getAllPosts = `-- name: GetAllPosts :many
SELECT id, created_at, updated_at, user_id, post, image FROM posts 
ORDER BY updated_at DESC
LIMIT $1 OFFSET $2
`

type GetAllPostsParams struct {
	Limit  int32
	Offset int32
}

func (q *Queries) GetAllPosts(ctx context.Context, arg GetAllPostsParams) ([]Post, error) {
	rows, err := q.db.QueryContext(ctx, getAllPosts, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Post
	for rows.Next() {
		var i Post
		if err := rows.Scan(
			&i.ID,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.UserID,
			&i.Post,
			&i.Image,
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

const getPostByPostId = `-- name: GetPostByPostId :one
SELECT id, created_at, updated_at, user_id, post, image FROM posts WHERE id = $1
`

func (q *Queries) GetPostByPostId(ctx context.Context, id uuid.UUID) (Post, error) {
	row := q.db.QueryRowContext(ctx, getPostByPostId, id)
	var i Post
	err := row.Scan(
		&i.ID,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.UserID,
		&i.Post,
		&i.Image,
	)
	return i, err
}

const getPostsByFollowers = `-- name: GetPostsByFollowers :many
SELECT posts.id, posts.created_at, posts.updated_at, posts.user_id, posts.post, posts.image
FROM posts
LEFT JOIN followers ON posts.user_id = followers.follow_to
WHERE followers.user_id = $1 OR posts.user_id = $1
ORDER BY posts.updated_at DESC
`

func (q *Queries) GetPostsByFollowers(ctx context.Context, userID uuid.UUID) ([]Post, error) {
	rows, err := q.db.QueryContext(ctx, getPostsByFollowers, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Post
	for rows.Next() {
		var i Post
		if err := rows.Scan(
			&i.ID,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.UserID,
			&i.Post,
			&i.Image,
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

const getPostsByUser = `-- name: GetPostsByUser :many
SELECT id, created_at, updated_at, user_id, post, image FROM posts WHERE user_id = $1 
ORDER BY updated_at DESC
`

func (q *Queries) GetPostsByUser(ctx context.Context, userID uuid.UUID) ([]Post, error) {
	rows, err := q.db.QueryContext(ctx, getPostsByUser, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Post
	for rows.Next() {
		var i Post
		if err := rows.Scan(
			&i.ID,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.UserID,
			&i.Post,
			&i.Image,
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

const getTotalPostsCount = `-- name: GetTotalPostsCount :one
SELECT COUNT(id) AS post_count
FROM posts
`

func (q *Queries) GetTotalPostsCount(ctx context.Context) (int64, error) {
	row := q.db.QueryRowContext(ctx, getTotalPostsCount)
	var post_count int64
	err := row.Scan(&post_count)
	return post_count, err
}

const getTotalPostsCountByUser = `-- name: GetTotalPostsCountByUser :one
SELECT COUNT(id) AS post_count
FROM posts 
WHERE user_id = $1
`

func (q *Queries) GetTotalPostsCountByUser(ctx context.Context, userID uuid.UUID) (int64, error) {
	row := q.db.QueryRowContext(ctx, getTotalPostsCountByUser, userID)
	var post_count int64
	err := row.Scan(&post_count)
	return post_count, err
}
