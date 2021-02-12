

/*Se actualizo informacion 29-01-2020 12:23*/
DROP TABLE IF EXISTS `tr_videoconferencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_videoconferencia`(
`videoconferencia_id` int(11) not null auto_increment,
`asignatura_grupo_id` int(11) not null,
`nombre` varchar(100) default null,
`descripcion` varchar(255) default null,
`fecha_inicio` datetime  NOT NULL,
`fecha_fin` datetime  NOT NULL,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`videoconferencia_id`),
key `FK2_us_asignatura_grupo` (`asignatura_grupo_id`),
constraint `FK2_us_asignatura_grupo` foreign key (`asignatura_grupo_id`) references `estudyce`.`inter_asignatura_grupo` (`asignatura_grupo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



/*Se actualizo informacion 29-01-2020 12:23*/
DROP TABLE IF EXISTS `tr_usuario_zoom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_usuario_zoom`(
`usuario_zoom_id` int(11) not null auto_increment,
`persona_id` int(11) not null,
`apikey` varchar(255) default null,
`apisecret` varchar(255) default null,
`idmeeting` varchar(255) default null,
`usuario` varchar(100) default null,
`semaforo` int(2) default null,
`caducidad` datetime,
`videoconferencia_id` int(11),
`password` varchar(100) default null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`usuario_zoom_id`),
key `FK1_videoconferencia` (`videoconferencia_id`),
key `FK2_persona` (`persona_id`),
constraint `FK1_videoconferencia` foreign key (`videoconferencia_id`) references `tr_videoconferencia` (`videoconferencia_id`),
constraint `FK2_persona` foreign key (`persona_id`) references `estudydg`.`personas` (`persona_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



DROP TABLE IF EXISTS `tr_acceso_videoconferencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_acceso_videoconferencia` (
  `acceso_videoconferencia_id` int(11) NOT NULL AUTO_INCREMENT,
  `videoconferencia_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`acceso_videoconferencia_id`),
  KEY `FK1_acceso_zoom` (`persona_id`),
  KEY `FK1_acceso_videoconferencia` (`videoconferencia_id`),
  CONSTRAINT `FK1_acceso_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK1_acceso_videoconferencia` FOREIGN KEY (`videoconferencia_id`) REFERENCES `tr_videoconferencia` (`videoconferencia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

