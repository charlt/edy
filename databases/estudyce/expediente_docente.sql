DROP TABLE IF EXISTS `cat_documento_docente`;

CREATE TABLE `cat_documento_docente` (
  `documento_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_documento` varchar(255) DEFAULT NULL,
  `documento_desc` varchar(255) DEFAULT NULL,
  `obligatorio` int(1) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`documento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO cat_documento_docente (nombre_documento,documento_desc,obligatorio,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('Acta de nacimiento','an',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:06.0',NULL,NULL,1)
,('Antecedente académico','aa',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1)
,('CURP','c',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1)
,('Carta compromiso','cc',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1)
,('INE','ine',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1)
,('Carta de exposición de motivos','cem',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1)
,('Curriculum Vitae','cv',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1);


DROP TABLE IF EXISTS `cat_estado_documento_docente`;

CREATE TABLE `cat_estado_documento_docente` (
  `estado_documento_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_documento` varchar(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estado_documento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


INSERT INTO cat_estado_documento_docente (nombre_documento,fecha_creacion,fecha_actualiza,estatus) VALUES 
('Documento por enviar ','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1)
,('En proceso de validación','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1)
,('Verificado y validado','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1)
,('Exhibe carta compromiso','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1)
,('Otro','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1)
,('Corrección','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1);

DROP TABLE IF EXISTS `inter_expediente_docente`;

CREATE TABLE `inter_expediente_docente` (
  `expediente_id` int(11) NOT NULL AUTO_INCREMENT,
  `expediente_desc` varchar(100) DEFAULT NULL,
  `docente_id` int(11) NOT NULL,
  `documento_id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `estado_documento_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`expediente_id`),
  KEY `FK1_IE_docente` (`docente_id`),
  KEY `FK2_IE_documento` (`documento_id`),
  KEY `FK3_IE_estado_documento` (`estado_documento_id`),
  CONSTRAINT `FK1_IE_docente` FOREIGN KEY (`docente_id`) REFERENCES `tr_docente` (`docente_id`),
  CONSTRAINT `FK2_IE_documento` FOREIGN KEY (`documento_id`) REFERENCES `cat_documento_docente` (`documento_id`),
  CONSTRAINT `FK3_IE_estado_documento` FOREIGN KEY (`estado_documento_id`) REFERENCES `cat_estado_documento_docente` (`estado_documento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

