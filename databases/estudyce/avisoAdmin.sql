  drop table if exists tr_avisos;
  CREATE TABLE `tr_avisos` (
    `aviso_id` int(11) NOT NULL AUTO_INCREMENT,
    `importancia_aviso_id` int(11) NOT NULL,
    `titulo` varchar(255) NOT NULL DEFAULT 'NA',
    `mensaje` text DEFAULT NULL,
    `adjunto` varchar(255) DEFAULT NULL,
    `administrador_id` int(11) NOT NULL DEFAULT 0,
    `fecha_inicio` datetime DEFAULT NULL,
    `fecha_fin` datetime DEFAULT NULL,
    `fecha_crea` datetime NOT NULL DEFAULT current_timestamp(),
    `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `usuario_crea` varchar(200) DEFAULT NULL,
    `usuario_actualiza` varchar(200) DEFAULT NULL,
    `estatus` int(1) DEFAULT NULL,
    PRIMARY KEY (`aviso_id`),
    KEY `FK1_aviso_administardor` (`administrador_id`),
    KEY `FK2_aviso_importancia` (`importancia_aviso_id`),
    CONSTRAINT `FK1_aviso_administrador` FOREIGN KEY (`administrador_id`) REFERENCES `tr_administrador` (`administrador_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


  drop table if exists `tr_switch_aviso`;
  CREATE TABLE `tr_switch_aviso` (
    `switch_aviso_id` int(11) NOT NULL AUTO_INCREMENT,
    `aviso_id` int(11) NOT NULL,
    `rol_id` int(11) DEFAULT NULL,
    `grupo_id` int(11) DEFAULT NULL,
    `orden_asignatura_id` int(11) DEFAULT NULL,
    `asignatura_grupo_id` int(11) DEFAULT NULL,
    `plan_orden_id` int(11) DEFAULT NULL,
    `carrera_id` int(11) DEFAULT NULL,
    `plan_estudios_id` int(11) DEFAULT NULL,
    `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
    `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `estatus` int(1) DEFAULT NULL,
    PRIMARY KEY (`switch_aviso_id`),
    KEY `FK1_switch_aviso` (`aviso_id`),
    CONSTRAINT `FK1_switch_aviso` FOREIGN KEY (`aviso_id`) REFERENCES `tr_avisos` (`aviso_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


  drop table if exists `inter_aviso_persona`;
  CREATE TABLE `inter_aviso_persona` (
    `aviso_persona_id` int(11) NOT NULL AUTO_INCREMENT,
    `aviso_id` int(11) NOT NULL,
    `persona_id` int(11) NOT NULL,
    `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
    `estatus` int(1) DEFAULT NULL,
    PRIMARY KEY (`aviso_persona_id`),
    KEY `FK1_IAP_persona` (`persona_id`),
    KEY `FK2_IAP_aviso` (`aviso_id`),
    CONSTRAINT `FK1_IAP_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
    CONSTRAINT `FK2_IAP_aviso` FOREIGN KEY (`aviso_id`) REFERENCES `tr_avisos` (`aviso_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



  drop table if exists `inter_aviso_grupo_persona`;
  CREATE TABLE `inter_aviso_grupo_persona` (
    `aviso_grupo_persona_id` int(11) NOT NULL AUTO_INCREMENT,
    `avisos_grupo_id` int(11) NOT NULL,
    `persona_id` int(11) NOT NULL,
    `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
    `estatus` int(1) DEFAULT NULL,
    PRIMARY KEY (`aviso_grupo_persona_id`),
    KEY `FK1_IAPG_persona` (`persona_id`),
    KEY `FK2_IAPG_aviso` (`avisos_grupo_id`),
    CONSTRAINT `FK1_IAPG_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
    CONSTRAINT `FK2_IAPG_aviso` FOREIGN KEY (`avisos_grupo_id`) REFERENCES `tr_avisos_grupo` (`avisos_grupo_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;