


CREATE TABLE `inter_materia_modulo` (
  `materia_id` int(11) NOT NULL,  
  `modulo_id` int(11) NOT NULL,
  `calificacion` decimal(4,2) default NULL,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`modulo_id`,`materia_id`),
  KEY `FK2_InterMM_materia` (`materia_id`),
  CONSTRAINT `FK1_InterMM_materia` FOREIGN KEY (`materia_id`) REFERENCES `tr_materia` (`materia_id`),
  CONSTRAINT `FK2_InterMM_modulo` FOREIGN KEY (`modulo_id`) REFERENCES `cat_modulos` (`modulo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;