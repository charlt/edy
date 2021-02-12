DROP TABLE IF EXISTS `tr_horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_horario` (
  `horario_id` int(11) NOT NULL AUTO_INCREMENT,
  `asignatura_grupo_id` int(11) NOT NULL,
  `dia` int(1) DEFAULT NULL,
  `hora_inicio` time,
  `hora_fin` time,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`horario_id`),
  KEY `FK2_TH_asignatura_grupo` (`asignatura_grupo_id`),
  CONSTRAINT `FK3_TH_ag` FOREIGN KEY (`asignatura_grupo_id`) REFERENCES `inter_asignatura_grupo` (`asignatura_grupo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;