DROP TABLE IF EXISTS `cat_promocion`;
CREATE TABLE `cat_promocion` (
  `promocion_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL,
  `vigencia` date,
  `propietario` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`promocion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `inter_promocion_persona`;

create table `inter_promocion_persona`(
`promocion_persona_id` int(11) not null auto_increment,
`persona_id` int(11) not null,
`promocion_id` int(11) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`promocion_persona_id`),
key `FK1_persona` (`persona_id`),
key `FK1_promocion` (`promocion_id`),
constraint `FK1_persona` foreign key (`persona_id`) references `estudydg`.`personas` (`persona_id`),
constraint `FK1_promocion` foreign key (`promocion_id`) references `cat_promocion` (`promocion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

