# BASKET TOURNAMENT

## GESTION DES TOURNOIS

### Install

#### Node

Run : `npm install`

* Nodemon

Run : `npm install -g nodemon`

### Run

```
nodemon
npm run client
```

### Database

#### Docker

```
docker-compose build
docker-compose up -d
docker-compose down
docker exec -it bt-postgres psql -Ubaskettournament

# dump
docker run -i --name bt-postgres --rm postgres:12 pg_dump -U baskettournament baskettournament > dump.sql
docker exec -i bt-postgres psql -Ubaskettournament < dump.sql
```

#### Postgresql

* Connect to a database

```
baskettournament=# \c baskettournament
```

* Describe a table

```
baskettournament=# \d users
```

## Colors

bt-blue : 001454

bt-orange : e78200
