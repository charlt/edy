
DROP TABLE IF EXISTS `cat_accion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `cat_accion` (
`accion_id` int(11) auto_increment not null,
`accion_clave` varchar(50) default null,
`accion` varchar(100) default null,
`fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
`fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
`estatus` int(1) default null,
primary key (`accion_id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


INSERT INTO cat_accion (accion_clave,accion,fecha_creacion,fecha_actualiza,estatus) VALUES 
('cc','cambio de contraseña','2020-02-11 13:55:25.0','2020-02-11 13:55:42.0',1)
,('cip','cambio de imagen perfil','2020-02-11 13:56:04.0','2020-02-11 13:56:04.0',1)
;

DROP TABLE IF EXISTS `tr_bitacora_accion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_bitacora_accion` (
  `bitacora_accion_id` int(11) NOT NULL AUTO_INCREMENT,
  `accion_id` int(11) NOT NULL,
  `usuario_id` int(11) not null,
  `fecha_inicio` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_fin` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`bitacora_accion_id`),
  KEY `FK1_UsuarioBitacora` (`usuario_id`),
  KEY `FK2_BitacoraAccion` (`accion_id`), 
  CONSTRAINT `FK1_Bitacora_Usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`),
  CONSTRAINT `FK2_Bitacora_Accion` FOREIGN KEY (`accion_id`) REFERENCES `cat_accion` (`accion_id`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
