-- MySQL dump 10.17  Distrib 10.3.15-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: estudyce
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


DROP TABLE IF EXISTS `matricula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `matricula` (
  `id_institucion` int(1) DEFAULT NULL,
  `ultimo_consecutivo` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `cat_importancia_aviso`
--
DROP TABLE IF EXISTS `cat_importancia_aviso`;

create table `cat_importancia_aviso` (
`importancia_aviso_id` int(11) not null auto_increment,
`importancia` varchar(50),
`fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
`fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
`estatus` int(1) default null,
primary key (`importancia_aviso_id`)
);

insert into cat_importancia_aviso values (1, 'normal','2019-07-28 01:43:50','2019-07-28 01:43:50',1),
 (2, 'importante','2019-07-28 01:43:50','2019-07-28 01:43:50',1), 
 (3, 'urgente','2019-07-28 01:43:50','2019-07-28 01:43:50',0);
--
-- Table structure for table `cat_ciclo_estatus`
--

DROP TABLE IF EXISTS `cat_ciclo_estatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_ciclo_estatus` (
  `ciclo_estatus_id` int(11) NOT NULL AUTO_INCREMENT,
  `ciclo_estatus_desc` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`ciclo_estatus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Dumping data for table `cat_ciclo_estatus`
--

LOCK TABLES `cat_ciclo_estatus` WRITE;
/*!40000 ALTER TABLE `cat_ciclo_estatus` DISABLE KEYS */;
INSERT INTO `cat_ciclo_estatus` VALUES
 (1,'Abierto','2019-07-28 03:06:19','2019-07-28 03:06:25',NULL,NULL,1),
 (2,'Cerrado','2019-07-28 03:06:19','2019-07-28 03:06:25',NULL,NULL,1),
 (3,'En planeación','2019-07-28 03:06:19','2019-07-28 03:06:25',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_ciclo_estatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_ciclo`
--

DROP TABLE IF EXISTS `cat_ciclo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_ciclo` (
  `ciclo_id` int(11) NOT NULL AUTO_INCREMENT,
  `ciclo_desc` varchar(255) DEFAULT NULL,
  `ciclo_estatus_id` int(11) NOT NULL,
  `fecha_inicio` date DEFAULT NULL,
  `fecha_fin` date DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`ciclo_id`),
  KEY `FK1_CicloEstatus` (`ciclo_estatus_id`),
  CONSTRAINT `FK1_CicloEstatus` FOREIGN KEY (`ciclo_estatus_id`) REFERENCES `cat_ciclo_estatus` (`ciclo_estatus_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_ciclo`
--

LOCK TABLES `cat_ciclo` WRITE;
/*!40000 ALTER TABLE `cat_ciclo` DISABLE KEYS */;
/*!40000 ALTER TABLE `cat_ciclo` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `cat_estatus_historial`
--

DROP TABLE IF EXISTS `cat_estatus_historial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_estatus_historial` (
  `estatus_historial_id` int(11) NOT NULL AUTO_INCREMENT,
  `estatus_historial_clave` varchar(50) NOT NULL DEFAULT '0',
  `estatus_historial_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estatus_historial_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `cat_estatus_historial` WRITE;
/*!40000 ALTER TABLE `cat_estatus_historial` DISABLE KEYS */;
INSERT INTO cat_estatus_historial (estatus_historial_clave,estatus_historial_descripcion,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('ord','Ordinario','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1)
,('re','Recursamiento','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1)
,('ex','Extraordianrio','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,1)
,('esp','Especial','2019-07-28 03:08:13.0','2019-07-28 03:09:48.0',NULL,NULL,0);
/*!40000 ALTER TABLE `cat_estatus_historial` ENABLE KEYS */;
UNLOCK TABLES;




DROP TABLE IF EXISTS `cat_documento_docente`;

CREATE TABLE `cat_documento_docente` (
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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

INSERT INTO cat_documento_docente (nombre_documento,documento_desc,obligatorio,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('Acta de nacimiento','an',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:06.0',NULL,NULL,1)
,('Antecedente académico','aa',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1)
,('CURP','c',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1)
,('Carta compromiso','cc',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1)
,('INE','ine',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1)
,('Carta de exposición de motivos','cem',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1)
,('Curriculum Vitae','cv',0,'2020-01-10 13:11:46.0','2020-03-12 12:28:07.0',NULL,NULL,1);


DROP TABLE IF EXISTS `cat_estado_documento_docente`;

CREATE TABLE `cat_estado_documento_docente` (
  `estado_documento_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_documento` varchar(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estado_documento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


INSERT INTO cat_estado_documento_docente (nombre_documento,fecha_creacion,fecha_actualiza,estatus) VALUES 
('Documento por enviar ','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1)
,('En proceso de validación','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1)
,('Verificado y validado','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1)
,('Exhibe carta compromiso','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1)
,('Otro','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1)
,('Corrección','2020-03-12 12:29:15.0','2020-03-12 12:29:27.0',1);

--
-- Dumping data for table `cat_estatus_historial`
--

LOCK TABLES `cat_estatus_historial` WRITE;
/*!40000 ALTER TABLE `cat_estatus_historial` DISABLE KEYS */;
INSERT INTO cat_estatus_historial (estatus_historial_clave,estatus_historial_descripcion,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('a','ordinaria','2020-03-03 12:06:09.0','2020-03-03 12:06:09.0',NULL,NULL,1)
,('r','recursamiento','2020-03-03 12:06:09.0','2020-03-03 12:06:09.0',NULL,NULL,1)
,('ex','Extraordinario','2020-03-03 12:06:09.0','2020-03-03 12:06:09.0',NULL,NULL,1)
,('na','No aplica ','2020-03-03 12:06:09.0','2020-03-03 12:06:09.0',NULL,NULL,NULL)
;

update cat_estatus_historial set estatus_historial_id = 0 where estatus_historial_clave = 'na';
/*!40000 ALTER TABLE `cat_estatus_historial` ENABLE KEYS */;
UNLOCK TABLES;




DROP TABLE IF EXISTS `cat_situacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion` (
  `situacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cat_situacion_alumno`
--


DROP TABLE IF EXISTS `cat_situacion_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_alumno` (
  `situacion_alumno_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_alumno_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_alumno_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_alumno_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_situacion_alumno`
--

LOCK TABLES `cat_situacion_alumno` WRITE;
/*!40000 ALTER TABLE `cat_situacion_alumno` DISABLE KEYS */;
INSERT INTO `cat_situacion_alumno` VALUES 
(0,'na','No Aplica','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,0),
(1,'a','Activo','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(2,'b','Baja temporal','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(3,'bt','Baja Definitiva','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(4,'e','Egresado','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(5,'bl','Bloqueado','2019-07-28 03:08:13.0','2020-05-06 01:31:46.0',NULL,NULL,1);
;
/*!40000 ALTER TABLE `cat_situacion_alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_situacion_docente`
--


DROP TABLE IF EXISTS `cat_situacion_docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_docente` (
  `situacion_docente_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_docente_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_docente_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_docente_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_situacion_docente`
--

LOCK TABLES `cat_situacion_docente` WRITE;
/*!40000 ALTER TABLE `cat_situacion_docente` DISABLE KEYS */;
INSERT INTO `cat_situacion_docente` VALUES 
(0,'na','No Aplica','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,0),
(1,'a','Activo','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1),
(2,'b','Baja','2019-07-28 03:08:13','2019-07-28 03:09:48',NULL,NULL,1)
;
/*!40000 ALTER TABLE `cat_situacion_docente` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_situacion_administrador`
--

LOCK TABLES `cat_situacion_administrador` WRITE;
/*!40000 ALTER TABLE `cat_situacion_administrador` DISABLE KEYS */;
INSERT INTO cat_situacion_administrador (situacion_adminitrador_clave,situacion_administrador_descripcion,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('a','Activo','2020-05-11 17:14:17.000','2020-05-11 17:14:25.000',NULL,NULL,1)
,('b','Baja Temporal','2020-05-11 17:14:17.000','2020-05-11 17:18:15.000',NULL,NULL,1)
;
/*!40000 ALTER TABLE `cat_situacion_administrador` ENABLE KEYS */;
UNLOCK TABLES;





DROP TABLE IF EXISTS `cat_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_area` (
  `area_id` int(11) NOT NULL AUTO_INCREMENT,
  `area_desc` varchar(50) DEFAULT NULL,
  `area_nombre` varchar(50) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`area_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Dumping data for table `cat_situacion_administrador`
--

LOCK TABLES `cat_area` WRITE;
/*!40000 ALTER TABLE `cat_area` DISABLE KEYS */;
INSERT INTO cat_area (area_desc,area_nombre,fecha_creacion,fecha_actualiza,estatus) VALUES 
('gn','general','2020-07-09 19:26:43.000','2020-07-09 19:26:57.000',1)
,('cn','contabilidad','2020-07-09 19:26:43.000','2020-07-09 19:26:57.000',1)
,('pd','pedagogia','2020-07-09 19:26:44.000','2020-07-09 19:26:58.000',1)
,('ss','sistemas','2020-07-09 19:26:44.000','2020-07-09 19:26:58.000',1)
;
/*!40000 ALTER TABLE `cat_area` ENABLE KEYS */;
UNLOCK TABLES;




--
-- Table structure for table `inter_alumno_expediente`
--

DROP TABLE IF EXISTS `inter_alumno_expediente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_alumno_expediente` (
  `expediente_id` int(11) NOT NULL AUTO_INCREMENT,
  `alumno_id` int(11) NOT NULL,
  `expediente` varchar(255) DEFAULT NULL,
  `ruta` text NOT NULL,
  `comentario` text NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`expediente_id`,`alumno_id`),
  KEY `FK1_AlumnoExpediente` (`alumno_id`),
  CONSTRAINT `FK1_AlumnoExpediente` FOREIGN KEY (`alumno_id`) REFERENCES `tr_alumno` (`alumno_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_alumno_expediente`
--

LOCK TABLES `inter_alumno_expediente` WRITE;
/*!40000 ALTER TABLE `inter_alumno_expediente` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_alumno_expediente` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `inter_asignatura_grupo`
--


DROP TABLE IF EXISTS `inter_asignatura_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_asignatura_grupo` (
  `asignatura_grupo_id` int(11) NOT NULL AUTO_INCREMENT,
  `orden_asignatura_id` int(11) NOT NULL COMMENT 'la asignatura con el orden asignado',
  `grupo_id` int(11) NOT NULL,
  `situacion_asignatura_grupo_id` int(11)  DEFAULT 1,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL,
  `usuario_crea` varchar(50) default null,
  `usuario_actualiza` varchar(50) default null,  
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`asignatura_grupo_id`),
  KEY `FK1_IAG_orden_asignatura` (`orden_asignatura_id`),
  KEY `FK3_IAIG_Grupo` (`grupo_id`),
  KEY `FK4_SAG_Grupo` (`grupo_id`),
  CONSTRAINT `FK1_IAG_orden_asignatura` FOREIGN KEY (`orden_asignatura_id`) REFERENCES `estudydg`.`inter_orden_asignatura` (`orden_asignatura_id`),
  CONSTRAINT `FK2_IAG_Grupo` FOREIGN KEY (`grupo_id`) REFERENCES `tr_grupo` (`grupo_id`),
  constraint FK3_situacion_asignatura_grupo foreign key(situacion_asignatura_grupo_id) references cat_situacion_asignatura_grupo(situacion_asignatura_grupo_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



DROP TABLE IF EXISTS `inter_privilegio_area`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_privilegio_area` (
  `privilegio_area_id` int(11) NOT null auto_increment,
  `privilegio_id` int(11) NOT NULL,
  `area_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`privilegio_area_id`),
  KEY `FK1_IPA_Privilegio` (`privilegio_id`),
  KEY `FK2_IPA_Area` (`area_id`),
  CONSTRAINT `FK1_IPA_privilegio` FOREIGN KEY (`privilegio_id`) REFERENCES `estudydg`.`cat_privilegios` (`privilegio_id`),
  CONSTRAINT `FK2_IPA_area` FOREIGN KEY (`area_id`) REFERENCES `cat_area` (`area_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_privilegio_area`
--

LOCK TABLES `inter_privilegio_area` WRITE;
/*!40000 ALTER TABLE `inter_privilegio_area` DISABLE KEYS */;
INSERT INTO inter_privilegio_area (privilegio_id,area_id,fecha_creacion,fecha_actualiza,estatus) VALUES 
(1,1,'2020-06-22 15:30:05.000','2020-06-22 15:38:28.000',1)
,(2,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(3,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(4,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(5,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(6,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(7,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(8,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(9,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(10,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(11,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(12,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(13,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(14,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(15,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(16,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(17,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(18,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(19,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:49.000',1)
,(20,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:50.000',1)
,(21,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:50.000',1)
,(22,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:50.000',1)
,(23,1,'2020-06-22 15:30:06.000','2020-06-22 15:44:50.000',1);
/*!40000 ALTER TABLE `inter_privilegio_area` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `tr_avisos_grupo`
--
DROP TABLE IF EXISTS `tr_avisos_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;

create table `tr_avisos_grupo`(
`avisos_grupo_id` int(11) NOT NULL AUTO_INCREMENT,
`importancia_aviso_id` int(11) not null,
`titulo` varchar(255) NOT NULL DEFAULT 'NA',
`mensaje` text DEFAULT NULL,
`adjunto` varchar(255) DEFAULT NULL,
`docente_id` int(11) NOT NULL default '0',
`asignatura_grupo_id` int(11) NOT NULL default 0,
`fecha_inicio` datetime DEFAULT NULL,
`fecha_fin` datetime DEFAULT NULL,
`fecha_crea` datetime NOT NULL DEFAULT current_timestamp(),
`fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
`usuario_crea` varchar(200) DEFAULT NULL,
`usuario_actualiza` varchar(200) DEFAULT NULL,
`estatus` int(1) DEFAULT null,
PRIMARY KEY (`avisos_grupo_id`),
KEY `FK1_avisos_docente` (`docente_id`),
KEY `FK2_avisos_grupo_asignatura` (`asignatura_grupo_id`),
key `FK3_importancia_aviso`(`importancia_aviso_id`),
CONSTRAINT `FK1_avisos_docente` FOREIGN KEY (`docente_id`) REFERENCES `tr_docente` (`docente_id`),
CONSTRAINT `FK2_avisos_grupo_asignatura` FOREIGN KEY (`asignatura_grupo_id`) REFERENCES `inter_asignatura_grupo` (`asignatura_grupo_id`),
constraint `FK3_importancia_aviso` foreign key (`importancia_aviso_id`) references `cat_importancia_aviso`(`importancia_aviso_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inter_asignatura_grupo_alumno`
--

DROP TABLE IF EXISTS `inter_alumno_asignatura_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_alumno_asignatura_grupo` (
  `alumno_id` int(11) NOT NULL COMMENT 'el alumno agregado al grupo ',
  `asignatura_grupo_id` int(11) NOT NULL COMMENT 'el grupo y la asignatura ligadas',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`asignatura_grupo_id`,`alumno_id`),
  KEY `FK1_IAGA_asignatura_grupo` (`asignatura_grupo_id`),
  KEY `FK2_IAGA_alumno` (`alumno_id`),
  CONSTRAINT `FK1_IAGA_asignatura_grupo` FOREIGN KEY (`asignatura_grupo_id`) REFERENCES `inter_asignatura_grupo` (`asignatura_grupo_id`),
  CONSTRAINT `FK2_IAGA_alumno` FOREIGN KEY (`alumno_id`) REFERENCES `tr_alumno` (`alumno_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `inter_alumno_grupo`
--

DROP TABLE IF EXISTS `inter_alumno_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_alumno_grupo` (
  `alumno_id` int(11) NOT NULL,
  `grupo_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`alumno_id`,`grupo_id`),
  KEY `FK1_IALG_Alumno` (`alumno_id`),
  KEY `FK2_IALG_Grupo` (`grupo_id`),
  CONSTRAINT `FK1_IALG_Alumno` FOREIGN KEY (`alumno_id`) REFERENCES `tr_alumno` (`alumno_id`),
  CONSTRAINT `FK2_IALG_Grupo` FOREIGN KEY (`grupo_id`) REFERENCES 	`tr_grupo` (`grupo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_alumno_grupo`
--

LOCK TABLES `inter_alumno_grupo` WRITE;
/*!40000 ALTER TABLE `inter_alumno_grupo` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_alumno_grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_docente_asignatura_grupo`
--

DROP TABLE IF EXISTS `inter_docente_asignatura_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_docente_asignatura_grupo` (
  `docente_id` int(11) NOT NULL,
  `asignatura_grupo_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`docente_id`,`asignatura_grupo_id`),
  KEY `FK1_IAIG_Docente` (`docente_id`),
  KEY `FK2_IAIG_Grupo` (`asignatura_grupo_id`),
  CONSTRAINT `FK1_IAIG_Docente` FOREIGN KEY (`docente_id`) REFERENCES `tr_docente` (`docente_id`),
  CONSTRAINT `FK2_IAIG_Grupo` FOREIGN KEY (`asignatura_grupo_id`) REFERENCES 	`inter_asignatura_grupo` (`asignatura_grupo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;




--
-- Dumping data for table `inter_docente_asignatura_grupo`
--

LOCK TABLES `inter_docente_asignatura_grupo` WRITE;
/*!40000 ALTER TABLE `inter_docente_asignatura_grupo` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_docente_asignatura_grupo` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `inter_alumno_plan`
--

DROP TABLE IF EXISTS `inter_alumno_plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_alumno_plan` (
  `alumno_id` int(11) NOT NULL,
  `plan_orden_id` int(11) NOT NULL,
  `generacion` varchar(100) DEFAULT NULL,
  `campus_id` int(11) DEFAULT NULL,
  `asignado_grupo` int(1) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`alumno_id`,`plan_orden_id`),
  key `FK3_APO`(campus_id),
  CONSTRAINT `FK1_APO` FOREIGN KEY (`alumno_id`) REFERENCES `tr_alumno` (`alumno_id`),
  CONSTRAINT `FK2_APO` FOREIGN KEY (`plan_orden_id`) REFERENCES `estudydg`.`inter_plan_orden` (`plan_orden_id`),
  CONSTRAINT `FK3_APO` FOREIGN KEY (`campus_id`) REFERENCES `estudydg`.`cat_campus` (`campus_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `tr_alumno`
--

DROP TABLE IF EXISTS `tr_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_alumno` (
  `alumno_id` int(11) NOT NULL,
  `situacion_alumno_id` int(11) NOT NULL,
  `clave_alumno` varchar(255) DEFAULT NULL,
  `cedula_profesional` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`alumno_id`),
  KEY `FK2_Persona_Alumno` (`situacion_alumno_id`),
  CONSTRAINT `FK1_Persona_Alumno` FOREIGN KEY (`alumno_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK2_Persona_Alumno` FOREIGN KEY (`situacion_alumno_id`) REFERENCES `cat_situacion_alumno` (`situacion_alumno_id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_alumno`
--

LOCK TABLES `tr_alumno` WRITE;
/*!40000 ALTER TABLE `tr_alumno` DISABLE KEYS */;
INSERT INTO `tr_alumno` VALUES 
(0,0,'0',90801540,null,null,'2019-07-16 00:42:43','2019-07-28 03:27:49',NULL,null,1),
(1,1,'408098597',90801540,null,null,'2019-07-16 00:42:43','2019-07-28 03:27:49',NULL,null,1),
(2,1,'408098598',90801541,null,null,'2019-07-16 00:42:43','2019-07-28 03:27:49',NULL,NULL,1);
/*!40000 ALTER TABLE `tr_alumno` ENABLE KEYS */;
UNLOCK TABLES;

DROP TABLE IF EXISTS `tr_docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_docente` (
  `docente_id` int(11) NOT NULL,
  `situacion_docente_id` int(11) NOT NULL,
  `clave_profesor` varchar(255) DEFAULT NULL,
  `cedula_profesional` int(11) DEFAULT NULL,
  `activa_chat` int(1) DEFAULT NULL,
  `edicion_contenido` int(1) DEFAULT 1 NULL COMMENT '0: ninguno, 1: para grupo 2: para todos',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`docente_id`),
  CONSTRAINT `FK1_Persona_Docente` FOREIGN KEY (`docente_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK2_Persona_Docente` FOREIGN KEY (`situacion_docente_id`) REFERENCES `cat_situacion_docente` (`situacion_docente_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_docente`
--

LOCK TABLES `tr_docente` WRITE;
/*!40000 ALTER TABLE `tr_docente` DISABLE KEYS */;
INSERT INTO `tr_docente` VALUES (1,1,'150115',43203234,0,1,'2019-07-16 00:42:43','2019-07-28 03:27:49',NULL,NULL,1);
/*!40000 ALTER TABLE `tr_docente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_docente`
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
INSERT INTO `tr_administrador` VALUES (1,1,'Admin1',1,1,1,'2019-07-16 00:42:43','2019-07-28 03:27:49',NULL,NULL,1);
/*!40000 ALTER TABLE `tr_administrador` ENABLE KEYS */;
UNLOCK TABLES;


DROP TABLE IF EXISTS `tr_historial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_historial` (
  `historial_id` int(11) NOT NULL AUTO_INCREMENT,
  `orden_asignatura_id` int(11) NOT NULL,
  `ciclo_id` int(11) NOT NULL,
  `alumno_id` int(11) NOT NULL,
  `estatus_historial_id` int(11) NOT NULL,
  `calificacion` decimal(4,2) DEFAULT NULL,
  `materia_id` int(11) NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`historial_id`),
  CONSTRAINT `FK1_Historial_Alumno` FOREIGN KEY (`alumno_id`) REFERENCES `tr_alumno` (`alumno_id`),
  CONSTRAINT `FK2_Historial_Grupo` FOREIGN KEY (`ciclo_id`) REFERENCES `cat_ciclo` (`ciclo_id`),
  CONSTRAINT `FK3_Historial_Orden_Asignatura` FOREIGN KEY (`orden_asignatura_id`) REFERENCES `estudydg`.`inter_orden_asignatura` (`orden_asignatura_id`),
  CONSTRAINT `FK4_Historial_Estatus` FOREIGN KEY (`estatus_historial_id`) REFERENCES `cat_estatus_historial` (`estatus_historial_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

DROP TABLE IF EXISTS `inter_expediente_docente`;

CREATE TABLE `inter_expediente_docente` (
  `expediente_id` int(11) NOT NULL AUTO_INCREMENT,
  `expediente_desc` varchar(100) DEFAULT NULL,
  `docente_id` int(11) NOT NULL,
  `documento_id` int(11) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `estado_documento_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`expediente_id`),
  KEY `FK1_IE_docente` (`docente_id`),
  KEY `FK2_IE_documento` (`documento_id`),
  KEY `FK3_IE_estado_documento` (`estado_documento_id`),
  CONSTRAINT `FK1_IE_docente` FOREIGN KEY (`docente_id`) REFERENCES `tr_docente` (`docente_id`),
  CONSTRAINT `FK2_IE_documento` FOREIGN KEY (`documento_id`) REFERENCES `cat_documento_docente` (`documento_id`),
  CONSTRAINT `FK3_IE_estado_documento` FOREIGN KEY (`estado_documento_id`) REFERENCES `cat_estado_documento_docente` (`estado_documento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


--
-- Table structure for table `tr_perfil_alumno`
--

DROP TABLE IF EXISTS `tr_perfil_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_perfil_alumno` (
  `perfil_alumno_id` int(11) NOT NULL,
  `alumno_id` int(11) NOT NULL,
  `porcentaje_perfil_num` int(5) DEFAULT NULL,
  `porcentaje_perfil_letra` char(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`perfil_alumno_id`,`alumno_id`),
  KEY `FK1_PerfilAlumno` (`alumno_id`),
  CONSTRAINT `FK1_PerfilAlumno` FOREIGN KEY (`alumno_id`) REFERENCES `tr_alumno` (`alumno_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_perfil_alumno`
--

LOCK TABLES `tr_perfil_alumno` WRITE;
/*!40000 ALTER TABLE `tr_perfil_alumno` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_perfil_alumno` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;




DROP TABLE IF EXISTS `cat_situacion_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_grupo` (
  `situacion_grupo_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_grupo_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_grupo_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_grupo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


LOCK TABLES `cat_situacion_grupo` WRITE;
/*!40000 ALTER TABLE `cat_situacion_grupo` DISABLE KEYS */;
INSERT INTO cat_situacion_grupo (situacion_grupo_clave,situacion_grupo_descripcion,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('a','Abierto','2020-05-26 23:10:26.0','2020-05-26 23:10:26.0',NULL,NULL,1)
,('rp','Revisión Parcial','2020-05-26 23:10:26.0','2020-05-28 02:19:57.0',NULL,NULL,1)
,('rt','Revisión Total','2020-05-26 23:10:26.0','2020-05-28 02:19:57.0',NULL,NULL,1)
,('crr','Cerrado','2020-05-26 23:10:26.0','2020-05-26 23:10:26.0',NULL,NULL,1)
,('trans','Cerrado y transferido','2020-05-26 23:10:26.0','2020-08-09 16:32:27.0',NULL,NULL,1);	
/*!40000 ALTER TABLE `cat_situacion_grupo` ENABLE KEYS */;
UNLOCK TABLES;


drop table if exists `cat_situacion_asignatura_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_situacion_asignatura_grupo` (
  `situacion_asignatura_grupo_id` int(11) NOT NULL AUTO_INCREMENT,
  `situacion_asignatura_grupo_clave` varchar(50) NOT NULL DEFAULT '0',
  `situacion_asignatura_grupo_descripcion` varchar(255) NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`situacion_asignatura_grupo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


LOCK TABLES `cat_situacion_asignatura_grupo` WRITE;
/*!40000 ALTER TABLE `cat_situacion_asignatura_grupo` DISABLE KEYS */;
INSERT INTO cat_situacion_asignatura_grupo (situacion_asignatura_grupo_clave,situacion_asignatura_grupo_descripcion,fecha_creacion,fecha_actualiza,usuario_crea,usuario_actualiza,estatus) VALUES 
('a','Abierto','2020-05-26 23:10:26.0','2020-05-26 23:10:26.0',NULL,NULL,1)
,('rp','Revisión Parcial','2020-05-26 23:10:26.0','2020-05-28 02:19:57.0',NULL,NULL,1)
,('rt','Revisión Total','2020-05-26 23:10:26.0','2020-05-28 02:19:57.0',NULL,NULL,1)
,('crr','Cerrado','2020-05-26 23:10:26.0','2020-05-26 23:10:26.0',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_situacion_asignatura_grupo` ENABLE KEYS */;
UNLOCK TABLES;




DROP TABLE IF EXISTS `tr_grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_grupo` (
  `grupo_id` int(11) NOT NULL AUTO_INCREMENT,
  `ciclo_id` int(11) NOT NULL,
  `grupo` varchar(70) DEFAULT NULL,
  `nombre_grupo` varchar(30) DEFAULT NULL,
  `descripcion` varchar(120) DEFAULT NULL,
  `cupo` int(11) DEFAULT NULL,
  `plan_orden_id` int(11) DEFAULT NULL,
  `campus_id` int(11) DEFAULT NULL,
  `situacion_grupo_id` int(11) not NULL DEFAULT 1,
  `grupo_origen_id` int(11) NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`grupo_id`),
  KEY `FK1_grupo` (`ciclo_id`),
  KEY `FK2_plan_orden` (`plan_orden_id`),
  KEY `FK3_situacion_grupo` (`situacion_grupo_id`),
  KEY `FK4_campus_grupo` (`campus_id`),
  CONSTRAINT `FK1_grupo` FOREIGN KEY (`ciclo_id`) REFERENCES `cat_ciclo` (`ciclo_id`),
  CONSTRAINT `FK2_plan_orden_id` FOREIGN KEY (`plan_orden_id`) REFERENCES `estudydg`.`inter_plan_orden` (`plan_orden_id`),
  CONSTRAINT `FK3_situacion_grupo` foreign key(situacion_grupo_id) references cat_situacion_grupo(situacion_grupo_id),
  CONSTRAINT `FK4_campus_grupo` foreign key(campus_id) references `estudydg`.`cat_campus` (campus_id)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_grupo`
--

LOCK TABLES `tr_grupo` WRITE;
/*!40000 ALTER TABLE `tr_grupo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_grupo` ENABLE KEYS */;
UNLOCK TABLES;



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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



LOCK TABLES `cat_estatus_ticket` WRITE;
/*!40000 ALTER TABLE `cat_estatus_ticket` DISABLE KEYS */;
INSERT INTO `cat_estatus_ticket` VALUES 
(1,'ab','abierto','2020-05-17 16:51:17.0','2020-05-17 16:51:17.0',1)
,(2,'pr','Pendiente de responder','2020-05-17 16:51:17.0','2020-05-27 20:51:20.0',1)
,(3,'rp','Respondido','2020-05-17 16:51:17.0','2020-05-27 20:52:21.0',1)
,(4,'crr','Cerrado','2020-05-17 16:51:17.0','2020-05-27 20:52:21.0',1)
,(5,'n','Notificación','2020-05-17 16:51:17.0','2020-05-27 20:52:21.0',1);
/*!40000 ALTER TABLE `cat_estatus_ticket` ENABLE KEYS */;
UNLOCK TABLE;




DROP TABLE IF EXISTS `cat_tipo_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_ticket` (
  `tipo_ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave_tipo_ticket` varchar(255) DEFAULT NULL,
  `tipo_ticket` varchar(255) DEFAULT NULL,
  `rol_id` int(11) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_ticket_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


LOCK TABLES `cat_tipo_ticket` WRITE;
/*!40000 ALTER TABLE `cat_tipo_ticket` DISABLE KEYS */;
INSERT INTO cat_tipo_ticket (clave_tipo_ticket,tipo_ticket,fecha_creacion,fecha_actualiza,rol_id,estatus) VALUES 
('g','general','2020-05-17 17:13:13.000','2020-05-17 18:31:53.000',1,0)
,('pp','Pendiente de pago','2020-05-17 17:13:13.000','2020-05-17 18:32:03.000',1,1)
,('ei','Expediente incompleto','2020-05-17 17:13:13.000','2020-05-17 18:32:00.000',1,1)
,('bt','Cambio de situación en la plataforma','2020-05-17 17:13:13.000','2020-05-17 18:32:00.000',0,1)
,('bd','Baja definitiva','2020-05-17 17:13:13.000','2020-05-17 18:32:00.000',0,1)
,('pt','Problema en la plataforma','2020-05-17 17:13:13.000','2020-05-17 18:32:00.000',2,1)
,('bl','Bloqueo de la plataforma','2020-05-17 17:13:13.0','2020-07-08 23:13:43.0',0,1);
;
/*!40000 ALTER TABLE `cat_tipo_ticket` ENABLE KEYS */;
UNLOCK TABLE;



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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



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
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

  drop table if exists tr_avisos;
  CREATE TABLE `tr_avisos` (
    `aviso_id` int(11) NOT NULL AUTO_INCREMENT,
    `importancia_aviso_id` int(11) NOT NULL,
    `titulo` varchar(255) NOT NULL DEFAULT 'NA',
    `mensaje` text DEFAULT NULL,
    `adjunto` varchar(255) DEFAULT NULL,
    `administrador_id` int(11) NOT NULL DEFAULT 0,
    `fecha_inicio` datetime DEFAULT NULL,
    `fecha_fin` datetime DEFAULT NULL,
    `fecha_crea` datetime NOT NULL DEFAULT current_timestamp(),
    `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `usuario_crea` varchar(200) DEFAULT NULL,
    `usuario_actualiza` varchar(200) DEFAULT NULL,
    `estatus` int(1) DEFAULT NULL,
    PRIMARY KEY (`aviso_id`),
    KEY `FK1_aviso_administardor` (`administrador_id`),
    KEY `FK2_aviso_importancia` (`importancia_aviso_id`),
    CONSTRAINT `FK1_aviso_administrador` FOREIGN KEY (`administrador_id`) REFERENCES `tr_administrador` (`administrador_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


  drop table if exists `tr_switch_aviso`;
  CREATE TABLE `tr_switch_aviso` (
    `switch_aviso_id` int(11) NOT NULL AUTO_INCREMENT,
    `aviso_id` int(11) NOT NULL,
    `rol_id` int(11) DEFAULT NULL,
    `grupo_id` int(11) DEFAULT NULL,
    `orden_asignatura_id` int(11) DEFAULT NULL,
    `asignatura_grupo_id` int(11) DEFAULT NULL,
    `plan_orden_id` int(11) DEFAULT NULL,
    `carrera_id` int(11) DEFAULT NULL,
    `plan_estudios_id` int(11) DEFAULT NULL,
    `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
    `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `estatus` int(1) DEFAULT NULL,
    PRIMARY KEY (`switch_aviso_id`),
    KEY `FK1_switch_aviso` (`aviso_id`),
    CONSTRAINT `FK1_switch_aviso` FOREIGN KEY (`aviso_id`) REFERENCES `tr_avisos` (`aviso_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


  drop table if exists `inter_aviso_persona`;
  CREATE TABLE `inter_aviso_persona` (
    `aviso_persona_id` int(11) NOT NULL AUTO_INCREMENT,
    `aviso_id` int(11) NOT NULL,
    `persona_id` int(11) NOT NULL,
    `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
    `estatus` int(1) DEFAULT NULL,
    PRIMARY KEY (`aviso_persona_id`),
    KEY `FK1_IAP_persona` (`persona_id`),
    KEY `FK2_IAP_aviso` (`aviso_id`),
    CONSTRAINT `FK1_IAP_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
    CONSTRAINT `FK2_IAP_aviso` FOREIGN KEY (`aviso_id`) REFERENCES `tr_avisos` (`aviso_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;



  drop table if exists `inter_aviso_grupo_persona`;
  CREATE TABLE `inter_aviso_grupo_persona` (
    `aviso_grupo_persona_id` int(11) NOT NULL AUTO_INCREMENT,
    `avisos_grupo_id` int(11) NOT NULL,
    `persona_id` int(11) NOT NULL,
    `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
    `estatus` int(1) DEFAULT NULL,
    PRIMARY KEY (`aviso_grupo_persona_id`),
    KEY `FK1_IAPG_persona` (`persona_id`),
    KEY `FK2_IAPG_aviso` (`avisos_grupo_id`),
    CONSTRAINT `FK1_IAPG_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
    CONSTRAINT `FK2_IAPG_aviso` FOREIGN KEY (`avisos_grupo_id`) REFERENCES `tr_avisos_grupo` (`avisos_grupo_id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


  
DROP TABLE IF EXISTS `inter_campus_docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_campus_docente` (
  `campus_id` int(11) NOT NULL,
  `docente_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`campus_id`,`docente_id`),
  KEY `FK1_inter_campus` (`campus_id`),
  KEY `FK3_inter_docente` (`docente_id`),
  CONSTRAINT `FK1_inter_campus` FOREIGN KEY (`campus_id`) REFERENCES `estudydg`.`cat_campus` (`campus_id`),
  CONSTRAINT `FK3_inter_docente` FOREIGN KEY (`docente_id`) REFERENCES `tr_docente` (`docente_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;






DROP TABLE IF EXISTS `tr_clase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_clase` (
  `clase_id` int(11) NOT NULL AUTO_INCREMENT,
  `asignatura_grupo_id` int(11) NOT NULL,
  `nombre_clase` varchar(100) DEFAULT NULL,
  `desc_clase` varchar(255) DEFAULT NULL,
  `fecha_clase` datetime NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`clase_id`),
  KEY `FK2_TC_asignatura_grupo` (`asignatura_grupo_id`),
  CONSTRAINT `FK2_TC_asignatura_grupo` FOREIGN KEY (`asignatura_grupo_id`) REFERENCES `inter_asignatura_grupo` (`asignatura_grupo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `tr_inasistencia_clase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_inasistencia_clase` (
  `inasistencia_clase_id` int(11) NOT NULL AUTO_INCREMENT,
  `clase_id` int(11) NOT NULL,
  `persona_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`inasistencia_clase_id`),
  KEY `FK1_IC_clase` (`persona_id`),
  KEY `FK2_IC_clase` (`clase_id`),
  CONSTRAINT `FK3_IC_persona` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `FK4_IC_clase` FOREIGN KEY (`clase_id`) REFERENCES `tr_clase` (`clase_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `tr_horario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_horario` (
  `horario_id` int(11) NOT NULL AUTO_INCREMENT,
  `asignatura_grupo_id` int(11) NOT NULL,
  `dia` int(1) DEFAULT NULL,
  `hora_inicio` time,
  `hora_fin` time,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`horario_id`),
  KEY `FK2_TH_asignatura_grupo` (`asignatura_grupo_id`),
  CONSTRAINT `FK3_TH_ag` FOREIGN KEY (`asignatura_grupo_id`) REFERENCES `inter_asignatura_grupo` (`asignatura_grupo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

