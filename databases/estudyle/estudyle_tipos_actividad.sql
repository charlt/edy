

alter table cat_tipos_actividad add tipo_evaluacion int(1) after tipo_actividad_nombre;

alter table cat_tipos_actividad add bullet int(1) after tipo_evaluacion;

alter table cat_tipos_actividad add aleatorio int(1) after bullet;

alter table cat_tipos_actividad add num_intentos int(1) after aleatorio;

alter table cat_tipos_actividad add metodo_resolucion int(1) after num_intentos;

alter table cat_tipos_actividad add ponderacion int(1) after metodo_resolucion;

alter table cat_tipos_actividad add dificultad int(1) after ponderacion;

alter table cat_tipos_actividad add final int(1) after dificultad;

alter table cat_tipos_actividad add portafolio int(1) after dificultad;

alter table cat_tipo_pregunta add reactivos int(1) after tipo_actividad_id;

SET FOREIGN_KEY_CHECKS=0;

truncate table cat_tipos_actividad;

insert into cat_tipos_actividad  (tipo_actividad_clave,tipo_actividad_nombre,tipo_evaluacion,bullet,aleatorio,num_intentos,metodo_resolucion,ponderacion,dificultad,`final`,portafolio,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('1','Contenido',0,0,0,0,0,0,0,0,0,'2019-07-16 13:48:17.0','2020-02-06 13:26:03.0',NULL,NULL,1)
,('2','Ejercicio',1,1,1,1,1,1,0,1,1,'2019-07-16 13:48:17.0','2020-02-06 13:26:03.0',NULL,NULL,1)
,('3','Portafolio de evidencias',1,0,0,0,0,1,0,1,1,'2019-07-16 13:48:17.0','2020-02-06 13:26:10.0',NULL,NULL,1)
,('4','Ejercicio SQA',1,1,0,0,0,1,0,1,1,'2019-07-16 13:48:17.0','2020-02-06 13:26:03.0',NULL,NULL,1)
;



LOCK TABLES `cat_tipo_pregunta` WRITE;
truncate table cat_tipo_pregunta;
/*!40000 ALTER TABLE `cat_tipo_pregunta` DISABLE KEYS */;
INSERT INTO cat_tipo_pregunta (tipo_pregunta_id,tipo_pregunta_clave,tipo_pregunta_nombre,tipo_actividad_id,reactivos,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
(1,'pa','Pregunta Abierta',2,0,'2019-07-16 13:47:27.0','2020-02-06 13:49:21.0',NULL,NULL,1)
,(2,'om','Pregunta Opción Múltiple',2,1,'2019-07-16 13:47:27.0','2020-02-06 13:49:07.0',NULL,NULL,1)
,(3,'rc','Pregunta Relación Columnas',2,1,'2019-07-16 13:47:27.0','2020-02-06 13:49:07.0',NULL,NULL,1)
,(4,'zi','Pregunta Zona de Imágenes',2,1,'2019-08-03 05:24:44.0','2020-02-06 13:49:07.0',NULL,NULL,1)
,(5,'dd','Pregunta Ordena Drag & Drop',2,1,'2019-08-03 06:38:06.0','2020-02-06 13:49:07.0',NULL,NULL,1)
,(6,'qq','Pregunta PNI|QQQ',2,0,'2019-08-03 07:20:20.0','2020-02-06 13:49:21.0',NULL,NULL,1)
,(7,'sq','Pregunta SQA|RA-P-RP',4,0,'2019-08-15 04:20:42.0','2020-02-06 13:49:21.0',NULL,NULL,1)
,(8,'cc','Cuadro Comparativo',2,0,'2019-08-15 04:49:45.0','2020-02-06 13:49:21.0',NULL,NULL,1)
,(9,'mc','Mapa Cognitivo',2,0,'2019-08-15 05:05:43.0','2020-02-06 13:49:21.0',NULL,NULL,1)
;
INSERT INTO cat_tipo_pregunta (tipo_pregunta_id,tipo_pregunta_clave,tipo_pregunta_nombre,tipo_actividad_id,reactivos,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
(10,'fr','Foro',2,0,'2019-09-09 01:59:39.0','2020-02-06 13:49:21.0',NULL,NULL,1)
,(11,'ad','Pregunta de archivo adjunto ',2,0,'2019-09-10 12:23:14.0','2020-02-06 13:49:21.0',NULL,NULL,1)
;
/*!40000 ALTER TABLE `cat_tipo_pregunta` ENABLE KEYS */;
UNLOCK TABLES;
SET FOREIGN_KEY_CHECKS=1;

