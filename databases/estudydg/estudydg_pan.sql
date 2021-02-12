-- MySQL dump 10.17  Distrib 10.3.15-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: estudydg
-- ------------------------------------------------------
-- Server version	10.3.15-MariaDB

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
-- Table structure for table `cat_asignaturas`
--

DROP TABLE IF EXISTS `cat_asignaturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_asignaturas` (
  `asignatura_padre_id` int(11) DEFAULT NULL,
  `asignatura_padre_seriacion` varchar(50) DEFAULT NULL,
  `asignatura_id` int(11) NOT NULL AUTO_INCREMENT,
  `asignatura_clave` varchar(50) NOT NULL DEFAULT 'NA',
  `asignatura` varchar(255) NOT NULL DEFAULT '0',
  `tipo_asignatura_id` int(11) NOT NULL DEFAULT 0,
  `calif_min` int(5) DEFAULT NULL,
  `calif_max` int(5) DEFAULT NULL,
  `creditos` double NOT NULL DEFAULT 0,
  `bienvenida_desc` text DEFAULT NULL,
  `objetivos_desc` text DEFAULT NULL,
  `evaluacion_desc` text DEFAULT NULL,
  `bibliografia_desc` text DEFAULT NULL,
  `url_imagen` varchar(100) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`asignatura_id`),
  KEY `FK1_TipoAsignatura` (`tipo_asignatura_id`),
  CONSTRAINT `FK1_TipoAsignatura` FOREIGN KEY (`tipo_asignatura_id`) REFERENCES `cat_tipo_asignaturas` (`tipo_asignatura_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_asignaturas`
--

LOCK TABLES `cat_asignaturas` WRITE;
/*!40000 ALTER TABLE `cat_asignaturas` DISABLE KEYS */;
INSERT INTO `cat_asignaturas` (`asignatura_padre_id`, `asignatura_padre_seriacion`, `asignatura_id`, `asignatura_clave`, `asignatura`, `tipo_asignatura_id`, `calif_min`, `calif_max`, `creditos`, `bienvenida_desc`, `objetivos_desc`, `evaluacion_desc`, `bibliografia_desc`, `url_imagen`, `fecha_creacion`, `fecha_actualiza`, `usuario_crea`, `usuario_actualiza`, `estatus`) VALUES
(NULL, NULL, 0, 'NA', 'No Aplica', 0, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:00:51', '2019-07-28 02:01:29', NULL, NULL, 0),
(NULL, NULL, 1, 'TI5101', 'Álgebra Superior', 4, 6, 10, 6.5, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:00:22', '2019-07-28 02:02:24', NULL, NULL, 0),
(NULL, NULL, 2, 'TI5102', 'Geometría Analítica', 4, 6, 10, 6.5, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:03:26', '2019-07-28 02:03:33', NULL, NULL, 0),
(NULL, NULL, 3, 'TI5103', 'Economía', 4, 6, 10, 6.5, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:04:35', '2019-07-28 02:04:35', NULL, NULL, 0),
(NULL, NULL, 4, 'TI5104', 'Administración', 4, 6, 10, 6, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:08:58', '2019-07-28 02:08:58', NULL, NULL, 0),
(NULL, NULL, 5, 'TI5105', 'Aprendizaje y Comunicación', 4, 6, 10, 5.5, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:08:58', '2019-07-28 02:08:58', NULL, NULL, 0),
(NULL, NULL, 6, 'TI5106', 'Inducción a la Ingeniería', 4, 6, 10, 6.5, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:08:58', '2019-07-28 02:08:58', NULL, NULL, 0),
(NULL, NULL, 7, 'TI5107', 'Física Experimental', 4, 6, 10, 5.5, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:08:58', '2019-07-28 02:08:58', NULL, NULL, 0),
(NULL, NULL, 8, 'T50113', 'Administración del Tiempo', 2, 6, 10, 1, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:08:58', '2019-07-28 02:08:58', NULL, NULL, 0),
(NULL, NULL, 9, 'TI5201', 'Álgebra lineal', 4, 6, 10, 6.5, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:12:00', '2019-07-28 02:12:00', NULL, NULL, 0),
(1, 'TI5101', 10, 'TI5202', 'Cálculo Diferencial e Integral', 4, 6, 10, 6.5, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:12:00', '2019-07-28 02:14:43', NULL, NULL, 0),
(7, 'T15107', 11, 'TI5207', 'Estática', 4, 6, 10, 6.5, NULL, NULL, NULL, NULL, NULL, '2019-07-28 02:14:43', '2019-07-28 02:14:43', NULL, NULL, 0),
(NULL, NULL, 12, 'CPAN01', 'Pensamiento político del PAN.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:02:04', '2020-01-11 19:02:04', 'root@localhost', NULL, 1),
(NULL, NULL, 13, 'CPAN00', 'Marco jurídico electoral.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:02:36', '2020-01-11 19:02:36', 'root@localhost', NULL, 1),
(NULL, NULL, 14, 'CPAN02', 'Principios generales de una campaña política.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:03:02', '2020-01-11 19:03:02', 'root@localhost', NULL, 1),
(NULL, NULL, 15, 'CPAN04', 'Liderazgo.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:03:27', '2020-01-11 19:03:27', 'root@localhost', NULL, 1),
(NULL, NULL, 16, 'CPAN05', 'Ética política.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:04:22', '2020-01-11 19:04:22', 'root@localhost', NULL, 1),
(NULL, NULL, 17, 'CPAN06', 'Obligaciones de los partido y sus candidatos.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:04:50', '2020-01-11 19:04:50', 'root@localhost', NULL, 1),
(NULL, NULL, 18, 'CPAN07', 'Gestión del conflicto y negociación.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:05:15', '2020-01-11 19:05:15', 'root@localhost', NULL, 1),
(NULL, NULL, 19, 'CPAN08', 'Análisis de problemas y toma de decisiones.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:05:35', '2020-01-11 19:05:35', 'root@localhost', NULL, 1),
(NULL, NULL, 20, 'CPAN09', 'Investigación de la opinión pública.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:06:21', '2020-01-11 19:06:21', 'root@localhost', NULL, 1),
(NULL, NULL, 21, 'CPAN010', 'Estrategia de campaña.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:06:44', '2020-01-11 19:06:44', 'root@localhost', NULL, 1),
(NULL, NULL, 22, 'CPAN011', 'Introducción a la psicología política.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:07:15', '2020-01-11 19:07:15', 'root@localhost', NULL, 1),
(NULL, NULL, 23, 'CPAN012', 'Igualdad sustantiva y paridad.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:07:44', '2020-01-11 19:07:44', 'root@localhost', NULL, 1),
(NULL, NULL, 24, 'CPAN013', 'Comunicación efectiva.', 1, 5, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:08:54', '2020-01-11 19:08:54', 'root@localhost', NULL, 1),
(NULL, NULL, 25, 'CPAN014', 'Trabajo en equipo.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:09:20', '2020-01-11 19:09:20', 'root@localhost', NULL, 1),
(NULL, NULL, 26, 'CPAN015', 'Perfiles de la personalidad y tipologías de votantes.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:09:42', '2020-01-11 19:09:42', 'root@localhost', NULL, 1),
(NULL, NULL, 27, 'CPAN016', 'Evolución de la normatividad.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:10:08', '2020-01-11 19:10:08', 'root@localhost', NULL, 1),
(NULL, NULL, 28, 'CPAN017', 'Administración de la información.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:10:55', '2020-01-11 19:10:55', 'root@localhost', NULL, 1),
(NULL, NULL, 29, 'CPAN017', 'Violencia política en razón de genero', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:11:15', '2020-01-11 19:11:15', 'root@localhost', NULL, 1),
(NULL, NULL, 30, 'CPAN018', 'Debate político.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:12:26', '2020-01-11 19:12:26', 'root@localhost', NULL, 1),
(NULL, NULL, 31, 'CPAN019', 'Órganos electorales y Representación del PAN.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:12:51', '2020-01-11 19:12:51', 'root@localhost', NULL, 1),
(NULL, NULL, 32, 'CPAN020', 'Planeación de campaña.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:13:19', '2020-01-11 19:13:19', 'root@localhost', NULL, 1),
(NULL, NULL, 33, 'CPAN021', 'Construcción de la narrativa de campaña.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:13:44', '2020-01-11 19:13:44', 'root@localhost', NULL, 1),
(NULL, NULL, 34, 'CPAN022', 'Comunicación digital.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:14:13', '2020-01-11 19:14:13', 'root@localhost', NULL, 1),
(NULL, NULL, 35, 'CPAN023', 'Planeación territorial de la campaña.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:14:33', '2020-01-11 19:14:33', 'root@localhost', NULL, 1),
(NULL, NULL, 36, 'CPAN025', 'Ejercito electoral y cadena de custodia.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:15:34', '2020-01-11 19:15:34', 'root@localhost', NULL, 1),
(NULL, NULL, 37, 'CPAN026', 'Promoción y movilización del voto.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:16:06', '2020-01-11 19:16:06', 'root@localhost', NULL, 1),
(NULL, NULL, 38, 'CPAN027', 'Agenda del candidato y agenda de campaña.', 1, 6, 10, 40, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:16:32', '2020-01-11 19:16:32', 'root@localhost', NULL, 1),
(NULL, NULL, 39, 'CPAN028', 'Simulador de campaña', 1, 6, 10, 50, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:17:01', '2020-01-11 19:17:01', 'root@localhost', NULL, 1),
(NULL, NULL, 40, 'CPAN028', 'Sesión de campo', 1, 6, 10, 50, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:17:31', '2020-01-11 19:17:31', 'root@localhost', NULL, 1),
(NULL, NULL, 41, 'ACEP01', 'Pensamiento político del PAN.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:24:46', '2020-01-11 19:24:46', 'root@localhost', NULL, 1),
(NULL, NULL, 42, 'ACEP02', 'Marco jurídico electoral.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:27:14', '2020-01-11 19:27:14', 'root@localhost', NULL, 1),
(NULL, NULL, 43, 'ACEP03', 'Principios generales de una campaña política.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:27:35', '2020-01-11 19:27:35', 'root@localhost', NULL, 1),
(NULL, NULL, 44, 'ACEP04', 'Liderazgo.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:28:03', '2020-01-11 19:28:03', 'root@localhost', NULL, 1),
(NULL, NULL, 45, 'ACEP05', 'Ética política.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:28:32', '2020-01-11 19:28:32', 'root@localhost', NULL, 1),
(NULL, NULL, 46, 'ACEP06', 'Obligaciones de los partido y sus candidatos.', 1, 5, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:29:12', '2020-01-11 19:29:12', 'root@localhost', NULL, 1),
(NULL, NULL, 47, 'ACEP07', 'Gestión del conflicto y negociación.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:29:46', '2020-01-11 19:29:46', 'root@localhost', NULL, 1),
(NULL, NULL, 48, 'ACEP08', 'Análisis de problemas y toma de decisiones.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:30:10', '2020-01-11 19:30:10', 'root@localhost', NULL, 1),
(NULL, NULL, 49, 'ACEP09', 'Investigación de la opinión pública.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:30:43', '2020-01-11 19:30:43', 'root@localhost', NULL, 1),
(NULL, NULL, 50, 'ACEP010', 'Estrategia de campaña.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:31:08', '2020-01-11 19:31:08', 'root@localhost', NULL, 1),
(NULL, NULL, 51, 'ACEP011', 'Introducción a la psicología política.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:31:29', '2020-01-11 19:31:29', 'root@localhost', NULL, 1),
(NULL, NULL, 52, 'ACEP012', 'Igualdad sustantiva y paridad.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:31:53', '2020-01-11 19:31:53', 'root@localhost', NULL, 1),
(NULL, NULL, 53, 'ACEP013', 'Comunicación efectiva.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:32:30', '2020-01-11 19:32:30', 'root@localhost', NULL, 1),
(NULL, NULL, 54, 'ACEP014', 'Trabajo en equipo.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:32:54', '2020-01-11 19:32:54', 'root@localhost', NULL, 1),
(NULL, NULL, 55, 'ACEP015', 'Perfiles de la personalidad y tipologías de votantes.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:33:20', '2020-01-11 19:33:20', 'root@localhost', NULL, 1),
(NULL, NULL, 56, 'ACEP016', 'Evolución de la normatividad.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:33:42', '2020-01-11 19:33:42', 'root@localhost', NULL, 1),
(NULL, NULL, 57, 'ACEP017', 'Administración de la información.', 1, 5, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:35:44', '2020-01-11 19:35:44', 'root@localhost', NULL, 1),
(NULL, NULL, 58, 'ACEP018', 'Violencia política en razón de genero', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:36:20', '2020-01-11 19:36:20', 'root@localhost', NULL, 1),
(NULL, NULL, 59, 'ACEP019', 'Debate político.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:36:38', '2020-01-11 19:36:38', 'root@localhost', NULL, 1),
(NULL, NULL, 60, 'ACEP019', 'Historia y lucha del PAN.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:37:03', '2020-01-11 19:37:03', 'root@localhost', NULL, 1),
(NULL, NULL, 61, 'ACEP021', 'Programa y propuesta del PAN.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:38:05', '2020-01-11 19:38:05', 'root@localhost', NULL, 1),
(NULL, NULL, 62, 'ACEP021', 'Psicología social de los liderazgos del voto.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:38:33', '2020-01-11 19:38:33', 'root@localhost', NULL, 1),
(NULL, NULL, 63, 'ACEP022', 'Atributos psicológicos del líder y su estilo.', 1, 6, 10, 20, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:39:00', '2020-01-11 19:39:00', 'root@localhost', NULL, 1),
(NULL, NULL, 64, 'ACEP023', 'La familia y las relaciones emocionales.', 1, 6, 10, 30, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:39:21', '2020-01-11 19:39:21', 'root@localhost', NULL, 1),
(NULL, NULL, 65, 'ACEP025', 'Simulador de campaña', 1, 6, 10, 50, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:39:58', '2020-01-11 19:39:58', 'root@localhost', NULL, 1),
(NULL, NULL, 66, 'ACEP026', 'Sesión de campo', 1, 6, 10, 50, NULL, NULL, NULL, NULL, NULL, '2020-01-11 19:40:32', '2020-01-11 19:40:32', 'root@localhost', NULL, 1);
/*!40000 ALTER TABLE `cat_asignaturas` ENABLE KEYS */;
UNLOCK TABLES;






DROP TABLE IF EXISTS `cat_campus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_campus` (
  `campus_id` int(11) NOT NULL AUTO_INCREMENT,
  `institucion_id` int(11) NOT NULL DEFAULT 0,
  `campus_clave` varchar(50) NOT NULL DEFAULT '0',
  `campus` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`campus_id`),
  KEY `IDX_CAMPUS_INSTITUCION` (`institucion_id`),
  CONSTRAINT `FK1_campus_institucion` FOREIGN KEY (`institucion_id`) REFERENCES `cat_instituciones` (`institucion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_campus`
--

LOCK TABLES `cat_campus` WRITE;
/*!40000 ALTER TABLE `cat_campus` DISABLE KEYS */;
INSERT INTO `cat_campus` VALUES (0,0,'NA','No aplica','2019-07-28 01:34:15','2019-07-28 01:36:40',NULL,NULL,0),(1,1,'UNITEC01','UNITEC ATIZAPAN','2019-07-28 01:36:40','2019-07-28 01:37:22',NULL,NULL,1),(2,1,'UNITEC02','UNITEC MARINA','2019-07-28 01:36:40','2019-07-28 01:38:14',NULL,NULL,1),(3,1,'UNITEC03','UNITEC CUITLAHUAC','2019-07-28 01:36:40','2019-07-28 01:38:14',NULL,NULL,1),(4,1,'UNITEC04','UNITEC ECATEPEC','2019-07-28 01:38:14','2019-07-28 01:40:41',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_campus` ENABLE KEYS */;
UNLOCK TABLES;





DROP TABLE IF EXISTS `cat_instituciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_instituciones` (
  `institucion_id` int(11) NOT NULL AUTO_INCREMENT,
  `institucion_clave` varchar(50) NOT NULL DEFAULT '0',
  `institucion` varchar(255) NOT NULL DEFAULT '0',
  `tipo_institucion_id` int(11) DEFAULT NULL,
  `origen` varchar(20) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`institucion_id`),
  KEY `FK1_TipoInstitucion` (`tipo_institucion_id`),
  CONSTRAINT `FK1_TipoInstitucion` FOREIGN KEY (`tipo_institucion_id`) REFERENCES `cat_tipo_instituciones` (`tipo_institucion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_instituciones`
--

LOCK TABLES `cat_instituciones` WRITE;
/*!40000 ALTER TABLE `cat_instituciones` DISABLE KEYS */;
INSERT INTO `cat_instituciones` VALUES (0,'NA','No Aplica',1,'0','2019-07-28 01:20:08','2019-07-28 02:15:26',NULL,NULL,0),(1,'UNITEC','Universidad Tecnológica de México',1,'0','2019-07-28 01:20:52','2019-07-28 01:28:43',NULL,NULL,1),(2,'UNAM','Universidad Nacional Autónoma de México',1,'0','2019-07-28 01:25:21','2019-07-28 01:28:43',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_instituciones` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Dumping data for table `tr_plataforma_institucion`
--

DROP TABLE IF EXISTS `plataforma_institucion`;

CREATE TABLE `plataforma_institucion`(
	institucion_id int(100)not null,
	foreign key(institucion_id) references cat_instituciones (institucion_id),
	color varchar(100),
	url_perfil varchar(100),
	estatus int(2)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `cat_nivel_estudios`
--

DROP TABLE IF EXISTS `cat_nivel_estudios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_nivel_estudios` (
  `nivel_estudios_id` int(11) NOT NULL AUTO_INCREMENT,
  `nivel_estudios_clave` int(11) NOT NULL DEFAULT 0,
  `nivel_estudios` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`nivel_estudios_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_nivel_estudios`
--

LOCK TABLES `cat_nivel_estudios` WRITE;
/*!40000 ALTER TABLE `cat_nivel_estudios` DISABLE KEYS */;
INSERT INTO `cat_nivel_estudios` VALUES 
(0,0,'No Aplica','2019-07-28 01:42:26','2019-07-28 02:15:37',NULL,NULL,0),
(1,95,'DOCTORADO','2019-02-27 00:51:56','2019-02-27 00:51:56',NULL,NULL,1),
(2,85,'ESPECIALIDAD','2019-02-27 00:51:56','2019-02-27 00:51:56',NULL,NULL,1),
(3,84,'TÉCNICO SUPERIOR UNIVERSITARIO','2019-02-27 00:51:56','2019-02-27 00:51:56',NULL,NULL,1),
(4,83,'PROFESIONAL ASOCIADO','2019-02-27 00:51:56','2019-02-27 00:51:56',NULL,NULL,1),
(5,82,'MAESTRÍA','2019-02-27 00:51:56','2019-02-27 00:51:56',NULL,NULL,1),
(6,81,'LICENCIATURA','2019-02-27 00:51:56','2019-02-27 00:51:56',NULL,NULL,1),
(7, 10, 'CURSOS', '2020-01-11 17:13:20', '2020-01-11 18:52:09', NULL, NULL, 1);
/*!40000 ALTER TABLE `cat_nivel_estudios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_orden_jerarquico`
--

DROP TABLE IF EXISTS `cat_orden_jerarquico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_orden_jerarquico` (
  `orden_jerarquico_id` int(11) NOT NULL AUTO_INCREMENT,
  `orden_jerarquico` varchar(255) DEFAULT NULL,
  `orden_jerarquico_descripcion` varchar(255) DEFAULT NULL,
  `num_periodo` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`orden_jerarquico_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_orden_jerarquico`
--

LOCK TABLES `cat_orden_jerarquico` WRITE;
/*!40000 ALTER TABLE `cat_orden_jerarquico` DISABLE KEYS */;
INSERT INTO `cat_orden_jerarquico` VALUES (0,'0','No Aplica',0,'2019-07-28 01:48:57','2019-07-28 01:49:12',NULL,NULL,0),
(1,'1','Primero',191,'2019-07-28 01:48:57','2019-07-28 01:49:12',NULL,NULL,1),(2,'2','Segundo',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(3,'3','Tercero',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(4,'4','Cuarto',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(5,'5','Quinto',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(6,'6','Sexto',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(7,'7','Septimo',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(8,'8','Octavo',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(9,'9','Noveno',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(10,'10','Decimo',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(100,'0','Propedéutico',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_orden_jerarquico` ENABLE KEYS */;
UNLOCK TABLES;

	
--
-- Table structure for table `cat_privilegios`
--

DROP TABLE IF EXISTS `cat_privilegios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_privilegios` (
  `privilegio_id` int(11) NOT NULL AUTO_INCREMENT,
  `privilegio_clave` varchar(50) DEFAULT NULL,
  `privilegio` varchar(255) DEFAULT NULL,
  `icono` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  `privilegio_padre_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`privilegio_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_privilegios`
--

LOCK TABLES `cat_privilegios` WRITE;
/*!40000 ALTER TABLE `cat_privilegios` DISABLE KEYS */;
INSERT INTO `cat_privilegios` VALUES 
(0,'NA','No Aplica',NULL,NULL,'2019-07-28 02:19:36','2019-07-28 02:20:00',NULL,NULL,0,NULL),
(1,'ce','Ciclos y periodos','','admin/ciclo/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,NULL),
(2,'g','Grupos','','admin/grupo/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,NULL),
(4,'a','Alumnos','','admin/alumno/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,NULL),
(5,'dg','Datos Generales','fa-plus','','2019-07-28 02:20:54','2019-07-28 02:20:54','root',NULL,1,NULL),
(6,'crr','Carrera','','admin/carrera/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,5),
(7,'pe','Plan de estudios','','admin/plan-estudios/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,5),
(8,'asg','Asignatura','','admin/plan-estudios/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,5),
(9,'ca','Carga de Actividades','fa-plus','','2019-07-28 02:20:55','2019-07-28 02:20:55','root',NULL,1,NULL),
(10,'asg','Carga','','admin/modulos/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,9),
(11,'asg','Fechas y vinculaciones','','admin/actividades/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,9),
(12,'ac','Administración de correos','fa-plus','','2019-07-28 02:20:55','2019-07-28 02:20:55','root',NULL,1,NULL),
(13,'pr','Correos','','admin/manejador-correo/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,12),
(14,'lc','Lista de correos','','admin/grupo-correos/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,12),
(15,'p','Plataforma','fa-plus','','2019-07-28 02:20:55','2019-07-28 02:20:55','root',NULL,1,NULL),
(16,'us','Usuarios','','admin/usuario/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,15),
(17,'rl','Roles','','admin/rol/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,15),
(18,'pr','Privilegios','','admin/privilegio/','2019-06-17 19:50:16','2019-06-17 19:50:16','root',NULL,1,15),
(19,'m','Materias','fa-book','learning/materia/','2019-07-28 02:20:55','2019-07-28 02:20:55','root',NULL,1,NULL);
/*!40000 ALTER TABLE `cat_privilegios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_rol`
--

DROP TABLE IF EXISTS `cat_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_rol` (
  `rol_id` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`rol_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_rol`
--

LOCK TABLES `cat_rol` WRITE;
/*!40000 ALTER TABLE `cat_rol` DISABLE KEYS */;
INSERT INTO `cat_rol` VALUES (0,'No Aplica','2019-07-28 02:24:50','2019-07-28 02:24:54',NULL,NULL,0),(1,'Admin','2019-07-28 02:25:24','2019-07-28 02:25:24',NULL,NULL,1),(2,'Alumno','2019-07-28 02:25:24','2019-07-28 02:25:24',NULL,NULL,1),(3,'Docente','2019-07-28 02:25:42','2019-07-28 02:25:42',NULL,NULL,1),(4,'Aspirante','2019-07-28 02:25:42','2019-07-28 02:25:42',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_rol` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `cat_sexo`
--

DROP TABLE IF EXISTS `cat_sexo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_sexo` (
  `sexo_id` int(11) NOT NULL AUTO_INCREMENT,
  `sexo_clave` varchar(50) NOT NULL,
  `sexo_descripcion` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`sexo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_sexo`
--

LOCK TABLES `cat_sexo` WRITE;
/*!40000 ALTER TABLE `cat_sexo` DISABLE KEYS */;
INSERT INTO `cat_sexo` VALUES (0,'NA','No Aplica','2019-07-28 01:51:23','2019-07-28 01:51:28',NULL,NULL,1),(1,'M','Masculino','2019-07-15 23:31:17','2019-07-15 23:31:17',NULL,NULL,1),(2,'F','Femenino','2019-07-15 23:31:17','2019-07-15 23:31:17',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_sexo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipo_asignaturas`
--

DROP TABLE IF EXISTS `cat_tipo_asignaturas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_asignaturas` (
  `tipo_asignatura_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_asignatura` varchar(50) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_asignatura_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipo_asignaturas`
--

LOCK TABLES `cat_tipo_asignaturas` WRITE;
/*!40000 ALTER TABLE `cat_tipo_asignaturas` DISABLE KEYS */;
INSERT INTO `cat_tipo_asignaturas` VALUES 
(0,'No Aplica','2019-07-28 01:57:46','2019-07-28 01:57:52',NULL,NULL,0),
(1,'regular','2019-07-15 14:29:59','2019-07-28 02:22:03',NULL,NULL,1),
(2,'optativa','2019-07-15 14:29:59','2019-07-15 14:29:59',NULL,NULL,1),
(3,'extraordinaria','2019-07-15 14:29:59','2019-07-28 02:22:03',NULL,NULL,1),
(4,'básica','2019-07-28 01:58:37','2019-07-28 01:58:55',NULL,NULL,1),
(5,'específica','2019-07-28 01:58:37','2019-07-28 01:58:55',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_tipo_asignaturas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipo_instituciones`
--

DROP TABLE IF EXISTS `cat_tipo_instituciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_instituciones` (
  `tipo_institucion_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_institucion` varchar(255) NOT NULL,
  `tipo_institucion_clave` varchar(50) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_institucion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipo_instituciones`
--

LOCK TABLES `cat_tipo_instituciones` WRITE;
/*!40000 ALTER TABLE `cat_tipo_instituciones` DISABLE KEYS */;
INSERT INTO `cat_tipo_instituciones` VALUES (0,'NA','No Aplica','2019-07-28 01:14:32','2019-07-28 01:55:37',NULL,NULL,0),(1,'Educativa','EDU','2019-07-28 01:16:35','2019-07-28 01:31:25',NULL,NULL,1),(2,'Especializada','ESP','2019-07-28 01:18:59','2019-07-28 01:31:25',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_tipo_instituciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipo_periodo`
--

DROP TABLE IF EXISTS `cat_tipo_periodo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_periodo` (
  `tipo_periodo_id` int(11) NOT NULL AUTO_INCREMENT,
  `periodo_clave` varchar(50) NOT NULL,
  `periodo` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_periodo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipo_periodo`
--

LOCK TABLES `cat_tipo_periodo` WRITE;
/*!40000 ALTER TABLE `cat_tipo_periodo` DISABLE KEYS */;
INSERT INTO `cat_tipo_periodo` VALUES (0,'0','No Aplica','2019-07-28 01:53:02','2019-07-28 01:53:07',NULL,NULL,0),
(1,'91','SEMESTRE','2019-02-27 00:55:39','2019-02-27 00:55:39',NULL,NULL,1),
(2,'92','BIMESTRE','2019-02-27 00:55:39','2019-02-27 00:55:39',NULL,NULL,1),
(3,'93','CUATRIMESTRE','2019-02-27 00:55:39','2019-02-27 00:55:39',NULL,NULL,1),
(4,'94','TETRAMESTRE','2019-02-27 00:55:39','2019-02-27 00:55:39',NULL,NULL,1),
(5,'260','TRIMESTRE','2019-02-27 00:55:39','2019-02-27 00:55:39',NULL,NULL,1),
(6,'261','MODULAR','2019-02-27 00:55:39','2019-02-27 00:55:39',NULL,NULL,1),
(7,'262','ANUAL','2019-02-27 00:55:39','2019-02-27 00:55:39',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_tipo_periodo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipo_plan_estudios`
--

DROP TABLE IF EXISTS `cat_tipo_plan_estudios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_plan_estudios` (
  `tipo_plan_estudio_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_plan_estudio_clave` varchar(50) DEFAULT NULL,
  `tipo_plan_estudio` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_plan_estudio_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipo_plan_estudios`
--

LOCK TABLES `cat_tipo_plan_estudios` WRITE;
/*!40000 ALTER TABLE `cat_tipo_plan_estudios` DISABLE KEYS */;
INSERT INTO `cat_tipo_plan_estudios` (`tipo_plan_estudio_id`, `tipo_plan_estudio_clave`, `tipo_plan_estudio`, `fecha_creacion`, `fecha_actualiza`, `usuario_crea`, `usuario_actualiza`, `estatus`) VALUES
(0, 'NA', 'No Aplica', '2019-07-28 01:54:55', '2019-07-28 01:55:10', NULL, NULL, 0),
(1, 'M', 'Modular', '2019-07-28 01:54:55', '2019-07-28 01:55:10', NULL, NULL, 1),
(2, 'T', 'Tradicional', '2019-07-28 01:54:55', '2019-07-28 01:55:10', NULL, NULL, 1);
/*!40000 ALTER TABLE `cat_tipo_plan_estudios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_carrera_campus`
--

DROP TABLE IF EXISTS `inter_carrera_campus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_carrera_campus` (
  `carrera_id` int(11) NOT NULL,
  `campus_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`carrera_id`,`campus_id`),
  KEY `FK1_campus` (`campus_id`),
  CONSTRAINT `FK1_campus` FOREIGN KEY (`campus_id`) REFERENCES `cat_campus` (`campus_id`),
  CONSTRAINT `FK3_carrera` FOREIGN KEY (`carrera_id`) REFERENCES `tr_carrera` (`carrera_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_carrera_campus`
--

LOCK TABLES `inter_carrera_campus` WRITE;
/*!40000 ALTER TABLE `inter_carrera_campus` DISABLE KEYS */;
INSERT INTO `inter_carrera_campus` VALUES (1,1,'2019-07-28 02:27:54','2019-07-28 02:27:54',1),(1,2,'2019-07-28 02:27:54','2019-07-28 02:27:54',1),(1,3,'2019-07-28 02:27:54','2019-07-28 02:27:54',1),(1,4,'2019-07-28 02:27:54','2019-07-28 02:27:54',1);
/*!40000 ALTER TABLE `inter_carrera_campus` ENABLE KEYS */;
UNLOCK TABLES;








--
-- Table structure for table `inter_persona_usuario_rol_institucion`
--

DROP TABLE IF EXISTS `inter_persona_usuario_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_persona_usuario_rol` (
  `persona_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`persona_id`,`usuario_id`,`rol_id`),
  KEY `FK2_Inter_PUR_Usuario` (`usuario_id`),
  KEY `FK3_Inter_PUR_Rol` (`rol_id`),
  CONSTRAINT `FK1_Inter_PUR_Persona` FOREIGN KEY (`persona_id`) REFERENCES `personas` (`persona_id`),
  CONSTRAINT `FK2_Inter_PUR_Usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`),
  CONSTRAINT `FK3_Inter_PUR_Rol` FOREIGN KEY (`rol_id`) REFERENCES `cat_rol` (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_persona_usuario_rol`
--

LOCK TABLES `inter_persona_usuario_rol` WRITE;
/*!40000 ALTER TABLE `inter_persona_usuario_rol` DISABLE KEYS */;
INSERT INTO `inter_persona_usuario_rol` VALUES (1,1,1,'2019-07-28 02:46:37','2019-07-28 02:46:37',NULL,NULL,1),(2,2,1,'2019-07-28 02:46:37','2019-07-28 02:46:37',NULL,NULL,1),(2,2,2,'2019-07-28 02:46:37','2019-07-28 02:46:37',NULL,NULL,1);
/*!40000 ALTER TABLE `inter_persona_usuario_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_plan_orden`
--

DROP TABLE IF EXISTS `inter_plan_orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_plan_orden` (
  `plan_orden_id` int(11) NOT NULL AUTO_INCREMENT,
  `plan_estudio_id` int(11) NOT NULL,
  `orden_jerarquico_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`plan_orden_id`),
  KEY `FK1_Inter_PO_Orden` (`orden_jerarquico_id`),
  KEY `FK2_Inter_PO_Plan` (`plan_estudio_id`),
  CONSTRAINT `FK1_Inter_PO_Orden` FOREIGN KEY (`orden_jerarquico_id`) REFERENCES `cat_orden_jerarquico` (`orden_jerarquico_id`),
  CONSTRAINT `FK2_Inter_PO_Plan` FOREIGN KEY (`plan_estudio_id`) REFERENCES `tr_plan_estudios` (`plan_estudio_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inter_orden_asignatura`

INSERT INTO `inter_plan_orden` (`plan_orden_id`, `plan_estudio_id`, `orden_jerarquico_id`, `fecha_creacion`, `fecha_actualiza`, `estatus`) VALUES
(1, 2, 1, '2020-01-11 19:00:33', '2020-01-11 19:00:33', 1),
(2, 2, 2, '2020-01-11 19:03:51', '2020-01-11 19:03:51', 1),
(3, 2, 3, '2020-01-11 19:06:06', '2020-01-11 19:06:06', 1),
(4, 2, 4, '2020-01-11 19:08:35', '2020-01-11 19:08:35', 1),
(5, 2, 5, '2020-01-11 19:10:41', '2020-01-11 19:10:41', 1),
(6, 2, 6, '2020-01-11 19:13:01', '2020-01-11 19:13:01', 1),
(7, 2, 7, '2020-01-11 19:14:46', '2020-01-11 19:14:46', 1),
(8, 2, 8, '2020-01-11 19:16:38', '2020-01-11 19:16:38', 1),
(9, 2, 9, '2020-01-11 19:17:14', '2020-01-11 19:17:14', 1),
(10, 3, 1, '2020-01-11 19:23:56', '2020-01-11 19:23:56', 1),
(11, 3, 2, '2020-01-11 19:28:12', '2020-01-11 19:28:12', 1),
(12, 3, 3, '2020-01-11 19:30:13', '2020-01-11 19:30:13', 1),
(13, 3, 4, '2020-01-11 19:32:09', '2020-01-11 19:32:09', 1),
(14, 3, 5, '2020-01-11 19:33:47', '2020-01-11 19:33:47', 1),
(15, 3, 6, '2020-01-11 19:37:44', '2020-01-11 19:37:44', 1),
(16, 3, 7, '2020-01-11 19:39:38', '2020-01-11 19:39:38', 1),
(17, 3, 8, '2020-01-11 19:40:07', '2020-01-11 19:40:07', 1);
--

DROP TABLE IF EXISTS `inter_orden_asignatura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_orden_asignatura` (
  `orden_asignatura_id` int(11) NOT NULL AUTO_INCREMENT,
  `plan_orden_id` int(11) NOT NULL,
  `asignatura_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`orden_asignatura_id`),
  KEY `FK1_Inter_POA_Orden` (`plan_orden_id`),
  KEY `FK2_Inter_POA_Asignatura` (`asignatura_id`),
  CONSTRAINT `FK1_Inter_POA_Orden` FOREIGN KEY (`plan_orden_id`) REFERENCES `inter_plan_orden` (`plan_orden_id`),
  CONSTRAINT `FK2_Inter_POA_Asignatura` FOREIGN KEY (`asignatura_id`) REFERENCES `cat_asignaturas` (`asignatura_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO `inter_orden_asignatura` (`orden_asignatura_id`, `plan_orden_id`, `asignatura_id`, `fecha_creacion`, `fecha_actualiza`, `estatus`) VALUES
(1, 1, 12, '2020-01-11 19:02:04', '2020-01-11 19:02:04', 1),
(2, 1, 13, '2020-01-11 19:02:36', '2020-01-11 19:02:36', 1),
(3, 1, 14, '2020-01-11 19:03:02', '2020-01-11 19:03:02', 1),
(4, 1, 15, '2020-01-11 19:03:27', '2020-01-11 19:03:27', 1),
(5, 2, 16, '2020-01-11 19:04:23', '2020-01-11 19:04:23', 1),
(6, 2, 17, '2020-01-11 19:04:50', '2020-01-11 19:04:50', 1),
(7, 2, 18, '2020-01-11 19:05:16', '2020-01-11 19:05:16', 1),
(8, 2, 19, '2020-01-11 19:05:35', '2020-01-11 19:05:35', 1),
(9, 3, 20, '2020-01-11 19:06:21', '2020-01-11 19:06:21', 1),
(10, 3, 21, '2020-01-11 19:06:44', '2020-01-11 19:06:44', 1),
(11, 3, 22, '2020-01-11 19:07:15', '2020-01-11 19:07:15', 1),
(12, 3, 23, '2020-01-11 19:07:45', '2020-01-11 19:07:45', 1),
(13, 4, 24, '2020-01-11 19:08:54', '2020-01-11 19:08:54', 1),
(14, 4, 25, '2020-01-11 19:09:20', '2020-01-11 19:09:20', 1),
(15, 4, 26, '2020-01-11 19:09:42', '2020-01-11 19:09:42', 1),
(16, 4, 27, '2020-01-11 19:10:08', '2020-01-11 19:10:08', 1),
(17, 5, 28, '2020-01-11 19:10:56', '2020-01-11 19:10:56', 1),
(18, 5, 29, '2020-01-11 19:11:15', '2020-01-11 19:11:15', 1),
(19, 5, 30, '2020-01-11 19:12:26', '2020-01-11 19:12:26', 1),
(20, 5, 31, '2020-01-11 19:12:51', '2020-01-11 19:12:51', 1),
(21, 6, 32, '2020-01-11 19:13:19', '2020-01-11 19:13:19', 1),
(22, 6, 33, '2020-01-11 19:13:44', '2020-01-11 19:13:44', 1),
(23, 6, 34, '2020-01-11 19:14:13', '2020-01-11 19:14:13', 1),
(24, 6, 35, '2020-01-11 19:14:33', '2020-01-11 19:14:33', 1),
(25, 7, 36, '2020-01-11 19:15:35', '2020-01-11 19:15:35', 1),
(26, 7, 37, '2020-01-11 19:16:06', '2020-01-11 19:16:06', 1),
(27, 7, 38, '2020-01-11 19:16:32', '2020-01-11 19:16:32', 1),
(28, 8, 39, '2020-01-11 19:17:01', '2020-01-11 19:17:01', 1),
(29, 9, 40, '2020-01-11 19:17:32', '2020-01-11 19:17:32', 1),
(30, 10, 41, '2020-01-11 19:24:46', '2020-01-11 19:24:46', 1),
(31, 10, 42, '2020-01-11 19:27:14', '2020-01-11 19:27:14', 1),
(32, 10, 43, '2020-01-11 19:27:35', '2020-01-11 19:27:35', 1),
(33, 10, 44, '2020-01-11 19:28:03', '2020-01-11 19:28:03', 1),
(34, 11, 45, '2020-01-11 19:28:32', '2020-01-11 19:28:32', 1),
(35, 11, 46, '2020-01-11 19:29:12', '2020-01-11 19:29:12', 1),
(36, 11, 47, '2020-01-11 19:29:46', '2020-01-11 19:29:46', 1),
(37, 11, 48, '2020-01-11 19:30:10', '2020-01-11 19:30:10', 1),
(38, 12, 49, '2020-01-11 19:30:43', '2020-01-11 19:30:43', 1),
(39, 12, 50, '2020-01-11 19:31:08', '2020-01-11 19:31:08', 1),
(40, 12, 51, '2020-01-11 19:31:29', '2020-01-11 19:31:29', 1),
(41, 12, 52, '2020-01-11 19:31:53', '2020-01-11 19:31:53', 1),
(42, 13, 53, '2020-01-11 19:32:30', '2020-01-11 19:32:30', 1),
(43, 13, 54, '2020-01-11 19:32:54', '2020-01-11 19:32:54', 1),
(44, 13, 55, '2020-01-11 19:33:20', '2020-01-11 19:33:20', 1),
(45, 13, 56, '2020-01-11 19:33:42', '2020-01-11 19:33:42', 1),
(46, 14, 57, '2020-01-11 19:35:44', '2020-01-11 19:35:44', 1),
(47, 14, 58, '2020-01-11 19:36:20', '2020-01-11 19:36:20', 1),
(48, 14, 59, '2020-01-11 19:36:38', '2020-01-11 19:36:38', 1),
(49, 14, 60, '2020-01-11 19:37:04', '2020-01-11 19:37:04', 1),
(50, 15, 61, '2020-01-11 19:38:05', '2020-01-11 19:38:05', 1),
(51, 15, 62, '2020-01-11 19:38:34', '2020-01-11 19:38:34', 1),
(52, 15, 63, '2020-01-11 19:39:00', '2020-01-11 19:39:00', 1),
(53, 15, 64, '2020-01-11 19:39:21', '2020-01-11 19:39:21', 1),
(54, 16, 65, '2020-01-11 19:39:58', '2020-01-11 19:39:58', 1),
(55, 17, 66, '2020-01-11 19:40:32', '2020-01-11 19:40:32', 1);


--
-- Table structure for table `inter_rol_privilegios`
--

DROP TABLE IF EXISTS `inter_rol_privilegios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_rol_privilegios` (
  `rol_id` int(11) NOT NULL,
  `privilegio_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`rol_id`,`privilegio_id`),
  KEY `FK2_IRPI_Privilegio` (`privilegio_id`),
  CONSTRAINT `FK1_IRPI_Rol` FOREIGN KEY (`rol_id`) REFERENCES `cat_rol` (`rol_id`),
  CONSTRAINT `FK2_IRPI_Privilegio` FOREIGN KEY (`privilegio_id`) REFERENCES `cat_privilegios` (`privilegio_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_rol_privilegios`
--

LOCK TABLES `inter_rol_privilegios` WRITE;
/*!40000 ALTER TABLE `inter_rol_privilegios` DISABLE KEYS */;
INSERT INTO `inter_rol_privilegios` VALUES (1,1,'2019-07-28 02:49:35','2019-07-28 02:49:35',1),(1,2,'2019-07-28 02:49:35','2019-07-28 02:49:35',1),(1,3,'2019-07-28 02:49:35','2019-07-28 02:49:35',1),(1,5,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,6,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,7,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,8,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,9,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,10,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,11,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,12,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,13,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,14,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,15,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,16,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,17,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,18,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(1,19,'2019-07-28 02:49:36','2019-07-28 02:49:36',1),(2,20,'2019-07-28 02:49:36','2019-07-28 02:49:36',1);
/*!40000 ALTER TABLE `inter_rol_privilegios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personas`
--

DROP TABLE IF EXISTS `personas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personas` (
  `persona_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `primer_apellido` varchar(255) NOT NULL,
  `segundo_apellido` varchar(255) NOT NULL,
  `curp` varchar(50) NOT NULL,
  `rfc` varchar(50) DEFAULT NULL,
  `fecha_nacimiento` date NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `celular` varchar(10) DEFAULT NULL,
  `sexo_id` int(11) NOT NULL,
  `otros_datos_id` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`persona_id`),
  KEY `FK1_PersonaSexoID` (`sexo_id`),
  FULLTEXT KEY `DatosPersona_IDX` (`nombre`,`primer_apellido`,`segundo_apellido`,`curp`),
  CONSTRAINT `FK1_PersonaSexoID` FOREIGN KEY (`sexo_id`) REFERENCES `cat_sexo` (`sexo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personas`
--

LOCK TABLES `personas` WRITE;
/*!40000 ALTER TABLE `personas` DISABLE KEYS */;
INSERT INTO `personas` VALUES 
(0,'No Aplica','No Aplica','No Aplica','No Aplica',NULL,'0000-00-00',NULL,NULL,0,NULL,'2019-07-28 02:40:45','2019-07-28 02:44:24',NULL,NULL,0),
(1,'Ricardo','Ruíz','Velazco','RUVR890115HPLZLC08','RUVR8901155N2','1989-01-15','gral.vacio@gmail.com',NULL,1,NULL,'2019-07-28 02:42:02','2019-07-28 02:42:02',NULL,NULL,1),
(2,'Emmanuel','Zamora','Rivera','ZAME890115HPLZLC08','ZARE8901515N2','1990-12-01','doom_isaias@hotmail.com',NUll,1,NULL,'2019-07-28 02:42:05','2019-07-28 02:42:05',NULL,NULL,1);
/*!40000 ALTER TABLE `personas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_bitacora_sesion`
--

DROP TABLE IF EXISTS `tr_bitacora_sesion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_bitacora_sesion` (
  `bitacora_sesion_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `fecha_inicio` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_fin` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `ip` varchar(100) DEFAULT NULL,
  `dispositivo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`bitacora_sesion_id`),
  KEY `FK1_BitacoraUsuario` (`usuario_id`),
  CONSTRAINT `FK1_BitacoraUsuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_bitacora_sesion`
--

LOCK TABLES `tr_bitacora_sesion` WRITE;
/*!40000 ALTER TABLE `tr_bitacora_sesion` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_bitacora_sesion` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `tr_carrera`
--

DROP TABLE IF EXISTS `tr_carrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_carrera` (
  `carrera_id` int(11) NOT NULL AUTO_INCREMENT,
  `institucion_id` int(11) NOT NULL DEFAULT 0,
  `nivel_estudios_id` int(11) NOT NULL DEFAULT 0,
  `carrera_clave` varchar(50) NOT NULL DEFAULT '0',
  `carrera` varchar(255) NOT NULL DEFAULT '0',
  `imagen_url` varchar(100) NULL,
  `objetivo` text NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`carrera_id`),
  KEY `FK1_instituciones_carrera` (`institucion_id`),
  KEY `FK2_nivelestudios_carrera` (`nivel_estudios_id`),
  CONSTRAINT `FK1_instituciones_carrera` FOREIGN KEY (`institucion_id`) REFERENCES `cat_instituciones` (`institucion_id`),
  CONSTRAINT `FK2_nivelestudios_carrera` FOREIGN KEY (`nivel_estudios_id`) REFERENCES `cat_nivel_estudios` (`nivel_estudios_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_carrera`
--

LOCK TABLES `tr_carrera` WRITE;
/*!40000 ALTER TABLE `tr_carrera` DISABLE KEYS */;
INSERT INTO `tr_carrera` (`carrera_id`, `institucion_id`, `nivel_estudios_id`, `carrera_clave`, `carrera`, `fecha_creacion`, `fecha_actualiza`, `usuario_crea`, `usuario_actualiza`, `estatus`) VALUES
(0, 0, 0, 'NA', 'No Aplica', '2019-07-28 01:43:50', '2019-07-28 01:44:41', NULL, NULL, 0),
(1, 1, 6, 'ISC', 'Ingenierìa en Sistemas Computacionales', '2019-07-28 01:44:35', '2019-07-28 01:44:35', NULL, NULL, 0),
(2, 1, 7, 'GCPAN', 'Curso de Gerencia de Campaña del Partido Acción Nacional', '2020-01-11 18:54:47', '2020-01-11 18:54:47', 'root@localhost', NULL, 1),
(3, 1, 7, 'GCPAN1', 'Curso de Aspirante a Cargo de Elección Popular', '2020-01-11 19:18:48', '2020-01-11 19:18:48', 'root@localhost', NULL, 1);
/*!40000 ALTER TABLE `tr_carrera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_plan_estudios`
--

DROP TABLE IF EXISTS `tr_plan_estudios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_plan_estudios` (
  `plan_estudio_id` int(11) NOT NULL AUTO_INCREMENT,
  `carrera_id` int(11) NOT NULL,
  `plan_estudio_clave` varchar(50) NOT NULL DEFAULT '0',
  `plan_estudio` varchar(255) NOT NULL DEFAULT '0',
  `no_rvoe` int(11) NOT NULL DEFAULT 0,
  `rvoe` varchar(50) NOT NULL DEFAULT '0',
  `minima_aprobatoria` int(11) NOT NULL DEFAULT 0,
  `minima_creditos` int(11) NOT NULL DEFAULT 0,
  `total_creditos` int(11) NOT NULL DEFAULT 0,
  `tipo_periodo_id` int(11) NOT NULL DEFAULT 0,
  `tipo_plan_estudio_id` int(11) NOT NULL,
  `curp_responsable` varchar(50) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  `total_periodos` int(11) DEFAULT NULL,
  PRIMARY KEY (`plan_estudio_id`),
  KEY `FK1_pe1` (`tipo_periodo_id`),
  KEY `FK2_pe2` (`tipo_plan_estudio_id`),
  KEY `FK3_pe3` (`carrera_id`),
  CONSTRAINT `FK1_pe` FOREIGN KEY (`tipo_periodo_id`) REFERENCES `cat_tipo_periodo` (`tipo_periodo_id`),
  CONSTRAINT `FK2_pe` FOREIGN KEY (`tipo_plan_estudio_id`) REFERENCES `cat_tipo_plan_estudios` (`tipo_plan_estudio_id`),
  CONSTRAINT `FK3_pe` FOREIGN KEY (`carrera_id`) REFERENCES `tr_carrera` (`carrera_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_plan_estudios`
--

LOCK TABLES `tr_plan_estudios` WRITE;
/*!40000 ALTER TABLE `tr_plan_estudios` DISABLE KEYS */;
INSERT INTO `tr_plan_estudios` (`plan_estudio_id`, `carrera_id`, `plan_estudio_clave`, `plan_estudio`, `no_rvoe`, `rvoe`, `minima_aprobatoria`, `minima_creditos`, `total_creditos`, `tipo_periodo_id`, `tipo_plan_estudio_id`, `curp_responsable`, `fecha_creacion`, `fecha_actualiza`, `usuario_crea`, `usuario_actualiza`, `estatus`, `total_periodos`) VALUES
(0, 1, 'NA', 'No Aplica', 0, '0', 0, 0, 0, 0, 0, '0', '2019-07-28 02:17:56', '2019-07-28 02:18:05', NULL, NULL, 0, NULL),
(1, 1, 'ISC011819', 'Ingenieria en Sistemas Computacionales ciclo18', 0, '0', 0, 0, 0, 0, 0, '0', '2019-07-28 02:17:56', '2019-07-28 02:18:05', NULL, NULL, 0, 2),
(2, 2, 'GCPAN01', 'Campaña del Partido Acción Nacional', 151515, '151515', 6, 100, 100, 1, 1, 'HESR931116MMCRNC00', '2020-01-11 19:00:07', '2020-01-11 19:00:07', 'root@localhost', NULL, 1, 9),
(3, 3, 'GCPAN02', 'Aspirante a Cargo de Elección Popular', 151515, '151515', 6, 100, 100, 1, 1, 'HESR931116MMCRNC00', '2020-01-11 19:20:38', '2020-01-11 19:20:38', 'root@localhost', NULL, 1, 8);
/*!40000 ALTER TABLE `tr_plan_estudios` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `color` varchar(10) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  `url_perfil` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (0,'No Aplica','No Aplica','','2019-07-28 02:44:53','2019-07-28 02:44:58',NULL,NULL,NULL,0,NULL),
(1,'user','1a1dc91c907325c69271ddf0c944bc72','ricardo.ruiz@estudy.com.mx','2019-07-28 02:45:23','2019-07-28 02:45:32',NULL,NULL,NULL,1,NULL),
(2,'user1','a722c63db8ec8625af6cf71cb8c2d939','emmanuel.zamora@estudy.com.mx','2019-07-28 02:45:23','2019-07-28 02:45:32',NULL,NULL,NULL,1,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-28  3:16:31
