-- tournament
insert into tournament (name, date_tournament, season, place) values ('Tournoi de Noël 2018', '2018-12-21', '2018-2019', 'La Guyonnière');

-- team
insert into team (name, city, sex, county) values ('La Guyonnière 1', 'LA GUYONNIÈRE', 'MASCULIN', 85);
insert into team (name, city, sex, county) values ('La Guyonnière 2', 'LA GUYONNIÈRE', 'MASCULIN', 85);
insert into team (name, city, sex, county) values ('Saint Laurent des Autels', 'SAINT LAURENT DES AUTELS', 'MASCULIN', 49);
insert into team (name, city, sex, county) values ('Saint Lumine de Clisson', 'SAINT LUMINE DE CLISSON', 'MASCULIN', 44);
insert into team (name, city, sex, county) values ('Vallet', 'VALLET', 'MASCULIN', 44);
insert into team (name, city, sex, county) values ('Gétigné', 'GÉTIGNÉ', 'MASCULIN', 44);
insert into team (name, city, sex, county) values ('La Roche sur Yon', 'LA ROCHE SUR YON', 'MASCULIN', 85);
insert into team (name, city, sex, county) values ('Saint Germain sur Moine', 'SAINT GERMAIN SUR MOINE', 'MASCULIN', 49);

-- lien tournament-team
insert into tournament_team (id_tournament, id_team) values (1, 1);
insert into tournament_team (id_tournament, id_team) values (1, 2);
insert into tournament_team (id_tournament, id_team) values (1, 3);
insert into tournament_team (id_tournament, id_team) values (1, 4);
insert into tournament_team (id_tournament, id_team) values (1, 5);
insert into tournament_team (id_tournament, id_team) values (1, 6);
insert into tournament_team (id_tournament, id_team) values (1, 7);
insert into tournament_team (id_tournament, id_team) values (1, 8);
