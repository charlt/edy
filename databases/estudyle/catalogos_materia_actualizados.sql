set foreign_key_checks = 0;
drop table if exists `cat_tipo_materia`;

CREATE TABLE `cat_tipo_materia` (
  `tipo_materia_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave_tipo_materia` varchar(20) DEFAULT NULL,
  `descripcion_tipo_materia` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`tipo_materia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



truncate table cat_tipo_materia;
INSERT INTO cat_tipo_materia (clave_tipo_materia,descripcion_tipo_materia,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('ord','Ordinaria','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('re','Recursamiento','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('ex','Extraordinario','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('es','Especial','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1);

truncate table cat_estatus_materia;
INSERT INTO cat_estatus_materia (clave_estatus_materia,descripcion_estatus_materia,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('a','Activo','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('f','Finalizado','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('re','Revisión','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('ua','única actividad','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('fua','Finalizado única actividad','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('i','Incompleto','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1);

alter table tr_materia add tipo_materia_id int(11) default 1 after asignatura_grupo_id;
alter table tr_materia add constraint FK5_IAIA_tipo foreign key(tipo_materia_id) references cat_tipo_materia(tipo_materia_id);

set foreign_key_checks = 1;




