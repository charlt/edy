-- MySQL dump 10.17  Distrib 10.3.16-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: estudyle
-- ------------------------------------------------------
-- Server version	10.3.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cat_dificultad`
--


DROP TABLE IF EXISTS `cat_estatus_materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_estatus_materia` (
  `estatus_materia_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave_estatus_materia` varchar(20) DEFAULT NULL,
  `descripcion_estatus_materia` varchar(255) DEFAULT NULL,
  `validacion` int(1),
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`estatus_materia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `cat_estatus_materia` WRITE;
/*!40000 ALTER TABLE `cat_estatus_materia` DISABLE KEYS */; 
INSERT INTO cat_estatus_materia (clave_estatus_materia,descripcion_estatus_materia,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('a','Activo','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('f','Finalizado','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('re','Revisión','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('ua','única actividad','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('fua','Finalizado única actividad','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('i','Incompleto','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('ra','Registrado por el administrador','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_estatus_materia` ENABLE KEYS */;
UNLOCK TABLES;



DROP TABLE IF EXISTS `cat_dificultad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_dificultad` (
  `dificultad_id` int(11) NOT NULL AUTO_INCREMENT,
  `dificultad_clave` varchar(50) DEFAULT NULL,
  `dificultad_nombre` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`dificultad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_dificultad`
--

LOCK TABLES `cat_dificultad` WRITE;
/*!40000 ALTER TABLE `cat_dificultad` DISABLE KEYS */;
INSERT INTO `cat_dificultad` VALUES (0,'NA','No Aplica','2019-07-28 03:43:15','2019-07-28 03:43:23',NULL,NULL,1),(1,'F','Fácil','2019-07-16 13:36:36','2019-07-16 13:36:36',NULL,NULL,1),(2,'M','Medio','2019-07-16 13:36:36','2019-07-16 13:36:36',NULL,NULL,1),(3,'MF','Medio fácil','2019-07-16 13:36:36','2019-07-16 13:36:36',NULL,NULL,1),(4,'MD','Medio difícil','2019-07-16 13:36:36','2019-07-16 13:36:36',NULL,NULL,1),(5,'D','Difícil','2019-07-16 13:36:36','2019-07-16 13:36:36',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_dificultad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_estatus_actividad`
--

DROP TABLE IF EXISTS `cat_estatus_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_estatus_actividad` (
  `estatus_actividad_id` int(11) NOT NULL AUTO_INCREMENT,
  `estatus_actividad_clave` varchar(50) DEFAULT NULL,
  `estatus_actividad` varchar(255) DEFAULT NULL,
  `icono` varchar(50) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estatus_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_estatus_actividad`
--

LOCK TABLES `cat_estatus_actividad` WRITE;
/*!40000 ALTER TABLE `cat_estatus_actividad` DISABLE KEYS */;
INSERT INTO `cat_estatus_actividad` VALUES (0,'na','no aplica','','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(1,'br','Borrador','fa-pencil','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(2,'cs','Evaluado por el sistema','fa-check','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(3,'pr','Pendiente de revisión','fa-pencil-square-o','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(4,'cp','Evaluado por el profesor','fa-check','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(5,'cor','Requiere corrección','fa-exclamation-triangle','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(6,'inv','Actividad inválida','fa-times','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(7,'pl','Portafolio listo','fa-file','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(8,'cl','Contenido leído','fa-check','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(9,'rd','Registro por el docente','fa-check','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(10,'ra','Registrado por el administrador','fa-check','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_estatus_actividad` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `cat_estatus_tema`
--

DROP TABLE IF EXISTS `cat_estatus_tema`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_estatus_tema` (
  `estatus_tema_id` int(11) NOT NULL AUTO_INCREMENT,
  `estatus_tema_clave` varchar(50) DEFAULT NULL,
  `estatus_tema_nombre` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estatus_tema_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_estatus_tema`
--

LOCK TABLES `cat_estatus_tema` WRITE;
/*!40000 ALTER TABLE `cat_estatus_tema` DISABLE KEYS */;
INSERT INTO `cat_estatus_tema` VALUES (0,'NA','No Aplica','2019-09-09 02:27:17','2019-09-09 02:27:23',NULL,NULL,1),(1,'A','ABIERTO','2019-09-09 02:26:58','2019-09-09 02:26:58',NULL,NULL,1),(2,'C','CERRADO','2019-09-09 02:26:58','2019-09-09 02:26:58',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_estatus_tema` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `cat_importancia_actividad`
--
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

--
-- Table structure for table `cat_metodos_resolver`
--

DROP TABLE IF EXISTS `cat_metodos_resolver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_metodos_resolver` (
  `metodo_resolver_id` int(11) NOT NULL AUTO_INCREMENT,
  `metodo_resolver_clave` varchar(50) DEFAULT NULL,
  `metodo_resolver` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`metodo_resolver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_metodos_resolver`
--

LOCK TABLES `cat_metodos_resolver` WRITE;
/*!40000 ALTER TABLE `cat_metodos_resolver` DISABLE KEYS */;
INSERT INTO `cat_metodos_resolver` VALUES (0,'na','No aplica','2019-08-29 11:14:37','2019-08-29 11:14:44',NULL,NULL,1),(1,'I','Individual','2019-08-29 11:15:18','2019-08-29 11:15:18',NULL,NULL,1),(2,'E','Equipo','2019-08-29 11:15:18','2019-08-29 11:15:18',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_metodos_resolver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_modulos`
--

DROP TABLE IF EXISTS `cat_modulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_modulos` (
  `modulo_padre_id` int(11) DEFAULT NULL,
  `modulo_id` int(11) NOT NULL AUTO_INCREMENT,
  `modulo_numero` int(11) NOT NULL,
  `modulo_nombre` varchar(255) DEFAULT NULL,
  `modulo_descripcion` varchar(255) DEFAULT NULL,
  `modulo_numero_mostrar` int(2) DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`modulo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_modulos`
--

LOCK TABLES `cat_modulos` WRITE;
/*!40000 ALTER TABLE `cat_modulos` DISABLE KEYS */;
INSERT INTO `cat_modulos` VALUES (NULL,0,0,'No aplica',NULL,NULL,NULL,NULL,'2019-07-28 08:40:26','2019-07-28 08:40:26',NULL,NULL,0),(NULL,1,1,'Modulo Conocimento General','Modulo de Prueba',NULL,NULL,NULL,'2019-07-28 08:40:12','2019-07-28 08:40:12',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_modulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipo_pregunta`
--

DROP TABLE IF EXISTS `cat_tipo_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_pregunta` (
  `tipo_pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_pregunta_clave` varchar(50) NOT NULL,
  `tipo_pregunta_nombre` varchar(255) DEFAULT NULL,
  `tipo_actividad_id` int(2) NOT NULL,
  `reactivos` int(1),
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipo_pregunta`
--

LOCK TABLES `cat_tipo_pregunta` WRITE;
/*!40000 ALTER TABLE `cat_tipo_pregunta` DISABLE KEYS */;
INSERT INTO `cat_tipo_pregunta` VALUES 
(0,'na','No Aplica',0,0,'2019-07-28 03:44:41','2019-08-02 06:43:06',NULL,NULL,0)
,(1,'pa','Pregunta Abierta',2,0,'2019-07-16 13:47:27.0','2020-02-06 13:49:21.0',NULL,NULL,1)
,(2,'om','Pregunta Opción Múltiple',2,1,'2019-07-16 13:47:27.0','2020-02-06 13:49:07.0',NULL,NULL,1)
,(3,'rc','Pregunta Relación Columnas',2,1,'2019-07-16 13:47:27.0','2020-02-06 13:49:07.0',NULL,NULL,1)
,(4,'zi','Pregunta Zona de Imágenes',2,1,'2019-08-03 05:24:44.0','2020-02-06 13:49:07.0',NULL,NULL,0)
,(5,'dd','Pregunta Ordena Drag & Drop',2,1,'2019-08-03 06:38:06.0','2020-02-06 13:49:07.0',NULL,NULL,0)
,(6,'qq','Pregunta PNI|QQQ',2,0,'2019-08-03 07:20:20.0','2020-02-06 13:49:21.0',NULL,NULL,0)
,(7,'sq','Pregunta SQA|RA-P-RP',4,0,'2019-08-15 04:20:42.0','2020-02-06 13:49:21.0',NULL,NULL,0)
,(8,'cc','Cuadro Comparativo',2,0,'2019-08-15 04:49:45.0','2020-02-06 13:49:21.0',NULL,NULL,0)
,(9,'mc','Mapa Cognitivo',2,0,'2019-08-15 05:05:43.0','2020-02-06 13:49:21.0',NULL,NULL,0)
,(10,'fr','Foro',2,0,'2019-09-09 01:59:39.0','2020-02-06 13:49:21.0',NULL,NULL,1)
,(11,'ad','Pregunta de archivo adjunto ',2,0,'2019-09-10 12:23:14.0','2020-02-06 13:49:21.0',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_tipo_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipos_actividad`
--

DROP TABLE IF EXISTS `cat_tipos_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipos_actividad` (
  `tipo_actividad_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_actividad_clave` varchar(50) DEFAULT NULL,
  `tipo_actividad_nombre` varchar(255) DEFAULT NULL,
  `tipo_evaluacion` int(1),
  `bullet` int(1),
  `aleatorio` int(1),
  `num_intentos` int(1),
  `metodo_resolucion` int(1),
  `ponderacion` int(1),
  `dificultad` int(1),
  `unica` int(1),
  `importancia_actividad` int(1),
  `portafolio` int(1),
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Dumping data for table `cat_tipos_actividad`
--

LOCK TABLES `cat_tipos_actividad` WRITE;
/*!40000 ALTER TABLE `cat_tipos_actividad` DISABLE KEYS */;
insert into `cat_tipos_actividad` VALUES
(0,'0','No Aplica',0,0,0,0,0,0,0,0,0,0,'2019-07-28 03:45:20','2019-07-28 03:45:25',NULL,NULL,0)
,(1,'1','Contenido/lectura',0,0,0,0,0,0,0,0,0,0,'2019-07-16 13:48:17.0','2020-02-06 13:26:03.0',NULL,NULL,1)
,(2,'2','Ejercicio/evaluación/examen',1,1,1,1,1,1,0,1,1,1,'2019-07-16 13:48:17.0','2020-02-06 13:26:03.0',NULL,NULL,1)
,(3,'3','Portafolio de evidencias',1,0,0,0,0,1,0,1,1,1,'2019-07-16 13:48:17.0','2020-02-06 13:26:10.0',NULL,NULL,0)
,(4,'4','Ejercicio SQA',1,1,0,0,0,1,0,1,1,1,'2019-07-16 13:48:17.0','2020-02-06 13:26:03.0',NULL,NULL,0)
,(5,'5','Calificación final Bloque',0,0,0,0,0,0,0,0,0,0,'2019-07-16 13:48:17.0','2020-02-06 13:26:03.0',NULL,NULL,0);
/*!40000 ALTER TABLE `cat_tipos_actividad` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `cat_tipo_materia`
--


DROP TABLE IF EXISTS `cat_tipo_materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_materia` (
  `tipo_materia_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave_tipo_materia` varchar(20) DEFAULT NULL,
  `descripcion_tipo_materia` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`tipo_materia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



LOCK TABLES `cat_tipo_materia` WRITE;
/*!40000 ALTER TABLE `cat_tipo_materia` DISABLE KEYS */;
INSERT INTO cat_tipo_materia (clave_tipo_materia,descripcion_tipo_materia,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('ord','Ordinaria','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('re','Recursamiento','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('ex','Extraordinario','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1)
,('es','Especial','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_tipo_materia` ENABLE KEYS */;
UNLOCK TABLES;




--
-- Table structure for table `tr_materia`
--

DROP TABLE IF EXISTS `tr_materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_materia` (
  `materia_id` int(11) AUTO_INCREMENT,
  `alumno_id` int(11) NOT NULL,
  `asignatura_grupo_id` int(11) NOT NULL,
  `tipo_materia_id` int(11) default 1,
  `estatus_materia_id` int(11) DEFAULT NULL,
  `calificacion` decimal(4,2) DEFAULT NULL, 
  `usuario_creacion` varchar(100) DEFAULT NULL,
  `usuario_actualiza` varchar(100) DEFAULT NULL,  
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`materia_id`),
  KEY `FK1_IAIA_Alumno` (`alumno_id`),
  KEY `FK3_IAIA_Asignatura_grupo` (`asignatura_grupo_id`),
  KEY `FK4_IAIA_Estatus` (`estatus_materia_id`),
  KEY `FK5_IAIA_tipo` (`tipo_materia_id`),  
  CONSTRAINT `FK1_IAIA_Alumno` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`),
  CONSTRAINT `FK3_IAIA_Asignatura_grupo` FOREIGN KEY (`asignatura_grupo_id`) REFERENCES `estudyce`.`inter_asignatura_grupo` (`asignatura_grupo_id`),
  CONSTRAINT `FK4_IAIA_Estatus` FOREIGN KEY (`estatus_materia_id`) REFERENCES `cat_estatus_materia` (`estatus_materia_id`),
  constraint FK5_IAIA_tipo foreign key(tipo_materia_id) references cat_tipo_materia(tipo_materia_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `tr_materia` WRITE;
/*!40000 ALTER TABLE `tr_materia` DISABLE KEYS */;
INSERT INTO `tr_materia` (materia_id,alumno_id,asignatura_grupo_id,fecha_creacion,fecha_actualiza,estatus) VALUES
	(0,1,1,'2019-10-15 14:18:41.0','2019-10-15 14:18:41.0',0),
	(1,1,1,'2019-10-15 14:18:41.0','2019-10-15 14:18:41.0',1);
UNLOCK TABLES;

--
-- Table structure for table `inter_modulos_asignaturas`
--

DROP TABLE IF EXISTS `inter_modulos_asignaturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_modulos_asignaturas` (
  `modulo_id` int(11) NOT NULL,
  `asignatura_id` int(11) NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`modulo_id`,`asignatura_id`),
  KEY `FK2_InterMA_Asignatura` (`asignatura_id`),
  CONSTRAINT `FK1_InterMA_Modulo` FOREIGN KEY (`modulo_id`) REFERENCES `cat_modulos` (`modulo_id`),
  CONSTRAINT `FK2_InterMA_Asignatura` FOREIGN KEY (`asignatura_id`) REFERENCES `estudydg`.`cat_asignaturas` (`asignatura_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `inter_modulos_asignaturas_grupo`
--
DROP TABLE IF EXISTS `inter_modulos_asignatura_grupo`;


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
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `inter_modulos_materia`
--


DROP TABLE IF EXISTS `inter_modulos_materia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_modulos_materia` (
  `modulo_id` int(11) NOT NULL,
  `materia_id` int(11) NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`modulo_id`,`materia_id`),
  KEY `FK1_InterMM_Modulo` (`modulo_id`),
  KEY `FK2_InterMM_Materia` (`materia_id`),
  CONSTRAINT `FK1_InterMM_Modulo` FOREIGN KEY (`modulo_id`) REFERENCES `cat_modulos` (`modulo_id`),
  CONSTRAINT `FK2_InterMM_Materia` FOREIGN KEY (`materia_id`) REFERENCES `tr_materia` (`materia_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_modulos_asignaturas`
--

LOCK TABLES `inter_modulos_asignaturas` WRITE;
/*!40000 ALTER TABLE `inter_modulos_asignaturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_modulos_asignaturas` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `tr_rubrica``
--

DROP TABLE IF EXISTS `tr_rubrica`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_rubrica`(
`rubrica_id` int(11) not null auto_increment,
`desc_rubrica` varchar(100) default null,
`numero_elementos` int(1) not null,
`numero_categorias` int(1) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`rubrica_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



LOCK TABLES `tr_rubrica` WRITE;
/*!40000 ALTER TABLE `tr_rubrica` DISABLE KEYS */;
INSERT INTO tr_rubrica (desc_rubrica,numero_elementos,numero_categorias,fecha_creacion,fecha_actualiza,estatus) VALUES 
('Rúbrica para foro',4,4,'2020-07-31 18:09:03.000','2020-07-31 18:09:03.000',1)
,('Rúbrica para ensayos',6,6,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,('Rúbrica para esquemas',6,5,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
;
/*!40000 ALTER TABLE `tr_rubrica` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `tr_actividad`
--

DROP TABLE IF EXISTS `tr_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_actividad` (
  `actividad_padre_id` int(11) DEFAULT NULL,
  `actividad_id` int(11) NOT NULL AUTO_INCREMENT,
  `actividad_clave` varchar(50) DEFAULT NULL,
  `actividad_nombre` varchar(255) DEFAULT NULL,
  `dificultad_id` int(11) NOT NULL,
  `tipo_actividad_id` int(11) NOT NULL,
  `modulo_id` int(11) NOT NULL,
  `metodo_resolver_id` int(11) DEFAULT NULL,
  `importancia_actividad_id` int(11) DEFAULT NULL,
  `numero_mostrado` int(2) DEFAULT NULL,
  `instruccion` mediumtext DEFAULT NULL,
  `ponderacion` decimal(5,2) DEFAULT NULL,
  `num_intentos` int(2) DEFAULT NULL,  
  `num_total_preguntas` int(3) DEFAULT NULL COMMENT 'Numero de preguntas en nuestro banco',
  `num_preguntas_mostrar` int(2) DEFAULT NULL COMMENT 'Numero de preguntas que se mostrarán del banco, si num_total_preguntas != de num_preguntas_mostrar verificar los datos de actividad_has_numpreguntas',
  `aleatorio` tinyint(1) DEFAULT NULL COMMENT '1- se revuelven las preguntas, 0 se considera el orden de la columna orden',
  `unica` tinyint(1) DEFAULT NULL COMMENT '1- está es la actividad única, 0 es una actividad normal',
  `portafolio` tinyint(1) DEFAULT NULL COMMENT '1- esta actividad es disponible para el portafolio, 0 es una actividad no disponible para el portafolio',
  `orden` int(2) DEFAULT NULL COMMENT 'es el orden en que se mostrarán las actividades',
  `tipo_calificacion` int(1) DEFAULT NULL COMMENT '1 pago normal, 2 Rúbrica,3 ponderación manual',
  `rubrica_id` int(11)  NULL COMMENT 'Numero de rubrica a la que pertenece',
  `visible` int(1)  default 1,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`actividad_id`),
  KEY `FK1_ActvidadDificultad` (`dificultad_id`),
  KEY `FK2_ActividadTipoactividad` (`tipo_actividad_id`),
  KEY `FK3_ActividadModulo` (`modulo_id`),
  KEY `FK4_MetodoResolverActividad` (`metodo_resolver_id`),
  KEY `FK5_rubricaActividad` (`rubrica_id`),
  KEY `FK6_ImportanciaActividad` (`importancia_actividad_id`),
  CONSTRAINT `FK1_ActvidadDificultad` FOREIGN KEY (`dificultad_id`) REFERENCES `cat_dificultad` (`dificultad_id`),
  CONSTRAINT `FK2_ActividadTipoactividad` FOREIGN KEY (`tipo_actividad_id`) REFERENCES `cat_tipos_actividad` (`tipo_actividad_id`),
  CONSTRAINT `FK3_ActividadModulo` FOREIGN KEY (`modulo_id`) REFERENCES `cat_modulos` (`modulo_id`),
  CONSTRAINT `FK4_MetodoResolverActividad` FOREIGN KEY (`metodo_resolver_id`) REFERENCES `cat_metodos_resolver` (`metodo_resolver_id`),
  CONSTRAINT `FK5_ActividadRubrica` FOREIGN KEY (`rubrica_id`) REFERENCES `tr_rubrica` (`rubrica_id`),
  CONSTRAINT `FK6_ImportanciaActividad` FOREIGN KEY (`importancia_actividad_id`) REFERENCES `cat_importancia_actividad` (`importancia_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `tr_rb_categoria`
--

DROP TABLE IF EXISTS `tr_rb_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_rb_categoria`(
`categoria_id` int(11) not null auto_increment,
`rubrica_id` int(11) not null,
`categoria_desc` varchar(100) not null,
`porcentaje` int(3) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`categoria_id`),
key `FK1_rubrica` (`rubrica_id`),
constraint `FK1_rubrica_categoria` foreign key (`rubrica_id`) references `tr_rubrica` (`rubrica_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



LOCK TABLES `tr_rb_categoria` WRITE;
/*!40000 ALTER TABLE `tr_rb_categoria` DISABLE KEYS */;
INSERT INTO tr_rb_categoria (rubrica_id,categoria_desc,porcentaje,fecha_creacion,fecha_actualiza,estatus) VALUES 
(1,'Estructura lógica',30,'2020-07-31 18:09:03.000','2020-07-31 18:09:03.000',1)
,(1,'Congruencia',30,'2020-07-31 18:09:03.000','2020-07-31 18:09:03.000',1)
,(1,'Ortografía y redacción',25,'2020-07-31 18:09:03.000','2020-07-31 18:09:03.000',1)
,(1,'Presentación',15,'2020-07-31 18:09:03.000','2020-07-31 18:09:03.000',1)
,(2,'Estructura lógica',30,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(2,'Pertinencia',20,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(2,'Originalidad',20,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(2,'Aparato crítico',15,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(2,'Redacción y ortografía',10,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(2,'Presentación',5,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(3,'Estructura Conceptual',35,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
,(3,'Pertinencia',25,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
,(3,'Originalidad',20,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
,(3,'Ortografía y redacción',10,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
,(3,'Presentación',10,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1);
/*!40000 ALTER TABLE `tr_rb_categoria` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `tr_rb_elemento`
--

DROP TABLE IF EXISTS `tr_rb_elemento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_rb_elemento`(
`elemento_id` int(11) not null auto_increment,
`rubrica_id` int(11) not null,
`elemento_desc` varchar(100) not null,
`porcentaje` int(3) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`elemento_id`),
key `FK1_rubrica` (`rubrica_id`),
constraint `FK1_rubrica_elemento` foreign key (`rubrica_id`) references `tr_rubrica` (`rubrica_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



LOCK TABLES `tr_rb_elemento` WRITE;
/*!40000 ALTER TABLE `tr_rb_elemento` DISABLE KEYS */;
INSERT INTO tr_rb_elemento (rubrica_id,elemento_desc,porcentaje,fecha_creacion,fecha_actualiza,estatus) VALUES 
(1,'Muy bien',100,'2020-07-31 18:09:03.000','2020-07-31 18:09:03.000',1)
,(1,'Bien',80,'2020-07-31 18:09:03.000','2020-07-31 18:09:03.000',1)
,(1,'Suficiente',60,'2020-07-31 18:09:03.000','2020-07-31 18:09:03.000',1)
,(1,'Deficiente',40,'2020-07-31 18:09:03.000','2020-07-31 18:09:03.000',1)
,(2,'Muy bien',100,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(2,'Bien',80,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(2,'Suficiente',60,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(2,'Deficiente',40,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(2,'Muy deficiente',20,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(2,'Nulo',0,'2020-07-31 19:02:17.000','2020-07-31 19:02:17.000',1)
,(3,'Muy bien',100,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
,(3,'Bien',80,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
,(3,'Suficiente',60,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
,(3,'Deficiente',40,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
,(3,'Muy deficiente',20,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
,(3,'Nulo',0,'2020-07-31 19:13:20.000','2020-07-31 19:13:20.000',1)
;
/*!40000 ALTER TABLE `tr_rb_elemento` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `tr_rb_respuesta`
--

DROP TABLE IF EXISTS `tr_rb_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_rb_respuesta`(
`respuesta_id` int(11) not null auto_increment,
`elemento_id` int(11) not null,
`categoria_id` int(11) not null,
`celda` text not null,
`valor` decimal(5,2) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`respuesta_id`),
key `FK1_TRR_elemento` (`elemento_id`),
key `FK1_TRR_categoria` (`categoria_id`),
constraint `FK1_TRR_elemento` foreign key (`elemento_id`) references `tr_rb_elemento` (`elemento_id`),
constraint `FK1_TRR_categoria` foreign key (`categoria_id`) references `tr_rb_categoria` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;





LOCK TABLES `tr_rb_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_rb_respuesta` DISABLE KEYS */;
INSERT INTO tr_rb_respuesta (elemento_id,categoria_id,celda,valor,fecha_creacion,fecha_actualiza,estatus) VALUES 
(1,1,'Presenta una secuencia clara y un orden riguroso en el planteamiento general de las ideas',30.00,'2020-07-31 18:09:56.000','2020-07-31 18:09:56.000',1)
,(2,1,'Sigue cierto orden en el planteamiento general de las ideas, aunque no es del todo claro',24.00,'2020-07-31 18:09:57.000','2020-07-31 18:09:57.000',1)
,(3,1,'Muestra rasgos básicos de ilación lógica en las ideas, pero con algunas partes confusas',18.00,'2020-07-31 18:09:57.000','2020-07-31 18:09:57.000',1)
,(4,1,'No sigue un orden claro y las ideas carecen de ilación lógica en general',12.00,'2020-07-31 18:10:00.000','2020-07-31 18:10:00.000',1)
,(1,2,'Presenta una correcta jerarquización y definición de las ideas y una secuencia conceptual clara, lo cual facilita su análisis y defensa',30.00,'2020-07-31 18:10:24.000','2020-07-31 18:10:24.000',1)
,(2,2,'La propuesta es lógica y conceptualmente acertada, aunque algunas ideas no se han explicado suficientemente',24.00,'2020-07-31 18:10:24.000','2020-07-31 18:10:24.000',1)
,(3,2,'Los conceptos son todos compatibles entre sí, pero no siempre han sido claramente definidos o explicados',18.00,'2020-07-31 18:10:24.000','2020-07-31 18:10:24.000',1)
,(4,2,'Los conceptos no se han definido y por ende su interrelación tampoco resulta clara',12.00,'2020-07-31 18:10:25.000','2020-07-31 18:10:25.000',1)
,(1,3,'Redacción clara y apegada a las normas de la RAE, sin faltas de ortografía',25.00,'2020-07-31 18:10:57.000','2020-07-31 18:10:57.000',1)
,(2,3,'Redacción clara y apegada a las normas de la RAE, sin faltas de ortografía',20.00,'2020-07-31 18:10:58.000','2020-07-31 18:10:58.000',1)
,(3,3,'Redacción clara, pero con algunas faltas de ortografía o errores dactilográficos',15.00,'2020-07-31 18:10:58.000','2020-07-31 18:10:58.000',1)
,(4,3,'Redacción confusa, con abundantes faltas de ortografía',10.00,'2020-07-31 18:10:59.000','2020-07-31 18:10:59.000',1)
,(1,4,'El trabajo es limpio, y totalmente apropiado para un nivel superior',15.00,'2020-07-31 18:11:32.000','2020-07-31 18:11:32.000',1)
,(2,4,'El trabajo es limpio y académicamente adecuado',12.00,'2020-07-31 18:11:32.000','2020-07-31 18:11:32.000',1)
,(3,4,'El trabajo es limpio y presenta un estilo académicamente aceptable',9.00,'2020-07-31 18:11:33.000','2020-07-31 18:11:33.000',1)
,(4,4,'El trabajo no es limpio y no resulta académico',6.00,'2020-07-31 18:11:34.000','2020-07-31 18:11:34.000',1)
,(10,5,'El trabajo está completamente desestructurado y no ofrece un orden inteligible',0.00,'2020-07-31 19:02:52.000','2020-07-31 19:02:52.000',1)
,(9,5,'El trabajo no sigue un orden claro y las ideas carecen de ilación lógica en general',6.00,'2020-07-31 19:02:52.000','2020-07-31 19:02:52.000',1)
,(8,5,'El trabajo sigue un orden básico, pero las ideas planteadas son ambiguas en varios aspectos',12.00,'2020-07-31 19:02:53.000','2020-07-31 19:02:53.000',1)
,(7,5,'El trabajo muestra rasgos básicos de  ilación lógica en las ideas, pero con algunas partes confusas',18.00,'2020-07-31 19:02:53.000','2020-07-31 19:02:53.000',1)
,(6,5,'El trabajo sigue cierto orden en el planteamiento general de las ideas, aunque no es del todo claro',24.00,'2020-07-31 19:02:54.000','2020-07-31 19:02:54.000',1)
,(5,5,'El trabajo presenta una secuencia clara y un orden riguroso en el planteamiento general de las ideas',30.00,'2020-07-31 19:02:54.000','2020-07-31 19:02:54.000',1)
,(5,6,'El trabajo se ajusta completamente a lo previsto, y además supera las expectativas',20.00,'2020-07-31 19:03:30.000','2020-07-31 19:03:30.000',1)
,(6,6,'El trabajo se ajusta completamente a lo previsto, con una calidad aceptable',16.00,'2020-07-31 19:03:31.000','2020-07-31 19:03:31.000',1)
,(7,6,'El trabajo respeta los requerimientos mínimos indispensables',12.00,'2020-07-31 19:03:31.000','2020-07-31 19:03:31.000',1)
,(8,6,'Aunque el trabajo contiene los aspectos mínimos indispensables, su calidad es deficiente',8.00,'2020-07-31 19:03:32.000','2020-07-31 19:03:32.000',1)
,(9,6,'El trabajo no alcanza a cubrir los aspectos mínimos indispensables',4.00,'2020-07-31 19:03:33.000','2020-07-31 19:03:33.000',1)
,(10,6,'El trabajo no corresponde a lo solicitado',0.00,'2020-07-31 19:03:34.000','2020-07-31 19:03:34.000',1)
,(5,7,'El trabajo denota creatividad, innovación y uso de ideas nuevas (tres o más conceptos originales)',20.00,'2020-07-31 19:04:12.000','2020-07-31 19:04:12.000',1)
,(6,7,'El trabajo denota el uso de algunas ideas nuevas (uno o dos conceptos innovadores)',16.00,'2020-07-31 19:04:12.000','2020-07-31 19:04:12.000',1)
,(7,7,'El trabajo se apega a las instrucciones, pero sin aportar ideas nuevas',12.00,'2020-07-31 19:04:13.000','2020-07-31 19:04:13.000',1)
,(8,7,'El trabajo se ajusta sólo parcialmente a las instrucciones y no aporta ideas nuevas',8.00,'2020-07-31 19:04:14.000','2020-07-31 19:04:14.000',1)
,(9,7,'El trabajo no se ajusta a las instrucciones ni aporta ideas nuevas',4.00,'2020-07-31 19:04:14.000','2020-07-31 19:04:14.000',1)
,(10,7,'El trabajo fue plagiado parcial o totalmente (esta valoración descalificaría todos los demás rubros)',0.00,'2020-07-31 19:04:15.000','2020-07-31 19:04:15.000',1)
,(5,8,'El trabajo incluye un aparato crítico pertinente, que cumple con todas las normas establecidas por el sistema APA',15.00,'2020-07-31 19:05:12.000','2020-07-31 19:05:12.000',1)
,(6,8,'En general, el trabajo cumple con las normas de la APA, pero hay algunas imprecisiones mínimas en citas y referencias',12.00,'2020-07-31 19:05:12.000','2020-07-31 19:05:12.000',1)
,(7,8,'El trabajo contiene citas y referencias, pero éstas no se apegan necesariamente al sistema APA',9.00,'2020-07-31 19:05:13.000','2020-07-31 19:05:13.000',1)
,(8,8,'El trabajo está parcialmente citado, y no hay correspondencia estricta entre citas y referencias',6.00,'2020-07-31 19:05:13.000','2020-07-31 19:05:13.000',1)
,(9,8,'El trabajo presenta referencias (fuentes), pero no hay citas',3.00,'2020-07-31 19:05:14.000','2020-07-31 19:05:14.000',1)
,(10,8,'El trabajo carece de aparato crítico',0.00,'2020-07-31 19:05:14.000','2020-07-31 19:05:14.000',1)
,(10,9,'Redacción totalmente incomprensible',0.00,'2020-07-31 19:07:00.000','2020-07-31 19:07:00.000',1)
,(9,9,'Redacción confusa y con abundantes faltas de ortografía',2.00,'2020-07-31 19:07:00.000','2020-07-31 19:07:00.000',1)
,(8,9,'Redacción comprensible en lo general, pero con abundantes faltas de ortografía',4.00,'2020-07-31 19:07:01.000','2020-07-31 19:07:01.000',1)
,(7,9,'Redacción clara, con algunas fallas mínimas de ortografía',6.00,'2020-07-31 19:07:01.000','2020-07-31 19:07:01.000',1)
,(6,9,'Redacción clara, apegada a las normas de la RAE, sin faltas de ortografía, con un estilo sencillo, pero aceptable académicamente',8.00,'2020-07-31 19:07:02.000','2020-07-31 19:07:02.000',1)
,(5,9,'Redacción clara, apegada a las normas de la RAE, sin faltas de ortografía y con gran estilo académico',10.00,'2020-07-31 19:07:02.000','2020-07-31 19:07:02.000',1)
,(10,10,'El trabajo es totalmente inapropiado para un nivel superior',0.00,'2020-07-31 19:07:42.000','2020-07-31 19:07:42.000',1)
,(9,10,'El trabajo no se percibe limpio ni está ordenado y en general, no resulta académico',1.00,'2020-07-31 19:07:44.000','2020-07-31 19:07:44.000',1)
,(8,10,'El trabajo aparece poco limpio, poco ordenado y su calidad académica es discutible',2.00,'2020-07-31 19:07:44.000','2020-07-31 19:07:44.000',1)
,(7,10,'El trabajo se ve limpio y ordenado en general, pero no siempre presenta un estilo académicamente aceptable',3.00,'2020-07-31 19:07:45.000','2020-07-31 19:07:45.000',1)
,(6,10,'El trabajo aparece limpio y resulta académicamente adecuado, aunque podría mejorarse el orden',4.00,'2020-07-31 19:07:45.000','2020-07-31 19:07:45.000',1)
,(5,10,'El trabajo aparece limpio, ordenado y resulta totalmente apropiado para un nivel superior',5.00,'2020-07-31 19:07:46.000','2020-07-31 19:07:46.000',1)
,(16,11,'El trabajo está completamente desestructurado, no ofrece un orden inteligible y los conceptos son confusos e inapropiados',0.00,'2020-07-31 19:14:00.000','2020-07-31 19:14:00.000',1)
,(15,11,'El trabajo muestra una estructura confusa y los conceptos carecen de ilación lógica',7.00,'2020-07-31 19:14:01.000','2020-07-31 19:14:01.000',1)
,(14,11,'El trabajo muestra cierta estructura  lógica, pero la interrelación es ambigua en algunas partes y los términos no se han definido',14.00,'2020-07-31 19:14:02.000','2020-07-31 19:14:02.000',1)
,(13,11,'El trabajo muestra rasgos básicos tanto de estructura como de clasificación de los conceptos, pero éstos no han sido definidos apropiadamente',21.00,'2020-07-31 19:14:03.000','2020-07-31 19:14:03.000',1)
,(12,11,'El trabajo presenta una estructura lógica, aunque no están definidos todos los conceptos; el análisis es básico',28.00,'2020-07-31 19:14:04.000','2020-07-31 19:14:04.000',1)
,(11,11,'El trabajo presenta una estructura pertinente (orden jerárquico o secuencia conceptual) en la interrelación lógica de los conceptos, así como en su definición correspondiente, lo cual facilita el análisis',35.00,'2020-07-31 19:14:06.000','2020-07-31 19:14:06.000',1)
,(16,12,'El trabajo no corresponde a lo solicitado',0.00,'2020-07-31 19:15:11.000','2020-07-31 19:15:11.000',1)
,(15,12,'El trabajo no alcanza a cubrir los aspectos mínimos indispensables',5.00,'2020-07-31 19:15:13.000','2020-07-31 19:15:13.000',1)
,(14,12,'Aunque el trabajo contiene los aspectos mínimos indispensables, su calidad es deficiente',10.00,'2020-07-31 19:15:14.000','2020-07-31 19:15:14.000',1)
,(13,12,'El trabajo contiene los aspectos mínimos indispensables',15.00,'2020-07-31 19:15:16.000','2020-07-31 19:15:16.000',1)
,(12,12,'El trabajo se ajusta completamente a lo previsto, con una calidad aceptable',20.00,'2020-07-31 19:15:21.000','2020-07-31 19:15:21.000',1)
,(11,12,'El trabajo no sólo se ajusta completamente a lo previsto, sino que supera las expectativas',25.00,'2020-07-31 19:15:23.000','2020-07-31 19:15:23.000',1)
,(13,12,'El trabajo contiene los aspectos mínimos indispensables',15.00,'2020-07-31 19:15:25.000','2020-07-31 19:15:25.000',1)
,(11,13,'El trabajo denota creatividad, innovación y uso de ideas propias',20.00,'2020-07-31 19:16:10.000','2020-07-31 19:16:10.000',1)
,(12,13,'El trabajo denota el uso de algunas ideas propias',16.00,'2020-07-31 19:16:10.000','2020-07-31 19:16:10.000',1)
,(13,13,'El trabajo se apega a las instrucciones, sin aportar ideas propias',12.00,'2020-07-31 19:16:11.000','2020-07-31 19:16:11.000',1)
,(14,13,'El trabajo se ajusta parcialmente a las instrucciones y no aporta ideas propias',8.00,'2020-07-31 19:16:12.000','2020-07-31 19:16:12.000',1)
,(15,13,'El trabajo no se ajusta a las instrucciones',4.00,'2020-07-31 19:16:13.000','2020-07-31 19:16:13.000',1)
,(16,13,'El trabajo fue plagiado parcial o totalmente',0.00,'2020-07-31 19:16:14.000','2020-07-31 19:16:14.000',1)
,(16,15,'El trabajo es totalmente inapropiado para un nivel superior',0.00,'2020-07-31 19:18:49.000','2020-07-31 19:23:32.000',1)
,(15,15,'REl trabajo no es limpio y no resulta académico',2.00,'2020-07-31 19:18:50.000','2020-07-31 19:23:22.000',1)
,(14,15,'El trabajo es poco limpio y resulta poco académico',4.00,'2020-07-31 19:18:51.000','2020-07-31 19:23:13.000',1)
,(13,15,'El trabajo es limpio y presenta un estilo académicamente aceptable',6.00,'2020-07-31 19:18:52.000','2020-07-31 19:23:04.000',1)
,(12,15,'El trabajo es limpio y académicamente adecuado',8.00,'2020-07-31 19:18:54.000','2020-07-31 19:22:54.000',1)
,(11,15,'El trabajo es limpio, y totalmente apropiado para un nivel superior',10.00,'2020-07-31 19:18:55.000','2020-07-31 19:22:26.000',1)
,(11,14,'Redacción limpia y clara apegada a las normas de la RAE, sin faltas de ortografía e incluso presenta un estilo propio',10.00,'2020-07-31 19:19:44.000','2020-07-31 19:19:44.000',1)
,(12,14,'Redacción  limpia y clara apegada a las normas de la RAE, sin faltas de ortografía',8.00,'2020-07-31 19:19:45.000','2020-07-31 19:19:45.000',1)
,(13,14,'Redacción clara con algunas faltas de ortografía',6.00,'2020-07-31 19:19:46.000','2020-07-31 19:19:46.000',1)
,(14,14,'Redacción comprensible, con abundantes faltas de ortografía',4.00,'2020-07-31 19:19:47.000','2020-07-31 19:19:47.000',1)
,(15,14,'Redacción confusa con abundantes faltas de ortografía',2.00,'2020-07-31 19:19:48.000','2020-07-31 19:19:48.000',1)
,(16,14,'Redacción totalmente incomprensible o plagiada',0.00,'2020-07-31 19:19:49.000','2020-07-31 19:19:49.000',1)
,(11,15,'El trabajo es limpio, y totalmente apropiado para un nivel superior',10.00,'2020-07-31 19:20:27.000','2020-07-31 19:20:27.000',1)
,(12,15,'El trabajo es limpio y académicamente adecuado',8.00,'2020-07-31 19:20:27.000','2020-07-31 19:20:27.000',1)
,(13,15,'El trabajo es limpio y presenta un estilo académicamente aceptable',6.00,'2020-07-31 19:20:28.000','2020-07-31 19:20:28.000',1)
,(14,15,'El trabajo es poco limpio y resulta poco académico',4.00,'2020-07-31 19:20:29.000','2020-07-31 19:20:29.000',1)
,(15,15,'El trabajo no es limpio y no resulta académico',2.00,'2020-07-31 19:20:30.000','2020-07-31 19:20:30.000',1)
,(16,15,'El trabajo es totalmente inapropiado para un nivel superior',0.00,'2020-07-31 19:20:31.000','2020-07-31 19:20:31.000',1);
/*!40000 ALTER TABLE `tr_rb_respuesta` ENABLE KEYS */;
UNLOCK TABLES;




--
-- Table structure for table `inter_respuesta_docente`
--

DROP TABLE IF EXISTS `inter_respuesta_docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `inter_respuesta_docente`(
`respuesta_docente_id` int(11) not null auto_increment,
`respuesta_id` int(11) not null,
`docente_id` int(11) not null,
`materia_fecha_actividad_id` int(11) not null,
`valor` decimal(5,2) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`respuesta_docente_id`),
key `FK1_IRD_respuesta` (`respuesta_id`),
key `FK2_IRD_docente` (`docente_id`),
key `FK3_IRD_materia_fecha` (`materia_fecha_actividad_id`),
constraint `FK1_IRD_respuesta` foreign key (`respuesta_id`) references `tr_rb_respuesta` (`respuesta_id`),
constraint `FK2_IRD_docente` foreign key (`docente_id`) references `estudyce`.`tr_docente` (`docente_id`),
constraint `FK3_IRD_materia_fecha` foreign key (`materia_fecha_actividad_id`) references `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


--
-- Table structure for table `tr_objetivos_actividad`
--
DROP TABLE IF EXISTS `tr_objetivos_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_objetivos_actividad` (
  `objetivos_actividad_id` int(11) NOT NULL AUTO_INCREMENT,
  `actividad_id` int(11) NOT NULL,
  `objetivo_alumno` varchar(255) DEFAULT NULL,
  `objetivo_docente` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`objetivos_actividad_id`),
  KEY `FK1_DatosPreguntas_Actividad` (`actividad_id`),
  CONSTRAINT `FK1_objetivos_actividad` FOREIGN KEY (`actividad_id`) REFERENCES `tr_actividad` (`actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Table structure for table `tr_portafolio`
--

DROP TABLE IF EXISTS `tr_portafolio_evidencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE `tr_portafolio_evidencias` (
  `portafolio_id` 	int(11) NOT NULL AUTO_INCREMENT,
  `actividad_id` 	int(11) DEFAULT NULL,
  `materia_fecha_actividad_id`	int(11) DEFAULT NULL,
  `descripcion` 	text 			DEFAULT NULL,
  `adjunto` 		varchar(255) 	DEFAULT NULL,
  `paso` INT(1) DEFAULT 1 NOT NULL,
  `fecha_creacion`	datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`portafolio_id`),
  KEY `FK1_portafolio` (`actividad_id`),
  KEY `FK2_portafolio_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_portafolio_evidencias` FOREIGN KEY (`actividad_id`) REFERENCES `tr_actividad` (`actividad_id`),
  CONSTRAINT `FK2_portafolio_evidencias` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO tr_portafolio_evidencias (portafolio_id,actividad_id,materia_fecha_actividad_id,descripcion,fecha_creacion,fecha_actualiza,estatus)
	VALUES (1,1,1,'Prueba','2019-10-15 14:27:22.0','2019-10-15 14:27:22.0',1);

--
-- Table structure for table `tr_portafolio_respuesta`
--

DROP TABLE IF EXISTS `tr_portafolio_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE `tr_portafolio_respuesta` (
  `respuesta_id` 	int(11) NOT NULL AUTO_INCREMENT,
  `actividad_id` 	int(11) DEFAULT NULL,
  `portafolio_id` 	int(11) DEFAULT NULL,
  `validado` tinyint(1) DEFAULT NULL COMMENT '1 el docente aprobó los comentarios',
  `respuesta` 		text 	DEFAULT NULL,
  `fecha_creacion`	datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_portafolio_respuesta1` (`actividad_id`),
  KEY `FK1_portafolio_respuesta2` (`portafolio_id`),
  CONSTRAINT `FK1_portafolio_respuesta1` FOREIGN KEY (`actividad_id`) REFERENCES `tr_actividad` (`actividad_id`),
  CONSTRAINT `FK1_portafolio_respuesta2` FOREIGN KEY (`portafolio_id`) REFERENCES `tr_portafolio_evidencias` (`portafolio_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `tr_ad_pregunta`



DROP TABLE IF EXISTS `tr_ad_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_ad_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) NOT NULL,
  `pregunta` text DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `num_archivos` int(2),
  `cat_formato_id` int(11)  NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_AD` (`datos_pregunta_id`),
  KEY `FK1_CatFormato` (`cat_formato_id`),
  CONSTRAINT `FK1_AD` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`),
  CONSTRAINT `FK1_CatFormato` FOREIGN KEY (`cat_formato_id`) REFERENCES  `estudydg`.`cat_formatos` (`cat_formato_id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_ad_pregunta`
--

LOCK TABLES `tr_ad_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_ad_pregunta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_ad_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_ad_respuesta`
--

DROP TABLE IF EXISTS `tr_ad_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_ad_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `materia_fecha_actividad_id` int(11) NOT NULL,
  `pregunta_id` int(11) NOT NULL,
  `url_archivo` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_ad_respuesta` (`pregunta_id`),
  KEY `FK2_ad_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_ad_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_ad_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_ad_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_ad_respuesta`
--

LOCK TABLES `tr_ad_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_ad_respuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_ad_respuesta` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `tr_respuesta`
--

DROP TABLE IF EXISTS `tr_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

CREATE TABLE `tr_respuesta`(
`respuesta_id` int(11) NOT NULL auto_increment,
`datos_pregunta_id` int(11) NOT NULL,
`materia_fecha_actividad_id` int(11) NOT NULL,
`valor` decimal(4,2),
`calificacion` decimal(4,2),
`fecha_creacion` datetime,
`fecha_actualiza` datetime,
estatus int(1),
PRIMARY KEY (`respuesta_id`),
KEY `FK1_trr_dp` (`datos_pregunta_id`),
KEY `FK2_trr_mfa` (`materia_fecha_actividad_id`),
CONSTRAINT `FK1_trr_dp` foreign key (`datos_pregunta_id`) references `tr_datos_pregunta` (`datos_pregunta_id`),
CONSTRAINT `FK2_trr_mfa` foreign key (`materia_fecha_actividad_id`) references `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Table structure for table `tr_alumno_fecha_actividad`
--

DROP TABLE IF EXISTS `tr_materia_fecha_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_materia_fecha_actividad` (
  `materia_fecha_actividad_id` int(11) NOT NULL AUTO_INCREMENT,
  `actividad_id` int(11) DEFAULT NULL,
  `materia_id` int(11) DEFAULT NULL,
  `calificacion` decimal(4,2) DEFAULT NULL,
  `fecha_actividad` datetime DEFAULT current_timestamp(),
  `intento_num` int(11) DEFAULT 1,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  `estatus_actividad_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`materia_fecha_actividad_id`),
  KEY `FK1_mfa` (`actividad_id`),
  KEY `FK2_mfa` (`materia_id`),
  KEY `FK3_mfa` (`estatus_actividad_id`),
  CONSTRAINT `FK1_mfa` FOREIGN KEY (`actividad_id`) REFERENCES `tr_actividad` (`actividad_id`),
  CONSTRAINT `FK2_mfa` FOREIGN KEY (`materia_id`) REFERENCES `tr_materia` (`materia_id`),
  CONSTRAINT `FK3_mfa` FOREIGN KEY (`estatus_actividad_id`) REFERENCES `cat_estatus_actividad` (`estatus_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO tr_materia_fecha_actividad (materia_fecha_actividad_id,actividad_id,materia_id,fecha_actividad,intento_num,fecha_creacion,fecha_actualiza,estatus,estatus_actividad_id)
	VALUES (1,1,1,'2019-10-15 14:25:44.0',1,'2019-10-15 14:25:44.0','2019-10-15 14:25:44.0',1,1);
--
-- Dumping data for table `tr_alumno_fecha_actividad`
--


--
-- Table structure for table `tr_cc_categorias`
--

DROP TABLE IF EXISTS `tr_cc_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_cc_categorias` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `respuesta_id` int(11) NOT NULL,
  `categoria_desc` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`categoria_id`),
  KEY `FK1_cc_categoria` (`respuesta_id`),
  CONSTRAINT `FK1_cc_categoria` FOREIGN KEY (`respuesta_id`) REFERENCES `tr_cc_respuesta` (`respuesta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `tr_cc_elementos`
--

DROP TABLE IF EXISTS `tr_cc_elementos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_cc_elementos` (
  `elemento_id` int(11) NOT NULL AUTO_INCREMENT,
  `respuesta_id` int(11) NOT NULL,
  `elemento_desc` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`elemento_id`),
  KEY `FK1_cc_elemento` (`respuesta_id`),
  CONSTRAINT `FK1_cc_elemento` FOREIGN KEY (`respuesta_id`) REFERENCES `tr_cc_respuesta` (`respuesta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `tr_cc_respuesta`
--

DROP TABLE IF EXISTS `tr_cc_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_cc_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `materia_fecha_actividad_id` int(11) DEFAULT NULL,
  `cuadro_comparativo_desc` varchar(255) NOT NULL,
  `numero_elementos` int(11) DEFAULT NULL,
  `numero_categorias` int(11) DEFAULT NULL,
  `conclusion` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_cc_respuesta` (`pregunta_id`),
  KEY `FK2_cc_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_cc_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_cc_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_cc_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tr_cc_pregunta`
--

DROP TABLE IF EXISTS `tr_cc_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_cc_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) NOT NULL,
  `pregunta` text DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_cc` (`datos_pregunta_id`),
  CONSTRAINT `FK1_cc` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `tr_cc_respuesta`
--

DROP TABLE IF EXISTS `tr_cc_respuestas_finales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_cc_respuestas_finales` (
  `respuesta_final_id` int(11) NOT NULL AUTO_INCREMENT,
  `elemento_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `respuesta` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_final_id`),
  KEY `FK1_cc_respuestas` (`elemento_id`),
  KEY `FK2_cc_respuestas` (`categoria_id`),
  CONSTRAINT `FK1_cc_respuestas` FOREIGN KEY (`elemento_id`) REFERENCES `tr_cc_elementos` (`elemento_id`),
  CONSTRAINT `FK2_cc_respuestas` FOREIGN KEY (`categoria_id`) REFERENCES `tr_cc_categorias` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `tr_contenido_actividad`
--

DROP TABLE IF EXISTS `tr_contenido_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_contenido_actividad` (
  `contenido_actividad_id` int(11) NOT NULL AUTO_INCREMENT,
  `actividad_id` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `visto` int(1) DEFAULT NULL,
  `url_contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`contenido_actividad_id`),
  KEY `FK1_contenido_actividad` (`actividad_id`),
  CONSTRAINT `FK1_contenido_actividad` FOREIGN KEY (`actividad_id`) REFERENCES `tr_actividad` (`actividad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_contenido_actividad`
--

LOCK TABLES `tr_contenido_actividad` WRITE;
/*!40000 ALTER TABLE `tr_contenido_actividad` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_contenido_actividad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_datos_pregunta`
--

DROP TABLE IF EXISTS `tr_datos_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_datos_pregunta` (
  `datos_pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_pregunta_id` int(11) NOT NULL,
  `actividad_id` int(11) NOT NULL,
  `dificultad_id` int(11) DEFAULT NULL,
  `orden` tinyint(2) DEFAULT NULL,
  `ponderacion` decimal(5,2) DEFAULT NULL,
  `aleatorio` tinyint(1) DEFAULT NULL COMMENT '1 en caso de querer respuestas mezcladas',
  `retroalimentacion` varchar(255) DEFAULT NULL,
  `retroalimentacion_docente` varchar(255) DEFAULT NULL,
  `numero_intentos` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`datos_pregunta_id`),
  KEY `FK1_DatosPreguntas_Actividad` (`actividad_id`),
  KEY `FK2_DatosPreguntas_Tipo` (`tipo_pregunta_id`),
  CONSTRAINT `FK1_DatosPreguntas_Actividad` FOREIGN KEY (`actividad_id`) REFERENCES `tr_actividad` (`actividad_id`),
  CONSTRAINT `FK2_DatosPreguntas_Tipo` FOREIGN KEY (`tipo_pregunta_id`) REFERENCES `cat_tipo_pregunta` (`tipo_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_datos_pregunta`
--

LOCK TABLES `tr_datos_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_datos_pregunta` DISABLE KEYS */;
INSERT INTO `tr_datos_pregunta` VALUES (1,1,2,1,1,20.00,NULL,NULL,NULL,NULL,'2019-07-16 13:51:25','2019-08-03 05:26:09',NULL,NULL,1),(2,2,2,1,2,20.00,NULL,NULL,NULL,NULL,'2019-08-01 01:02:21','2019-08-03 07:23:39',NULL,NULL,1),(3,3,2,1,3,20.00,NULL,'Recuerda que las frutas alcanzan un color específico al alcanzar su madurez',NULL,NULL,'2019-07-16 13:53:46','2019-08-03 07:23:39',NULL,NULL,1),(4,1,2,1,4,20.00,NULL,NULL,'toda respuesta es correcta, considerando las prioridades de cada ser humano y que somos parte del planeta Tierra',NULL,'2019-07-16 13:53:46','2019-08-03 07:23:39',NULL,NULL,1),(5,4,2,1,5,10.00,NULL,NULL,NULL,NULL,'2019-08-03 05:26:09','2019-08-03 07:23:39',NULL,NULL,1),(6,5,2,1,6,5.00,NULL,NULL,NULL,NULL,'2019-08-03 06:49:07','2019-08-03 07:23:39',NULL,NULL,1),(7,6,2,1,7,5.00,NULL,NULL,NULL,NULL,'2019-08-03 07:23:39','2019-08-03 07:23:39',NULL,NULL,1),(8,7,2,1,8,0.00,NULL,NULL,NULL,NULL,'2019-08-15 04:22:19','2019-08-15 04:22:19',NULL,NULL,1),(9,8,2,1,9,0.00,NULL,NULL,NULL,NULL,'2019-08-15 04:50:19','2019-08-15 04:50:19',NULL,NULL,1),(10,9,2,1,10,0.00,NULL,NULL,NULL,NULL,'2019-08-15 05:06:15','2019-08-15 05:06:15',NULL,NULL,1),(11,10,2,1,11,0.00,NULL,NULL,NULL,NULL,'2019-09-10 11:05:40','2019-09-10 12:23:39',NULL,NULL,1),(12,11,2,1,12,0.00,NULL,NULL,NULL,NULL,'2019-09-10 12:23:39','2019-09-10 12:23:39',NULL,NULL,1);
/*!40000 ALTER TABLE `tr_datos_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_dd_pregunta`
--

DROP TABLE IF EXISTS `tr_dd_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_dd_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) DEFAULT NULL,
  `pregunta` text DEFAULT NULL,
  `orientacion` varchar(50) DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_dd` (`datos_pregunta_id`),
  CONSTRAINT `FK1_dd` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_dd_pregunta`
--

LOCK TABLES `tr_dd_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_dd_pregunta` DISABLE KEYS */;
INSERT INTO `tr_dd_pregunta` VALUES (1,5,'Haz click en cada elemento y arrastralo a la casilla que corresponda para colocarlos en orden',NULL,NULL,'2019-08-03 06:56:50','2019-08-03 06:57:22',1);
/*!40000 ALTER TABLE `tr_dd_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_dd_reactivos`
--

DROP TABLE IF EXISTS `tr_dd_reactivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_dd_reactivos` (
  `reactivo_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `reactivo_desc` text DEFAULT NULL,
  `imagen` text DEFAULT NULL,
  `ancho` double DEFAULT NULL,
  `alto` double DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reactivo_id`),
  KEY `FK1_dd_reactivo` (`pregunta_id`),
  CONSTRAINT `FK1_dd_reactivo` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_dd_pregunta` (`pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_dd_reactivos`
--

LOCK TABLES `tr_dd_reactivos` WRITE;
/*!40000 ALTER TABLE `tr_dd_reactivos` DISABLE KEYS */;
INSERT INTO `tr_dd_reactivos` VALUES (2,1,'verbo','http://imagen2.com',10,5,2,'2019-08-03 07:12:25','2019-08-03 07:12:25',1),(3,1,'complemento','http://imagen3.com',10,5,3,'2019-08-03 07:12:25','2019-08-03 07:12:25',1),(4,1,'sujeto','http://imagen1.com',10,5,1,'2019-08-15 03:53:59','2019-08-15 03:53:59',1);
/*!40000 ALTER TABLE `tr_dd_reactivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_dd_respuesta`
--

DROP TABLE IF EXISTS `tr_dd_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_dd_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `reactivo_id` int(11) NOT NULL,
  `materia_fecha_actividad_id` int(11) DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_dd_respuesta` (`reactivo_id`),
  KEY `FK2_dd_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_dd_respuesta` FOREIGN KEY (`reactivo_id`) REFERENCES `tr_dd_reactivos` (`reactivo_id`),
  CONSTRAINT `FK2_dd_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_dd_respuesta`
--

LOCK TABLES `tr_dd_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_dd_respuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_dd_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_fr_pregunta`
--

DROP TABLE IF EXISTS `tr_fr_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_fr_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) DEFAULT NULL,
  `foro_titulo` varchar(255) DEFAULT NULL,
  `foro_descripcion` varchar(255) DEFAULT NULL,
  `pregunta` text DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_fr` (`datos_pregunta_id`),
  CONSTRAINT `FK1_fr` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_fr_pregunta`
--

LOCK TABLES `tr_fr_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_fr_pregunta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_fr_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_fr_respuesta`
--

DROP TABLE IF EXISTS `tr_fr_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_fr_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `respuesta_padre_id` int(11) DEFAULT NULL,
  `pregunta_id` int(11) NOT NULL,
  `materia_fecha_actividad_id` int(11) DEFAULT NULL,
  `asignatura_grupo_id` int(11) DEFAULT NULL,
  `persona_id` int(11) DEFAULT NULL,
  `respuesta` text DEFAULT NULL,
  `flg_moderador` int(1) DEFAULT NULL,
  `contenido` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_foro_respuesta` (`pregunta_id`),
  KEY `FK2_foro_respuesta` (`materia_fecha_actividad_id`),
  KEY `FK3_foro_respuesta` (`asignatura_grupo_id`),
  CONSTRAINT `FK1_foro_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_fr_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_foro_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`),
  constraint `FK3_foro_respuesta` foreign key (`asignatura_grupo_id`) references `estudyce`.`inter_asignatura_grupo` (`asignatura_grupo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_fr_respuesta`
--

LOCK TABLES `tr_fr_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_fr_respuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_fr_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_mc_categorias`
--

DROP TABLE IF EXISTS `tr_mc_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_mc_categorias` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `respuesta_id` int(11) NOT NULL,
  `categoria_desc` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`categoria_id`),
  KEY `FK1_mc_categoria` (`respuesta_id`),
  CONSTRAINT `FK1_mc_categoria` FOREIGN KEY (`respuesta_id`) REFERENCES `tr_mc_respuesta` (`respuesta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_mc_categorias`
--

LOCK TABLES `tr_mc_categorias` WRITE;
/*!40000 ALTER TABLE `tr_mc_categorias` DISABLE KEYS */;
INSERT INTO `tr_mc_categorias` VALUES (1,1,'Visión del mundo','2019-08-15 06:10:14','2019-08-15 06:10:14',1),(2,1,'Método de conocimiento','2019-08-15 06:10:14','2019-08-15 06:10:14',1),(3,1,'Concepción','2019-08-15 06:10:14','2019-08-15 06:10:14',1);
/*!40000 ALTER TABLE `tr_mc_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_mc_elementos`
--

DROP TABLE IF EXISTS `tr_mc_elementos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_mc_elementos` (
  `elemento_id` int(11) NOT NULL AUTO_INCREMENT,
  `respuesta_id` int(11) NOT NULL,
  `elemento_desc` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`elemento_id`),
  KEY `FK1_mc_elemento` (`respuesta_id`),
  CONSTRAINT `FK1_mc_elemento` FOREIGN KEY (`respuesta_id`) REFERENCES `tr_mc_respuesta` (`respuesta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_mc_elementos`
--

LOCK TABLES `tr_mc_elementos` WRITE;
/*!40000 ALTER TABLE `tr_mc_elementos` DISABLE KEYS */;
INSERT INTO `tr_mc_elementos` VALUES (1,1,'Platón','2019-08-15 06:09:07','2019-08-15 06:09:07',1),(2,1,'Aristóteles','2019-08-15 06:09:07','2019-08-15 06:09:07',1);
/*!40000 ALTER TABLE `tr_mc_elementos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_mc_pregunta`
--

DROP TABLE IF EXISTS `tr_mc_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_mc_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `materia_fecha_actividad_id` int(11) NOT NULL,
  `mapa_cognitivo_desc` varchar(255) NOT NULL,
  `numero_elementos` int(11) DEFAULT NULL,
  `numero_categorias` int(11) DEFAULT NULL,
  `aspecto_comun` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_mc_respuesta` (`pregunta_id`),
  KEY `FK2_mc_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_mc_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_mc_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_mc_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `tr_mc_pregunta`
--

DROP TABLE IF EXISTS `tr_mc_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_mc_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) NOT NULL,
  `pregunta` text DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_mc_pregunta` (`datos_pregunta_id`),
  CONSTRAINT `FK1_mc_pregunta` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;




--
-- Table structure for table `tr_mc_respuesta`
--

DROP TABLE IF EXISTS `tr_mc_respuestas_finales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_mc_respuestas_finales` (
  `respuesta_final_id` int(11) NOT NULL AUTO_INCREMENT,
  `elemento_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `respuesta` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_final_id`),
  KEY `FK1_mc_respuestas` (`elemento_id`),
  KEY `FK2_mc_respuestas` (`categoria_id`),
  CONSTRAINT `FK1_mc_respuestas` FOREIGN KEY (`elemento_id`) REFERENCES `tr_mc_elementos` (`elemento_id`),
  CONSTRAINT `FK2_mc_respuestas` FOREIGN KEY (`categoria_id`) REFERENCES `tr_mc_categorias` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_mc_respuesta`
--


--
-- Table structure for table `tr_om_pregunta`
--

DROP TABLE IF EXISTS `tr_om_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_om_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) DEFAULT NULL,
  `pregunta` text DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `tipo` int(1) DEFAULT NULL COMMENT '1 texto, 2 Imágen',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_om` (`datos_pregunta_id`),
  CONSTRAINT `FK1_om` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tr_om_reactivos`
--

DROP TABLE IF EXISTS `tr_om_reactivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_om_reactivos` (
  `reactivo_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) DEFAULT NULL,
  `reactivo` text DEFAULT NULL,
  `ponderacion` double DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `retroalimentacion` text DEFAULT NULL,
  
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reactivo_id`),
  KEY `FK1_om_reactivo` (`pregunta_id`),
  CONSTRAINT `FK1_om_reactivo` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_om_pregunta` (`pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `tr_om_respuesta`
--

DROP TABLE IF EXISTS `tr_om_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_om_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `reactivo_id` int(11) NOT NULL,
  `materia_fecha_actividad_id` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_om_respuesta` (`reactivo_id`),
  KEY `FK2_om_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_om_respuesta` FOREIGN KEY (`reactivo_id`) REFERENCES `tr_om_reactivos` (`reactivo_id`),
  CONSTRAINT `FK2_om_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `tr_pa_pregunta`
--

DROP TABLE IF EXISTS `tr_pa_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_pa_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) DEFAULT NULL,
  `pregunta` text DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_PA` (`datos_pregunta_id`),
  CONSTRAINT `FK1_PA` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `tr_pa_respuesta`
--

DROP TABLE IF EXISTS `tr_pa_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_pa_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `materia_fecha_actividad_id` int(11) DEFAULT NULL,
  `pregunta_id` int(11) DEFAULT NULL,
  `respuesta` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_PA_Respuesta` (`pregunta_id`),
  KEY `FK2_pa_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_PA_Respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_pa_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_pa_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



--
-- Table structure for table `tr_propietario_pregunta`
--

DROP TABLE IF EXISTS `tr_propietario_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_propietario_pregunta` (
  `propietario_pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) NOT NULL,
  `tipo_pregunta_id` int(11) DEFAULT NULL,
  `pregunta_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`propietario_pregunta_id`),
  KEY `FK1_Propietario_datospregunta` (`datos_pregunta_id`),
  KEY `FK2_Propietario_tipopregunta` (`tipo_pregunta_id`),
  CONSTRAINT `FK1_Propietario_datospregunta` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`),
  CONSTRAINT `FK2_Propietario_tipopregunta` FOREIGN KEY (`tipo_pregunta_id`) REFERENCES `cat_tipo_pregunta` (`tipo_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_propietario_pregunta`
--

LOCK TABLES `tr_propietario_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_propietario_pregunta` DISABLE KEYS */;
INSERT INTO `tr_propietario_pregunta` VALUES (1,10,9,1,1,'2019-08-30 19:27:58','2019-08-30 19:46:13',NULL,NULL,1),(2,10,9,2,2,'2019-08-30 19:28:44','2019-08-30 19:46:13',NULL,NULL,1);
/*!40000 ALTER TABLE `tr_propietario_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_qq_pregunta`
--

DROP TABLE IF EXISTS `tr_qq_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_qq_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) DEFAULT NULL,
  `pregunta` text DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `pregunta1` text DEFAULT NULL,
  `pregunta2` text DEFAULT NULL,
  `pregunta3` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_qq` (`datos_pregunta_id`),
  CONSTRAINT `FK1_qq` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_qq_pregunta`
--

LOCK TABLES `tr_qq_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_qq_pregunta` DISABLE KEYS */;
INSERT INTO `tr_qq_pregunta` VALUES (1,7,'Visualiza detenidamente la imagen y respondel las siguientes preguntas','imagen_niños.png',30,20,NULL,'2019-08-03 07:26:51','2019-08-03 07:35:19',1);
/*!40000 ALTER TABLE `tr_qq_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_qq_respuesta`
--

DROP TABLE IF EXISTS `tr_qq_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_qq_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `materia_fecha_actividad_id` int(11) DEFAULT NULL,
  `respuesta1` text DEFAULT NULL,
  `respuesta2` text DEFAULT NULL,
  `respuesta3` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_qq_respuesta` (`pregunta_id`),
  KEY `FK2_qq_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_qq_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_qq_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_qq_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_qq_respuesta`
--

LOCK TABLES `tr_qq_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_qq_respuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_qq_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_rc_pregunta`
--

DROP TABLE IF EXISTS `tr_rc_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_rc_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) NOT NULL,
  `pregunta` text DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_rc` (`datos_pregunta_id`),
  CONSTRAINT `FK1_rc` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_rc_pregunta`
--

LOCK TABLES `tr_rc_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_rc_pregunta` DISABLE KEYS */;
INSERT INTO `tr_rc_pregunta` VALUES (1,3,'Relaciona la fruta con su color',NULL,'2019-08-03 03:09:38','2019-08-03 03:11:47',NULL);
/*!40000 ALTER TABLE `tr_rc_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_rc_reactivos`
--

DROP TABLE IF EXISTS `tr_rc_reactivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_rc_reactivos` (
  `reactivo_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `columna_a_id` int(11) NOT NULL,
  `columna_b_id` int(11) NOT NULL,
  `columna_a_desc` text DEFAULT NULL,
  `columna_b_desc` text DEFAULT NULL,
  `ponderacion` double DEFAULT NULL,
  `retroalimentacion` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reactivo_id`),
  KEY `FK1_rc_reactivo` (`pregunta_id`),
  CONSTRAINT `FK1_rc_reactivo` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_rc_pregunta` (`pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_rc_reactivos`
--

LOCK TABLES `tr_rc_reactivos` WRITE;
/*!40000 ALTER TABLE `tr_rc_reactivos` DISABLE KEYS */;
INSERT INTO `tr_rc_reactivos` VALUES (1,1,1,1,'el color del plátano','amarillo',25,NULL,'2019-08-03 04:17:36','2019-08-03 05:05:16',1),(2,1,2,2,'el color de la fresa','rojo',25,NULL,'2019-08-03 04:17:36','2019-08-03 05:05:16',1),(3,1,3,3,'el color del kiwi','verde',25,NULL,'2019-08-03 04:17:36','2019-08-03 05:05:16',1),(4,1,4,4,'el color de la mandarina','naranja',25,NULL,'2019-08-03 04:17:36','2019-08-03 05:05:16',1),(5,1,1,1,'amarillo','el color del plátano',25,NULL,'2019-08-03 04:17:36','2019-08-03 05:05:16',1),(6,1,2,2,'rojo','el color de la fresa',25,NULL,'2019-08-03 04:17:36','2019-08-03 05:05:16',1),(7,1,3,3,'verde','el color del kiwi',25,NULL,'2019-08-03 04:17:36','2019-08-03 05:05:16',1),(8,1,4,4,'naranja','el color de la mandarina',25,NULL,'2019-08-03 04:17:36','2019-08-03 05:05:16',1);
/*!40000 ALTER TABLE `tr_rc_reactivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_rc_respuesta`
--

DROP TABLE IF EXISTS `tr_rc_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_rc_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `reactivo_id` int(11) NOT NULL,
  `materia_fecha_actividad_id` int(11) DEFAULT NULL,
  `columna_a_id` int(11) DEFAULT NULL,
  `columna_b_id` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_rc_respuesta` (`reactivo_id`),
  KEY `FK2_rc_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_rc_respuesta` FOREIGN KEY (`reactivo_id`) REFERENCES `tr_rc_reactivos` (`reactivo_id`),
  CONSTRAINT `FK2_rc_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_rc_respuesta`
--


--
-- Table structure for table `tr_sq_pregunta`
--

DROP TABLE IF EXISTS `tr_sq_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_sq_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) DEFAULT NULL,
  `pregunta` text DEFAULT NULL,
  `momento` int(1) DEFAULT NULL,
  `visualiza_flg` int(1) DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_sq` (`datos_pregunta_id`),
  CONSTRAINT `FK1_sq` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_sq_pregunta`
--

LOCK TABLES `tr_sq_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_sq_pregunta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_sq_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_sq_respuesta`
--

DROP TABLE IF EXISTS `tr_sq_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_sq_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `materia_fecha_actividad_id` int(11) DEFAULT NULL,
  `respuesta` text DEFAULT NULL,
  `visualiza_flg` int(1) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_sq_respuesta` (`pregunta_id`),
  KEY `FK3_sq_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_sq_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_sq_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_sq_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_sq_respuesta`
--

LOCK TABLES `tr_sq_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_sq_respuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_sq_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_zi_pregunta`
--

DROP TABLE IF EXISTS `tr_zi_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_zi_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) DEFAULT NULL,
  `pregunta` text DEFAULT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `imagen` text DEFAULT NULL,
  `imagen_alto` double DEFAULT NULL,
  `imagen_ancho` double DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_zi` (`datos_pregunta_id`),
  CONSTRAINT `FK1_zi` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_zi_pregunta`
--

LOCK TABLES `tr_zi_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_zi_pregunta` DISABLE KEYS */;
INSERT INTO `tr_zi_pregunta` VALUES (1,5,'Selecciona la zona que se te solicitan en el siguiente esquema;',NULL,'http://urlimagen.com',30,20,'2019-08-03 06:15:23','2019-08-03 06:15:44',1);
/*!40000 ALTER TABLE `tr_zi_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_zi_reactivos`
--

DROP TABLE IF EXISTS `tr_zi_reactivos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_zi_reactivos` (
  `reactivo_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `reactivo_desc` text DEFAULT NULL,
  `imagen` text DEFAULT NULL,
  `alto` double DEFAULT NULL,
  `ancho` double DEFAULT NULL,
  `posicion_x` double NOT NULL,
  `posicion_y` double NOT NULL,
  `color` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reactivo_id`),
  KEY `FK1_zi_reactivo` (`pregunta_id`),
  CONSTRAINT `FK1_zi_reactivo` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_zi_pregunta` (`pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_zi_reactivos`
--

LOCK TABLES `tr_zi_reactivos` WRITE;
/*!40000 ALTER TABLE `tr_zi_reactivos` DISABLE KEYS */;
INSERT INTO `tr_zi_reactivos` VALUES (1,1,'1.- Se refiere a los propósitos de enseñanza','http://imagen1.com',NULL,NULL,10,20,'azul','2019-08-03 06:27:32','2019-08-03 06:27:32',1),(2,1,'2.- Se refiere a las estrategias de que se aplican en aula','http://imagen2.com',NULL,NULL,20,30,'rojo','2019-08-03 06:27:32','2019-08-03 06:27:32',1),(3,1,'3.- Se refiere a los instrumentos de evaluación ','http://imagen3.com',NULL,NULL,30,20,'morado','2019-08-03 06:27:32','2019-08-03 06:27:32',1),(4,1,'4.- Se refiere a la reactivación de conocimientos previos ','http://imagen4.com',NULL,NULL,0,40,'30','2019-08-03 06:27:32','2019-08-03 06:27:32',1);
/*!40000 ALTER TABLE `tr_zi_reactivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_zi_respuesta`
--

DROP TABLE IF EXISTS `tr_zi_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_zi_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `reactivo_id` int(11) NOT NULL,
  `materia_fecha_actividad_id` int(11) DEFAULT NULL,
  `posicion_x` double NOT NULL,
  `posicion_y` double NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_zi_respuesta` (`reactivo_id`),
  KEY `FK3_zi_respuesta` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK1_zi_respuesta` FOREIGN KEY (`reactivo_id`) REFERENCES `tr_zi_reactivos` (`reactivo_id`),
  CONSTRAINT `FK3_zi_respuesta` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_zi_respuesta`
--

LOCK TABLES `tr_zi_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_zi_respuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_zi_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_nota`
--

DROP TABLE IF EXISTS `tr_nota`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_nota` (
  `nota_id` int(11) NOT NULL AUTO_INCREMENT,
  `actividad_id` int(11) DEFAULT NULL,
  `materia_id` int(11) DEFAULT NULL,
  `docente_id` int(11) DEFAULT NULL,
  `texto` TEXT DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`nota_id`),
  KEY `FK1_nota` (`actividad_id`),
  KEY `FK2_nota` (`materia_id`),
  KEY `FK3_nota` (`docente_id`),
  CONSTRAINT `FK1_nota` FOREIGN KEY (`actividad_id`) REFERENCES `tr_actividad` (`actividad_id`),
  CONSTRAINT `FK2_nota` FOREIGN KEY (`materia_id`) REFERENCES `tr_materia` (`materia_id`),
  CONSTRAINT `FK3_nota` FOREIGN KEY (`docente_id`) REFERENCES `estudyce`.`tr_docente` (`docente_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Table structure for table `tr_retroalimentacion`
--

DROP TABLE IF EXISTS `tr_retroalimentacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_retroalimentacion` (
  `retroalimentacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `materia_fecha_actividad_id` int(11) DEFAULT NULL,
  `persona_id` int(11) DEFAULT NULL,
  `texto` TEXT DEFAULT NULL,
  `origen` int(2) DEFAULT NULL,
  `visto` int(1) DEFAULT 0,
  `url_imagen` varchar(100) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`retroalimentacion_id`),
  KEY `FK1_retro` (`materia_fecha_actividad_id`),
  KEY `FK2_retro` (`persona_id`),
  CONSTRAINT `FK1_retro` FOREIGN KEY (`materia_fecha_actividad_id`) REFERENCES `tr_materia_fecha_actividad` (`materia_fecha_actividad_id`),
  CONSTRAINT `FK2_retro` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Table structure for table `tr_mensaje_materia`
--


DROP TABLE IF EXISTS `tr_mensaje_materia`;

CREATE TABLE `tr_mensaje_materia` (
  `mensaje_id` int(11) NOT NULL AUTO_INCREMENT,
  `persona_id` int(11) DEFAULT NULL,
  `materia_id` int(11) DEFAULT NULL,
  `texto` text,
  `origen` int(2) DEFAULT NULL,
  `visto` int(1) DEFAULT 0,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`mensaje_id`),
  KEY `FK1_mensaje_materia` (`persona_id`),
  KEY `FK2_mensaje_materia` (`materia_id`),
  CONSTRAINT `FK1_mensaje_materia` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK2_mensaje_materia` FOREIGN KEY (`materia_id`) REFERENCES `tr_materia` (`materia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;



/*Se actualizo informacion 29-01-2020 12:23*/
DROP TABLE IF EXISTS `tr_videoconferencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `tr_videoconferencia`(
`videoconferencia_id` int(11) not null auto_increment,
`usuario_zoom_id` int(11) null,
`asignatura_grupo_id` int(11) not null,
`nombre` varchar(100) default null,
`url_meet` varchar(255) default null,
`url_descarga` varchar(255) default null,
`descripcion` varchar(255) default null,
`fecha_inicio` datetime  NOT NULL,
`fecha_fin` datetime  NOT NULL,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`videoconferencia_id`),
key `FK2_us_asignatura_grupo` (`asignatura_grupo_id`),
key `tr_videoconferencia_fk` (`usuario_zoom_id`),
constraint `FK2_us_asignatura_grupo` foreign key (`asignatura_grupo_id`) references `estudyce`.`inter_asignatura_grupo` (`asignatura_grupo_id`),
constraint `tr_videoconferencia_fk` foreign key (`usuario_zoom_id`) references `tr_usuario_zoom` (`usuario_zoom_id`)


) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

/*Se actualizo informacion 29-01-2020 12:23*/
DROP TABLE IF EXISTS `tr_usuario_zoom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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


/*Se actualizo informacion 06-05-2020 11:50*/
DROP TABLE IF EXISTS `inter_videoconferencia_zoom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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



DROP TABLE IF EXISTS `tr_acceso_videoconferencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_acceso_videoconferencia` (
  `acceso_videoconferencia_id` int(11) NOT NULL AUTO_INCREMENT,
  `videoconferencia_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`acceso_videoconferencia_id`),
  KEY `FK1_acceso_zoom` (`persona_id`),
  KEY `FK1_acceso_videoconferencia` (`videoconferencia_id`),
  CONSTRAINT `FK1_acceso_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK1_acceso_videoconferencia` FOREIGN KEY (`videoconferencia_id`) REFERENCES `tr_videoconferencia` (`videoconferencia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tr_seguimiento_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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


/*vistas*/
create function id_asignatura() returns integer deterministic no sql return @asignatura_id;
create function id_asignatura_grupo() returns integer deterministic no sql return @asignatura_grupo_id;

create view modulos_base_asignatura_grupo as 
select distinct ima.modulo_id,cm.modulo_nombre, cm.fecha_inicio, cm.fecha_fin,cm.modulo_numero
from estudyce.inter_asignatura_grupo iag 
join estudydg.inter_orden_asignatura ioa on iag.orden_asignatura_id = ioa.orden_asignatura_id
join inter_modulos_asignaturas ima on ima.asignatura_id = ioa.asignatura_id
join cat_modulos cm on cm.modulo_id = ima.modulo_id
where asignatura_grupo_id= id_asignatura_grupo() and iag.estatus=1 and ioa.estatus=1 and ima.estatus=1 and cm.estatus=1;


create view modulos_asignatura_grupo as
select imag.modulo_id,cm.modulo_nombre, cm.fecha_inicio, cm.fecha_fin,cm.modulo_numero
from inter_modulos_asignatura_grupo imag
join cat_modulos cm on cm.modulo_id = imag.modulo_id
join inter_modulos_asignatura_grupo ima on ima.modulo_id = cm.modulo_id
where ima.asignatura_grupo_id = id_asignatura_grupo() and imag.estatus=1 and cm.estatus=1 and ima.estatus=1;


create view modulos_extra_asignatura as 
select imag.modulo_id,cm.modulo_nombre, iag.fecha_inicio, iag.fecha_fin, tg.grupo_id,tg.grupo,tg.nombre_grupo,cm.modulo_numero
from estudyce.inter_asignatura_grupo iag 
join estudydg.inter_orden_asignatura ioa on iag.orden_asignatura_id = ioa.orden_asignatura_id
join inter_modulos_asignatura_grupo imag on imag.asignatura_grupo_id = iag.asignatura_grupo_id
join estudyce.tr_grupo tg on tg.grupo_id = iag.grupo_id
join cat_modulos cm on cm.modulo_id = imag.modulo_id
where ioa.asignatura_id = id_asignatura() and imag.estatus = 1 and cm.estatus = 1;

create view modulos_asignatura as 
select ima.modulo_id,cm.modulo_nombre, cm.fecha_inicio, cm.fecha_fin , null as grupo_id,null as grupo, null as nombre_grupo,cm.modulo_numero
from inter_modulos_asignaturas ima
join cat_modulos cm on cm.modulo_id = ima.modulo_id
where ima.asignatura_id =id_asignatura() and ima.estatus = 1 and cm.estatus = 1;




/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-10 16:33:16


