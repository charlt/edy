DROP TABLE IF EXISTS `inter_tutor_sede`;
DROP TABLE IF EXISTS `cat_sede`;
DROP TABLE IF EXISTS `tr_tutor`;



DROP TABLE IF EXISTS `cat_situacion_asesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_asesor` (
  `situacion_asesor_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_asesor_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_asesor_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_asesor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `cat_situacion_asesor` WRITE;
/*!40000 ALTER TABLE `cat_situacion_asesor` DISABLE KEYS */;
INSERT INTO `cat_situacion_asesor` VALUES 
(1,'a','Activo','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(2,'b','Baja','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1)
;
/*!40000 ALTER TABLE `cat_situacion_asesor` ENABLE KEYS */;
UNLOCK TABLES;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_asesor` (
  `asesor_id` int(11) NOT NULL,
  `clave_asesor` varchar(255) DEFAULT NULL,
  `situacion_asesor_id` int(1) NOT NULL,
  `foto_grupal` varchar(25) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`asesor_id`),
  CONSTRAINT `FK1_Persona_Asesor` FOREIGN KEY (`asesor_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  constraint `FK2_situacion_asesor` foreign key (`situacion_asesor_id`) references `cat_situacion_asesor` (`situacion_asesor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;




CREATE TABLE estudydg.cat_privilegios_asesor (
	id_privilegio INT(11) NOT NULL AUTO_INCREMENT,
	label VARCHAR(50) NOT NULL,
	text VARCHAR(50) DEFAULT NULL,
	color VARCHAR(20) NOT NULL,
	icon VARCHAR(50) DEFAULT NULL,
	size VARCHAR(80) DEFAULT NULL,
	url VARCHAR(100) DEFAULT NULL,
	type INT (1),
	estatus INT(1),
	PRIMARY KEY (id_privilegio)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

INSERT INTO estudydg.cat_privilegios_asesor (`label`,`text`,`color`,`icon`,`size`,`url`,`type`,`estatus`) VALUES 
('Aspirantes','Mis aspirantes','primary','fa-user','col-xl-3 col-lg-6','/asesor/aspirante/',1,1),
('Alumnos','Mis aspirantes','primary','fa-user','col-xl-3 col-lg-6','/asesor/alumno/',1,1);

 

 DROP TABLE IF EXISTS `inter_asesor_persona`;


create table `inter_asesor_persona`(
`asesor_persona_id` int(11) not null auto_increment,
`persona_id` int(11) not null,
`asesor_id` int(11) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`asesor_persona_id`),
key `FK1_iap_persona` (`persona_id`),
key `FK1_iap_asesor` (`asesor_id`),
constraint `FK1_iap_persona` foreign key (`persona_id`) references `estudydg`.`personas` (`persona_id`),
constraint `FK1_iap_asesor` foreign key (`asesor_id`) references `tr_asesor` (`asesor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `inter_campus_asesor`;


create table `inter_campus_asesor`(
`campus_asesor_id` int(11) not null auto_increment,
`asesor_id` int(11) not null,
`campus_id` int(11) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`campus_asesor_id`),
key `FK1_iac_asesor` (`asesor_id`),
key `FK1_iac_campus` (`campus_id`),
constraint `FK1_iac_asesor` foreign key (`asesor_id`) references `tr_asesor` (`asesor_id`),
constraint `FK1_iac_campus` foreign key (`campus_id`) references `estudydg`.`cat_campus` (`campus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


--  Auto-generated SQL script #202010211621
INSERT INTO estudydg.cat_rol (rol,tiempo_sesion,fecha_creacion,fecha_actualiza,estatus)
	VALUES ('Asesor',24,'2019-07-28 02:25:42.0','2020-09-22 17:25:36.0',1);
