-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: estudyce
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
-- Table structure for table `cat_area`
--

DROP TABLE IF EXISTS `cat_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_area` (
  `area_id` int(11) NOT NULL AUTO_INCREMENT,
  `area_desc` varchar(50) DEFAULT NULL,
  `area_nombre` varchar(50) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`area_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_area`
--

LOCK TABLES `cat_area` WRITE;
/*!40000 ALTER TABLE `cat_area` DISABLE KEYS */;
INSERT INTO `cat_area` VALUES (1,'gn','general','2020-05-17 16:46:07','2020-05-17 16:46:07',1),(2,'cn','contabilidad','2020-05-17 16:46:07','2020-05-17 16:46:07',1),(3,'pd','pedagogía','2020-05-17 16:46:07','2020-05-17 16:46:07',1),(4,'ss','sistemas','2020-05-17 16:46:07','2020-05-17 16:46:07',1);
/*!40000 ALTER TABLE `cat_area` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_estatus_ticket`
--

DROP TABLE IF EXISTS `cat_estatus_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_estatus_ticket` (
  `estatus_ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave_estatus_ticket` varchar(255) DEFAULT NULL,
  `estatus_ticket` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estatus_ticket_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_estatus_ticket`
--

LOCK TABLES `cat_estatus_ticket` WRITE;
/*!40000 ALTER TABLE `cat_estatus_ticket` DISABLE KEYS */;
INSERT INTO `cat_estatus_ticket` VALUES 
(1,'ab','abierto','2020-05-17 16:51:17.0','2020-05-17 16:51:17.0',1)
,(2,'pr','Pendiente de responder','2020-05-17 16:51:17.0','2020-05-27 20:51:20.0',1)
,(3,'rp','Respondido','2020-05-17 16:51:17.0','2020-05-27 20:52:21.0',1)
,(4,'crr','Cerrado','2020-05-17 16:51:17.0','2020-05-27 20:52:21.0',1)
,(5,'n','Notificación','2020-05-17 16:51:17.0','2020-05-27 20:52:21.0',1);
/*!40000 ALTER TABLE `cat_estatus_ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_situacion_administrador`
--

DROP TABLE IF EXISTS `cat_situacion_administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_administrador` (
  `situacion_administrador_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_adminitrador_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_administrador_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_administrador_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_situacion_administrador`
--

LOCK TABLES `cat_situacion_administrador` WRITE;
/*!40000 ALTER TABLE `cat_situacion_administrador` DISABLE KEYS */;
INSERT INTO `cat_situacion_administrador` VALUES (1,'a','Activo','2020-05-11 17:14:17','2020-05-11 17:14:25',NULL,NULL,1),(2,'b','Baja Temporal','2020-05-11 17:14:17','2020-05-11 17:18:15',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_situacion_administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipo_ticket`
--

DROP TABLE IF EXISTS `cat_tipo_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_ticket` (
  `tipo_ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave_tipo_ticket` varchar(255) DEFAULT NULL,
  `tipo_ticket` varchar(255) DEFAULT NULL ,
  `rol_id` int(11) DEFAULT NULL COMMENT 'rol de quien puede levantar el ticket, si el rol es = 0 solo puede el sistema, si el rol es nulo todos',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_ticket_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipo_ticket`
--

LOCK TABLES `cat_tipo_ticket` WRITE;
/*!40000 ALTER TABLE `cat_tipo_ticket` DISABLE KEYS */;
INSERT INTO `cat_tipo_ticket` VALUES 
(1,'g','general',1,'2020-05-17 17:13:13','2020-05-17 18:31:53',0),
(2,'pp','Pendiente de pago',1,'2020-05-17 17:13:13','2020-05-17 18:32:03',1),
(3,'ei','Expediente incompleto',1,'2020-05-17 17:13:13','2020-05-17 18:32:00',1),
(4,'ei','Baja temporal',0,'2020-05-17 17:13:13','2020-05-17 18:32:00',1),
(5,'ei','Baja definitiva',0,'2020-05-17 17:13:13','2020-05-17 18:32:00',1);
/*!40000 ALTER TABLE `cat_tipo_ticket` ENABLE KEYS */;
UNLOCK TABLES;
--
-- Table structure for table `tr_administrador`
--

DROP TABLE IF EXISTS `tr_administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_administrador` (
  `administrador_id` int(11) NOT NULL,
  `situacion_administrador_id` int(11) NOT NULL,
  `clave_administrador` varchar(255) DEFAULT NULL,
  `vista` int(1) DEFAULT NULL,
  `edicion` int(1) DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`administrador_id`),
  KEY `FK2_Persona_Administador` (`situacion_administrador_id`),
  KEY `FK3_admin_area` (`area_id`),
  CONSTRAINT `FK1_Persona_Administrador` FOREIGN KEY (`administrador_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK2_Persona_Administrador` FOREIGN KEY (`situacion_administrador_id`) REFERENCES `cat_situacion_administrador` (`situacion_administrador_id`),
  CONSTRAINT `FK3_admin_area` FOREIGN KEY (`area_id`) REFERENCES `cat_area` (`area_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_administrador`
--

LOCK TABLES `tr_administrador` WRITE;
/*!40000 ALTER TABLE `tr_administrador` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_respuesta_ticket`
--

DROP TABLE IF EXISTS `tr_respuesta_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_respuesta_ticket` (
  `respuesta_ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket_id` int(11) NOT NULL,
  `texto` text DEFAULT NULL,
  `adjunto` varchar(255) DEFAULT NULL,
  `visto` int(1) DEFAULT NULL,
  `persona_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`respuesta_ticket_id`),
  KEY `tr_respuesta_ticket_fk` (`ticket_id`),
  CONSTRAINT `tr_respuesta_ticket_fk` FOREIGN KEY (`ticket_id`) REFERENCES `tr_ticket` (`ticket_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_respuesta_ticket`
--

LOCK TABLES `tr_respuesta_ticket` WRITE;
/*!40000 ALTER TABLE `tr_respuesta_ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_respuesta_ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_ticket`
--

DROP TABLE IF EXISTS `tr_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_ticket` (
  `ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `asunto_ticket` varchar(255) DEFAULT NULL,
  `descripcion_ticket` text DEFAULT NULL,
  `adjunto` varchar(255) DEFAULT NULL,
  `visto` int(1) DEFAULT NULL,
  `area_id` int(11) DEFAULT NULL,
  `persona_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `tipo_ticket_id` int(11) NOT NULL,
  `estatus_ticket_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`ticket_id`),
  KEY `tr_ticket_fk` (`area_id`),
  KEY `tr_ticket_fk_1` (`estatus_ticket_id`),
  KEY `tr_ticket_fk_2` (`tipo_ticket_id`),
  KEY `tr_ticket_fk_3` (`persona_id`),
  KEY `tr_ticket_fk_4` (`rol_id`),
  CONSTRAINT `tr_ticket_fk` FOREIGN KEY (`area_id`) REFERENCES `cat_area` (`area_id`),
  CONSTRAINT `tr_ticket_fk_1` FOREIGN KEY (`estatus_ticket_id`) REFERENCES `cat_estatus_ticket` (`estatus_ticket_id`),
  CONSTRAINT `tr_ticket_fk_2` FOREIGN KEY (`tipo_ticket_id`) REFERENCES `cat_tipo_ticket` (`tipo_ticket_id`),
  CONSTRAINT `tr_ticket_fk_3` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `tr_ticket_fk_4` FOREIGN KEY (`rol_id`) REFERENCES `estudydg`.`cat_rol` (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_ticket`
--

LOCK TABLES `tr_ticket` WRITE;
/*!40000 ALTER TABLE `tr_ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'estudyce'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-17 19:04:18
