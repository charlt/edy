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
  `url_imagen_previa` varchar(100) DEFAULT NULL,
  `url_imagen` varchar(100) DEFAULT NULL,
  `url_contenido` varchar(100) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`asignatura_id`),
  KEY `FK1_TipoAsignatura` (`tipo_asignatura_id`),
  CONSTRAINT `FK1_TipoAsignatura` FOREIGN KEY (`tipo_asignatura_id`) REFERENCES `cat_tipo_asignaturas` (`tipo_asignatura_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cat_asignaturas`
--

LOCK TABLES `cat_asignaturas` WRITE;
/*!40000 ALTER TABLE `cat_asignaturas` DISABLE KEYS */;
/*!40000 ALTER TABLE `cat_asignaturas` ENABLE KEYS */;
UNLOCK TABLES;






--
-- Table structure for table `cat_estados`
--
DROP TABLE IF EXISTS `cat_estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_estado` (
  `estado_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave_estado` varchar(255) DEFAULT NULL,
  `nombre_estado` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


--
-- Dumping data for table `cat_estado`
--
LOCK TABLES `cat_estado` WRITE;
/*!40000 ALTER TABLE `cat_estado` DISABLE KEYS */;
INSERT INTO cat_estado (clave_estado,nombre_estado,fecha_creacion,fecha_actualiza,estatus) VALUES 
("AS","Aguascalientes","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("BC","Baja California","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("BS","Baja California Sur","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("CC","Campeche","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("CS","Chiapas","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("CH","Chihuahua","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("DF","Ciudad de México","2020-03-24 14:22:27.0","2020-03-24 14:46:18.0",1)
,("CL","Coahuila","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("CM","Colima","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("DG","Durango","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("GT","Guanajuato","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("GR","Guerrero","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("HG","Hidalgo","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("JC","Jalisco","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("MC","México","2020-03-24 14:22:27.0","2020-03-24 14:45:45.0",1)
,("MN","Michoacan","2020-03-24 14:22:27.0","2020-03-24 14:45:39.0",1)
,("MS","Morelos","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("NT","Nayarit","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("NL","Nuevo León","2020-03-24 14:22:27.0","2020-03-24 14:46:23.0",1)
,("OC","Oaxaca","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("PL","Puebla","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("QO","Querétaro","2020-03-24 14:22:27.0","2020-03-24 14:45:55.0",1)
,("QR","Quintana Roo","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("SP","San Luis Potosí","2020-03-24 14:22:27.0","2020-03-24 14:46:00.0",1)
,("SL","Sinaloa","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("SR","Sonora","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("TC","Tabasco","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("TS","Tamaulipas","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("TL","Tlaxcala","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("VZ","Veracruz","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1)
,("YN","Yucatán","2020-03-24 14:22:27.0","2020-03-24 14:46:07.0",1)
,("ZS","Zacatecas","2020-03-24 14:22:27.0","2020-03-24 14:23:15.0",1);
/*!40000 ALTER TABLE `cat_estado` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `cat_tipo_campus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_campus` (
  `tipo_campus_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_campus` varchar(255) NOT NULL,
  `tipo_campus_clave` varchar(50) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_campus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `cat_campus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_campus` (
  `campus_id` int(11) NOT NULL AUTO_INCREMENT,
  `institucion_id` int(11) NOT NULL DEFAULT 0,
  `campus_clave` varchar(50) NOT NULL DEFAULT '0',
  `campus` varchar(255) NOT NULL DEFAULT '0',
  `online` int(1) NOT NULL DEFAULT '1',
  `tipo_campus_id` int(1) NOT NULL DEFAULT '1',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`campus_id`),
  KEY `IDX_CAMPUS_INSTITUCION` (`institucion_id`),
  CONSTRAINT `FK1_campus_institucion` FOREIGN KEY (`institucion_id`) REFERENCES `cat_instituciones` (`institucion_id`),
  CONSTRAINT `FK1_campus_tipo` FOREIGN KEY (`tipo_campus_id`) REFERENCES `cat_tipo_campus` (`tipo_campus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_campus`
--

LOCK TABLES `cat_campus` WRITE;
/*!40000 ALTER TABLE `cat_campus` DISABLE KEYS */;
INSERT INTO `cat_campus` VALUES (0,0,'NA','No aplica',0,0,'2019-07-28 01:34:15','2019-07-28 01:36:40',NULL,NULL,0);
/*!40000 ALTER TABLE `cat_campus` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `cat_formatos`
--

DROP TABLE IF EXISTS `cat_formatos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_formatos` (
  `cat_formato_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_formato` varchar(50) DEFAULT NULL,
  `tipo_extension` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`cat_formato_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO `cat_formatos` (cat_formato_id,tipo_formato,tipo_extension,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
(1,'imagen','jpg,jpeg,png,gif','2020-01-21 23:09:19.0','2020-01-21 23:09:19.0',NULL,NULL,1)
,(2,'documento','txt,doc,docx,pdf,odt','2020-01-21 23:09:19.0','2020-01-29 21:10:36.0',NULL,NULL,1)
,(3,'presentacion','pptx,ppsx,pptm,ppt,pps,potx,ppam','2020-01-21 23:09:19.0','2020-01-29 21:07:20.0',NULL,NULL,1)
,(4,'hoja de calculo','xls,xlsx,xlt,xlm,xlsm,xlsb,xltx,xlr,csv,xltx,ods,odt','2020-01-21 23:09:19.0','2020-01-29 21:12:26.0',NULL,NULL,1)
,(5,'audio','mp3,m4a,mp4,wav,wma','2020-01-21 23:09:19.0','2020-01-29 21:21:47.0',NULL,NULL,0)
,(6,'video','avi,mp4, m4v, mov,mpg,mpeg,swf','2020-01-21 23:09:19.0','2020-01-29 21:21:47.0',NULL,NULL,0)
,(100,'archivo','txt,doc,docx,xls,ppt,pdf,jpg,jpeg,png,gif,jfif,pptx,pptm,ppt,pps,potx,ppam,xlsx,xlsm,xlsb,xltx,xlr,mp3,m4a,mp4,wav,wma,avi,mp4,m4v, mov,mpg,mpeg,swf,zip,rar,ppsx','2020-01-21 23:09:19.0','2020-01-29 21:21:41.0',NULL,NULL,1);


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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_instituciones`
--

LOCK TABLES `cat_instituciones` WRITE;
/*!40000 ALTER TABLE `cat_instituciones` DISABLE KEYS */;
INSERT INTO `cat_instituciones` VALUES (0,'NA','No Aplica',1,'0','2019-07-28 01:20:08','2019-07-28 02:15:26',NULL,NULL,0);
INSERT INTO `cat_instituciones` VALUES (1,'','',1,'0','2019-07-28 01:20:08','2019-07-28 02:15:26',NULL,NULL,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
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
  (7,100,'DIPLOMADO','2019-02-27 00:51:56','2019-02-27 00:51:56',NULL,NULL,1);
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
(1,'1','Primero',191,'2019-07-28 01:48:57','2019-07-28 01:49:12',NULL,NULL,1),(2,'2','Segundo',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),

(3,'3','Tercero',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(4,'4','Cuarto',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),

(5,'5','Quinto',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(6,'6','Sexto',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),

(7,'7','Septimo',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(8,'8','Octavo',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),

(9,'9','Noveno',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),(10,'10','Decimo',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1),

(100,'0','Propedéutico',NULL,'2019-07-28 01:50:42','2019-07-28 01:50:42',NULL,NULL,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_privilegios`
--

LOCK TABLES `cat_privilegios` WRITE;
/*!40000 ALTER TABLE `cat_privilegios` DISABLE KEYS */;

INSERT INTO cat_privilegios (privilegio_id,privilegio_clave,privilegio,icono,url,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus,privilegio_padre_id) VALUES 
(1,'dg','Datos Generales','fa-plus',NULL,'2020-02-17 14:53:50.0','2020-02-17 15:35:13.0',NULL,NULL,1,NULL)
,(2,'cc','Carrera y campus','fa-university','admin/carrera/','2020-02-17 14:54:17.0','2020-02-17 15:27:09.0',NULL,NULL,1,1)
,(3,'pe','Plan de estudios','fa-sitemap','admin/plan-estudios/','2020-02-17 14:54:37.0','2020-02-17 15:27:09.0',NULL,NULL,1,1)
,(4,'sa','Asignaturas','fa-book','admin/asignatura/','2020-02-17 14:54:37.0','2020-02-17 15:27:09.0',NULL,NULL,1,1)
,(5,'ce','Control escolar','fa-plus',NULL,'2020-02-17 15:26:37.0','2020-02-17 15:35:45.0',NULL,NULL,1,NULL)
,(6,'c','Ciclos','fa-calendar','admin/ciclo/','2020-02-17 15:27:09.0','2020-02-17 15:28:43.0',NULL,NULL,1,5)
,(7,'g','Grupos','fa-users','admin/grupo/','2020-02-17 15:27:31.0','2020-02-17 15:28:43.0',NULL,NULL,1,5)
,(8,'al','Alumnos','fa-child','admin/alumno/','2020-02-17 15:32:50.0','2020-02-17 15:33:08.0',NULL,NULL,1,5)
,(9,'dc','Docentes','fa-pencil-square','admin/docente/','2020-02-17 15:32:50.0','2020-02-17 15:33:08.0',NULL,NULL,1,5)
,(10,'co','Contenidos','fa-plus',NULL,'2020-02-17 15:27:56.0','2020-02-17 15:28:54.0',NULL,NULL,1,NULL)
,(11,'caa','Carga de actividades','fa-pencil','admin/carga/','2020-02-17 15:29:25.0','2020-02-17 15:31:29.0',NULL,NULL,1,10)
,(12,'r','Rúbricas','fa-file-text','admin/rubricas/','2020-02-17 15:30:08.0','2020-02-17 15:31:24.0',NULL,NULL,1,10)
,(13,'r','Clases en línea','fa-exchange','admin/videoconferencia/','2020-02-17 15:30:08.0','2020-02-17 15:31:24.0',NULL,NULL,1,10)
,(14,'p','Plataforma','fa-plus',NULL,'2020-02-17 15:30:48.0','2020-02-17 15:31:06.0',NULL,NULL,1,NULL)
,(15,'u','Usuarios','fa-user','admin/usuario/','2020-02-17 15:31:06.0','2020-02-17 15:31:37.0',NULL,NULL,1,14)
,(16,'r','Rol','fa-id-card','admin/rol/','2020-02-17 15:31:49.0','2020-02-17 15:32:02.0',NULL,NULL,1,14)
,(17,'rr','Reportes','fa-cubes','admin/reportes/1','2020-02-17 15:32:17.0','2020-02-17 15:32:21.0',NULL,NULL,1,14)
,(18,'i','Seguimiento','fa-plus',NULL,'2020-02-17 15:32:33.0','2020-02-17 15:33:08.0',NULL,NULL,1,NULL)
,(19,'a','Aspirante','fa-street-view','admin/aspirante/','2020-02-17 15:32:50.0','2020-02-17 15:33:08.0',NULL,NULL,1,18)
,(20,'e','Encuestas','fa-question-circle-o','admin/encuesta/','2020-02-17 15:32:50.0','2020-02-17 15:33:08.0',NULL,NULL,1,18)
,(21,'e','Expedientes','fa-archive','admin/expediente/','2020-02-17 15:32:50.0','2020-02-17 15:33:08.0',NULL,NULL,1,18)
,(22,'av','Avisos','fa-bell','admin/avisos/','2020-02-17 15:32:50.0','2020-02-17 15:33:08.0',NULL,NULL,1,14)
,(23,'tk','Tickets','fa-ticket','admin/tickets/','2020-02-17 15:32:50.0','2020-02-17 15:33:08.0',NULL,NULL,1,14)
;
/*!40000 ALTER TABLE `cat_privilegios` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `cat_privilegios_docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_privilegios_docente` (
	i INT(11) NOT NULL AUTO_INCREMENT,
	label VARCHAR(50) NOT NULL,
	icon VARCHAR(50) DEFAULT NULL,
	type VARCHAR(20) NOT NULL,
	url VARCHAR(100) DEFAULT NULL,
	id VARCHAR(50) DEFAULT NULL,
	tooltip VARCHAR(100) DEFAULT NULL,
	function VARCHAR(50) DEFAULT NULL,
	class VARCHAR(50) NOT NULL,
	estatus INT(1) DEFAULT 1,
	PRIMARY KEY (i)
) ENGINE=InnoDB CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

 
INSERT INTO cat_privilegios_docente VALUES 
(1,'_cargarContenido','fa-book','button',NULL,NULL,NULL,'vistaContenido','btn-outline-primary',1),
(2,'_vistaEstudiante','fa-desktop','button',NULL,NULL,NULL,'vistaAlumno','btn-outline-primary',1),
(3,'_horario','fa-calendar','router','/docente/horario/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1),
(4,'_videoconferencias','fa-users','router','/docente/video-conferencia/',NULL,'Activa tu clase online aquí',NULL,'btn-outline-primary',1),
(5,'_avisos','fa-telegram','router','/docente/avisos/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1),
(6,'_objetivosPonderaciones','fa-pie-chart','router','/docente/objetivos-actividad/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1),
(7,'_calcularPromedio','fa-calculator','button',NULL,NULL,NULL,'calculoCalificacion','btn-outline-primary',1),
(8,'Reportes','fa-cubes','router','/docente/reportes/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1);

update cat_privilegios set privilegio_id = 0 where privilegio_clave='Na';


DROP TABLE IF EXISTS `cat_privilegios_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_privilegios_alumno` (
	id_privilegio INT(11) NOT NULL AUTO_INCREMENT,
	label VARCHAR(50) NOT NULL,
	text VARCHAR(50) DEFAULT NULL,
	color VARCHAR(20) NOT NULL,
	icon VARCHAR(50) DEFAULT NULL,
	size VARCHAR(80) DEFAULT NULL,
	url VARCHAR(100) DEFAULT NULL,
	type INT (1),
	estatus INT(1),
	PRIMARY KEY (id_privilegio)
) ENGINE=InnoDB CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


INSERT INTO cat_privilegios_alumno VALUES 
(1,'Materia','Ir a mis actividades','primary','fa-book','col-xl-3 col-lg-6','/learning/materia/',1,1),
(2,'Historial','Ver mis calificaciones','success','fa-list-alt','col-xl-3 col-lg-6','/learning/historial/',1,0),
(3,'Mi expediente','Revisar mi expediente','danger','fa-archive','col-xl-3 col-lg-6','/learning/expediente/',1,0),
(4,'Notificaciones y tickets',NULL,'bg-primary','fa-ticket','col-xl-2 col-lg-3','/learning/tickets/',2,1),
(5,'Avisos',NULL,'bg-primary','fa-bell','col-xl-2 col-lg-3','/learning/avisos/1',2,1),
(6,'Solicitud',NULL,'bg-primary','fa-file-text','col-xl-2 col-lg-3','/learning/solicitud/',2,0),
(7,'Biblioteca',NULL,'bg-primary','fa-university','col-xl-2 col-lg-3','/learning/biblioteca/',2,0),
(8,'Calendario',NULL,'bg-primary','fa-calendar','col-xl-2 col-lg-3','/learning/calendario/',2,0),
(9,'Servicios',NULL,'bg-success','fa-cubes','col-xl-2 col-lg-3','/learning/serviciosAcademicos/',2,0),
(10,'Normateca',NULL,'bg-success','fa-legal','col-xl-2 col-lg-3','',2,0),
(12,'Pagos',NULL,'bg-danger','fa-credit-card','col-xl-2 col-lg-3','/learning/pagos/',2,0),
(13,'Diploma',NULL,'bg-primary','fa-university','col-xl-2 col-lg-3','/learning/diploma/',2,0),
(14,'Mis avances',NULL,'bg-primary','fa-line-chart','col-xl-2 col-lg-3','/learning/avance/',2,0);
(15,'Grabaciones',NULL,'bg-primary','fa-video-camera','col-xl-2 col-lg-3','/learning/grabaciones/',2,0);
;

CREATE TABLE cat_privilegios_asesor (
	id_privilegio INT(11) NOT NULL AUTO_INCREMENT,
	label VARCHAR(50) NOT NULL,
	text VARCHAR(50) DEFAULT NULL,
	color VARCHAR(20) NOT NULL,
	icon VARCHAR(50) DEFAULT NULL,
	size VARCHAR(80) DEFAULT NULL,
	url VARCHAR(100) DEFAULT NULL,
	type INT (1),
	estatus INT(1),
	PRIMARY KEY (id_privilegio)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;


INSERT INTO cat_privilegios_asesor (`label`,`text`,`color`,`icon`,`size`,`url`,`type`,`estatus`) VALUES 
('Aspirantes','Mis aspirantes','primary','fa-user','col-xl-3 col-lg-6','/asesor/aspirante/',1,1),
('Alumnos','Mis aspirantes','primary','fa-user','col-xl-3 col-lg-6','/asesor/alumno/',1,1);

--
-- Table structure for table `cat_rol`
--

DROP TABLE IF EXISTS `cat_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_rol` (
  `rol_id` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(255) NOT NULL DEFAULT '0',
  `tiempo_sesion` INT(4) NOT NULL DEFAULT '0',
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
INSERT INTO `cat_rol` VALUES 
(0,'No Aplica',2,'2019-07-28 02:24:50','2019-07-28 02:24:54',NULL,NULL,0),
(1,'Admin',24,'2019-07-28 02:25:24','2019-07-28 02:25:24',NULL,NULL,1),
(2,'Alumno',24,'2019-07-28 02:25:24','2019-07-28 02:25:24',NULL,NULL,1),
(3,'Docente',24,'2019-07-28 02:25:42','2019-07-28 02:25:42',NULL,NULL,1),
(4,'Aspirante',24,'2019-07-28 02:25:42','2019-07-28 02:25:42',NULL,NULL,1),
(5,'Asesor',24,'2019-07-28 02:25:42','2019-07-28 02:25:42',NULL,NULL,1);
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
INSERT INTO `cat_sexo` VALUES (0,'NA','No Aplica','2019-07-28 01:51:23','2019-07-28 01:51:28',NULL,NULL,1),(1,'M','Masculino','2019-07-15 23:31:17','2019-07-15 

23:31:17',NULL,NULL,1),(2,'F','Femenino','2019-07-15 23:31:17','2019-07-15 23:31:17',NULL,NULL,1);
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
(5,'específica','2019-07-28 01:58:37','2019-07-28 01:58:55',NULL,NULL,1),
(6,'Tronco común','2019-07-28 01:58:37','2019-07-28 01:58:55',NULL,NULL,1);
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
INSERT INTO `cat_tipo_instituciones` VALUES (0,'NA','No Aplica','2019-07-28 01:14:32','2019-07-28 01:55:37',NULL,NULL,0),(1,'Educativa','EDU','2019-07-28 

01:16:35','2019-07-28 01:31:25',NULL,NULL,1),(2,'Especializada','ESP','2019-07-28 01:18:59','2019-07-28 01:31:25',NULL,NULL,1);
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
INSERT INTO `cat_tipo_plan_estudios` VALUES (0,'NA','No Aplica','2019-07-28 01:54:55','2019-07-28 01:55:10',NULL,NULL,0),(1,'M','Modular','2019-07-28 01:54:55','2019-

07-28 01:55:10',NULL,NULL,1),(2,'T','Tradicional','2019-07-28 01:54:55','2019-07-28 01:55:10',NULL,NULL,1);
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
INSERT INTO `inter_persona_usuario_rol` VALUES (1,1,1,'2019-07-28 02:46:37','2019-07-28 02:46:37',NULL,NULL,1),(2,2,1,'2019-07-28 02:46:37','2019-07-28 

02:46:37',NULL,NULL,1),(2,2,2,'2019-07-28 02:46:37','2019-07-28 02:46:37',NULL,NULL,1);
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
--

DROP TABLE IF EXISTS `inter_orden_asignatura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_orden_asignatura` (
  `orden_asignatura_id` int(11) NOT NULL AUTO_INCREMENT,
  `plan_orden_id` int(11) NOT NULL,
  `asignatura_id` int(11) NOT NULL,
  `asignatura_origen` int(1) default 1,
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
INSERT INTO inter_rol_privilegios (rol_id,privilegio_id,fecha_creacion,fecha_actualiza,estatus) VALUES 
(1,1,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,2,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,3,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,4,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,5,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,6,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,7,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,8,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,9,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,10,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,11,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,12,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,13,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,14,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,15,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,16,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,17,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,18,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,19,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,20,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,21,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,22,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
,(1,23,'2020-02-13 13:22:55.0','2020-02-13 13:22:55.0',1)
;
/*!40000 ALTER TABLE `inter_rol_privilegios` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `cat_privilegios_docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_privilegios_docente` (
	i INT(11) NOT NULL AUTO_INCREMENT,
	label VARCHAR(50) NOT NULL,
	icon VARCHAR(50) DEFAULT NULL,
	type VARCHAR(20) NOT NULL,
	url VARCHAR(100) DEFAULT NULL,
	id VARCHAR(50) DEFAULT NULL,
	tooltip VARCHAR(100) DEFAULT NULL,
	function VARCHAR(50) DEFAULT NULL,
	class VARCHAR(50) NOT NULL,
	estatus INT(1) DEFAULT 1,
	PRIMARY KEY (i)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

 
INSERT INTO cat_privilegios_docente VALUES 
(1,'_cargarContenido','fa-book','button',NULL,NULL,NULL,'vistaContenido','btn-outline-primary',1),
(2,'_vistaEstudiante','fa-desktop','button',NULL,NULL,NULL,'vistaAlumno','btn-outline-primary',1),
(3,'_horario','fa-calendar','router','/docente/horario/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1),
(4,'_videoconferencias','fa-users','router','/docente/video-conferencia/',NULL,'Activa tu clase online aquí',NULL,'btn-outline-primary',1),
(5,'_avisos','fa-telegram','router','/docente/avisos/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1),
(6,'_objetivosPonderaciones','fa-pie-chart','router','/docente/objetivos-actividad/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1),
(7,'Calcular promedio final','fa-calculator','button',NULL,NULL,NULL,'calculoCalificacion','btn-outline-primary',1),
(8,'Acta de calificaciones','fa-cubes','router','/docente/reportes/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1);


DROP TABLE IF EXISTS `cat_privilegios_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_privilegios_alumno` (
	id_privilegio INT(11) NOT NULL AUTO_INCREMENT,
	label VARCHAR(50) NOT NULL,
	text VARCHAR(50) DEFAULT NULL,
	color VARCHAR(20) NOT NULL,
	icon VARCHAR(50) DEFAULT NULL,
	size VARCHAR(80) DEFAULT NULL,
	url VARCHAR(100) DEFAULT NULL,
	type INT (1),
	estatus INT(1),
	PRIMARY KEY (id_privilegio)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


INSERT INTO cat_privilegios_alumno VALUES 
(1,'Materia','Ir a mis actividades','primary','fa-book','col-xl-3 col-lg-6','/learning/materia/',1,1),
(2,'Historial','Ver mis calificaciones','success','fa-list-alt','col-xl-3 col-lg-6','/learning/historial/',1,0),
(3,'Mi expediente','Revisar mi expediente','danger','fa-archive','col-xl-3 col-lg-6','/learning/expediente/',1,0),
(4,'Notificaciones y tickets',NULL,'bg-primary','fa-ticket','col-xl-2 col-lg-3','/learning/tickets/',2,1),
(5,'Avisos',NULL,'bg-primary','fa-bell','col-xl-2 col-lg-3','/learning/avisos/1',2,1),
(6,'Solicitud',NULL,'bg-primary','fa-file-text','col-xl-2 col-lg-3','/learning/solicitud/',2,0),
(7,'Biblioteca',NULL,'bg-primary','fa-university','col-xl-2 col-lg-3','/learning/biblioteca/',2,0),
(8,'Calendario',NULL,'bg-primary','fa-calendar','col-xl-2 col-lg-3','/learning/calendario/',2,0),
(9,'Servicios',NULL,'bg-success','fa-cubes','col-xl-2 col-lg-3','/learning/serviciosAcademicos/',2,0),
(10,'Normateca',NULL,'bg-success','fa-legal','col-xl-2 col-lg-3','',2,0),
(11,'Documentos',NULL,'bg-danger','fa-file','col-xl-2 col-lg-3','',2,0),
(12,'Pagos',NULL,'bg-danger','fa-credit-card','col-xl-2 col-lg-3','',2,0),
(13,'Diploma',NULL,'bg-primary','fa-university','col-xl-2 col-lg-3','/learning/diploma/',2,0);

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
  `curp` varchar(50) DEFAULT NULL,
  `rfc` varchar(50) DEFAULT NULL,
  `fecha_nacimiento` date  NULL,
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


DROP TABLE IF EXISTS `cat_accion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
create table `cat_accion` (
`accion_id` int(11) auto_increment not null,
`accion_clave` varchar(50) default null,
`accion` varchar(100) default null,
`fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
`fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
`estatus` int(1) default null,
primary key (`accion_id`)
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `cat_accion` WRITE;
INSERT INTO `cat_accion` (`accion_clave`,`accion`,`fecha_creacion`,`fecha_actualiza`,`estatus`) VALUES 
('cc','cambio de contraseña','2020-02-11 13:55:25.0','2020-02-11 13:55:42.0',1)
,('cip','cambio de imagen perfil','2020-02-11 13:56:04.0','2020-02-11 13:56:04.0',1)
,('atc','Acepto terminos y condiciones','2020-02-11 13:56:04.0','2020-02-11 13:56:04.0',1)
,('ba','Baja alumno','2020-02-11 13:56:04.0','2020-02-11 13:56:04.0',1)
;
UNLOCK TABLES;

DROP TABLE IF EXISTS `tr_bitacora_accion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_bitacora_accion` (
  `bitacora_accion_id` int(11) NOT NULL AUTO_INCREMENT,
  `accion_id` int(11) NOT NULL,
  `usuario_id` int(11) not null,
  `fecha_inicio` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_fin` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`bitacora_accion_id`),
  KEY `FK1_UsuarioBitacora` (`usuario_id`),
  KEY `FK2_BitacoraAccion` (`accion_id`), 
  CONSTRAINT `FK1_Bitacora_Usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`),
  CONSTRAINT `FK2_Bitacora_Accion` FOREIGN KEY (`accion_id`) REFERENCES `cat_accion` (`accion_id`)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `ventana` varchar(100) DEFAULT NULL,
  `ip` varchar(100) DEFAULT NULL,
  `dispositivo` varchar(255) DEFAULT NULL,
  `navegador` varchar(100) DEFAULT NULL,
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
  CONSTRAINT `FK1_instituciones_carrera` FOREIGN KEY (`institucion_id`) REFERENCES `cat_instituciones` (`institucion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_carrera`
--

LOCK TABLES `tr_carrera` WRITE;
/*!40000 ALTER TABLE `tr_carrera` DISABLE KEYS */;
INSERT INTO `tr_carrera` VALUES (0,0,0,'NA','No Aplica','','No Aplica','2019-07-28 01:43:50','2019-07-28 01:44:41',NULL,NULL,0);
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
  `minimo_materias_grado` int(2) DEFAULT null,
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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_plan_estudios`
--

LOCK TABLES `tr_plan_estudios` WRITE;
/*!40000 ALTER TABLE `tr_plan_estudios` DISABLE KEYS */;
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
  `conectado`  int(1) DEFAULT NULL,
  `estatus` int(1) DEFAULT 0,
  `url_perfil` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`usuario_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (0,'No Aplica','No Aplica','','2019-07-28 02:44:53','2019-07-28 02:44:58',NULL,NULL,NULL,0,0,NULL),
(1,'user','$2y$12$3z7LrhHLqYL/8RFCTRVZ8udqJJg7U5lD7OBS4aQC5hBA4vLblV4BW','ricardo.ruiz@estudy.com.mx','2019-07-28 02:45:23','2019-07-28 02:45:32',NULL,NULL,NULL,0,1,NULL),
(2,'user1','$2y$12$DFznkv.zpnf2YwioZJk/Xup3g8th.geXnuYW1kz3rgupxzlOfSTYS','emmanuel.zamora@estudy.com.mx','2019-07-28 02:45:23','2019-07-28 02:45:32',NULL,NULL,NULL,0,1,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `tr_token_pass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_token_pass` (
  `token_pass_id` int(11) NOT NULL AUTO_INCREMENT,
  `token` int(5) not NULL,
  `persona_id` int(11) not NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`token_pass_id`),
  key `FK1_persona_token` (`persona_id`), 
  constraint `FK1_persona_token` foreign key (`persona_id`) references `personas`(`persona_id`) 
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-07-28  3:16:31




