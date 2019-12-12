drop database if exists basket_tournament;
create database basket_tournament;
use basket_tournament;

drop table if exists tournament;
create table tournament (
    id smallint not null auto_increment,
    name varchar(30) not null,
    date_tournament datetime not null,
    season varchar(15), -- 2018-2019
    place varchar(30),
    primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

drop table if exists team;
create table team (
    id smallint not null auto_increment,
    name varchar(40) not null,
    city varchar(40) not null,
    sex varchar(8), -- MASCULIN / FEMININ
    county int,
    primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

drop table if exists player;
create table player (
    id smallint not null auto_increment,
    lastname varchar(40) not null,
    firstname varchar(40) not null,
    birthday datetime,
    sex varchar(5), -- HOMME / FEMME
    num smallint,
    primary key (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

drop table if exists phase;
create table phase (
    id smallint not null auto_increment,
    name varchar(20),
    type varchar(20) not null, -- POULE / PHASE_FINALE / FINALE / ...
    completed tinyint,
    sex varchar(5), -- HOMME / FEMME
    id_tournament smallint,
    primary key (id),
    constraint fk_phase_tournament foreign key (id_tournament) references tournament(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

drop table if exists game;
create table game (
    id smallint not null auto_increment,
    terrain varchar(2) not null, -- A, B, C...
    horaire time not null,
    termine tinyint,
    id_winningteam smallint,
    id_phase smallint,
    primary key (id),
    constraint fk_game_winningteam foreign key (id_winningteam) references team(id),
    constraint fk_game_phase foreign key (id_phase) references phase(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

drop table if exists tournament_team;
create table tournament_team (
    id_tournament smallint not null,
    id_team smallint not null,
    primary key (id_tournament, id_team),
    constraint fk_tournament_team_tournament foreign key (id_tournament) references tournament(id),
    constraint fk_tournament_team_team foreign key (id_team) references team(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

drop table if exists team_player;
create table team_player (
    id_team smallint not null,
    id_player smallint not null,
    primary key (id_team, id_player),
    constraint fk_team_player_team foreign key (id_team) references team(id),
    constraint fk_team_player_player foreign key (id_player) references player(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

drop table if exists team_phase;
create table team_phase (
    id_team smallint not null,
    id_phase smallint not null,
    points bigint,
    pointsFor bigint,
    pointsAgainst bigint,
    primary key (id_team, id_phase),
    constraint fk_team_phase_team foreign key (id_team) references team(id),
    constraint fk_team_phase_phase foreign key (id_phase) references phase(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

drop table if exists team_game;
create table team_game (
    id_team smallint not null,
    id_game smallint not null,
    points bigint,
    primary key (id_team, id_game),
    constraint fk_team_game_team foreign key (id_team) references team(id),
    constraint fk_team_game_game foreign key (id_game) references game(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

drop table if exists player_game;
create table player_game (
    id_player smallint not null,
    id_game smallint not null,
    points bigint,
    primary key (id_player, id_game),
    constraint fk_player_game_player foreign key (id_player) references player(id),
    constraint fk_player_game_game foreign key (id_game) references game(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
