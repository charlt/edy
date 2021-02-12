
DROP TABLE IF EXISTS `tr_encuesta`;

CREATE TABLE `tr_encuesta` (
  `encuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `instruccion` varchar(255) DEFAULT NULL,
  `persona_id` int(11) NOT NULL,
  `obligatorio` int(1) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`encuesta_id`),
  KEY `FK1_TF_persona` (`persona_id`),
  CONSTRAINT `FK1_Persona_Encuesta` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;




DROP TABLE IF EXISTS `tr_campo_encuesta`;

CREATE TABLE `tr_campo_encuesta` (
  `campo_encuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `encuesta_id` int(11) NOT NULL,
  `tipo_campo_id` int(11) NOT NULL,
  `obligatorio` int(1) DEFAULT NULL,
  `regex` varchar(255) DEFAULT NULL,
  `mensaje_error` varchar(100) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  `campo_encuesta_padre_id` int(11) DEFAULT NULL,
  `condicional` int(2) DEFAULT NULL,
  PRIMARY KEY (`campo_encuesta_id`),
  KEY `FK1_TCF_encuesta` (`encuesta_id`),
  KEY `FK1_TCF_tipo_campo` (`tipo_campo_id`),
  CONSTRAINT `FK1_encuesta` FOREIGN KEY (`encuesta_id`) REFERENCES `tr_encuesta` (`encuesta_id`),
  CONSTRAINT `FK1_tipo_encuesta` FOREIGN KEY (`tipo_campo_id`) REFERENCES `cat_tipo_campo` (`tipo_campo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `tr_reactivos_campo_encuesta`;

CREATE TABLE `tr_reactivos_campo_encuesta` (
  `reactivo_campo_encuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `campo_encuesta_id` int(11) NOT NULL,
  `reactivo_desc` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reactivo_campo_encuesta_id`),
  KEY `FK1_RCE_encuesta` (`campo_encuesta_id`),
  CONSTRAINT `FK1_RCE_encuesta` FOREIGN KEY (`campo_encuesta_id`) REFERENCES `tr_campo_encuesta` (`campo_encuesta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `inter_encuesta_persona`;

CREATE TABLE `inter_encuesta_persona` (
  `encuesta_persona_id` int(11) NOT NULL AUTO_INCREMENT,
  `encuesta_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`encuesta_persona_id`),
  KEY `FK1_IFA_persona` (`persona_id`),
  KEY `FK2_IFA_documento` (`encuesta_id`),
  CONSTRAINT `FK1_IFA_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK2_IFA_encuesta` FOREIGN KEY (`encuesta_id`) REFERENCES `tr_encuesta` (`encuesta_id`)
) ENGINE=InnoDB auto_increment=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `inter_campo_persona`;

CREATE TABLE `inter_campo_persona` (
  `campo_persona_id` int(11) NOT NULL AUTO_INCREMENT,
  `campo_encuesta_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `respuesta` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`campo_persona_id`),
  KEY `FK1_ICA_persona` (`persona_id`),
  KEY `FK2_ICA_documento` (`campo_encuesta_id`),
  CONSTRAINT `FK1_ICA_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK2_ICA_campo_encuesta` FOREIGN KEY (`campo_encuesta_id`) REFERENCES `tr_campo_encuesta` (`campo_encuesta_id`)
) ENGINE=InnoDB auto_increment=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `tr_switch_encuesta`;

  CREATE TABLE `tr_switch_encuesta` (
    `switch_encuesta_id` int(11) NOT NULL AUTO_INCREMENT,
    `encuesta_id` int(11) NOT NULL,
    `fecha_inicio` datetime NULL,
    `fecha_fin` datetime NULL,
    `asignatura_grupo_id` int(11) NULL,
    `grupo_id` int(11)  NULL,
    `orden_asignatura_id` int(11)  NULL,
    `plan_orden_id` int(11)  NULL,
    `plan_estudios_id` int(11)  NULL,
    `carrera_id` int(11)  NULL,
    `rol_id` int(11)  NULL,
    `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    `estatus` int(1) DEFAULT NULL,
    PRIMARY KEY (`switch_encuesta_id`),
    KEY `FK1_switch_encuesta` (`encuesta_id`),
    CONSTRAINT `FK1_switch_encuesta` FOREIGN KEY (`encuesta_id`) REFERENCES `tr_encuesta` (`encuesta_id`)
  ) ENGINE=InnoDB auto_increment=1 DEFAULT CHARSET=utf8;



--------------- inter_encuesta_persona--------------------------

alter table inter_encuesta_persona drop foreign FK2_IFA_switch;	

alter table inter_encuesta_persona add switch_encuesta_id int(11) after encuesta_id;

alter table inter_encuesta_persona add constraint 
FK2_IFA_switch foreign key(switch_encuesta_id) references tr_switch_encuesta (switch_encuesta_id) on delete cascade;



