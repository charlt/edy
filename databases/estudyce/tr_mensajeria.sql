
CREATE TABLE `cat_observacion` (
  `observacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `observacion_desc` varchar(50) DEFAULT NULL,
  `observacion` varchar(50) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`observacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;




CREATE TABLE `tr_mensajeria` (
  `mensajeria_id` int(11) NOT NULL AUTO_INCREMENT,
  `persona_id` int(11) DEFAULT NULL,
  `observacion_id` int(11) DEFAULT NULL,
  `texto` text,
  `administrador_id` int(11) DEFAULT NULL,
  `origen` int(2) DEFAULT NULL,
  `visto` int(1) DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`mensajeria_id`),
  KEY `FK1_mensaje_persona` (`persona_id`),
  KEY `FK1_mensaje_advertencia` (`observacion_id`),
  CONSTRAINT `FK1_mensaje_materia` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK1_mensaje_administrador` FOREIGN KEY (`administrador_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK1_mensaje_advertencia` FOREIGN KEY (`observacion_id`) REFERENCES `cat_advertencia` (`observacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;