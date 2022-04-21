docker-build-server:
	@docker build -f ./apps/server/Dockerfile -t server:latest .

docker-run-server:
	@docker run -p 80:8080 server

build-shared-packages:
	@yarn lib