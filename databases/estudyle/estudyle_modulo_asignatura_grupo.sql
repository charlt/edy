
CREATE TABLE `inter_modulos_asignatura_grupo` (
  `modulo_id` int(11) NOT NULL,
  `asignatura_grupo_id` int(11) NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`modulo_id`,`asignatura_grupo_id`),
  KEY `FK2_InterMag_Asignatura` (`asignatura_grupo_id`),
  CONSTRAINT `FK1_InterMag_Modulo` FOREIGN KEY (`modulo_id`) REFERENCES `cat_modulos` (`modulo_id`),
  CONSTRAINT `FK2_InterMag_Asignatura` FOREIGN KEY (`asignatura_grupo_id`) REFERENCES `estudyce`.`inter_asignatura_grupo` (`asignatura_grupo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;