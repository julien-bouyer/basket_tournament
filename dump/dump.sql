SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

create table if not exists public.user (
    id bigint not null,
    login character varying(50) not null,
    password character varying(60) not null,
    firstname character varying(50),
    lastname character varying(50),
    email character varying(191),
    role character varying(8),
    token text,
    primary key (id)
);

-- create table basket_tournament.tournament (
--     id smallint not null auto_increment,
--     name varchar(30) not null,
--     date_tournament datetime not null,
--     season varchar(15), -- 2018-2019
--     place varchar(30),
--     primary key (id)
-- );

-- create table basket_tournament.team (
--     id smallint not null auto_increment,
--     name varchar(40) not null,
--     city varchar(40) not null,
--     sex varchar(8), -- MASCULIN / FEMININ
--     county int,
--     primary key (id)
-- );

-- create table basket_tournament.player (
--     id smallint not null auto_increment,
--     lastname varchar(40) not null,
--     firstname varchar(40) not null,
--     birthday datetime,
--     sex varchar(5), -- HOMME / FEMME
--     num smallint,
--     primary key (id)
-- );

-- create table basket_tournament.phase (
--     id smallint not null auto_increment,
--     name varchar(20),
--     type varchar(20) not null, -- POULE / PHASE_FINALE / FINALE / ...
--     completed tinyint,
--     sex varchar(5), -- HOMME / FEMME
--     id_tournament smallint,
--     primary key (id),
--     constraint fk_phase_tournament foreign key (id_tournament) references tournament(id)
-- );

-- create table basket_tournament.game (
--     id smallint not null auto_increment,
--     terrain varchar(2) not null, -- A, B, C...
--     horaire time not null,
--     termine tinyint,
--     id_winningteam smallint,
--     id_phase smallint,
--     primary key (id),
--     constraint fk_game_winningteam foreign key (id_winningteam) references team(id),
--     constraint fk_game_phase foreign key (id_phase) references phase(id)
-- );

-- create table basket_tournament.tournament_team (
--     id_tournament smallint not null,
--     id_team smallint not null,
--     primary key (id_tournament, id_team),
--     constraint fk_tournament_team_tournament foreign key (id_tournament) references tournament(id),
--     constraint fk_tournament_team_team foreign key (id_team) references team(id)
-- );

-- create table basket_tournament.team_player (
--     id_team smallint not null,
--     id_player smallint not null,
--     primary key (id_team, id_player),
--     constraint fk_team_player_team foreign key (id_team) references team(id),
--     constraint fk_team_player_player foreign key (id_player) references player(id)
-- );

-- create table basket_tournament.team_phase (
--     id_team smallint not null,
--     id_phase smallint not null,
--     points bigint,
--     pointsFor bigint,
--     pointsAgainst bigint,
--     primary key (id_team, id_phase),
--     constraint fk_team_phase_team foreign key (id_team) references team(id),
--     constraint fk_team_phase_phase foreign key (id_phase) references phase(id)
-- );

-- create table basket_tournament.team_game (
--     id_team smallint not null,
--     id_game smallint not null,
--     points bigint,
--     primary key (id_team, id_game),
--     constraint fk_team_game_team foreign key (id_team) references team(id),
--     constraint fk_team_game_game foreign key (id_game) references game(id)
-- );

-- create table basket_tournament.player_game (
--     id_player smallint not null,
--     id_game smallint not null,
--     points bigint,
--     primary key (id_player, id_game),
--     constraint fk_player_game_player foreign key (id_player) references player(id),
--     constraint fk_player_game_game foreign key (id_game) references game(id)
-- );
