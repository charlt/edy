


DROP TABLE IF EXISTS `cat_situacion_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_pago` (
  `situacion_pago_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_pago_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_pago_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_pago_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_situacion_pago`
--

LOCK TABLES `cat_situacion_pago` WRITE;
/*!40000 ALTER TABLE `cat_situacion_pago` DISABLE KEYS */;
INSERT INTO `cat_situacion_pago` VALUES 
(1,'a','Activo','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(2,'b','Bloqueado','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(3,'bt','Activo Pago validado','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(4,'e','Activo especial','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_situacion_pago` ENABLE KEYS */;
UNLOCK TABLES;

ALTER TABLE estudyce.tr_alumno ADD situacion_pago_id int(3) DEFAULT 1 NOT NULL;
ALTER TABLE estudyce.tr_alumno ADD CONSTRAINT FK3_Persona_ALumno FOREIGN KEY (situacion_pago_id) REFERENCES igm_estudyce.cat_situacion_pago(situacion_pago_id);


