-- +goose Up
CREATE TABLE followers (
    id UUID PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    user_id UUID NOT NULL,
    follow_to UUID NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (follow_to) REFERENCES users(id) ON DELETE CASCADE,
    UNIQUE(user_id, follow_to)
);

-- +goose Down
DROP TABLE followers;