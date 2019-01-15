# learn_docker

Just a repo holding various docker container templates

## Getting started

### Commands

* To build a container
  > `docker build -t <your username>/<name of your container> .`

* To get all images
  > `docker images`

* To run your docker container
  > `docker run -p 49160:8080 -d <your username>/<name of your container>`

* Enter into a container
   > `docker exec it <container_id> /bin/bash`

* To test your container
  > `docker ps`