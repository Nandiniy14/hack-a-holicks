docker stop mongodb
docker rm mongodb
docker pull mongo:latest
docker run -d -p 3003-3005:27017-27019 --name mongodb mongo:latest
docker stop mongodb