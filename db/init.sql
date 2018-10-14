create database basket_tournament;
use basket_tournament;

drop table if exists tournoi;
create table tournoi (
    id smallint unsigned not null auto_increment,
    nom varchar(40) not null,
    date_tournoi datetime not null,
    saison varchar(15),
    lieu varchar(30),
    primary key (id)
)
engine=InnoDB default charset=latin1;
insert into tournoi (nom, date_tournoi, saison, lieu) values ('Tournoi de Noël 2018', '2018-12-21', '2018-2019', 'La Guyonnière');
