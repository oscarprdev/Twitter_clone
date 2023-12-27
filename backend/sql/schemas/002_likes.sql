-- +goose Up
CREATE TABLE likes (
    id UUID PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    user_id UUID NOT NULL,
    like_to UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (like_to) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user_id, like_to)
);

-- +goose Down
DROP TABLE likes;