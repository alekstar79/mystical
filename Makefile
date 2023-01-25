build:
	docker build -t alekstar79/mystical .
push:
	docker push alekstar79/mystical
pull:
	docker pull alekstar79/mystical
run:
	docker run -d -p 80:80 -e DOCKER_ENV=true --rm --name mystical alekstar79/mystical
stop:
	docker stop mystical
