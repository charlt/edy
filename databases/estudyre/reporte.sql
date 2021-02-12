
DROP TABLE `cat_objeto`;

CREATE TABLE `cat_objeto` (
  `objeto_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `tabla` varchar(100) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`objeto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE `cat_reporte`;

CREATE TABLE `cat_reporte` (
  `reporte_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reporte_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE `tr_vista`;

CREATE TABLE `tr_vista` (
  `vista_id` int(11) NOT NULL AUTO_INCREMENT,
  `objeto_id` int(11) NOT NULL,
  `clave` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `vista_db` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`vista_id`),
  KEY `FK1_tvista` (`objeto_id`),
  CONSTRAINT `FK1_tvista` FOREIGN KEY (`objeto_id`) REFERENCES  `cat_objeto` (`objeto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE `inter_vista_reporte`;

CREATE TABLE `inter_vista_reporte` (
  `respuesta_docente_id` int(11) NOT NULL AUTO_INCREMENT,
  `reporte_id` int(11) NOT NULL,
  `vista_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_docente_id`),
  KEY `FK1_ivr` (`reporte_id`),
  KEY `FK2_ivr` (`vista_id`),
  CONSTRAINT `FK1_ivr` FOREIGN KEY (`reporte_id`) REFERENCES  `cat_reporte` (`reporte_id`),
  CONSTRAINT `FK2_ivr` FOREIGN KEY (`vista_id`) REFERENCES `tr_vista` (`vista_id`)
) ENGINE=InnoDB auto_increment=1 DEFAULT CHARSET=utf8;
