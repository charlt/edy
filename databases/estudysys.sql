
CREATE SCHEMA estudysys ;


DROP TABLE estudysys.cat_modulos;
create table estudysys.cat_modulos
(
modulo_id int(4) NOT NULL AUTO_INCREMENT, 
modulo_clave varchar(10),
modulo varchar(100) NOT NULL,
estatus varchar(2),
PRIMARY KEY (modulo_id),
fecha_creacion datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
fecha_actualiza datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

SELECT *
 FROM estudysys.cat_modulos;

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('CT', 'CERTIFICACIÓN Y TITULACIÓN', 1);

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('EL', 'E-LEARNING', 1);

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('ES', 'ESTADISTICAS', 1);

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('DI', 'DISEÑO INSTRUCCIONAL', 1);

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('GC', 'GESTION DEL CAMBIO', 1);

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('CE', 'CONTROL ESCOLAR', 1);

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('SE', 'SEGUIMIENTO ESTUDIANTIL', 1);

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('CP', 'CAPACITACIONES', 1);

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('PG', 'PAGOS', 1);

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('IN', 'INSCRIPCIONES', 1);

insert into estudysys.cat_modulos (modulo_clave, modulo, estatus)
values ('MA', 'MESA DE AYUDA', 1);

COMMIT;