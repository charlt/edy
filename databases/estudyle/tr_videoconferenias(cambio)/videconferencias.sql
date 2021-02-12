
DROP TABLE IF EXISTS `tr_usuario_zoom`;
create table `tr_usuario_zoom`(
`usuario_zoom_id` int(11) not null auto_increment,
`persona_id` int(11) not null,
`apikey` varchar(255) default null,
`apisecret` varchar(255) default null,
`idmeeting` varchar(255) default null,
`usuario` varchar(100) default null,
`password` varchar(100) default null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`usuario_zoom_id`),
key `FK2_persona` (`persona_id`),
constraint `FK2_persona` foreign key (`persona_id`) references `estudydg`.`personas` (`persona_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;




DROP TABLE IF EXISTS `inter_videoconferencia_zoom`;
CREATE TABLE `inter_videoconferencia_zoom` (
  `videoconferencia_zoom_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_zoom_id` int(11) NOT NULL,
  `videoconferencia_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`videoconferencia_zoom_id`),
  KEY `FK1_zoom_videoconferencia` (`usuario_zoom_id`),
  KEY `FK2_inter_videoconferencia` (`videoconferencia_id`),
  CONSTRAINT `FK1_zoom_videoconferencia` FOREIGN KEY (`usuario_zoom_id`) REFERENCES `tr_usuario_zoom` (`usuario_zoom_id`),
  CONSTRAINT `FK2_inter_videoconferencia` FOREIGN KEY (`videoconferencia_id`) REFERENCES `tr_videoconferencia` (`videoconferencia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


