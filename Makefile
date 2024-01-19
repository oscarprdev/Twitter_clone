.PHONY: Twitter_clone

include ./backend/.env

install_app:
	@echo Install frontend and backend app
	cd frontend && npm install; \
	cd ../backend && go mod tidy

start_f:
	@echo Running frontend app
	cd frontend && npm run dev

start_b:
	@echo Running backend app
	cd backend && go run .

test_f:
	@echo Running unit tests on frontend
	cd frontend && npm run test:unit

test_e2e_f:
	@echo Running e2e tests on frontend
	cd frontend && npm run test:e2e

update_schemas:
	@echo "Update backend db schemas"
	cd backend/sql/schemas; \
	goose postgres '$(DB_URL)' up; \
	cd ../..; \
	sqlc generate
