set foreign_key_checks = 0;
drop table if exists `cat_situacion_grupo`;
CREATE TABLE `cat_situacion_grupo` (
  `situacion_grupo_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_grupo_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_grupo_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_grupo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

drop table if exists `cat_situacion_asignatura_grupo`;
CREATE TABLE `cat_situacion_asignatura_grupo` (
  `situacion_asignatura_grupo_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_asignatura_grupo_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_asignatura_grupo_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_asignatura_grupo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `tr_historial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_historial` (
  `historial_id` int(11) NOT NULL AUTO_INCREMENT,
  `orden_asignatura_id` int(11) NOT NULL,
  `ciclo_id` int(11) NOT NULL,
  `alumno_id` int(11) NOT NULL,
  `estatus_historial_id` int(11) NOT NULL,
  `calificacion` decimal(4,2) DEFAULT NULL,
  `materia_id` int(11) NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`historial_id`),
  CONSTRAINT `FK1_Historial_Alumno` FOREIGN KEY (`alumno_id`) REFERENCES `tr_alumno` (`alumno_id`),
  CONSTRAINT `FK2_Historial_Grupo` FOREIGN KEY (`ciclo_id`) REFERENCES `cat_ciclo` (`ciclo_id`),
  CONSTRAINT `FK3_Historial_Orden_Asignatura` FOREIGN KEY (`orden_asignatura_id`) REFERENCES `estudydg`.`inter_orden_asignatura` (`orden_asignatura_id`),
  CONSTRAINT `FK4_Historial_Estatus` FOREIGN KEY (`estatus_historial_id`) REFERENCES `cat_estatus_historial` (`estatus_historial_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



truncate table cat_ciclo_estatus;
INSERT INTO `cat_ciclo_estatus` VALUES
 (1,'Abierto','2019-07-28 03:06:19','2019-07-28 03:06:25',NULL,NULL,1),
 (2,'Cerrado','2019-07-28 03:06:19','2019-07-28 03:06:25',NULL,NULL,1),
 (3,'En planeación','2019-07-28 03:06:19','2019-07-28 03:06:25',NULL,NULL,1);

truncate table cat_estatus_historial;
INSERT INTO cat_estatus_historial (estatus_historial_clave,estatus_historial_descripcion,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('ord','Ordinario','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1)
,('re','Recursamiento','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1)
,('ex','Extraordianrio','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1)
,('esp','Especial','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1)
;

truncate table cat_situacion_grupo;
INSERT INTO cat_situacion_grupo (situacion_grupo_clave,situacion_grupo_descripcion,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('a','Abierto','2020-05-26 23:10:26.0','2020-05-26 23:10:26.0',NULL,NULL,1)
,('rp','Revisión Parcial','2020-05-26 23:10:26.0','2020-05-28 02:19:57.0',NULL,NULL,1)
,('rt','Revisión Total','2020-05-26 23:10:26.0','2020-05-28 02:19:57.0',NULL,NULL,1)
,('crr','Cerrado','2020-05-26 23:10:26.0','2020-05-26 23:10:26.0',NULL,NULL,1)
;

truncate table cat_situacion_asignatura_grupo;
INSERT INTO cat_situacion_asignatura_grupo (situacion_asignatura_grupo_clave,situacion_asignatura_grupo_descripcion,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('a','Abierto','2020-05-26 23:10:26.0','2020-05-26 23:10:26.0',NULL,NULL,1)
,('rp','Revisión Parcial','2020-05-26 23:10:26.0','2020-05-28 02:19:57.0',NULL,NULL,1)
,('rt','Revisión Total','2020-05-26 23:10:26.0','2020-05-28 02:19:57.0',NULL,NULL,1)
,('crr','Cerrado','2020-05-26 23:10:26.0','2020-05-26 23:10:26.0',NULL,NULL,1)
;

truncate table cat_estatus_historial;
INSERT INTO cat_estatus_historial (estatus_historial_clave,estatus_historial_descripcion,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('ord','Ordinario','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1)
,('re','Recursamiento','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1)
,('ex','Extraordianrio','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1)
,('esp','Especial','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1);

alter table tr_grupo add situacion_grupo_id int(11) default 1 after cupo;
alter table tr_grupo add constraint FK2_situacion_grupo foreign key(situacion_grupo_id) references cat_situacion_grupo(situacion_grupo_id);

alter table inter_asignatura_grupo add situacion_asignatura_grupo_id int(11) default 1 after grupo_id;
alter table inter_asignatura_grupo add constraint FK2_situacion_asignatura_grupo foreign key(situacion_asignatura_grupo_id) references cat_situacion_asignatura_grupo(situacion_asignatura_grupo_id);


set foreign_key_checks = 1;