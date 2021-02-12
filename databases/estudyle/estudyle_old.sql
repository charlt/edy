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
INSERT INTO `cat_dificultad` VALUES (0,'NA','No Aplica','2019-07-28 03:43:15','2019-07-28 03:43:23',NULL,NULL,1),(1,'F','Fácil','2019-07-16 13:36:36','2019-07-16 13:36:36',NULL,NULL,1),(2,'M','Medio','2019-07-16 13:36:36','2019-07-16 13:36:36',NULL,NULL,1),(3,'MF','Medio Fácil','2019-07-16 13:36:36','2019-07-16 13:36:36',NULL,NULL,1),(4,'MD','Medio Difícil','2019-07-16 13:36:36','2019-07-16 13:36:36',NULL,NULL,1),(5,'D','Difícil','2019-07-16 13:36:36','2019-07-16 13:36:36',NULL,NULL,1);
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
INSERT INTO `cat_estatus_actividad` VALUES (0,'na','no aplica','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(1,'br','borrador','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(2,'cs','calificado por el sistema','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(3,'cp','calificado por el profesor','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(4,'inv','Actividad inválida','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1),
(5,'cor','Requiere corrección','2019-08-29 11:01:59','2019-08-29 11:02:38',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_estatus_actividad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_estatus_respuesta`
--

DROP TABLE IF EXISTS `cat_estatus_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_estatus_respuesta` (
  `estatus_respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `estatus_respuesta_clave` varchar(50) DEFAULT NULL,
  `estatus_respuesta` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estatus_respuesta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_estatus_respuesta`
--

LOCK TABLES `cat_estatus_respuesta` WRITE;
/*!40000 ALTER TABLE `cat_estatus_respuesta` DISABLE KEYS */;
INSERT INTO `cat_estatus_respuesta` VALUES (0,'na','No Aplica','2019-08-03 04:49:23','2019-08-03 04:49:23',NULL,NULL,0),(1,'b','Borrador','2019-08-03 04:49:23','2019-08-03 04:49:23',NULL,NULL,1),(2,'t','Terminado','2019-08-03 04:49:23','2019-08-03 04:49:35',NULL,NULL,1),(3,'p','Pendiente','2019-08-03 04:49:23','2019-08-03 04:49:35',NULL,NULL,1),(4,'r','Reintento','2019-08-03 04:49:23','2019-08-03 04:49:35',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_estatus_respuesta` ENABLE KEYS */;
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
INSERT INTO `cat_metodos_resolver` VALUES (0,'na','no aplica','2019-08-29 11:14:37','2019-08-29 11:14:44',NULL,NULL,1),(1,'I','Individual','2019-08-29 11:15:18','2019-08-29 11:15:18',NULL,NULL,1),(2,'E','Equipo','2019-08-29 11:15:18','2019-08-29 11:15:18',NULL,NULL,1);
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
INSERT INTO `cat_tipo_pregunta` VALUES (0,'na','No Aplica','2019-07-28 03:44:41','2019-08-02 06:43:06',NULL,NULL,0),(1,'pa','Pregunta Abierta','2019-07-16 13:47:27','2019-08-02 06:43:06',NULL,NULL,1),(2,'om','Pregunta Opción Múltiple','2019-07-16 13:47:27','2019-08-02 06:43:06',NULL,NULL,1),(3,'rc','Pregunta Relación Columnas','2019-07-16 13:47:27','2019-08-02 06:43:06',NULL,NULL,1),(4,'zi','Pregunta Zona de Imágenes','2019-08-03 05:24:44','2019-08-03 05:24:44',NULL,NULL,1),(5,'dd','Pregunta Ordena Drag & Drop','2019-08-03 06:38:06','2019-08-03 06:38:06',NULL,NULL,1),(6,'qq','Pregunta PNI|QQQ','2019-08-03 07:20:20','2019-08-03 07:20:20',NULL,NULL,1),(7,'sq','Pregunta SQA|RA-P-RP','2019-08-15 04:20:42','2019-09-09 02:31:57',NULL,NULL,1),(8,'cc','Cuadro Comparativo','2019-08-15 04:49:45','2019-08-15 04:49:45',NULL,NULL,1),(9,'mc','Mapa Cognitivo','2019-08-15 05:05:43','2019-08-15 05:05:43',NULL,NULL,1),(10,'fr','Foro','2019-09-09 01:59:39','2019-09-09 01:59:39',NULL,NULL,1),(11,'ad','Pregunta de archivo adjunto ','2019-09-10 12:23:14','2019-09-10 12:23:14',NULL,NULL,1);
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
INSERT INTO `cat_tipos_actividad` VALUES (0,'0','No Aplica','2019-07-28 03:45:20','2019-07-28 03:45:25',NULL,NULL,0),(1,'1','Contenido','2019-07-16 13:48:17','2019-07-16 13:48:17',NULL,NULL,1),(2,'2','Ejercicio','2019-07-16 13:48:17','2019-07-16 13:48:17',NULL,NULL,1),(3,'3','Portafolio de evidencias','2019-07-16 13:48:17','2019-07-16 13:48:17',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_tipos_actividad` ENABLE KEYS */;
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
-- Dumping data for table `inter_modulos_asignaturas`
--

LOCK TABLES `inter_modulos_asignaturas` WRITE;
/*!40000 ALTER TABLE `inter_modulos_asignaturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_modulos_asignaturas` ENABLE KEYS */;
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
  `numero_mostrado` int(2) DEFAULT NULL,
  `instruccion` text DEFAULT NULL,
  `contenido_pedagogico` text DEFAULT NULL,
  `ponderacion` decimal(5,2) DEFAULT NULL,
  `num_intentos` int(2) DEFAULT NULL,
  `num_total_preguntas` int(3) DEFAULT NULL COMMENT 'numero de preguntas en nuestro banco',
  `num_preguntas_mostrar` int(2) DEFAULT NULL COMMENT 'numero de preguntas que se mostrarán del banco, si num_total_preguntas != de num_preguntas_mostrar verificar los datos de actividad_has_numpreguntas',
  `aleatorio` tinyint(1) DEFAULT NULL COMMENT '1- se revuelven las preguntas, 0 se considera el orden de la columna orden',
  `orden` int(2) DEFAULT NULL COMMENT 'es el orden en que se mostrarán las actividades',
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
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
  CONSTRAINT `FK1_ActvidadDificultad` FOREIGN KEY (`dificultad_id`) REFERENCES `cat_dificultad` (`dificultad_id`),
  CONSTRAINT `FK2_ActividadTipoactividad` FOREIGN KEY (`tipo_actividad_id`) REFERENCES `cat_tipos_actividad` (`tipo_actividad_id`),
  CONSTRAINT `FK3_ActividadModulo` FOREIGN KEY (`modulo_id`) REFERENCES `cat_modulos` (`modulo_id`),
  CONSTRAINT `FK4_MetodoResolverActividad` FOREIGN KEY (`metodo_resolver_id`) REFERENCES `cat_metodos_resolver` (`metodo_resolver_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_actividad`
--

LOCK TABLES `tr_actividad` WRITE;
/*!40000 ALTER TABLE `tr_actividad` DISABLE KEYS */;
INSERT INTO `tr_actividad` VALUES (NULL,2,'AP1','Actividad de Prueba 1',1,1,1,NULL,1,NULL,NULL,100.00,2,3,3,NULL,1,NULL,NULL,'2019-07-16 14:00:31','2019-08-29 11:03:29',NULL,NULL,1);
/*!40000 ALTER TABLE `tr_actividad` ENABLE KEYS */;
UNLOCK TABLES;


-- Table structure for table `cat_formatos`
DROP TABLE IF EXISTS `cat_formatos`;

CREATE TABLE cat_formatos ( 
	cat_formato_id INT(11) PRIMARY key auto_increment,
	tipo_formato varchar(255),
	tipo_extencion varchar(255)
);
INSERT INTO cat_formatos VALUES ( 1, 'Imagen.','JPG,JEPG,PNG,GIF');
INSERT INTO cat_formatos VALUES ( 2, 'Documento.','.txt,.doc,.xls,.ppt');
INSERT INTO cat_formatos VALUES ( 3, 'Archivo.','txt,pdf,opd');
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
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_AD` (`datos_pregunta_id`),
  KEY `FK1_CatFormato` (`cat_formato_id`),
  CONSTRAINT `FK1_AD` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`),
  CONSTRAINT `FK1_CatFormato` FOREIGN KEY (`cat_formato_id`) REFERENCES `cat_formatos` (`cat_formato_id`)

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
  `alumno_id` int(11) NOT NULL,
  `pregunta_id` int(11) NOT NULL,
  `url_archivo` text DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK2_ad_respuesta` (`estatus_respuesta_id`),
  KEY `FK3_ad_respuesta` (`alumno_id`),
  KEY `FK1_ad_respuesta` (`pregunta_id`),
  CONSTRAINT `FK1_ad_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_ad_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_ad_respuesta` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_ad_respuesta` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`)
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
-- Table structure for table `tr_alumno_fecha_actividad`
--

DROP TABLE IF EXISTS `tr_alumno_fecha_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_alumno_fecha_actividad` (
  `alumno_fecha_actividad_id` int(11) NOT NULL AUTO_INCREMENT,
  `actividad_id` int(11) DEFAULT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `calificacion` decimal(10,0) DEFAULT NULL,
  `fecha_actividad` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `intento_num` int(11) DEFAULT 1,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  `estatus_actividad_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`alumno_fecha_actividad_id`),
  KEY `FK1_alumno_fecha_actividad` (`actividad_id`),
  KEY `FK2_alumno_estatusactividad` (`estatus_actividad_id`),
  CONSTRAINT `FK1_alumno_fecha_actividad` FOREIGN KEY (`actividad_id`) REFERENCES `tr_actividad` (`actividad_id`),
  CONSTRAINT `FK2_alumno_estatusactividad` FOREIGN KEY (`estatus_actividad_id`) REFERENCES `cat_estatus_actividad` (`estatus_actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_alumno_fecha_actividad`
--

LOCK TABLES `tr_alumno_fecha_actividad` WRITE;
/*!40000 ALTER TABLE `tr_alumno_fecha_actividad` DISABLE KEYS */;
INSERT INTO `tr_alumno_fecha_actividad` VALUES (1,2,1,10,'2019-08-02 07:43:28',2,'2019-08-02 07:43:28','2019-08-02 07:43:28',NULL,NULL);
/*!40000 ALTER TABLE `tr_alumno_fecha_actividad` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_cc_categorias`
--

DROP TABLE IF EXISTS `tr_cc_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_cc_categorias` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `categoria_desc` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`categoria_id`),
  KEY `FK1_cc_categoria` (`pregunta_id`),
  CONSTRAINT `FK1_cc_categoria` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_cc_pregunta` (`pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_cc_categorias`
--

LOCK TABLES `tr_cc_categorias` WRITE;
/*!40000 ALTER TABLE `tr_cc_categorias` DISABLE KEYS */;
INSERT INTO `tr_cc_categorias` VALUES (1,1,'Visión del ser humano','2019-08-15 05:52:48','2019-08-15 05:52:48',1),(2,1,'Cognición','2019-08-15 05:52:48','2019-08-15 05:52:48',1),(3,1,'Psique Humana','2019-08-15 05:52:48','2019-08-15 05:52:48',1);
/*!40000 ALTER TABLE `tr_cc_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_cc_conclusiones`
--

DROP TABLE IF EXISTS `tr_cc_conclusiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_cc_conclusiones` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `conclusion` text DEFAULT NULL,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_cc_conclusiones` (`pregunta_id`),
  KEY `FK2_cc_conclusiones` (`estatus_respuesta_id`),
  KEY `FK3_cc_conclusiones` (`alumno_id`),
  CONSTRAINT `FK1_cc_conclusiones` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_cc_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_cc_conclusiones` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_cc_conclusiones` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_cc_conclusiones`
--

LOCK TABLES `tr_cc_conclusiones` WRITE;
/*!40000 ALTER TABLE `tr_cc_conclusiones` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_cc_conclusiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_cc_elementos`
--

DROP TABLE IF EXISTS `tr_cc_elementos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_cc_elementos` (
  `elemento_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `elemento_desc` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`elemento_id`),
  KEY `FK1_cc_elemento` (`pregunta_id`),
  CONSTRAINT `FK1_cc_elemento` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_cc_pregunta` (`pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_cc_elementos`
--

LOCK TABLES `tr_cc_elementos` WRITE;
/*!40000 ALTER TABLE `tr_cc_elementos` DISABLE KEYS */;
INSERT INTO `tr_cc_elementos` VALUES (1,1,'Psicología Cognitiva','2019-08-15 05:51:11','2019-08-15 05:51:11',1),(2,1,'Neuropsicología histórico-cultural','2019-08-15 05:51:11','2019-08-15 05:51:11',1);
/*!40000 ALTER TABLE `tr_cc_elementos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_cc_pregunta`
--

DROP TABLE IF EXISTS `tr_cc_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_cc_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) NOT NULL,
  `cuadro_comparativo_desc` varchar(255) NOT NULL,
  `numero_elementos` int(11) DEFAULT NULL,
  `numero_categorias` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_mc` (`datos_pregunta_id`),
  CONSTRAINT `FK1_cc` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_cc_pregunta`
--

LOCK TABLES `tr_cc_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_cc_pregunta` DISABLE KEYS */;
INSERT INTO `tr_cc_pregunta` VALUES (1,9,'Paradigmas de Psicología',2,3,'2019-08-15 05:48:54','2019-08-15 05:48:54',1);
/*!40000 ALTER TABLE `tr_cc_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_cc_respuesta`
--

DROP TABLE IF EXISTS `tr_cc_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_cc_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `elemento_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `respuesta` text DEFAULT NULL,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_cc_respuesta` (`pregunta_id`),
  KEY `FK2_cc_respuesta` (`estatus_respuesta_id`),
  KEY `FK3_cc_respuesta` (`alumno_id`),
  KEY `FK4_cc_respuesta` (`elemento_id`),
  KEY `FK5_cc_respuesta` (`categoria_id`),
  CONSTRAINT `FK1_cc_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_cc_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_cc_respuesta` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_cc_respuesta` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`),
  CONSTRAINT `FK4_cc_respuesta` FOREIGN KEY (`elemento_id`) REFERENCES `tr_cc_elementos` (`elemento_id`),
  CONSTRAINT `FK5_cc_respuesta` FOREIGN KEY (`categoria_id`) REFERENCES `tr_cc_categorias` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_cc_respuesta`
--

LOCK TABLES `tr_cc_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_cc_respuesta` DISABLE KEYS */;
INSERT INTO `tr_cc_respuesta` VALUES (1,1,1,1,1,1,'Elemento1 con categoría1',1,NULL,'2019-08-15 05:59:10','2019-08-15 05:59:10',1),(2,1,1,1,1,2,'Elemento1 con Categoria2',1,NULL,'2019-08-15 05:59:10','2019-08-15 05:59:10',1),(3,1,1,1,1,3,'Elemento1Categoria3',1,NULL,'2019-08-15 05:59:10','2019-08-15 05:59:10',1),(4,1,1,1,2,1,'Elemento2Categoria1',1,NULL,'2019-08-15 05:59:10','2019-08-15 05:59:10',1),(5,1,1,1,2,2,'Elemento2Categoria2',1,NULL,'2019-08-15 05:59:10','2019-08-15 05:59:10',1),(6,1,1,1,2,3,'Elemento2Categoria3',1,NULL,'2019-08-15 05:59:10','2019-08-15 05:59:10',1);
/*!40000 ALTER TABLE `tr_cc_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_contenido_actividad`
--

DROP TABLE IF EXISTS `tr_contenido_actividad`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_contenido_actividad` (
  `contenido_actividad_id` int(11) NOT NULL AUTO_INCREMENT,
  `actividad_id` int(11) DEFAULT NULL,
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
  `alumno_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `orden` int(11) DEFAULT NULL,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_dd_respuesta` (`reactivo_id`),
  KEY `FK2_dd_respuesta` (`estatus_respuesta_id`),
  KEY `FK3_dd_respuesta` (`alumno_id`),
  CONSTRAINT `FK1_dd_respuesta` FOREIGN KEY (`reactivo_id`) REFERENCES `tr_dd_reactivos` (`reactivo_id`),
  CONSTRAINT `FK2_dd_respuesta` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_dd_respuesta` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`)
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
  `pregunta` varchar(255) DEFAULT NULL,
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
  `persona_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) DEFAULT NULL,
  `respuesta` varchar(255) DEFAULT NULL,
  `flg_moderador` int(1) DEFAULT NULL,
  `imagen` text DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_foro_respuesta` (`pregunta_id`),
  KEY `FK2_foro_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK1_foro_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_fr_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_foro_respuesta` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`)
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
-- Table structure for table `tr_mc_aspecto_comun`
--

DROP TABLE IF EXISTS `tr_mc_aspecto_comun`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_mc_aspecto_comun` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `aspecto_comun` TEXT DEFAULT NULL,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_mc_aspectocomun` (`pregunta_id`),
  KEY `FK2_mc_aspectocomun` (`estatus_respuesta_id`),
  KEY `FK3_mc_aspectocomun` (`alumno_id`),
  CONSTRAINT `FK1_mc_aspectocomun` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_mc_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_mc_aspectocomun` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_mc_aspectocomun` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_mc_aspecto_comun`
--

LOCK TABLES `tr_mc_aspecto_comun` WRITE;
/*!40000 ALTER TABLE `tr_mc_aspecto_comun` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_mc_aspecto_comun` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_mc_categorias`
--

DROP TABLE IF EXISTS `tr_mc_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_mc_categorias` (
  `categoria_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `categoria_desc` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`categoria_id`),
  KEY `FK1_mc_categoria` (`pregunta_id`),
  CONSTRAINT `FK1_mc_categoria` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_mc_pregunta` (`pregunta_id`)
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
  `pregunta_id` int(11) NOT NULL,
  `elemento_desc` varchar(255) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`elemento_id`),
  KEY `FK1_mc_elemento` (`pregunta_id`),
  CONSTRAINT `FK1_mc_elemento` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_mc_pregunta` (`pregunta_id`)
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

DROP TABLE IF EXISTS `tr_mc_pregunta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_mc_pregunta` (
  `pregunta_id` int(11) NOT NULL AUTO_INCREMENT,
  `datos_pregunta_id` int(11) NOT NULL,
  `mapa_cognitivo_desc` varchar(255) NOT NULL,
  `numero_elementos` int(11) DEFAULT NULL,
  `numero_categorias` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_mc` (`datos_pregunta_id`),
  CONSTRAINT `FK1_mc` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_mc_pregunta`
--

LOCK TABLES `tr_mc_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_mc_pregunta` DISABLE KEYS */;
INSERT INTO `tr_mc_pregunta` VALUES (1,10,'Mapa cognitivo de aspectos comunes',2,3,'2019-08-15 06:07:21','2019-08-15 06:07:21',1),(2,10,'Mapa cognitivo de aspectos comunes',1,1,'2019-08-30 19:27:09','2019-08-30 19:27:23',1);
/*!40000 ALTER TABLE `tr_mc_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_mc_respuesta`
--

DROP TABLE IF EXISTS `tr_mc_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_mc_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta_id` int(11) NOT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `elemento_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `respuesta` text DEFAULT NULL,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_mc_respuesta` (`pregunta_id`),
  KEY `FK2_mc_respuesta` (`estatus_respuesta_id`),
  KEY `FK3_mc_respuesta` (`alumno_id`),
  KEY `FK4_mc_respuesta` (`elemento_id`),
  KEY `FK5_mc_respuesta` (`categoria_id`),
  CONSTRAINT `FK1_mc_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_mc_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_mc_respuesta` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_mc_respuesta` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`),
  CONSTRAINT `FK4_mc_respuesta` FOREIGN KEY (`elemento_id`) REFERENCES `tr_mc_elementos` (`elemento_id`),
  CONSTRAINT `FK5_mc_respuesta` FOREIGN KEY (`categoria_id`) REFERENCES `tr_mc_categorias` (`categoria_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_mc_respuesta`
--

LOCK TABLES `tr_mc_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_mc_respuesta` DISABLE KEYS */;
INSERT INTO `tr_mc_respuesta` VALUES (1,1,1,1,1,1,'Relacion1_1',1,NULL,'2019-09-10 12:44:11','2019-09-10 12:44:41',1),(2,1,1,1,1,2,'relacion1_2',1,NULL,'2019-09-10 12:44:41','2019-09-10 12:44:41',1);
/*!40000 ALTER TABLE `tr_mc_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

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
  `url_imagen` varchar(255) DEFAULT NULL,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_om` (`datos_pregunta_id`),
  CONSTRAINT `FK1_om` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_om_pregunta`
--

LOCK TABLES `tr_om_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_om_pregunta` DISABLE KEYS */;
INSERT INTO `tr_om_pregunta` VALUES (1,2,'¿Cuáles son los colores primarios?',NULL,NULL,NULL,'2019-08-02 06:50:31','2019-08-02 06:52:59',NULL);
/*!40000 ALTER TABLE `tr_om_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

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
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reactivo_id`),
  KEY `FK1_om_reactivo` (`pregunta_id`),
  CONSTRAINT `FK1_om_reactivo` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_om_pregunta` (`pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_om_reactivos`
--

LOCK TABLES `tr_om_reactivos` WRITE;
/*!40000 ALTER TABLE `tr_om_reactivos` DISABLE KEYS */;
INSERT INTO `tr_om_reactivos` VALUES (1,1,'Amarillo',40,NULL,NULL,NULL,'2019-08-02 06:53:38','2019-08-02 06:53:38',NULL),(2,1,'Rojo',40,NULL,NULL,NULL,'2019-08-02 06:53:38','2019-08-02 06:53:38',NULL),(3,1,'Azul',20,NULL,NULL,NULL,'2019-08-02 06:53:38','2019-08-02 06:53:38',NULL),(4,1,'Negro',0,NULL,NULL,NULL,'2019-08-02 06:53:38','2019-08-02 06:53:38',NULL),(5,1,'Blanco',0,NULL,NULL,NULL,'2019-08-02 06:53:38','2019-08-02 06:53:38',NULL);
/*!40000 ALTER TABLE `tr_om_reactivos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_om_respuesta`
--

DROP TABLE IF EXISTS `tr_om_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_om_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `reactivo_id` int(11) NOT NULL,
  `alumno_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_om_respuesta` (`reactivo_id`),
  KEY `FK2_om_respuesta` (`estatus_respuesta_id`),
  KEY `FK3_om_respuesta` (`alumno_id`),
  CONSTRAINT `FK1_om_respuesta` FOREIGN KEY (`reactivo_id`) REFERENCES `tr_om_reactivos` (`reactivo_id`),
  CONSTRAINT `FK2_om_respuesta` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_om_respuesta` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_om_respuesta`
--

LOCK TABLES `tr_om_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_om_respuesta` DISABLE KEYS */;
INSERT INTO `tr_om_respuesta` VALUES (1,1,1,0,1,NULL,'2019-08-02 07:02:40','2019-08-02 07:02:40',NULL),(2,3,1,0,1,NULL,'2019-08-02 07:02:40','2019-08-02 07:02:40',NULL),(3,1,1,0,2,NULL,'2019-08-02 07:44:07','2019-08-02 07:44:07',NULL),(4,2,1,0,2,NULL,'2019-08-02 07:44:07','2019-08-02 07:44:07',NULL);
/*!40000 ALTER TABLE `tr_om_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

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
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pregunta_id`),
  KEY `FK1_PA` (`datos_pregunta_id`),
  CONSTRAINT `FK1_PA` FOREIGN KEY (`datos_pregunta_id`) REFERENCES `tr_datos_pregunta` (`datos_pregunta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_pa_pregunta`
--

LOCK TABLES `tr_pa_pregunta` WRITE;
/*!40000 ALTER TABLE `tr_pa_pregunta` DISABLE KEYS */;
INSERT INTO `tr_pa_pregunta` VALUES (1,1,'¿Qué piensas del calentamiento global?',NULL,NULL,'2019-08-02 06:44:31','2019-08-02 06:44:52',NULL);
/*!40000 ALTER TABLE `tr_pa_pregunta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_pa_respuesta`
--

DROP TABLE IF EXISTS `tr_pa_respuesta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_pa_respuesta` (
  `respuesta_id` int(11) NOT NULL AUTO_INCREMENT,
  `alumno_id` int(11) DEFAULT NULL,
  `pregunta_id` int(11) DEFAULT NULL,
  `respuesta` text DEFAULT NULL,
  `intento_num` int(11) NOT NULL,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_PA_Respuesta` (`pregunta_id`),
  KEY `FK3_pa_respuesta` (`alumno_id`),
  CONSTRAINT `FK1_PA_Respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_pa_pregunta` (`pregunta_id`),
  CONSTRAINT `FK3_pa_respuesta` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_pa_respuesta`
--

LOCK TABLES `tr_pa_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_pa_respuesta` DISABLE KEYS */;
INSERT INTO `tr_pa_respuesta` VALUES (1,1,1,'No pasa en mi planeta',0,NULL,'2019-08-02 06:47:32','2019-08-02 06:47:32',NULL);
/*!40000 ALTER TABLE `tr_pa_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

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
  `alumno_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `respuesta` text DEFAULT NULL,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_qq_respuesta` (`pregunta_id`),
  KEY `FK2_qq_respuesta` (`estatus_respuesta_id`),
  KEY `FK3_qq_respuesta` (`alumno_id`),
  CONSTRAINT `FK1_qq_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_qq_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_qq_respuesta` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_qq_respuesta` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`)
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
  `alumno_id` int(11) DEFAULT NULL,
  `columna_a_id` int(11) DEFAULT NULL,
  `columna_b_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_rc_respuesta` (`reactivo_id`),
  KEY `FK2_rc_respuesta` (`estatus_respuesta_id`),
  KEY `FK3_rc_respuesta` (`alumno_id`),
  CONSTRAINT `FK1_rc_respuesta` FOREIGN KEY (`reactivo_id`) REFERENCES `tr_rc_reactivos` (`reactivo_id`),
  CONSTRAINT `FK2_rc_respuesta` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_rc_respuesta` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_rc_respuesta`
--

LOCK TABLES `tr_rc_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_rc_respuesta` DISABLE KEYS */;
INSERT INTO `tr_rc_respuesta` VALUES (6,5,1,1,2,1,1,NULL,'2019-08-15 04:01:46','2019-08-15 04:01:46',NULL);
/*!40000 ALTER TABLE `tr_rc_respuesta` ENABLE KEYS */;
UNLOCK TABLES;

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
  `alumno_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `respuesta` text DEFAULT NULL,
  `visualiza_flg` int(1) DEFAULT NULL,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_sq_respuesta` (`pregunta_id`),
  KEY `FK2_sq_respuesta` (`estatus_respuesta_id`),
  KEY `FK3_sq_respuesta` (`alumno_id`),
  CONSTRAINT `FK1_sq_respuesta` FOREIGN KEY (`pregunta_id`) REFERENCES `tr_sq_pregunta` (`pregunta_id`),
  CONSTRAINT `FK2_sq_respuesta` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_sq_respuesta` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`)
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
  `alumno_id` int(11) DEFAULT NULL,
  `estatus_respuesta_id` int(11) NOT NULL DEFAULT 0,
  `posicion_x` double NOT NULL,
  `posicion_y` double NOT NULL,
  `intento_num` int(11) NOT NULL DEFAULT 1,
  `fecha_actividad` datetime DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_id`),
  KEY `FK1_zi_respuesta` (`reactivo_id`),
  KEY `FK2_zi_respuesta` (`estatus_respuesta_id`),
  KEY `FK3_zi_respuesta` (`alumno_id`),
  CONSTRAINT `FK1_zi_respuesta` FOREIGN KEY (`reactivo_id`) REFERENCES `tr_zi_reactivos` (`reactivo_id`),
  CONSTRAINT `FK2_zi_respuesta` FOREIGN KEY (`estatus_respuesta_id`) REFERENCES `cat_estatus_respuesta` (`estatus_respuesta_id`),
  CONSTRAINT `FK3_zi_respuesta` FOREIGN KEY (`alumno_id`) REFERENCES `estudyce`.`tr_alumno` (`alumno_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_zi_respuesta`
--

LOCK TABLES `tr_zi_respuesta` WRITE;
/*!40000 ALTER TABLE `tr_zi_respuesta` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_zi_respuesta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-10 16:33:16
