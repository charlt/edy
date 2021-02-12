

DROP TABLE IF EXISTS `cat_tipo_campus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_campus` (
  `tipo_campus_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_campus` varchar(255) NOT NULL,
  `tipo_campus_clave` varchar(50) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_campus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


LOCK TABLES `cat_tipo_campus` WRITE;
/*!40000 ALTER TABLE `cat_tipo_campus` DISABLE KEYS */;
INSERT INTO cat_tipo_campus (tipo_campus,tipo_campus_clave,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('Campus','c','2020-10-22 19:51:43.000','2020-10-22 19:51:43.000',NULL,NULL,1)
,('Sede ','s','2020-10-22 19:51:43.000','2020-10-22 19:51:43.000',NULL,NULL,1)
;
/*!40000 ALTER TABLE `cat_tipo_campus` ENABLE KEYS */;
UNLOCK TABLES;


alter table cat_campus add online int(1) default 0 after campus ;

alter table cat_campus add tipo_campus_id int(11) default 1 after online ;
alter table cat_campus add constraint FK1_campus_tipo foreign key(tipo_campus_id) references cat_tipo_campus (tipo_campus_id);



DROP TABLE IF EXISTS `estudyce`.`inter_campus_docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estudyce`.`inter_campus_docente` (
  `campus_id` int(11) NOT NULL,
  `docente_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`campus_id`,`docente_id`),
  KEY `FK1_inter_campus` (`campus_id`),
  KEY `FK3_inter_docente` (`docente_id`),
  CONSTRAINT `FK1_inter_campus` FOREIGN KEY (`campus_id`) REFERENCES `estudydg`.`cat_campus` (`campus_id`),
  CONSTRAINT `FK3_inter_docente` FOREIGN KEY (`docente_id`) REFERENCES `estudyce`.`tr_docente` (`docente_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




