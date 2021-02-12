-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: 142.4.9.212    Database: estudysg
-- ------------------------------------------------------
-- Server version	5.7.29

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
-- Table structure for table `cat_documento`
--

DROP TABLE IF EXISTS `cat_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_documento` (
  `documento_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_documento` varchar(255) DEFAULT NULL,
  `documento_desc` varchar(255) DEFAULT NULL,
  `obligatorio` int(1) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`documento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_documento`
--

LOCK TABLES `cat_documento` WRITE;
/*!40000 ALTER TABLE `cat_documento` DISABLE KEYS */;
INSERT INTO `cat_documento` VALUES (2,'Solicitud de validación de inscripción','Sube al sistema tu ficha de depósito o comprobante de pago del curso.',1,'2020-01-10 13:11:46','2020-01-19 23:01:44',NULL,NULL,1),(3,'Acta de nacimiento','Sube al sistema tu acta de nacimiento actualizada.',0,'2020-01-10 13:11:46','2020-01-19 23:01:44',NULL,NULL,1),(4,'Antecedente académico','Sube al sistema el título o grado de tu último nivel de estudios.',0,'2020-01-10 13:11:46','2020-01-19 23:01:44',NULL,NULL,1),(5,'CURP','Sube al sistema tu Clave Única de Registro de Población.',0,'2020-01-10 13:11:46','2020-01-19 23:01:44',NULL,NULL,1),(6,'Carta compromiso','En caso de no tener alguno de los documentos solicitados, sube al sistema la carta compromiso correspondiente, llenada y firmada adecuadamente.',0,'2020-01-10 13:11:46','2020-01-19 23:01:45',NULL,NULL,1),(7,'INE','Sube al sistema tu INE vigente.',0,'2020-01-10 13:11:46','2020-01-19 23:01:45',NULL,NULL,1),(8,'Carta de exposición de motivos','La carta deberá ser 1 cuartilla de 200 palabras aproximadamente. Deberá estar dirigida a la: Secretaria Nacional de Formación y Capacitación. COMITÉ EJECUTIVO NACIONAL DEL PAN',0,'2020-01-10 13:11:46','2020-01-15 14:28:19',NULL,NULL,0),(9,'Curriculum Vitae','Sube al sistema tu Curriculum Vitae',0,'2020-01-10 13:11:46','2020-01-19 23:02:00',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_documento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_estado_documento`
--

DROP TABLE IF EXISTS `cat_estado_documento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_estado_documento` (
  `estado_documento_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_documento` varchar(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estado_documento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_estado_documento`
--

LOCK TABLES `cat_estado_documento` WRITE;
/*!40000 ALTER TABLE `cat_estado_documento` DISABLE KEYS */;
INSERT INTO `cat_estado_documento` VALUES (1,'Documento por enviar ','2020-01-10 14:11:43','2020-01-10 14:11:50',1),(2,'En proceso de validación','2020-01-10 14:11:44','2020-01-10 14:11:50',1),(3,'Verificado y validado','2020-01-10 14:11:44','2020-01-10 14:11:50',1),(4,'Exhibe carta compromiso','2020-01-10 14:11:44','2020-01-10 14:11:50',1),(5,'Documento en resguardo','2020-01-10 14:12:11','2020-01-10 14:12:11',1),(6,'Corrección','2020-01-10 14:12:11','2020-01-10 14:12:11',1);
/*!40000 ALTER TABLE `cat_estado_documento` ENABLE KEYS */;
UNLOCK TABLES;




DROP TABLE IF EXISTS `cat_situacion_aspirante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_aspirante` (
  `situacion_aspirante_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_aspirante_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_aspirante_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_aspirante_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_situacion_aspirante`
--

LOCK TABLES `cat_situacion_aspirante` WRITE;
/*!40000 ALTER TABLE `cat_situacion_aspirante` DISABLE KEYS */;
INSERT INTO `cat_situacion_aspirante` VALUES 
(0,'na','No Aplica','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,0),
(1,'a','Activo','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(2,'b','Alumno','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(3,'bt','Prospecto','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1)
;
/*!40000 ALTER TABLE `cat_situacion_aspirante` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `cat_situacion_asesor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_asesor` (
  `situacion_asesor_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_asesor_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_asesor_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_asesor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

LOCK TABLES `cat_situacion_asesor` WRITE;
/*!40000 ALTER TABLE `cat_situacion_asesor` DISABLE KEYS */;
INSERT INTO `cat_situacion_asesor` VALUES 
(1,'a','Activo','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(2,'b','Baja','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1)
;
/*!40000 ALTER TABLE `cat_situacion_asesor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_reactivos_cleaver`
--

DROP TABLE IF EXISTS `cat_reactivos_cleaver`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_reactivos_cleaver` (
  `reactivo_id` int(11) NOT NULL AUTO_INCREMENT,
  `reactivo` varchar(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reactivo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_reactivos_cleaver`
--

LOCK TABLES `cat_reactivos_cleaver` WRITE;
/*!40000 ALTER TABLE `cat_reactivos_cleaver` DISABLE KEYS */;
INSERT INTO `cat_reactivos_cleaver` VALUES (1,'L','2020-01-14 22:42:26','2020-01-14 22:42:26',1),(2,'M','2020-01-14 22:42:26','2020-01-14 22:42:26',1);
/*!40000 ALTER TABLE `cat_reactivos_cleaver` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_reactivos_cleaver_base`
--

DROP TABLE IF EXISTS `cat_reactivos_cleaver_base`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_reactivos_cleaver_base` (
  `cleaver_base_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_reactivo` varchar(100) DEFAULT NULL,
  `C` int(1) DEFAULT NULL,
  `D` int(1) DEFAULT NULL,
  `I` int(1) DEFAULT NULL,
  `S` int(1) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`cleaver_base_id`)
) ENGINE=InnoDB AUTO_INCREMENT=98 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_reactivos_cleaver_base`
--

LOCK TABLES `cat_reactivos_cleaver_base` WRITE;
/*!40000 ALTER TABLE `cat_reactivos_cleaver_base` DISABLE KEYS */;
INSERT INTO `cat_reactivos_cleaver_base` VALUES (2,'Persuasivo',NULL,NULL,2,NULL,'2020-01-10 11:31:08','2020-01-10 12:58:56',1),(3,'Gentil',NULL,NULL,NULL,2,'2020-01-10 11:31:08','2020-01-10 12:58:56',1),(4,'Humilde',2,NULL,NULL,NULL,'2020-01-10 11:31:08','2020-01-10 12:58:56',1),(5,'Original',NULL,1,NULL,NULL,'2020-01-10 11:31:08','2020-01-10 12:58:57',1),(6,'Fuerza de Voluntad',NULL,1,NULL,NULL,'2020-01-10 11:31:08','2020-01-10 12:59:00',1),(7,'Mente Abierta',2,NULL,NULL,NULL,'2020-01-10 11:31:08','2020-01-10 12:59:04',1),(8,'Complaciente',NULL,NULL,NULL,1,'2020-01-10 11:31:08','2020-01-10 12:59:14',1),(9,'Animoso',NULL,NULL,2,NULL,'2020-01-10 11:31:09','2020-01-10 12:59:19',1),(10,'Obediente',NULL,NULL,NULL,2,'2020-01-10 11:31:09','2020-01-10 12:59:27',1),(11,'Quisquilloso',1,NULL,NULL,NULL,'2020-01-10 11:31:09','2020-01-10 12:59:36',1),(12,'Inconquistable',NULL,2,NULL,NULL,'2020-01-10 11:31:09','2020-01-10 12:59:50',1),(13,'Juguetón',NULL,NULL,1,NULL,'2020-01-10 11:31:09','2020-01-10 12:59:56',1),(14,'Aventurero',NULL,2,NULL,NULL,'2020-01-10 11:31:09','2020-01-10 13:00:00',1),(15,'Receptivo',2,NULL,NULL,NULL,'2020-01-10 11:31:09','2020-01-10 13:00:30',1),(16,'Cordial',NULL,NULL,1,NULL,'2020-01-10 11:31:09','2020-01-10 13:00:36',1),(17,'Moderado',NULL,NULL,NULL,2,'2020-01-10 11:31:09','2020-01-10 13:00:43',1),(18,'Agresivo',NULL,2,NULL,NULL,'2020-01-10 11:37:38','2020-01-10 13:00:56',1),(19,'Alma de la Fiesta',NULL,NULL,2,NULL,'2020-01-10 11:37:38','2020-01-10 13:01:03',1),(20,'Comodino',NULL,NULL,NULL,1,'2020-01-10 11:37:38','2020-01-10 13:01:28',1),(21,'Temeroso',1,NULL,NULL,NULL,'2020-01-10 11:37:38','2020-01-10 13:01:45',1),(22,'Confiado',NULL,NULL,2,NULL,'2020-01-10 11:37:39','2020-01-10 13:01:45',1),(23,'Simpatizador',NULL,NULL,NULL,1,'2020-01-10 11:37:39','2020-01-10 13:01:51',1),(24,'Tolerante',1,NULL,NULL,NULL,'2020-01-10 11:37:39','2020-01-10 13:01:59',1),(25,'Afirmativo',NULL,1,NULL,NULL,'2020-01-10 11:37:39','2020-01-10 13:02:02',1),(26,'Respetuoso',2,NULL,NULL,NULL,'2020-01-10 11:37:39','2020-01-10 13:02:13',1),(27,'Emprendedor',NULL,2,NULL,NULL,'2020-01-10 11:37:39','2020-01-10 13:02:19',1),(28,'Optimista',NULL,2,NULL,NULL,'2020-01-10 11:37:39','2020-01-10 13:02:39',1),(29,'Servicial',NULL,NULL,NULL,1,'2020-01-10 11:37:39','2020-01-10 13:02:47',1),(30,'Indulgente',NULL,NULL,NULL,2,'2020-01-10 11:37:39','2020-01-10 13:02:58',1),(31,'Esteta',1,NULL,NULL,NULL,'2020-01-10 11:37:39','2020-01-10 13:03:07',1),(32,'Vigoroso',NULL,2,NULL,NULL,'2020-01-10 11:37:39','2020-01-10 13:03:11',1),(33,'Sociable',NULL,NULL,1,NULL,'2020-01-10 11:37:39','2020-01-10 13:03:16',1),(34,'Agradable',NULL,NULL,NULL,1,'2020-01-10 11:40:55','2020-01-10 13:03:23',1),(35,'Temeroso de Dios',2,NULL,NULL,NULL,'2020-01-10 11:40:55','2020-01-10 13:03:31',1),(36,'Tenaz',NULL,2,NULL,NULL,'2020-01-10 11:40:55','2020-01-10 13:03:35',1),(37,'Atractivo',NULL,NULL,2,NULL,'2020-01-10 11:40:55','2020-01-10 13:03:42',1),(38,'Ecuánime',NULL,NULL,NULL,2,'2020-01-10 11:40:55','2020-01-10 13:03:46',1),(39,'Preciso',1,NULL,NULL,NULL,'2020-01-10 11:40:55','2020-01-10 13:03:50',1),(40,'Nervioso',NULL,1,NULL,NULL,'2020-01-10 11:40:55','2020-01-10 13:03:55',1),(41,'Jovial',NULL,NULL,1,NULL,'2020-01-10 11:40:55','2020-01-10 13:03:59',1),(42,'Valiente',NULL,2,NULL,NULL,'2020-01-10 11:40:55','2020-01-10 13:04:05',1),(43,'Inspirador',NULL,NULL,2,NULL,'2020-01-10 11:40:55','2020-01-10 13:04:12',1),(44,'Sumiso',NULL,NULL,NULL,1,'2020-01-10 11:40:55','2020-01-10 13:04:21',1),(45,'Timido',1,NULL,NULL,NULL,'2020-01-10 11:40:55','2020-01-10 13:04:40',1),(46,'Parlanchín',NULL,NULL,2,NULL,'2020-01-10 11:40:55','2020-01-10 13:04:46',1),(47,'Controlado',NULL,NULL,NULL,2,'2020-01-10 11:40:56','2020-01-10 13:04:55',1),(48,'Convencional',1,NULL,NULL,NULL,'2020-01-10 11:40:56','2020-01-10 13:05:04',1),(49,'Decisivo',NULL,2,NULL,NULL,'2020-01-10 11:40:56','2020-01-10 13:05:09',1),(50,'Cauteloso',1,NULL,NULL,NULL,'2020-01-10 11:46:24','2020-01-10 13:05:14',1),(51,'Determinado',NULL,2,NULL,NULL,'2020-01-10 11:46:24','2020-01-10 13:05:22',1),(52,'Convincente',NULL,NULL,2,NULL,'2020-01-10 11:46:24','2020-01-10 13:05:51',1),(53,'Bonachón',NULL,NULL,NULL,2,'2020-01-10 11:46:24','2020-01-10 13:06:09',1),(54,'Disciplinado',2,NULL,NULL,NULL,'2020-01-10 11:46:24','2020-01-10 13:06:15',1),(55,'Generoso',NULL,NULL,NULL,2,'2020-01-10 11:46:25','2020-01-10 13:06:27',1),(56,'Animoso',NULL,NULL,1,NULL,'2020-01-10 11:46:25','2020-01-10 13:06:35',1),(57,'Persistente',NULL,1,NULL,NULL,'2020-01-10 11:46:25','2020-01-10 13:06:41',1),(58,'Adaptable',2,NULL,NULL,NULL,'2020-01-10 11:46:25','2020-01-10 13:06:47',1),(59,'Disputador',NULL,2,NULL,NULL,'2020-01-10 11:46:25','2020-01-10 13:06:51',1),(60,'Indiferente',NULL,NULL,NULL,1,'2020-01-10 11:46:25','2020-01-10 13:06:55',1),(61,'Sangre Liviana',NULL,NULL,1,NULL,'2020-01-10 11:46:25','2020-01-10 13:07:00',1),(62,'Cohibido',NULL,NULL,NULL,1,'2020-01-10 11:46:25','2020-01-10 13:07:06',1),(63,'Exacto',2,NULL,NULL,NULL,'2020-01-10 11:46:25','2020-01-10 13:07:13',1),(64,'Franco',NULL,1,NULL,NULL,'2020-01-10 11:46:25','2020-01-10 13:07:16',1),(65,'Buen Compañero',NULL,NULL,1,NULL,'2020-01-10 11:46:25','2020-01-10 13:07:20',1),(66,'Dócil',1,NULL,NULL,NULL,'2020-01-10 11:46:25','2020-01-10 13:07:24',1),(67,'Atrevido',NULL,2,NULL,NULL,'2020-01-10 11:55:14','2020-01-10 13:07:29',1),(68,'Leal',NULL,NULL,NULL,2,'2020-01-10 11:55:14','2020-01-10 13:07:37',1),(69,'Encantador',NULL,NULL,2,NULL,'2020-01-10 11:55:14','2020-01-10 13:07:42',1),(70,'Competitivo',NULL,2,NULL,NULL,'2020-01-10 11:55:14','2020-01-10 13:07:51',1),(71,'Alegre',NULL,NULL,1,NULL,'2020-01-10 11:55:14','2020-01-10 13:07:58',1),(72,'Considerando',NULL,NULL,NULL,2,'2020-01-10 11:55:14','2020-01-10 13:08:03',1),(73,'Armonioso',1,NULL,NULL,NULL,'2020-01-10 11:55:14','2020-01-10 13:08:11',1),(74,'Amiguero',NULL,NULL,1,NULL,'2020-01-10 11:55:14','2020-01-10 13:08:15',1),(75,'Paciente',NULL,NULL,NULL,2,'2020-01-10 11:55:14','2020-01-10 13:08:22',1),(76,'Confianza en si Mismo',NULL,2,NULL,NULL,'2020-01-10 11:55:14','2020-01-10 13:08:27',1),(77,'Mesurado para Hablar',2,NULL,NULL,NULL,'2020-01-10 11:55:14','2020-01-10 13:08:39',1),(78,'Diplomático',2,NULL,NULL,NULL,'2020-01-10 11:55:14','2020-01-10 13:08:43',1),(79,'Audaz',NULL,1,NULL,NULL,'2020-01-10 11:55:14','2020-01-10 13:08:47',1),(80,'Refinado',NULL,NULL,1,NULL,'2020-01-10 11:55:14','2020-01-10 13:08:50',1),(81,'Satisfecho',NULL,NULL,NULL,2,'2020-01-10 11:55:14','2020-01-10 13:08:55',1),(82,'Dispuesto',NULL,NULL,NULL,2,'2020-01-10 11:57:51','2020-01-10 13:09:03',1),(83,'Deseoso',NULL,NULL,NULL,NULL,'2020-01-10 11:57:51','2020-01-10 12:08:10',1),(84,'Consecuente',2,NULL,NULL,NULL,'2020-01-10 11:57:51','2020-01-10 13:09:12',1),(85,'Entusiasta',NULL,1,NULL,NULL,'2020-01-10 11:57:51','2020-01-10 13:09:19',1),(86,'Admirable',NULL,NULL,2,NULL,'2020-01-10 11:57:51','2020-01-10 13:09:26',1),(87,'Bondadoso',NULL,NULL,NULL,2,'2020-01-10 11:57:51','2020-01-10 13:09:34',1),(88,'Resignado ',1,NULL,NULL,NULL,'2020-01-10 11:57:51','2020-01-10 13:09:41',1),(89,'Carácter Firme',NULL,2,NULL,NULL,'2020-01-10 11:57:51','2020-01-10 13:09:49',1),(90,'Conforme',NULL,NULL,NULL,1,'2020-01-10 11:57:52','2020-01-10 13:09:56',1),(91,'Confiable',NULL,NULL,NULL,2,'2020-01-10 11:57:52','2020-01-10 13:10:06',1),(92,'Pacífico',2,NULL,NULL,NULL,'2020-01-10 11:57:52','2020-01-10 13:10:14',1),(93,'Positivo',NULL,2,NULL,NULL,'2020-01-10 11:57:52','2020-01-10 13:10:17',1),(94,'Inquieto',NULL,2,NULL,NULL,'2020-01-10 11:57:52','2020-01-10 13:10:24',1),(95,'Popular',NULL,NULL,1,NULL,'2020-01-10 11:58:25','2020-01-10 13:10:29',1),(96,'Buen Vecino',NULL,NULL,NULL,2,'2020-01-10 11:58:25','2020-01-10 13:10:36',1),(97,'Devoto',1,NULL,NULL,NULL,'2020-01-10 11:58:25','2020-01-10 13:10:42',1);
/*!40000 ALTER TABLE `cat_reactivos_cleaver_base` ENABLE KEYS */;
UNLOCK TABLES;




--
-- Table structure for table `cat_tipo_campo`
--

DROP TABLE IF EXISTS `cat_tipo_campo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_campo` (
  `tipo_campo_id` int(11) NOT NULL AUTO_INCREMENT,
  `campo_desc` varchar(255) DEFAULT NULL,
  `nombre_tipo_campo` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_campo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipo_campo`
--

LOCK TABLES `cat_tipo_campo` WRITE;
/*!40000 ALTER TABLE `cat_tipo_campo` DISABLE KEYS */;
INSERT INTO `cat_tipo_campo` VALUES (1,'te','text','2020-01-14 22:42:25','2020-01-14 22:42:25',NULL,NULL,NULL),(2,'nu','number','2020-01-14 22:42:25','2020-01-14 22:42:25',NULL,NULL,NULL),(3,'ra','radio','2020-01-14 22:42:25','2020-01-14 22:42:25',NULL,NULL,NULL),(4,'cb','checkbox','2020-01-14 22:42:25','2020-01-14 22:42:25',NULL,NULL,NULL),(5,'se','select','2020-01-14 22:42:25','2020-01-14 22:42:25',NULL,NULL,NULL);
/*!40000 ALTER TABLE `cat_tipo_campo` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `inter_campo_aspirante`
--

DROP TABLE IF EXISTS `inter_campo_aspirante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_campo_aspirante` (
  `campo_aspirante_id` int(11) NOT NULL AUTO_INCREMENT,
  `campo_formulario_id` int(11) NOT NULL,
  `aspirante_id` int(11) NOT NULL,
  `respuesta` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`campo_aspirante_id`),
  KEY `FK1_ICA_aspirante` (`aspirante_id`),
  KEY `FK2_ICA_documento` (`campo_formulario_id`),
  CONSTRAINT `FK1_ICA_aspirante` FOREIGN KEY (`aspirante_id`) REFERENCES `tr_aspirante` (`aspirante_id`),
  CONSTRAINT `FK2_ICA_campo_formulario` FOREIGN KEY (`campo_formulario_id`) REFERENCES `tr_campo_formulario` (`campo_formulario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=734 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_campo_aspirante`
--

LOCK TABLES `inter_campo_aspirante` WRITE;
/*!40000 ALTER TABLE `inter_campo_aspirante` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_campo_aspirante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_cleaver_aspirante`
--

DROP TABLE IF EXISTS `inter_cleaver_aspirante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_cleaver_aspirante` (
  `cleaver_aspirante_id` int(11) NOT NULL AUTO_INCREMENT,
  `aspirante_id` int(11) NOT NULL,
  `cleaver_base_id` int(11) NOT NULL,
  `respuesta_id` int(1) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`cleaver_aspirante_id`),
  KEY `FK1_IRA_aspirante` (`aspirante_id`),
  KEY `FK2_IRA_base` (`cleaver_base_id`),
  CONSTRAINT `FK1_IRA_aspirante` FOREIGN KEY (`aspirante_id`) REFERENCES `tr_aspirante` (`aspirante_id`),
  CONSTRAINT `FK2_IRA_base` FOREIGN KEY (`cleaver_base_id`) REFERENCES `cat_reactivos_cleaver_base` (`cleaver_base_id`)
) ENGINE=InnoDB AUTO_INCREMENT=806 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_cleaver_aspirante`
--

LOCK TABLES `inter_cleaver_aspirante` WRITE;
/*!40000 ALTER TABLE `inter_cleaver_aspirante` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_cleaver_aspirante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_documento_carrera`
--

DROP TABLE IF EXISTS `inter_documento_carrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_documento_carrera` (
  `documento_carrera_id` int(11) NOT NULL AUTO_INCREMENT,
  `carrera_id` int(11) NOT NULL,
  `documento_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`documento_carrera_id`),
  KEY `FK1_IDO_carrera` (`carrera_id`),
  KEY `FK2_IDO_documento` (`documento_id`),
  CONSTRAINT `FK1_IDO_carrera` FOREIGN KEY (`carrera_id`) REFERENCES `estudydg`.`tr_carrera` (`carrera_id`),
  CONSTRAINT `FK2_IDO_documento` FOREIGN KEY (`documento_id`) REFERENCES `cat_documento` (`documento_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_documento_carrera`
--

LOCK TABLES `inter_documento_carrera` WRITE;
/*!40000 ALTER TABLE `inter_documento_carrera` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_documento_carrera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_expediente`
--

DROP TABLE IF EXISTS `inter_expediente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_expediente` (
  `expediente_id` int(11) NOT NULL AUTO_INCREMENT,
  `expediente_desc` varchar(100) DEFAULT NULL,
  `aspirante_id` int(11) NOT NULL,
  `documento_id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `estado_documento_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`expediente_id`),
  KEY `FK1_IE_aspirante` (`aspirante_id`),
  KEY `FK2_IE_documento` (`documento_id`),
  KEY `FK3_IE_estado_documento` (`estado_documento_id`),
  CONSTRAINT `FK1_IE_aspirante` FOREIGN KEY (`aspirante_id`) REFERENCES `tr_aspirante` (`aspirante_id`),
  CONSTRAINT `FK2_IE_documento` FOREIGN KEY (`documento_id`) REFERENCES `cat_documento` (`documento_id`),
  CONSTRAINT `FK3_IE_estado_documento` FOREIGN KEY (`estado_documento_id`) REFERENCES `cat_estado_documento` (`estado_documento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=156 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_expediente`
--

LOCK TABLES `inter_expediente` WRITE;
/*!40000 ALTER TABLE `inter_expediente` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_expediente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_formulario_aspirante`
--

DROP TABLE IF EXISTS `inter_formulario_aspirante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_formulario_aspirante` (
  `formulario_aspirante_id` int(11) NOT NULL AUTO_INCREMENT,
  `formulario_id` int(11) NOT NULL,
  `aspirante_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`formulario_aspirante_id`),
  KEY `FK1_IFA_aspirante` (`aspirante_id`),
  KEY `FK2_IFA_documento` (`formulario_id`),
  CONSTRAINT `FK1_IFA_aspirante` FOREIGN KEY (`aspirante_id`) REFERENCES `tr_aspirante` (`aspirante_id`),
  CONSTRAINT `FK2_IFA__formulario` FOREIGN KEY (`formulario_id`) REFERENCES `tr_formulario` (`formulario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=202 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_formulario_aspirante`
--

LOCK TABLES `inter_formulario_aspirante` WRITE;
/*!40000 ALTER TABLE `inter_formulario_aspirante` DISABLE KEYS */;

/*!40000 ALTER TABLE `inter_formulario_aspirante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_formulario_carrera`
--

DROP TABLE IF EXISTS `inter_formulario_carrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_formulario_carrera` (
  `formulario_carrera_id` int(11) NOT NULL AUTO_INCREMENT,
  `formulario_id` int(11) NOT NULL,
  `carrera_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`formulario_carrera_id`),
  KEY `FK1_IFC_formulario` (`formulario_id`),
  KEY `FK2_IFC_carrera` (`carrera_id`),
  CONSTRAINT `FK1_ITS_formulario` FOREIGN KEY (`formulario_id`) REFERENCES `tr_formulario` (`formulario_id`),
  CONSTRAINT `FK2_ITS_carrera` FOREIGN KEY (`carrera_id`) REFERENCES `estudydg`.`tr_carrera` (`carrera_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_formulario_carrera`
--

LOCK TABLES `inter_formulario_carrera` WRITE;
/*!40000 ALTER TABLE `inter_formulario_carrera` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_formulario_carrera` ENABLE KEYS */;
UNLOCK TABLES;

CREATE TABLE tr_etiquetas (
	id_etiqueta INT(11) NOT NULL AUTO_INCREMENT,
	clave VARCHAR(50),
	nombre VARCHAR(50), 
	descripcion VARCHAR(50),
	fecha_creacion datetime NOT NULL DEFAULT current_timestamp(),
  	fecha_actualiza datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	estatus INT(1),
	PRIMARY KEY(id_etiqueta)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;


CREATE TABLE inter_etiqueta_documento (
	id_etiqueta_documento INT(11) NOT NULL AUTO_INCREMENT,
	id_etiqueta INT(11) NOT NULL,
	id_documento INT(11) NOT NULL,
	PRIMARY KEY(id_etiqueta_documento),
	FOREIGN KEY (id_etiqueta) REFERENCES tr_etiquetas(id_etiqueta),
	FOREIGN KEY (id_documento) REFERENCES cat_documento(documento_id)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

--
-- Table structure for table `tr_aspirante`
--

DROP TABLE IF EXISTS `tr_aspirante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_aspirante` (
  `aspirante_id` int(11) NOT NULL,
  `situacion_aspirante_id` int(11) NOT NULL,
  `clave_aspirante` varchar(255) DEFAULT NULL,
  `paso` int(1) NOT NULL DEFAULT '0',
  `carrera_id` int(11) DEFAULT NULL,
  `aceptacion_terminos` int(1) NOT NULL DEFAULT '0',
  `info_personal_completa` int(1) NOT NULL DEFAULT '0',
  `cleaver_completo` int(1) NOT NULL DEFAULT '0' COMMENT 'Variables únicas de plataforma PAN',
  `validado_administrador` int(1) DEFAULT '0',  
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`aspirante_id`),
  KEY `FK1_TA_carrera` (`carrera_id`),
  KEY `FK2_TA_aspirante` (`situacion_aspirante_id`),
  CONSTRAINT `FK1_Aspirante_Carrera` FOREIGN KEY (`carrera_id`) REFERENCES `estudydg`.`tr_carrera` (`carrera_id`),
  CONSTRAINT `FK1_Persona_Aspirante` FOREIGN KEY (`aspirante_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK2_Persona_Aspirante` FOREIGN KEY (`situacion_aspirante_id`) REFERENCES `cat_situacion_aspirante` (`situacion_aspirante_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_aspirante`
--

LOCK TABLES `tr_aspirante` WRITE;
/*!40000 ALTER TABLE `tr_aspirante` DISABLE KEYS */;

/*!40000 ALTER TABLE `tr_aspirante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_campo_formulario`
--

DROP TABLE IF EXISTS `tr_campo_formulario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_campo_formulario` (
  `campo_formulario_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `formulario_id` int(11) NOT NULL,
  `tipo_campo_id` int(11) NOT NULL,
  `obligatorio` int(1) DEFAULT NULL,
  `regex` varchar(255) DEFAULT NULL,
  `mensaje_error` varchar(100) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  `campo_formulario_padre_id` int(11) DEFAULT NULL,
  `condicional` int(2) DEFAULT NULL,
  PRIMARY KEY (`campo_formulario_id`),
  KEY `FK1_TCF_formulario` (`formulario_id`),
  KEY `FK1_TCF_tipo_campo` (`tipo_campo_id`),
  CONSTRAINT `FK1_formulario` FOREIGN KEY (`formulario_id`) REFERENCES `tr_formulario` (`formulario_id`),
  CONSTRAINT `FK1_tipo_formulario` FOREIGN KEY (`tipo_campo_id`) REFERENCES `cat_tipo_campo` (`tipo_campo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_campo_formulario`
--

LOCK TABLES `tr_campo_formulario` WRITE;
/*!40000 ALTER TABLE `tr_campo_formulario` DISABLE KEYS */;
INSERT INTO `tr_campo_formulario` VALUES (1,'Teléfono fijo','Ingresa sólo números',1,2,1,NULL,'Debes ingresar un número telefónico','2020-01-09 22:53:10','2020-01-09 22:53:10',NULL,NULL,0,NULL,NULL),(2,'Celular','Ingresa sólo números',1,2,1,NULL,'Debes ingresar un número de celular','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,0,NULL,NULL),(3,'Correo electrónico','Ingresa un correo electrónico',1,1,1,NULL,'Debes ingresar un número de celular','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,0,NULL,NULL),(4,'Facebook','Ingresa tu dirección de facebook',1,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,0,NULL,NULL),(5,'Skype','Ingresa tu dirección de Skype',1,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,0,NULL,NULL),(6,'Twitter','Ingresa tu dirección de Twitter',1,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,0,NULL,NULL),(7,'Teléfono fijo','Ingresa sólo números',1,2,1,NULL,'Debes ingresar un número telefónico','2020-01-09 22:53:10','2020-01-09 23:02:56',NULL,NULL,1,NULL,NULL),(8,'Celular','Ingresa sólo números',1,2,1,NULL,'Debes ingresar un número de celular','2020-01-09 22:53:11','2020-01-19 16:32:48',NULL,NULL,1,NULL,NULL),(9,'Facebook','Ingresa tu dirección de facebook',1,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 23:02:56',NULL,NULL,1,NULL,NULL),(10,'Skype','Ingresa tu dirección de Skype',1,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-15 13:15:26',NULL,NULL,1,NULL,NULL),(11,'Twitter','Ingresa tu dirección de Twitter',1,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-15 13:15:26',NULL,NULL,1,NULL,NULL),(12,'Calle','Ingresa la calle',2,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 23:02:56',NULL,NULL,1,NULL,NULL),(13,'Número exterior','Ingresa el número exterior',2,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 23:02:56',NULL,NULL,1,NULL,NULL),(14,'Número interior','Ingresa el número interior',2,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 23:02:56',NULL,NULL,1,NULL,NULL),(15,'Código postal','Ingresa los cinco dígitos del código postal',2,2,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 23:02:56',NULL,NULL,1,NULL,NULL),(16,'Colonia','Ingresa la colonia',2,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(17,'Alcaldía / municipio','Ingresa la alcaldía',2,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-16 14:09:57',NULL,NULL,1,NULL,NULL),(18,'Estado','Selecciona un elemento',2,5,0,NULL,'Debes seleccionar un estado','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(19,'¿Deseas obtener facturas?','Selecciona una opción',3,3,1,NULL,'Selecciona una opción','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(20,'RFC','Ingresa el RFC',3,1,0,NULL,'Debes ingresar un RFC valido','2020-01-09 22:53:11','2020-01-20 01:06:35',NULL,NULL,1,NULL,NULL),(21,'Código postal','Ingresa los cinco dígitos del código postal',3,2,0,NULL,'Debes ingresar un código postal','2020-01-09 22:53:11','2020-01-20 01:06:35',NULL,NULL,1,NULL,NULL),(22,'Razón social','Ingresa una razón social',3,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-20 01:06:35',NULL,NULL,1,NULL,NULL),(23,'Colonia','Ingresa la colonia',3,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-20 01:06:35',NULL,NULL,1,NULL,NULL),(24,'Calle','Ingresa la calle',3,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-20 01:06:35',NULL,NULL,1,NULL,NULL),(25,'Alcaldía /municipio','Ingresa la alcaldía o el municipio',3,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-20 01:06:35',NULL,NULL,1,NULL,NULL),(26,'Número exterior','Ingresa el número exterior',3,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-20 01:06:36',NULL,NULL,1,NULL,NULL),(27,'Número interior','Ingresa el número interior',3,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-20 01:06:36',NULL,NULL,1,NULL,NULL),(28,'Estado','Selecciona un estado',3,5,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-20 01:06:36',NULL,NULL,1,NULL,NULL),(29,'Último nivel de estudios concluido','Selecciona un nivel',4,5,1,NULL,'Selecciona una opción','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(30,'Nombre de la carrera','Ingresa el nombre de la carrera',4,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(31,'Nombre de la institución educativa','Ingresa el nombre de la institución educativa',4,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(32,'Estado donde estudió','Selecciona un estado',4,5,1,NULL,'Selecciona una opción','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(33,'País donde se estudió','Ingresa el país',4,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 23:47:56',NULL,NULL,1,NULL,NULL),(34,'¿Trabajas actualmente?','Selecciona una opción',5,3,1,NULL,'Selecciona una opción','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(35,'Si la respuesta es sí ¿Trabajas en el Sistema Educativo Nacional?','Selecciona una opción',5,3,1,NULL,'Selecciona una opción','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,0,NULL,NULL),(36,'¿En dónde trabajas?','Ingresa el oficio',5,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-19 16:30:54',NULL,NULL,1,34,9),(37,'¿Cuál es tu puesto?','Ingresa el puesto',5,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-19 16:31:05',NULL,NULL,1,34,9),(38,'Nombre(s)','Ingresa el nombre',6,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(39,'Apellido paterno','Ingresa el apellido paterno',6,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(40,'Apellido materno','Ingresa el apellido materno',6,1,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(41,'Correo electrónico','Ingresa un correo electrónico',6,1,1,'(([^<>()[].,;:s@\"]+(.[^<>()[].,;:s@\"]+)*)|(\".+\"))@(([^<>()[].,;:s@\"]+.)+[^<>()[].,;:s@\"]{2,})','Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(42,'Teléfono fijo','Ingresa un teléfono fijo',6,2,1,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(43,'Parentesco','Selecciona una opción',6,5,1,NULL,'Selecciona una opción','2020-01-09 22:53:11','2020-01-09 22:53:11',NULL,NULL,1,NULL,NULL),(44,'Candidato a ','Selecciona una opción',7,5,0,NULL,'Debes seleccionar una opción','2020-01-09 22:53:11','2020-01-19 19:02:03',NULL,NULL,1,NULL,NULL),(45,'Distrito federal','Distrito federal al que se esta postulando',7,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-18 23:28:49',NULL,NULL,1,44,117),(46,'Distrito local','Distrito local al que se esta postulando',7,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-18 23:28:49',NULL,NULL,1,44,116),(47,'Municipio/Alcaldía','Municipio/alcaldia al que se esta postulando',7,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-18 23:33:22',NULL,NULL,1,44,114),(48,'Estado','Estado al que se esta postulando',7,1,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-18 23:33:23',NULL,NULL,1,NULL,NULL),(49,'Elige un cargo','Selecciona una opción',7,5,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-19 16:36:25',NULL,NULL,1,NULL,NULL),(50,'Elige un campo de campaña','Selecciona una opción',7,5,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-19 16:36:25',NULL,NULL,1,NULL,NULL),(51,'Elige una campaña','Selecciona una opción',7,5,0,NULL,'Ingresa la información solicitada','2020-01-09 22:53:11','2020-01-19 16:36:25',NULL,NULL,1,NULL,NULL);
/*!40000 ALTER TABLE `tr_campo_formulario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_formulario`
--

DROP TABLE IF EXISTS `tr_formulario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_formulario` (
  `formulario_id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `instruccion` varchar(255) DEFAULT NULL,
  `persona_id` int(11) NOT NULL,
  `obligatorio` int(1) DEFAULT NULL,
  `orden` int(2) DEFAULT NULL,
  `porcentaje` int(3) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`formulario_id`),
  KEY `FK1_TF_persona` (`persona_id`),
  CONSTRAINT `FK1_Persona_Formulario` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_formulario`
--

LOCK TABLES `tr_formulario` WRITE;
/*!40000 ALTER TABLE `tr_formulario` DISABLE KEYS */;
INSERT INTO `tr_formulario` VALUES (1,'Comunicación','Ingresa tus datos de contacto.',1,1,1,10,'2020-01-09 22:26:59','2020-01-19 23:02:57',NULL,NULL,1),(2,'Domicilio particular','Ingresa la información solicitada.',1,1,2,10,'2020-01-09 22:26:59','2020-01-19 23:02:57',NULL,NULL,1),(3,'Datos de facturación','<b>Importante:</b> En caso de requerir factura, deberás introducir la información fiscal dentro del apartado \"Datos de facturación\". Estos datos son indispensables para que el área contable emita el comprobante fiscal correspondiente.',1,1,4,10,'2020-01-09 22:26:59','2020-01-13 12:34:38',NULL,NULL,1),(4,'Información académica','Ingresa la información del último nivel de estudios que tienes.',1,0,3,10,'2020-01-09 22:26:59','2020-01-19 23:02:58',NULL,NULL,1),(5,'Información laboral','Ingresa la información correspondiente a tu último trabajo.',1,0,4,10,'2020-01-09 22:26:59','2020-01-19 23:02:58',NULL,NULL,1),(6,'Referencia personal','Ingresa los datos de una persona que puedas utilizar como referencia personal.',1,0,5,10,'2020-01-09 22:26:59','2020-01-19 23:02:58',NULL,NULL,0),(7,'Información del postulante','Ingresa la información sobre el lugar donde desea postularse.',1,1,6,10,'2020-01-09 22:26:59','2020-01-13 12:34:38',NULL,NULL,1);
/*!40000 ALTER TABLE `tr_formulario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_reactivos_campo`
--

DROP TABLE IF EXISTS `tr_reactivos_campo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_reactivos_campo` (
  `reactivo_campo_id` int(11) NOT NULL AUTO_INCREMENT,
  `campo_formulario_id` int(11) NOT NULL,
  `reactivo_desc` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`reactivo_campo_id`),
  KEY `FK1_TRC_formulario` (`campo_formulario_id`),
  CONSTRAINT `FK1_reactivo_formulario` FOREIGN KEY (`campo_formulario_id`) REFERENCES `tr_campo_formulario` (`campo_formulario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_reactivos_campo`
--

LOCK TABLES `tr_reactivos_campo` WRITE;
/*!40000 ALTER TABLE `tr_reactivos_campo` DISABLE KEYS */;
INSERT INTO `tr_reactivos_campo` VALUES (2,19,'Si','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(3,19,'No','2020-01-09 23:22:44','2020-01-09 23:22:47',NULL,NULL,1),(4,29,'Secundaria','2020-01-09 23:22:44','2020-01-09 23:56:24',NULL,NULL,1),(5,29,'Bachillerato','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(6,29,'Licenciatura','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(7,29,'Maestría','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(8,29,'Doctorado','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(9,34,'Si','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(10,34,'No','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(11,35,'Si','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(12,35,'No','2020-01-09 23:22:44','2020-01-09 23:56:59',NULL,NULL,1),(13,43,'Madre','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(14,43,'Padre','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(15,43,'hermano (a)','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(16,43,'Esposo (a)','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(17,43,'Otro','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(18,18,'Aguascalientes','2020-01-11 19:34:40','2020-01-20 01:05:34',NULL,NULL,1),(19,18,'Baja California','2020-01-11 19:34:40','2020-01-20 01:05:34',NULL,NULL,1),(20,18,'Baja California Sur','2020-01-11 19:34:41','2020-01-20 01:05:35',NULL,NULL,1),(21,18,'Campeche','2020-01-11 19:34:41','2020-01-20 01:05:35',NULL,NULL,1),(22,18,'Coahuila de Zaragoza','2020-01-11 19:34:41','2020-01-20 01:05:35',NULL,NULL,1),(23,18,'Colima','2020-01-11 19:34:41','2020-01-20 01:05:35',NULL,NULL,1),(24,18,'Chiapas','2020-01-11 19:34:41','2020-01-20 01:05:36',NULL,NULL,1),(25,18,'Chihuahua','2020-01-11 19:34:41','2020-01-20 01:05:36',NULL,NULL,1),(26,18,'Ciudad de México','2020-01-11 19:34:41','2020-01-20 01:05:36',NULL,NULL,1),(27,18,'Durango','2020-01-11 19:34:41','2020-01-20 01:05:36',NULL,NULL,1),(28,18,'Guanajuato','2020-01-11 19:34:41','2020-01-20 01:05:36',NULL,NULL,1),(29,18,'Guerrero','2020-01-11 19:34:41','2020-01-20 01:05:37',NULL,NULL,1),(30,18,'Hidalgo','2020-01-11 19:34:41','2020-01-20 01:05:37',NULL,NULL,1),(31,18,'Jalisco','2020-01-11 19:34:41','2020-01-20 01:05:37',NULL,NULL,1),(32,18,'Estado de México','2020-01-11 19:34:41','2020-01-20 01:05:37',NULL,NULL,1),(33,18,'Michoacán de Ocampo','2020-01-11 19:34:41','2020-01-20 01:05:37',NULL,NULL,1),(34,18,'Morelos','2020-01-11 19:34:41','2020-01-20 01:05:37',NULL,NULL,1),(35,18,'Nayarit','2020-01-11 19:34:41','2020-01-20 01:05:38',NULL,NULL,1),(36,18,'Nuevo León','2020-01-11 19:34:41','2020-01-20 01:05:38',NULL,NULL,1),(37,18,'Oaxaca','2020-01-11 19:34:41','2020-01-20 01:05:38',NULL,NULL,1),(38,18,'Puebla','2020-01-11 19:34:41','2020-01-20 01:05:38',NULL,NULL,1),(39,18,'Querétaro','2020-01-11 19:34:41','2020-01-20 01:05:38',NULL,NULL,1),(40,18,'Quintana Roo','2020-01-11 19:34:41','2020-01-20 01:05:39',NULL,NULL,1),(41,18,'San Luis Potosí','2020-01-11 19:34:41','2020-01-20 01:05:39',NULL,NULL,1),(42,18,'Sinaloa','2020-01-11 19:34:41','2020-01-20 01:05:39',NULL,NULL,1),(43,18,'Sonora','2020-01-11 19:34:42','2020-01-20 01:05:39',NULL,NULL,1),(44,18,'Tabasco','2020-01-11 19:34:42','2020-01-20 01:04:26',NULL,NULL,1),(45,18,'Tamaulipas','2020-01-11 19:34:42','2020-01-20 01:04:26',NULL,NULL,1),(46,18,'Tlaxcala','2020-01-11 19:34:42','2020-01-20 01:04:27',NULL,NULL,1),(47,18,'Veracruz de Ignacio de la Llave','2020-01-11 19:34:42','2020-01-20 01:04:27',NULL,NULL,1),(48,18,'Yucatán','2020-01-11 19:34:42','2020-01-20 01:04:27',NULL,NULL,1),(49,18,'Zacatecas','2020-01-11 19:34:42','2020-01-20 01:04:27',NULL,NULL,1),(50,28,'Aguascalientes','2020-01-11 19:34:40','2020-01-20 01:04:27',NULL,NULL,1),(51,28,'Baja California','2020-01-11 19:34:40','2020-01-20 01:04:27',NULL,NULL,1),(52,28,'Baja California Sur','2020-01-11 19:34:41','2020-01-20 01:04:28',NULL,NULL,1),(53,28,'Campeche','2020-01-11 19:34:41','2020-01-20 01:04:28',NULL,NULL,1),(54,28,'Coahuila de Zaragoza','2020-01-11 19:34:41','2020-01-20 01:04:28',NULL,NULL,1),(55,28,'Colima','2020-01-11 19:34:41','2020-01-20 01:04:28',NULL,NULL,1),(56,28,'Chiapas','2020-01-11 19:34:41','2020-01-20 01:04:28',NULL,NULL,1),(57,28,'Chihuahua','2020-01-11 19:34:41','2020-01-20 01:04:29',NULL,NULL,1),(58,28,'Ciudad de México','2020-01-11 19:34:41','2020-01-20 01:04:29',NULL,NULL,1),(59,28,'Durango','2020-01-11 19:34:41','2020-01-20 01:04:29',NULL,NULL,1),(60,28,'Guanajuato','2020-01-11 19:34:41','2020-01-20 01:04:29',NULL,NULL,1),(61,28,'Guerrero','2020-01-11 19:34:41','2020-01-20 01:04:29',NULL,NULL,1),(62,28,'Hidalgo','2020-01-11 19:34:41','2020-01-20 01:04:30',NULL,NULL,1),(63,28,'Jalisco','2020-01-11 19:34:41','2020-01-20 01:04:30',NULL,NULL,1),(64,28,'Estado de México','2020-01-11 19:34:41','2020-01-20 01:04:30',NULL,NULL,1),(65,28,'Michoacán de Ocampo','2020-01-11 19:34:41','2020-01-20 01:04:32',NULL,NULL,1),(66,28,'Morelos','2020-01-11 19:34:41','2020-01-20 01:04:33',NULL,NULL,1),(67,28,'Nayarit','2020-01-11 19:34:41','2020-01-20 01:04:33',NULL,NULL,1),(68,28,'Nuevo León','2020-01-11 19:34:41','2020-01-20 01:04:33',NULL,NULL,1),(69,28,'Oaxaca','2020-01-11 19:34:41','2020-01-20 01:04:34',NULL,NULL,1),(70,28,'Puebla','2020-01-11 19:34:41','2020-01-20 01:04:34',NULL,NULL,1),(71,28,'Querétaro','2020-01-11 19:34:41','2020-01-20 01:04:35',NULL,NULL,1),(72,28,'Quintana Roo','2020-01-11 19:34:41','2020-01-20 01:04:35',NULL,NULL,1),(73,28,'San Luis Potosí','2020-01-11 19:34:41','2020-01-20 01:04:35',NULL,NULL,1),(74,28,'Sinaloa','2020-01-11 19:34:41','2020-01-20 01:04:35',NULL,NULL,1),(75,28,'Sonora','2020-01-11 19:34:42','2020-01-20 01:04:36',NULL,NULL,1),(76,28,'Tabasco','2020-01-11 19:34:42','2020-01-20 01:04:36',NULL,NULL,1),(77,28,'Tamaulipas','2020-01-11 19:34:42','2020-01-20 01:04:36',NULL,NULL,1),(78,28,'Tlaxcala','2020-01-11 19:34:42','2020-01-20 01:04:37',NULL,NULL,1),(79,28,'Veracruz de Ignacio de la Llave','2020-01-11 19:34:42','2020-01-20 01:04:37',NULL,NULL,1),(80,28,'Yucatán','2020-01-11 19:34:42','2020-01-20 01:04:38',NULL,NULL,1),(81,28,'Zacatecas','2020-01-11 19:34:42','2020-01-20 01:04:38',NULL,NULL,1),(82,32,'Aguascalientes','2020-01-11 19:34:40','2020-01-20 01:04:38',NULL,NULL,1),(83,32,'Baja California','2020-01-11 19:34:40','2020-01-20 01:04:39',NULL,NULL,1),(84,32,'Baja California Sur','2020-01-11 19:34:41','2020-01-20 01:04:39',NULL,NULL,1),(85,32,'Campeche','2020-01-11 19:34:41','2020-01-20 01:04:40',NULL,NULL,1),(86,32,'Coahuila de Zaragoza','2020-01-11 19:34:41','2020-01-20 01:04:40',NULL,NULL,1),(87,32,'Colima','2020-01-11 19:34:41','2020-01-20 01:04:40',NULL,NULL,1),(88,32,'Chiapas','2020-01-11 19:34:41','2020-01-20 01:04:41',NULL,NULL,1),(89,32,'Chihuahua','2020-01-11 19:34:41','2020-01-20 01:04:41',NULL,NULL,1),(90,32,'Ciudad de México','2020-01-11 19:34:41','2020-01-20 01:04:41',NULL,NULL,1),(91,32,'Durango','2020-01-11 19:34:41','2020-01-20 01:04:41',NULL,NULL,1),(92,32,'Guanajuato','2020-01-11 19:34:41','2020-01-20 01:04:42',NULL,NULL,1),(93,32,'Guerrero','2020-01-11 19:34:41','2020-01-20 01:04:42',NULL,NULL,1),(94,32,'Hidalgo','2020-01-11 19:34:41','2020-01-20 01:04:43',NULL,NULL,1),(95,32,'Jalisco','2020-01-11 19:34:41','2020-01-20 01:04:43',NULL,NULL,1),(96,32,'Estado de México','2020-01-11 19:34:41','2020-01-20 01:04:43',NULL,NULL,1),(97,32,'Michoacán de Ocampo','2020-01-11 19:34:41','2020-01-20 01:04:44',NULL,NULL,1),(98,32,'Morelos','2020-01-11 19:34:41','2020-01-20 01:04:44',NULL,NULL,1),(99,32,'Nayarit','2020-01-11 19:34:41','2020-01-20 01:04:45',NULL,NULL,1),(100,32,'Nuevo León','2020-01-11 19:34:41','2020-01-20 01:04:45',NULL,NULL,1),(101,32,'Oaxaca','2020-01-11 19:34:41','2020-01-20 01:04:46',NULL,NULL,1),(102,32,'Puebla','2020-01-11 19:34:41','2020-01-20 01:04:46',NULL,NULL,1),(103,32,'Querétaro','2020-01-11 19:34:41','2020-01-20 01:04:46',NULL,NULL,1),(104,32,'Quintana Roo','2020-01-11 19:34:41','2020-01-20 01:04:47',NULL,NULL,1),(105,32,'San Luis Potosí','2020-01-11 19:34:41','2020-01-20 01:04:47',NULL,NULL,1),(106,32,'Sinaloa','2020-01-11 19:34:41','2020-01-20 01:04:47',NULL,NULL,1),(107,32,'Sonora','2020-01-11 19:34:42','2020-01-20 01:04:48',NULL,NULL,1),(108,32,'Tabasco','2020-01-11 19:34:42','2020-01-20 01:04:48',NULL,NULL,1),(109,32,'Tamaulipas','2020-01-11 19:34:42','2020-01-20 01:04:49',NULL,NULL,1),(110,32,'Tlaxcala','2020-01-11 19:34:42','2020-01-20 01:04:49',NULL,NULL,1),(111,32,'Veracruz de Ignacio de la Llave','2020-01-11 19:34:42','2020-01-20 01:04:49',NULL,NULL,1),(112,32,'Yucatán','2020-01-11 19:34:42','2020-01-20 01:04:50',NULL,NULL,1),(113,32,'Zacatecas','2020-01-11 19:34:42','2020-01-20 01:04:50',NULL,NULL,1),(114,44,'Regidor, síndico o alcalde','2020-01-09 23:22:44','2020-01-20 00:00:58',NULL,NULL,1),(115,44,'Síndico o alcalde','2020-01-09 23:22:44','2020-01-20 00:00:58',NULL,NULL,0),(116,44,'Diputado local','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(117,44,'Diputado Federal','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(118,44,'Gobernador','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(119,49,'Gerente de campaña','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(120,49,'Integrante de campaña\r\n','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(121,49,'coordinador/a juvenil de campaña\r\n','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(122,49,'Secretaría CDM','2020-01-09 23:22:44','2020-01-19 16:40:30',NULL,NULL,1),(123,49,'Secretaría CDE','2020-01-09 23:22:44','2020-01-19 16:40:30',NULL,NULL,1),(124,50,'Coordinador general de campaña.\r\n','2020-01-09 23:22:44','2020-01-19 16:40:30',NULL,NULL,1),(125,50,'Coordinador de agenda de campaña.\r\n','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(126,50,'Coordinador jurídico','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(127,50,'Coordinador de comunicación','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(128,50,'Coordinador de finanzas','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(129,50,'Coordinador de ejército electoral.','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(130,51,'Campaña estatal','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(131,51,'Campaña a diputado federal','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(132,51,'Campaña a diputado local','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1),(133,51,'Campaña municipal','2020-01-09 23:22:44','2020-01-09 23:22:44',NULL,NULL,1);
/*!40000 ALTER TABLE `tr_reactivos_campo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_asesor`
--

DROP TABLE IF EXISTS `tr_asesor`;

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_asesor` (
  `asesor_id` int(11) NOT NULL,
  `clave_asesor` varchar(255) DEFAULT NULL,
  `situacion_asesor_id` int(1) NOT NULL,
  `foto_grupal` varchar(25) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`asesor_id`),
  CONSTRAINT `FK1_Persona_Asesor` FOREIGN KEY (`asesor_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  constraint `FK2_situacion_asesor` foreign key (`situacion_asesor_id`) references `cat_situacion_asesor` (`situacion_asesor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_asesor`
--

LOCK TABLES `tr_asesor` WRITE;
/*!40000 ALTER TABLE `tr_asesor` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_asesor` ENABLE KEYS */;
UNLOCK TABLES;


 DROP TABLE IF EXISTS `inter_asesor_persona`;


create table `inter_asesor_persona`(
`asesor_persona_id` int(11) not null auto_increment,
`persona_id` int(11) not null,
`asesor_id` int(11) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`asesor_persona_id`),
key `FK1_iap_persona` (`persona_id`),
key `FK1_iap_asesor` (`asesor_id`),
constraint `FK1_iap_persona` foreign key (`persona_id`) references `estudydg`.`personas` (`persona_id`),
constraint `FK1_iap_asesor` foreign key (`asesor_id`) references `tr_asesor` (`asesor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `inter_campus_asesor`;


create table `inter_campus_asesor`(
`campus_asesor_id` int(11) not null auto_increment,
`asesor_id` int(11) not null,
`campus_id` int(11) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`campus_asesor_id`),
key `FK1_iac_asesor` (`asesor_id`),
key `FK1_iac_campus` (`campus_id`),
constraint `FK1_iac_asesor` foreign key (`asesor_id`) references `tr_asesor` (`asesor_id`),
constraint `FK1_iac_campus` foreign key (`campus_id`) references `estudydg`.`cat_campus` (`campus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `cat_promocion`;
CREATE TABLE `cat_promocion` (
  `promocion_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL,
  `vigencia` date,
  `propietario` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`promocion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `inter_promocion_persona`;

create table `inter_promocion_persona`(
`promocion_persona_id` int(11) not null auto_increment,
`persona_id` int(11) not null,
`promocion_id` int(11) not null,
`fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
`fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
`estatus` int(1) DEFAULT NULL,
primary key (`promocion_persona_id`),
key `FK1_persona` (`persona_id`),
key `FK1_promocion` (`promocion_id`),
constraint `FK1_persona` foreign key (`persona_id`) references `estudydg`.`personas` (`persona_id`),
constraint `FK1_promocion` foreign key (`promocion_id`) references `cat_promocion` (`promocion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


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
  `switch_encuesta_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`encuesta_persona_id`),
  KEY `FK1_IFA_persona` (`persona_id`),
  KEY `FK2_IFA_documento` (`switch_encuesta_id`),
  CONSTRAINT `FK1_IFA_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK2_IFA_encuesta` FOREIGN KEY (`switch_encuesta_id`) REFERENCES `tr_switch_encuesta` (`switch_encuesta_id`)
) ENGINE=InnoDB auto_increment=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `inter_campo_persona`;
ALTER TABLE inter_campo_persona ADD switch_encuesta_id int(11) NULL;

CREATE TABLE `inter_campo_persona` (
  `campo_persona_id` int(11) NOT NULL AUTO_INCREMENT,
  `campo_encuesta_id` int(11) NOT NULL,
  `switch_encuesta_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `respuesta` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`campo_persona_id`),
  KEY `FK1_ICA_persona` (`persona_id`),
  KEY `FK2_ICA_documento` (`campo_encuesta_id`),
  CONSTRAINT `FK1_ICA_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK2_ICA_campo_encuesta` FOREIGN KEY (`campo_encuesta_id`) REFERENCES `tr_campo_encuesta` (`campo_encuesta_id`),
  CONSTRAINT `FK3_ICA_switch_encuesta` FOREIGN KEY (`switch_encuesta_id`) REFERENCES `tr_switch_encuesta` (`switch_encuesta_id`)
  
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



CREATE TABLE tr_etiquetas (
	id_etiqueta INT(11) NOT NULL AUTO_INCREMENT,
	clave VARCHAR(50),
	nombre VARCHAR(50), 
	descripcion VARCHAR(50),
	fecha_creacion datetime NOT NULL DEFAULT current_timestamp(),
  	fecha_actualiza datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	estatus INT(1),
	PRIMARY KEY(id_etiqueta)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB;


CREATE TABLE inter_etiqueta_documento (
	id_etiqueta_documento INT(11) NOT NULL AUTO_INCREMENT,
	id_etiqueta INT(11) NOT NULL,
	id_documento INT(11) NOT NULL,
	PRIMARY KEY(id_etiqueta_documento),
	FOREIGN KEY (id_etiqueta) REFERENCES tr_etiquetas(id_etiqueta),
	FOREIGN KEY (id_documento) REFERENCES cat_documento(documento_id)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

--
-- Dumping routines for database 'estudysg'
--


/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-20  2:17:43
