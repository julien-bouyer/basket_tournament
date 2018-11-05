# BASKET TOURNAMENT

## GESTION DES TOURNOIS

### Install

#### Node

Run : `npm install`

### Run

In debug mode :

`DEBUG=myapp:* npm start`

### Database

#### Docker

`docker run --name mariadb -e MYSQL_ROOT_PASSWORD=root -d mariadb:latest --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci`

`docker exec -it mariadb bash`
`docker exec -it mariadb mysql -u root -p`
