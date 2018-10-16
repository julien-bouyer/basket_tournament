drop database if exists basket_tournament;
create database basket_tournament;
use basket_tournament;

drop table if exists tournoi;
create table tournoi (
    id smallint unsigned not null auto_increment,
    nom varchar(30) not null,
    date_tournoi datetime not null,
    saison varchar(15), -- 2018-2019
    lieu varchar(30),
    primary key (id)
)
engine=InnoDB default charset=latin1;

drop table if exists equipe;
create table equipe (
    id smallint unsigned not null auto_increment,
    nom varchar(20) not null,
    commune varchar(40) not null,
    sexe varchar(8), -- MASCULIN / FEMININ
    departement int,
    primary key (id)
)
engine=InnoDB default charset=latin1;

drop table if exists joueur;
create table joueur (
    id int unsigned not null auto_increment,
    nom varchar(40) not null,
    prenom varchar(40) not null,
    date_naissance datetime,
    sexe varchar(5), -- HOMME / FEMME
    numero smallint,
    primary key (id)
)
engine=InnoDB default charset=latin1;

drop table if exists phase;
create table phase (
    id int unsigned not null auto_increment,
    nom varchar(20),
    type varchar(20) not null, -- POULE / PHASE_FINALE / FINALE / ...
    terminee tinyint,
    sexe varchar(5), -- HOMME / FEMME
    id_tournoi smallint,
    primary key (id),
    constraint fk_phase_tournoi foreign key (id_tournoi) references tournoi(id)
)
engine=InnoDB default charset=latin1;

drop table if exists match;
create table match (
    id int unsigned not null auto_increment,
    terrain varchar(2) not null, -- A, B, C...
    horaire time not null,
    termine tinyint,
    id_equipe_gagante smallint,
    id_phase int,
    primary key (id),
    constraint fk_match_equipe_gagnante foreign key (id_equipe_gagante) references equipe(id),
    constraint fk_match_phase foreign key (id_phase) references phase(id)
)
engine=InnoDB default charset=latin1;

drop table if exists tournoi_equipe;
create table tournoi_equipe (
    id_tournoi smallint not null,
    id_equipe smallint not null,
    primary key (id_tournoi, id_equipe),
    constraint fk_tournoi_equipe_tournoi foreign key (id_tournoi) references tournoi(id),
    constraint fk_tournoi_equipe_equipe foreign key (id_equipe) references equipe(id)
)
engine=InnoDB default charset=latin1;

drop table if exists equipe_joueur;
create table equipe_joueur (
    id_equipe smallint not null,
    id_joueur int not null,
    primary key (id_equipe, id_joueur),
    constraint fk_equipe_joueur_equipe foreign key (id_equipe) references equipe(id),
    constraint fk_equipe_joueur_joueur foreign key (id_joueur) references joueur(id)
)
engine=InnoDB default charset=latin1;

drop table if exists equipe_phase;
create table equipe_phase (
    id_equipe smallint not null,
    id_phase int not null,
    points bigint,
    marques bigint,
    encaisses bigint,
    primary key (id_equipe, id_phase),
    constraint fk_equipe_phase_equipe foreign key (id_equipe) references equipe(id),
    constraint fk_equipe_phase_phase foreign key (id_phase) references phase(id)
)
engine=InnoDB default charset=latin1;

drop table if exists equipe_match;
create table equipe_match (
    id_equipe smallint not null,
    id_match int not null,
    points bigint,
    primary key (id_equipe, id_match),
    constraint fk_equipe_match_equipe foreign key (id_equipe) references equipe(id),
    constraint fk_equipe_match_match foreign key (id_match) references match(id)
)
engine=InnoDB default charset=latin1;

drop table if exists joueur_match;
create table joueur_match (
    id_joueur smallint not null,
    id_match int not null,
    points bigint,
    primary key (id_joueur, id_match),
    constraint fk_joueur_match_joueur foreign key (id_joueur) references joueur(id),
    constraint fk_joueur_match_match foreign key (id_match) references match(id)
)
engine=InnoDB default charset=latin1;
