DROP DATABASE IF EXISTS proyectotesis;
CREATE DATABASE proyectotesis;
use proyectotesis

CREATE table palabraClave(palabra varchar(100) not null,
primary key(palabra));

CREATE table profesor(nombre varchar(40),
                      apellidoPaterno varchar(40),
                      apellidoMaterno varchar(50),
                      id int unsigned not null AUTO_INCREMENT,
                      primary key(id)
                      );



CREATE table estudiante(nombre varchar(40),
                        apellidoPaterno varchar(40),
                        apellidoMaterno varchar(50),
                        enlaceACredencial varchar(200),
                        uid varchar(30) not null,
                        primary key(uid));


CREATE table profesorUsuario(nombre varchar(40),
                             apellidoPaterno varchar(40),
                             apellidoMaterno varchar(50),
                             uid varchar(30) not null,
                             primary key(uid) );

CREATE table tesis(fechaDeRegistro varchar(40),
                   enlaceAPdf varchar(200),
                   titulo varchar(300),
                   carrera varchar(200),
                   grado varchar(50),
                   year1 smallint unsigned,
                   resumen varchar(400),
                   fk_estudiante varchar(30) not null,
                   foreign key (fk_estudiante) references estudiante(uid),
                   id int unsigned not null AUTO_INCREMENT,
                   primary key (id));

CREATE table protocolo(fechaDeRegistro varchar(40),
                   enlaceAPdf varchar(200),
                   titulo varchar(300),
                   carrera varchar(200),
                   grado varchar(50),
                   year1 smallint unsigned,
                   resumen varchar(400),
                   fk_estudiante varchar(30) not null,
                   foreign key (fk_estudiante) references estudiante(uid),
                   id int unsigned not null AUTO_INCREMENT,
                   primary key (id));

CREATE table palabras_tesis(
  fk_tesis int unsigned not null,
  fk_palabra varchar(100) not null,
  foreign key (fk_tesis) references tesis(id),
  foreign key (fk_palabra) references palabraClave(palabra),
  primary key (fk_palabra,fk_tesis)
);

CREATE table palabras_protocolo(
  fk_protocolo int unsigned not null,
  fk_palabra varchar(100) not null,
  foreign key (fk_protocolo) references protocolo(id),
  foreign key (fk_palabra) references palabraClave(palabra),
  primary key (fk_palabra,fk_protocolo)
);


CREATE table autor(nombre varchar(40),
                   apellidoPaterno varchar(40),
                   apellidoMaterno varchar(50),
                   fk_tesis int unsigned not null,
                   foreign key (fk_tesis) references tesis(id),
                   primary key (fk_tesis, nombre, apellidoPaterno, apellidoMaterno)
);

CREATE table autorProtocolo(nombre varchar(40),
                   apellidoPaterno varchar(40),
                   apellidoMaterno varchar(50),
                   fk_protocolo int unsigned not null,
                   foreign key (fk_protocolo) references protocolo(id),
                   primary key (fk_protocolo, nombre, apellidoPaterno, apellidoMaterno)
);


CREATE table director_tesis(
                            fk_tesis int unsigned not null,
                            fk_director int unsigned not null,
                            foreign key (fk_director) references profesor(id),
                            foreign key (fk_tesis) references tesis(id),
                            primary key(fk_director,fk_tesis)
);

CREATE table sinodal_tesis(
                            fk_tesis int unsigned not null,
                            fk_sinodal int unsigned not null, 
                            foreign key (fk_sinodal) references profesor(id),
                            foreign key (fk_tesis) references tesis(id),
                            primary key(fk_sinodal,fk_tesis)
);

CREATE table director_protocolo(
                            fk_protocolo int unsigned not null,
                            fk_director int unsigned not null,
                            foreign key (fk_director) references profesor(id),
                            foreign key (fk_protocolo) references protocolo(id),
                            primary key(fk_director,fk_protocolo)
);

CREATE table sinodal_protocolo(
                            fk_protocolo int unsigned not null,
                            fk_sinodal varchar(30) not null, 
                            foreign key (fk_sinodal) references profesorUsuario(uid),
                            foreign key (fk_protocolo) references protocolo(id),
                            primary key(fk_sinodal,fk_protocolo)
);

CREATE table version(
  fecha varchar(40),
  fk_protocolo int unsigned not null,
  enlace varchar(200) not null,
  primary key (enlace),
  foreign key (fk_protocolo) references protocolo(id)
);


insert into profesor (nombre,apellidoPaterno,apellidoMaterno) values ("Casandra", "Merin", "Martinez");