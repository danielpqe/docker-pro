# docker-pro

## Link to review: https://github.com/cursosdevfull/Docker_Kubernetes_Group07

# Commands

## Clase 1

## `docker --version`

Muestra la versión de Docker instalada en tu sistema.

```bash
docker --version
```

Docker ecosystem
![alt text](./images/image-1.png)
Docker is an ecosystem that creates and execute containers

An image is a unique file that contains all the programs, libraries, dependencies and configuration needed to install or execute a group of programs.

Virtual machine need always resources use or not, containers use the resources as they need

This is how an image an container works
![alt text](./images/image.png)

### List images:

```
docker images
docker image ls
```

## Delete an image

```bash
docker rmi <image name>
```

## Download image

```bash
docker pull <image name>:<tag or version>
```

### Filter a list: `docker images | grep kafka`

### Inspect a image: `docker image inspect hello-world`

# Contenedores

## Create container without execute it

```bash
docker create --name <container name> <image name>:<tag or version>
```

## List container which are running

```bash
docker ps
docker ps | grep sonar
```

## List all containers

```bash
docker ps -a
```

## Start a container

```bash
docker start <container name>
```

## Stop a container

```bash
docker stop <container name>
```

## Download image, create container and execute

```bash
docker run --name <container name> <image name>:<tag/version>
```

## Download image, create container and execute -d (dettached)

```bash
docker run -d --name <container name> <image name>:<tag/version>
```

## Delete container stopeed

```bash
docker rm <container name or identifier>
```

## Stop and delete container running

```bash
docker stop <container name or identifier>
docker rm <container name or identifier>

docker rm -f <container name or identifier>
```

## Mapping ports

```bash
docker run -d --name <container name> -p <port host>:<port container> <image name>:<tag/version>

docker run -d --name <container name> -p <port host>:<port container> -p <port host>:<port container>... <image name>:<tag/version>

docker run -d --name nginx -p 3500:80 nginx:stable-alpine3.19-perl
```

## Clase 2
