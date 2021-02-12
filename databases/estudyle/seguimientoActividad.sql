CREATE TABLE `tr_seguimiento_actividad` (
  `seguimiento_actividad_id` int(11) NOT NULL AUTO_INCREMENT,
  `materia_fecha_actividad_id` int(11) NOT NULL,
  `imp_pt` int(1) DEFAULT 0,
  `click_derecho` int(1) DEFAULT 0,
  `control_c` int(1) DEFAULT 0,
  `control_v` int(1) DEFAULT 0,
  `cambio_pagina` int(1) DEFAULT 0,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`seguimiento_actividad_id`),
  KEY `FK1_TSA_mfa` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_TSA_MFA` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
