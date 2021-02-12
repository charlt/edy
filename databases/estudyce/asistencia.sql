
DROP TABLE IF EXISTS `tr_clase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_clase` (
  `clase_id` int(11) NOT NULL AUTO_INCREMENT,
  `asignatura_grupo_id` int(11) NOT NULL,
  `nombre_clase` varchar(100) DEFAULT NULL,
  `desc_clase` varchar(255) DEFAULT NULL,
  `fecha_clase` datetime NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`clase_id`),
  KEY `FK2_TC_asignatura_grupo` (`asignatura_grupo_id`),
  CONSTRAINT `FK2_TC_asignatura_grupo` FOREIGN KEY (`asignatura_grupo_id`) REFERENCES `inter_asignatura_grupo` (`asignatura_grupo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tr_inasistencia_clase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_inasistencia_clase` (
  `inasistencia_clase_id` int(11) NOT NULL AUTO_INCREMENT,
  `clase_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`inasistencia_clase_id`),
  KEY `FK1_IC_clase` (`persona_id`),
  KEY `FK2_IC_clase` (`clase_id`),
  CONSTRAINT `FK3_IC_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK4_IC_clase` FOREIGN KEY (`clase_id`) REFERENCES `tr_clase` (`clase_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;