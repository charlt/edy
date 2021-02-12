
DROP TABLE IF EXISTS `cat_tipo_reporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_reporte` (
  `tipo_reporte_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave_tipo_reporte` varchar(20) DEFAULT NULL,
  `descripcion_tipo_reporte` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_reporte_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `cat_tipo_reporte` WRITE;
INSERT INTO cat_tipo_reporte (clave_tipo_reporte,descripcion_tipo_reporte,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('ra','Reporte Alumnos','2020-04-09 17:36:00.0','2020-04-09 17:36:00.0',NULL,NULL,1)
,('rd','Reporte Docentes','2020-04-09 17:36:00.0','2020-04-09 17:36:00.0',NULL,NULL,1)
,('rg','Reporte Grupos','2020-04-09 17:36:00.0','2020-04-09 17:36:00.0',NULL,NULL,1)
,('ras','Reporte Asignaturas','2020-04-09 17:36:00.0','2020-04-09 17:36:00.0',NULL,NULL,1);
UNLOCK TABLES;

DROP TABLE IF EXISTS `tr_vistas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_vistas` (
  `vista_id` int(11) AUTO_INCREMENT,
  `nombre_vista` varchar(200) NOT NULL,
  `nom_db` varchar(20) NOT NULL,  	
  `tipo_reporte_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`vista_id`),
  KEY `FK1_tipo_vista` (`tipo_reporte_id`),
  CONSTRAINT `FK1_tipo_reporte` FOREIGN KEY (`tipo_reporte_id`) REFERENCES `cat_tipo_reporte` (`tipo_reporte_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



LOCK TABLES `tr_vistas` WRITE;
INSERT INTO tr_vistas (nombre_vista,nom_db,tipo_reporte_id,fecha_creacion,fecha_actualiza,estatus) VALUES 
('reporte_orden_grado_asignatura','ce',4,'2020-04-09 12:01:43.0','2020-04-09 12:01:43.0',1)
,('reporte_alumnos_grupo_v2','dg',1,'2020-04-09 12:01:43.0','2020-04-09 12:07:28.0',1)
,('usuario_ultimoAcceso','dg',1,'2020-04-09 12:01:43.0','2020-04-09 12:01:43.0',1)
,('asistencia_videoconferencia','le',3,'2020-04-09 12:01:43.0','2020-04-09 12:08:35.0',1)
,('aspirante_estado','sg',1,'2020-04-09 12:01:43.0','2020-04-09 12:01:43.0',1);
UNLOCK TABLES;
