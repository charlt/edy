ALTER TABLE tr_actividad ADD unica int(1) AFTER ponderacion;
update tr_actividad set unica = 1 where final = 2;
update tr_actividad set fecha_inicio = null where fecha_inicio = '0000-00-00 00:00:00';
update tr_actividad set fecha_fin = null where fecha_fin = '0000-00-00 00:00:00';
ALTER TABLE tr_actividad CHANGE COLUMN final importancia_actividad_id int(11);
ALTER TABLE cat_tipos_actividad CHANGE COLUMN final unica int(11);
ALTER TABLE cat_tipos_actividad ADD importancia_actividad int(1) default 0 after unica;

update cat_tipos_actividad set importancia_actividad = 1 where tipo_actividad_id = 2;

DROP TABLE IF EXISTS `cat_importancia_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_importancia_actividad` (
  `importancia_actividad_id` int(11) NOT NULL AUTO_INCREMENT,
  `importancia_actividad_clave` varchar(50) DEFAULT NULL,
  `importancia_actividad_nombre` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`importancia_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


insert into `cat_importancia_actividad` VALUES
(1,'n','Normal','2019-07-16 13:47:27.0','2020-02-06 13:49:21.0',NULL,NULL,1)
,(2,'ex','Examen','2019-07-16 13:47:27.0','2020-02-06 13:49:07.0',NULL,NULL,1)
,(3,'py','Proyecto','2019-07-16 13:47:27.0','2020-02-06 13:49:07.0',NULL,NULL,1);

update tr_actividad set importancia_actividad_id = 1 where 1;

ALTER TABLE `tr_actividad` ADD CONSTRAINT fk_cat_importancia_actividad FOREIGN KEY (`importancia_actividad_id`) REFERENCES `cat_importancia_actividad`(`importancia_actividad_id`);