
DROP TABLE IF EXISTS `tr_biblioteca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_bliblioteca` (
  `biblioteca_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_biblioteca` varchar(100) not null,
  `url_biblioteca` text default null,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `estatus` int(1),
  PRIMARY KEY (`biblioteca_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
