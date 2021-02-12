DROP TABLE IF EXISTS `cat_situacion_aspirante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_aspirante` (
  `situacion_aspirante_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_aspirante_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_aspirante_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_aspirante_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_situacion_aspirante`
--

LOCK TABLES `cat_situacion_aspirante` WRITE;
/*!40000 ALTER TABLE `cat_situacion_aspirante` DISABLE KEYS */;
INSERT INTO `cat_situacion_aspirante` VALUES 
(1,'a','Activo','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(2,'b','Alumno','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(3,'bt','Prospecto','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1)
;
/*!40000 ALTER TABLE `cat_situacion_aspirante` ENABLE KEYS */;
UNLOCK TABLES;

ALTER TABLE tr_aspirante ADD situacion_aspirante_id int(11) DEFAULT 1;
ALTER TABLE tr_aspirante ADD CONSTRAINT tr_aspirante_FK FOREIGN KEY (situacion_aspirante_id) REFERENCES cat_situacion_aspirante(situacion_aspirante_id);


update tr_aspirante ta 
join estudydg.inter_persona_usuario_rol ipur on ipur.persona_id = ta.aspirante_id
set situacion_aspirante_id = 2 
where rol_id = 2 and ipur.estatus= 1;

