
DROP TABLE IF EXISTS `cat_situacion_observacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_observacion` (
  `situacion_observacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_observacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

LOCK TABLES `cat_situacion_observacion` WRITE;
/*!40000 ALTER TABLE `cat_situacion_observacion` DISABLE KEYS */;
INSERT INTO `cat_situacion_observacion` VALUES 
(1,'alta','Alta','2019-07-28 01:42:26','2019-07-28 02:15:37',NULL,NULL,1),
(2,'baja','Baja','2019-07-28 01:42:26','2019-07-28 02:15:37',NULL,NULL,1);

/*!40000 ALTER TABLE `cat_situacion_observacion` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `tr_observaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_observaciones` (
`observacion_id` int(11) not null AUTO_INCREMENT,
`situacion_observacion_id` int(11) NOT NULL,
`tabla_id` int(11) not null,
`tabla` varchar(255) not null,
`observacion` text default null,
`fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
`fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
`estatus` int(1) default null,
 primary key (`observacion_id`),
 KEY `FK1_observacion_id` (`situacion_observacion_id`),  
 CONSTRAINT `FK1_observacion_id` FOREIGN KEY (`situacion_observacion_id`) REFERENCES `cat_situacion_observacion` (`situacion_observacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
