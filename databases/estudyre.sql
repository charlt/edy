-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: estudyre
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.8-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary table structure for view `accesos_alumno`
--

DROP TABLE IF EXISTS `accesos_alumno`;
/*!50001 DROP VIEW IF EXISTS `accesos_alumno`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `accesos_alumno` (
  `alumno_id` tinyint NOT NULL,
  `matricula` tinyint NOT NULL,
  `nombre` tinyint NOT NULL,
  `primer_apellido` tinyint NOT NULL,
  `segundo_apellido` tinyint NOT NULL,
  `curp` tinyint NOT NULL,
  `celular` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `sexo` tinyint NOT NULL,
  `fecha_nacimiento` tinyint NOT NULL,
  `edad` tinyint NOT NULL,
  `ultimo_acceso` tinyint NOT NULL,
  `estado` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `asignaturas_totales`
--

DROP TABLE IF EXISTS `asignaturas_totales`;
/*!50001 DROP VIEW IF EXISTS `asignaturas_totales`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `asignaturas_totales` (
  `asignatura_id` tinyint NOT NULL,
  `totales` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `asistencia_videoconferencia`
--

DROP TABLE IF EXISTS `asistencia_videoconferencia`;
/*!50001 DROP VIEW IF EXISTS `asistencia_videoconferencia`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `asistencia_videoconferencia` (
  `videoconferencia_id` tinyint NOT NULL,
  `nombre` tinyint NOT NULL,
  `fecha_inicio` tinyint NOT NULL,
  `fecha_fin` tinyint NOT NULL,
  `asistencia` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `aspirante_estado`
--

DROP TABLE IF EXISTS `aspirante_estado`;
/*!50001 DROP VIEW IF EXISTS `aspirante_estado`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `aspirante_estado` (
  `aspirante_id` tinyint NOT NULL,
  `estado` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `cat_objeto`
--

DROP TABLE IF EXISTS `cat_objeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_objeto` (
  `objeto_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `icono` varchar(30) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  `tabla` varchar(100) DEFAULT NULL,
  `base` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`objeto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_objeto`
--

LOCK TABLES `cat_objeto` WRITE;
/*!40000 ALTER TABLE `cat_objeto` DISABLE KEYS */;
INSERT INTO `cat_objeto` VALUES 
(1,'crr','Carrera','fa-university','Información de carreras','2020-04-27 12:15:14','2020-04-30 01:50:49',NULL,NULL,1,'cat_ciclo','ce'),
(2,'pe','Plan de estudios','fa-sitemap','Información de planes de estudios','2020-04-27 12:15:14','2020-04-30 01:52:26',NULL,NULL,1,'tr_plan_estudios','dg'),
(3,'gr','Grados','fa-up','Información de grados','2020-04-27 12:15:14','2020-04-30 01:52:29',NULL,NULL,1,'cat_orden_jerarquico','dg'),
(4,'as','Asignaturas','fa-book','Información de asignaturas','2020-04-27 12:15:14','2020-04-30 01:52:40',NULL,NULL,1,'cat_asignaturas','dg'),
(5,'gp','Grupo','fa-users','Información de grupos','2020-04-27 12:15:14','2020-04-30 01:53:30',NULL,NULL,1,'tr_grupo','ce'),
(6,'ce','Ciclo','fa-calendar','Información de ciclos','2020-04-27 12:15:14','2020-04-30 01:53:36',NULL,NULL,1,'cat_ciclo','ce'),
(7,'dc','Docentes','fa-pencil-square','Información de docentes','2020-04-27 12:15:14','2020-04-30 01:53:34',NULL,NULL,1,'tr_docente','ce'),(8,'al','Alumnos','fa-child','Información de alumnos','2020-04-27 12:15:14','2020-04-30 01:53:37',NULL,NULL,1,'tr_alumno','ce');
/*!40000 ALTER TABLE `cat_objeto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_reporte`
--

DROP TABLE IF EXISTS `cat_reporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_reporte` (
  `reporte_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reporte_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_reporte`
--

LOCK TABLES `cat_reporte` WRITE;
/*!40000 ALTER TABLE `cat_reporte` DISABLE KEYS */;
INSERT INTO `cat_reporte` VALUES (1,'cc','Concentrados','Concentrados de información','2020-04-28 14:46:01','2020-04-28 18:10:24',NULL,NULL,1),(2,'es','Estadisticas','Estadisticas','2020-04-28 14:46:01','2020-04-28 14:46:01',NULL,NULL,1),(3,'dc','Documentos','Creación de un reporte específico','2020-04-28 14:46:01','2020-04-28 14:46:01',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_reporte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_situacion_observacion`
--

DROP TABLE IF EXISTS `cat_situacion_observacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_observacion` (
  `situacion_observacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_observacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_situacion_observacion`
--

LOCK TABLES `cat_situacion_observacion` WRITE;
/*!40000 ALTER TABLE `cat_situacion_observacion` DISABLE KEYS */;
INSERT INTO `cat_situacion_observacion` VALUES (1,'a','alta ',NULL,'2020-04-28 14:46:35','2020-04-28 14:46:35',NULL,NULL,1),(2,'b','baja',NULL,'2020-04-28 14:46:35','2020-04-28 14:46:35',NULL,NULL,1),(3,'cb','cambios',NULL,'2020-04-28 14:46:35','2020-04-28 14:46:35',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_situacion_observacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_vista`
--

DROP TABLE IF EXISTS `cat_vista`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_vista` (
  `vista_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `url_api` varchar(255) DEFAULT NULL,
  `objeto_id` int(11) DEFAULT NULL,
  `vista_db` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`vista_id`),
  KEY `cat_vista_fk` (`objeto_id`),
  CONSTRAINT `cat_vista_fk` FOREIGN KEY (`objeto_id`) REFERENCES `cat_objeto` (`objeto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_vista`
--

LOCK TABLES `cat_vista` WRITE;
/*!40000 ALTER TABLE `cat_vista` DISABLE KEYS */;
INSERT INTO `cat_vista` VALUES 
(1,'R01','Reporte de asistencia a videoconferencias','reportes/alumnos/consultaAsistenciaVideoconferencias.php',2,'','2020-04-28 18:24:58','2020-04-30 01:55:33',NULL,NULL,1,'Asistencias de cada alumno a las videoconferencias'),
(2,'R02','Reporte de avance por asignatura','reportes/asignatura/avance.php',4,'','2020-04-28 18:24:58','2020-04-30 01:55:33',NULL,NULL,1,'Avance de alumnos en cada materia'),
(3,'R03','Reporte de accesos','reportes/alumnos/consultaAccesos.php',2,'','2020-04-28 18:24:58','2020-04-30 01:55:33',NULL,NULL,1,'Último acceso de alumno a la plataforma'),
(4,'R04','Reporte de videoconferencias','reportes/docentes/consultaConferencias.php',2,'','2020-04-28 18:24:58','2020-04-30 01:55:33',NULL,NULL,1,'Reporte estadistico de cada clase del docente'),
(5,'R05','Reporte de pendientes','reportes/docentes/pendientesDocente.php',2,'','2020-04-28 18:24:58.0','2020-04-30 01:55:33.0',NULL,NULL,1,'Pendientes de calificar por docente en cada asignatura'),
(6,'R06','Reporte de actividades ','reportes/asignatura/calificacionesAsignatura.php',4,'','2020-04-28 18:24:58.0','2020-04-30 01:55:33.0',NULL,NULL,1,'Calificaciones de cada actividad en una asignatura'),
(7,'R07','Reporte de información','reportes/alumnos/solicitud.php',2,'','2020-04-28 18:24:58.0','2020-04-30 01:55:33.0',NULL,NULL,1,'Información general del alumno que ha ingresado'),
(8,'R08','Reporte de expediente','reportes/alumnos/consultaExpediente.php',0,'','2020-04-28 18:24:58.0','2020-04-30 01:55:33.0',NULL,NULL,1,'Información de expediente de los alumnos'),
(9,'R09','Reporte de situación','reportes/alumnos/situacion.php',0,'','2020-04-28 18:24:58.0','2020-04-30 01:55:33.0',NULL,NULL,1,'Reporte estadístico de la situación de los alumnos'),
(10,'R10','Reporte de alumnos reales','reportes/grupos/reporteAlumnosReales.php',0,'','2020-04-28 18:24:58.0','2020-04-30 01:55:33.0',NULL,NULL,0,'Reporte estadístico de los alumnos por carrera'),
(11,'R11','Reporte de alumnos por oferta','reportes/administracion/consultaAlumnosOferta.php',0,'','2020-04-28 18:24:58.0','2020-08-14 00:34:34.0',NULL,NULL,1,'Reporte de los alumnos cursando las asignaturas en la oferta'),
(12,'R12','Reporte de alumnos reprobados','reportes/alumnos/alumnosReprobados.php',0,'','2020-04-28 18:24:58.0','2020-08-14 00:34:34.0',NULL,NULL,1,'Reporte de los alumnos que reprobaron calificación en cada asignatura'),
(13,'R13','Reporte estadístico de grupos','reportes/grupos/reporteGrupo.php',0,'','2020-04-28 18:24:58.0','2020-08-14 00:34:34.0',NULL,NULL,1,'Información estadística del grupo'),
(14,'R14','Reporte de alumnos dado de baja','reportes/alumnos/alumnosBaja.php',0,'','2020-04-28 18:24:58.0','2020-08-14 00:34:34.0',NULL,NULL,1,'Reporte detallado de alumnos dados de baja'),
(15,'R15','Reporte de calificaciones','reportes/grupos/reporteAsignatura.php',5,'','2020-04-28 18:24:58.0','2020-08-14 00:34:34.0',NULL,NULL,1,'Calificaciones de todas las asignaturas en grupo'),
(16,'R16','Reporte estadístico para 911','reportes/alumnos/911.php',6,'','2020-04-28 18:24:58.0','2020-08-14 00:34:34.0',NULL,NULL,1,'Reporte estadístico por ciclo y grado'),
(17,'R17','Reporte de avance General','reportes/alumnos/avanceGeneral.php',2,'','2020-04-28 18:24:58.0','2020-08-14 00:34:34.0',NULL,NULL,1,'Reporte de avance general en las actividades de la asignatura'),
(18,'R18','Reporte de expediente de docente','reportes/docentes/consultaExpediente.php',2,'','2020-04-28 18:24:58.0','2020-08-14 00:34:34.0',NULL,NULL,1,'Información de expediente de los docentes')
;

/*!40000 ALTER TABLE `cat_vista` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_reporte_objeto`
--

DROP TABLE IF EXISTS `inter_reporte_objeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_reporte_objeto` (
  `reporte_objeto_id` int(11) NOT NULL AUTO_INCREMENT,
  `reporte_id` int(11) NOT NULL,
  `objeto_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reporte_objeto_id`),
  KEY `FK1_iro` (`reporte_id`),
  KEY `FK2_iro` (`objeto_id`),
  CONSTRAINT `FK1_iro` FOREIGN KEY (`reporte_id`) REFERENCES `cat_reporte` (`reporte_id`),
  CONSTRAINT `FK2_iro` FOREIGN KEY (`objeto_id`) REFERENCES `cat_objeto` (`objeto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_reporte_objeto`
--

LOCK TABLES `inter_reporte_objeto` WRITE;
/*!40000 ALTER TABLE `inter_reporte_objeto` DISABLE KEYS */;
INSERT INTO `inter_reporte_objeto` VALUES 
(3,1,8,'2020-04-30 01:54:13','2020-04-30 01:54:13',1),
(4,1,4,'2020-04-30 01:54:13','2020-04-30 01:54:13',1),
(5,1,5,'2020-04-30 01:54:13','2020-04-30 01:54:13',1),
(6,1,6,'2020-04-30 01:54:13','2020-04-30 01:54:13',1),
(7,1,7,'2020-04-30 01:54:13','2020-04-30 01:54:13',1);
/*!40000 ALTER TABLE `inter_reporte_objeto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_vista_objeto`
--

DROP TABLE IF EXISTS `inter_vista_objeto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_vista_objeto` (
  `vista_objeto_id` int(11) NOT NULL AUTO_INCREMENT,
  `objeto_id` int(11) NOT NULL,
  `vista_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`vista_objeto_id`),
  KEY `FK1_ivo` (`objeto_id`),
  KEY `FK2_ivo` (`vista_id`),
  CONSTRAINT `FK1_ivo` FOREIGN KEY (`objeto_id`) REFERENCES `cat_objeto` (`objeto_id`),
  CONSTRAINT `FK2_ivo` FOREIGN KEY (`vista_id`) REFERENCES `cat_vista` (`vista_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_vista_objeto`
--

LOCK TABLES `inter_vista_objeto` WRITE;
/*!40000 ALTER TABLE `inter_vista_objeto` DISABLE KEYS */;
INSERT INTO `inter_vista_objeto` VALUES 
(2,8,1,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(3,8,3,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(4,4,2,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(5,7,4,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(6,7,5,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(7,4,6,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(8,8,7,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(9,8,8,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(10,8,9,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(11,5,10,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(12,8,11,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(13,8,12,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(14,5,13,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(15,8,14,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(16,5,15,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(17,6,16,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(18,8,17,'2020-04-30 01:54:46','2020-04-30 01:54:46',1),
(19,7,17,'2020-04-30 01:54:46','2020-04-30 01:54:46',1)
;

/*!40000 ALTER TABLE `inter_vista_objeto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `materia_asignatura_realizada`
--

DROP TABLE IF EXISTS `materia_asignatura_realizada`;
/*!50001 DROP VIEW IF EXISTS `materia_asignatura_realizada`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `materia_asignatura_realizada` (
  `materia_id` tinyint NOT NULL,
  `asignatura_id` tinyint NOT NULL,
  `realizados` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `usuario_ultimoacceso`
--

DROP TABLE IF EXISTS `usuario_ultimoacceso`;
/*!50001 DROP VIEW IF EXISTS `usuario_ultimoacceso`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `usuario_ultimoacceso` (
  `usuario_id` tinyint NOT NULL,
  `ultimo_acceso` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Dumping routines for database 'estudyre'
--
/*!50003 DROP FUNCTION IF EXISTS `id_asignatura` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  FUNCTION `id_asignatura`() RETURNS int(11)
    NO SQL
    DETERMINISTIC
return @asignatura_id ;;
DELIMITER ;


DELIMITER ;;
CREATE  FUNCTION `id_ciclo`() RETURNS int(11)
    NO SQL
    DETERMINISTIC
return @id_ciclo ;;
DELIMITER ;


/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP FUNCTION IF EXISTS `id_asignatura_grupo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = cp850 */ ;
/*!50003 SET character_set_results = cp850 */ ;
/*!50003 SET collation_connection  = cp850_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  FUNCTION `id_asignatura_grupo`() RETURNS int(11)
    NO SQL
    DETERMINISTIC
return @asignatura_grupo_id ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `accesos_alumno`
--

        

/*!50001 DROP TABLE IF EXISTS `accesos_alumno`*/;
/*!50001 DROP VIEW IF EXISTS `accesos_alumno`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013  SQL SECURITY DEFINER */
/*!50001 VIEW `accesos_alumno` AS select `ta`.`alumno_id` AS `alumno_id`,`ta`.`clave_alumno` AS `matricula`,`p`.`nombre` AS `nombre`,`p`.`primer_apellido` AS `primer_apellido`,`p`.`segundo_apellido` AS `segundo_apellido`,`p`.`curp` AS `curp`,`p`.`celular` AS `celular`,`p`.`email` AS `email`,substr(`p`.`curp`,11,1) AS `sexo`,`p`.`fecha_nacimiento` AS `fecha_nacimiento`,year(curdate()) - year(`p`.`fecha_nacimiento`) AS `edad`,cast(`acc`.`ultimo_acceso` as date) AS `ultimo_acceso`,`cf`.`estado` AS `estado` from (((((`estudydg`.`usuarios` `u` join `estudydg`.`inter_persona_usuario_rol` `uri` on(`uri`.`usuario_id` = `u`.`usuario_id`)) join `estudydg`.`personas` `p` on(`p`.`persona_id` = `uri`.`persona_id`)) join `estudyce`.`tr_alumno` `ta` on(`ta`.`alumno_id` = `p`.`persona_id`)) left join `estudyre`.`usuario_ultimoacceso` `acc` on(`acc`.`usuario_id` = `uri`.`usuario_id`)) left join `estudyre`.`aspirante_estado` `cf` on(`cf`.`aspirante_id` = `p`.`persona_id`)) where `u`.`estatus` = 1 and `uri`.`estatus` = 1 and `p`.`estatus` = 1 and `u`.`usuario_id` > 3 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `asignaturas_totales`
--

/*!50001 DROP TABLE IF EXISTS `asignaturas_totales`*/;
/*!50001 DROP VIEW IF EXISTS `asignaturas_totales`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = cp850 */;
/*!50001 SET character_set_results     = cp850 */;
/*!50001 SET collation_connection      = cp850_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013  SQL SECURITY DEFINER */
/*!50001 VIEW `asignaturas_totales` AS select `ioa`.`asignatura_id` AS `asignatura_id`, count(`ta`.`actividad_id`) AS `totales` from (((`estudyle`.`tr_actividad` `ta` join `estudyle`.`inter_modulos_asignatura_grupo` `imag` on    ((`imag`.`modulo_id` = `ta`.`modulo_id`))) join `estudyce`.`inter_asignatura_grupo` `iag` on ((`iag`.`asignatura_grupo_id` = `imag`.`asignatura_grupo_id`))) join `estudydg`.`inter_orden_asignatura` `ioa` on    ((`ioa`.`orden_asignatura_id` = `iag`.`orden_asignatura_id`))) where    ((`ta`.`estatus` = 1)    and (`ta`.`tipo_actividad_id` <> 1) and (`ioa`.`asignatura_id` = `id_asignatura`())) group by `ioa`.`asignatura_id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `materia_asignatura_realizada`
--

/*!50001 DROP TABLE IF EXISTS `materia_asignatura_realizada`*/;
/*!50001 DROP VIEW IF EXISTS `materia_asignatura_realizada`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = cp850 */;
/*!50001 SET character_set_results     = cp850 */;
/*!50001 SET collation_connection      = cp850_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013  SQL SECURITY DEFINER */
/*!50001 VIEW `materia_asignatura_realizada` AS select `tm`.`materia_id` AS `materia_id`, `ioa`.`asignatura_id` AS `asignatura_id`, count(`tmfa1`.`calificacion`) AS `realizados` from (((`estudyle`.`tr_materia_fecha_actividad` `tmfa1` join `estudyle`.`tr_materia` `tm` on ((`tm`.`materia_id` = `tmfa1`.`materia_id`)))join `estudyle`.`tr_actividad` `ta` on ((`ta`.`actividad_id` = `tmfa1`.`actividad_id`))  join `estudyce`.`inter_asignatura_grupo` `iag` on   ((`iag`.`asignatura_grupo_id` = `tm`.`asignatura_grupo_id`))) join `estudydg`.`inter_orden_asignatura` `ioa` on   ((`ioa`.`orden_asignatura_id` = `iag`.`orden_asignatura_id`))) where    ((`ioa`.`asignatura_id` = `id_asignatura`())    and (`tmfa1`.`estatus` = 1) and (`ta`.`estatus` = 1)    and (`tmfa1`.`estatus_actividad_id` in (2, 4))) group by `tm`.`materia_id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;


--
-- Final view structure for view `asistencia_videoconferencia`
--

/*!50001 DROP TABLE IF EXISTS `asistencia_videoconferencia`*/;
/*!50001 DROP VIEW IF EXISTS `asistencia_videoconferencia`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = cp850 */;
/*!50001 SET character_set_results     = cp850 */;
/*!50001 SET collation_connection      = cp850_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013  SQL SECURITY DEFINER */
/*!50001 VIEW `asistencia_videoconferencia` AS select `tv`.`videoconferencia_id` AS `videoconferencia_id`,`tv`.`nombre` AS `nombre`,`tv`.`fecha_inicio` AS `fecha_inicio`,`tv`.`fecha_fin` AS `fecha_fin`,count(`tav`.`acceso_videoconferencia_id`) AS `asistencia` from (`estudyle`.`tr_acceso_videoconferencia` `tav` join `estudyle`.`tr_videoconferencia` `tv` on(`tv`.`videoconferencia_id` = `tav`.`videoconferencia_id`)) group by `tv`.`videoconferencia_id` having `asistencia` > 1 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `aspirante_estado`
--

/*!50001 DROP TABLE IF EXISTS `aspirante_estado`*/;
/*!50001 DROP VIEW IF EXISTS `aspirante_estado`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = cp850 */;
/*!50001 SET character_set_results     = cp850 */;
/*!50001 SET collation_connection      = cp850_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013  SQL SECURITY DEFINER */
/*!50001 VIEW `aspirante_estado` AS select `ica`.`aspirante_id` AS `aspirante_id`,`ica`.`respuesta` AS `estado` from (`estudysg`.`tr_campo_formulario` `tcf` join `estudysg`.`inter_campo_aspirante` `ica` on(`ica`.`campo_formulario_id` = `tcf`.`campo_formulario_id`)) where `ica`.`campo_formulario_id` = 18 and `ica`.`respuesta` <> 'undefined' and `ica`.`respuesta` is not null */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `materia_asignatura_realizada`
--

/*!50001 DROP TABLE IF EXISTS `materia_asignatura_realizada`*/;
/*!50001 DROP VIEW IF EXISTS `materia_asignatura_realizada`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = cp850 */;
/*!50001 SET character_set_results     = cp850 */;
/*!50001 SET collation_connection      = cp850_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013  SQL SECURITY DEFINER */
/*!50001 VIEW `materia_asignatura_realizada` AS select `tm`.`materia_id` AS `materia_id`, `ioa`.`asignatura_id` AS `asignatura_id`, count(`tmfa1`.`calificacion`) AS `realizados` from (((`estudyle`.`tr_materia_fecha_actividad` `tmfa1` join `estudyle`.`tr_materia` `tm` on ((`tm`.`materia_id` = `tmfa1`.`materia_id`)))join `estudyle`.`tr_actividad` `ta` on ((`ta`.`actividad_id` = `tmfa1`.`actividad_id`))  join `estudyce`.`inter_asignatura_grupo` `iag` on   ((`iag`.`asignatura_grupo_id` = `tm`.`asignatura_grupo_id`))) join `estudydg`.`inter_orden_asignatura` `ioa` on   ((`ioa`.`orden_asignatura_id` = `iag`.`orden_asignatura_id`))) where    ((`ioa`.`asignatura_id` = `id_asignatura`())    and (`tmfa1`.`estatus` = 1) and (`ta`.`estatus` = 1)    and (`tmfa1`.`estatus_actividad_id` in (2, 4))) group by `tm`.`materia_id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;


--
-- Final view structure for view `usuario_ultimoacceso`
--

/*!50001 DROP TABLE IF EXISTS `usuario_ultimoacceso`*/;
/*!50001 DROP VIEW IF EXISTS `usuario_ultimoacceso`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = cp850 */;
/*!50001 SET character_set_results     = cp850 */;
/*!50001 SET collation_connection      = cp850_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013  SQL SECURITY DEFINER */
/*!50001 VIEW `usuario_ultimoacceso` AS select `tbs`.`usuario_id` AS `usuario_id`,max(`tbs`.`fecha_inicio`) AS `ultimo_acceso` from `estudydg`.`tr_bitacora_sesion` `tbs` group by `tbs`.`usuario_id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-30  2:01:25
