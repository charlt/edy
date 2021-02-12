
/*Se actualizo informacion 29-01-2020 12:23*/
DROP TABLE IF EXISTS `tr_rubrica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_rubrica`(
`rubrica_id` int(11) not null auto_increment,
`desc_rubrica` varchar(100) default null,
`numero_elementos` int(1) not null,
`numero_categorias` int(1) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`rubrica_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

alter table `tr_actividad` add `rubrica_id` int(11) after orden;
ALTER TABLE `tr_actividad` ADD FOREIGN KEY (`rubrica_id`) REFERENCES `tr_rubrica`(`rubrica_id`);

DROP TABLE IF EXISTS `tr_rb_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_rb_categoria`(
`categoria_id` int(11) not null auto_increment,
`rubrica_id` int(11) not null,
`categoria_desc` varchar(100) not null,
`porcentaje` int(3) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`categoria_id`),
key `FK1_rubrica` (`rubrica_id`),
constraint `FK1_rubrica_categoria` foreign key (`rubrica_id`) references `tr_rubrica` (`rubrica_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tr_rb_elemento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_rb_elemento`(
`elemento_id` int(11) not null auto_increment,
`rubrica_id` int(11) not null,
`elemento_desc` varchar(100) not null,
`porcentaje` int(3) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`elemento_id`),
key `FK1_rubrica` (`rubrica_id`),
constraint `FK1_rubrica_elemento` foreign key (`rubrica_id`) references `tr_rubrica` (`rubrica_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `tr_rb_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_rb_respuesta`(
`respuesta_id` int(11) not null auto_increment,
`elemento_id` int(11) not null,
`categoria_id` int(11) not null,
`celda` text not null,
`valor` decimal(5,2) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`respuesta_id`),
key `FK1_TRR_elemento` (`elemento_id`),
key `FK1_TRR_categoria` (`categoria_id`),
constraint `FK1_TRR_elemento` foreign key (`elemento_id`) references `tr_rb_elemento` (`elemento_id`),
constraint `FK1_TRR_categoria` foreign key (`categoria_id`) references `tr_rb_categoria` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `inter_respuesta_docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `inter_respuesta_docente`(
`respuesta_docente_id` int(11) not null auto_increment,
`respuesta_id` int(11) not null,
`docente_id` int(11) not null,
`materia_fecha_actividad_id` int(11) not null,
`valor` decimal(5,2) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`respuesta_docente_id`),
key `FK1_IRD_respuesta` (`respuesta_id`),
key `FK2_IRD_docente` (`docente_id`),
key `FK3_IRD_materia_fecha` (`materia_fecha_actividad_id`),
constraint `FK1_IRD_respuesta` foreign key (`respuesta_id`) references `tr_rb_respuesta` (`respuesta_id`),
constraint `FK2_IRD_docente` foreign key (`docente_id`) references `estudyce`.`tr_docente` (`docente_id`),
constraint `FK3_IRD_materia_fecha` foreign key (`materia_fecha_actividad_id`) references `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

ALTER TABLE tr_actividad ADD tipo_calificacion INT(1) NULL COMMENT '1 pago normal, 2 Rúbrica';
