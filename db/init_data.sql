-- tournoi
insert into tournoi (nom, date_tournoi, saison, lieu) values ('Tournoi de Noël 2018', '2018-12-21', '2018-2019', 'La Guyonnière');

-- équipes
insert into equipe (nom, commune, sexe, departement) values ('La Guyonnière 1', 'LA GUYONNIÈRE', 'MASCULIN', 85);
insert into equipe (nom, commune, sexe, departement) values ('La Guyonnière 2', 'LA GUYONNIÈRE', 'MASCULIN', 85);
insert into equipe (nom, commune, sexe, departement) values ('Saint Laurent des Autels', 'SAINT LAURENT DES AUTELS', 'MASCULIN', 49);
insert into equipe (nom, commune, sexe, departement) values ('Saint Lumine de Clisson', 'SAINT LUMINE DE CLISSON', 'MASCULIN', 44);
insert into equipe (nom, commune, sexe, departement) values ('Vallet', 'VALLET', 'MASCULIN', 44);
insert into equipe (nom, commune, sexe, departement) values ('Gétigné', 'GÉTIGNÉ', 'MASCULIN', 44);
insert into equipe (nom, commune, sexe, departement) values ('La Roche sur Yon', 'LA ROCHE SUR YON', 'MASCULIN', 85);
insert into equipe (nom, commune, sexe, departement) values ('Saint Germain sur Moine', 'SAINT GERMAIN SUR MOINE', 'MASCULIN', 49);

-- lien tournoi-équipes
insert into tournoi_equipe (id_tournoi, id_equipe) values (1, 1);
insert into tournoi_equipe (id_tournoi, id_equipe) values (1, 2);
insert into tournoi_equipe (id_tournoi, id_equipe) values (1, 3);
insert into tournoi_equipe (id_tournoi, id_equipe) values (1, 4);
insert into tournoi_equipe (id_tournoi, id_equipe) values (1, 5);
insert into tournoi_equipe (id_tournoi, id_equipe) values (1, 6);
insert into tournoi_equipe (id_tournoi, id_equipe) values (1, 7);
insert into tournoi_equipe (id_tournoi, id_equipe) values (1, 8);
