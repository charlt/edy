-- MariaDB dump 10.17  Distrib 10.4.13-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: estudypl
-- ------------------------------------------------------
-- Server version	10.4.13-MariaDB

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
-- Table structure for table `cat_descuento`
--

DROP TABLE IF EXISTS `cat_descuento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_descuento` (
  `descuento_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_inicio` datetime NOT NULL,
  `fecha_fin` datetime NOT NULL,
  `estatus_descuento_id` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `codigo_promocion` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `valor` int(1) DEFAULT NULL COMMENT '1:monto,2: porcentaje',
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`descuento_id`),
  KEY `tr_solicitud_descuento_fk` (`estatus_descuento_id`),
  KEY `tr_solicitud_descuento_fk_1` (`valor`),
  CONSTRAINT `tr_solicitud_descuento_fk` FOREIGN KEY (`estatus_descuento_id`) REFERENCES `cat_estatus_descuento` (`estatus_descuento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_descuento`
--

LOCK TABLES `cat_descuento` WRITE;
/*!40000 ALTER TABLE `cat_descuento` DISABLE KEYS */;
/*!40000 ALTER TABLE `cat_descuento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_estatus_descuento`
--

DROP TABLE IF EXISTS `cat_estatus_descuento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_estatus_descuento` (
  `estatus_descuento_id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_crea` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_actualiza` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estatus_descuento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_estatus_descuento`
--

LOCK TABLES `cat_estatus_descuento` WRITE;
/*!40000 ALTER TABLE `cat_estatus_descuento` DISABLE KEYS */;
INSERT INTO `cat_estatus_descuento` VALUES (1,'Activo',NULL,'',1),(2,'Inactivo',NULL,'',1),(3,'Fijo',NULL,'',1);
/*!40000 ALTER TABLE `cat_estatus_descuento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_estatus_solicitud_pago`
--

DROP TABLE IF EXISTS `cat_estatus_solicitud_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_estatus_solicitud_pago` (
  `estatus_solicitud_pago_id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `usuario_crea` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_actualiza` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estatus_solicitud_pago_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_estatus_solicitud_pago`
--

LOCK TABLES `cat_estatus_solicitud_pago` WRITE;
/*!40000 ALTER TABLE `cat_estatus_solicitud_pago` DISABLE KEYS */;
INSERT INTO `cat_estatus_solicitud_pago` VALUES (1,'No Pagado',NULL,NULL,1),(2,'En proceso de Pago',NULL,NULL,1),(3,'Pagado',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_estatus_solicitud_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_forma_pago`
--

DROP TABLE IF EXISTS `cat_forma_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_forma_pago` (
  `forma_pago_id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `usuario_crea` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_actualiza` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`forma_pago_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_forma_pago`
--

LOCK TABLES `cat_forma_pago` WRITE;
/*!40000 ALTER TABLE `cat_forma_pago` DISABLE KEYS */;
INSERT INTO `cat_forma_pago` VALUES (1,'No definido',NULL,NULL,1),(2,'Pago con Tarjeta',NULL,NULL,1),(3,'Tienda',NULL,NULL,1),(4,'Tranferencia',NULL,NULL,1),(5,'Pago Fisico',NULL,NULL,1);
/*!40000 ALTER TABLE `cat_forma_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_porcentaje_fecha_pago`
--

DROP TABLE IF EXISTS `cat_porcentaje_fecha_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_porcentaje_fecha_pago` (
  `porcentaje_pago_id` int(11) NOT NULL AUTO_INCREMENT,
  `suscripcion_id` int(11) DEFAULT NULL,
  `tipo_porcentaje` int(1) DEFAULT NULL COMMENT '1:descuento, 2: recargo',
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `porcentaje` int(5) DEFAULT NULL,
  `valor` int(1) DEFAULT NULL COMMENT '1: monto, 2: porcentaje',
  `dia_inicio` int(2) DEFAULT NULL,
  `dia_fin` int(2) DEFAULT NULL,
  `tipo` int(1) DEFAULT NULL COMMENT '1: reinscripcion, 2: colegiatura, 3:inscripcion',
  `usuario_crea` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_actualiza` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`porcentaje_pago_id`),
  KEY `cat_aplica_recargo_fk` (`suscripcion_id`),
  CONSTRAINT `cat_porcentaje_fecha_pago_fk` FOREIGN KEY (`suscripcion_id`) REFERENCES `cat_suscripcion` (`suscripcion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_porcentaje_fecha_pago`
--

LOCK TABLES `cat_porcentaje_fecha_pago` WRITE;
/*!40000 ALTER TABLE `cat_porcentaje_fecha_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `cat_porcentaje_fecha_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_suscripcion`
--

DROP TABLE IF EXISTS `cat_suscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_suscripcion` (
  `suscripcion_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave_suscripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre_suscripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion_suscripcion` text COLLATE utf8_spanish2_ci NOT NULL,
  `usuario_crea` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_actualiza` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  `monto_colegiatura` decimal(6,2) DEFAULT NULL,
  `dia_pago_colegiatura` int(2) DEFAULT NULL,
  `monto_reinscripcion` decimal(6,2) DEFAULT NULL,
  `monto_inscripcion` decimal(6,2) DEFAULT NULL,
  `dia_pago_reinscripcion` int(1) DEFAULT NULL,
  PRIMARY KEY (`suscripcion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_suscripcion`
--

LOCK TABLES `cat_suscripcion` WRITE;
/*!40000 ALTER TABLE `cat_suscripcion` DISABLE KEYS */;
/*!40000 ALTER TABLE `cat_suscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cat_tipo_pago`
--

DROP TABLE IF EXISTS `cat_tipo_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_tipo_pago` (
  `tipo_pago_id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion_pago` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `tarjeta` int(1) DEFAULT 0 NULL,
  `transferencia` int(1) DEFAULT 0 NULL,
  `fisico` int(1) DEFAULT 0 NULL,
  `usuario_crea` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_actualiza` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`tipo_pago_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_tipo_pago`
--

LOCK TABLES `cat_tipo_pago` WRITE;
/*!40000 ALTER TABLE `cat_tipo_pago` DISABLE KEYS */;
INSERT INTO cat_tipo_pago (descripcion_pago,tarjeta,transferencia,fisico,usuario_crea,usuario_actualiza,estatus) VALUES 
('Suscripción',0,0,1,NULL,NULL,1)
,('Materia',0,0,1,NULL,NULL,0)
,('Producto',0,0,1,NULL,NULL,0)
;
/*!40000 ALTER TABLE `cat_tipo_pago` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `cat_transferencia`
--

DROP TABLE IF EXISTS `cat_transferencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cat_transferencia` (
  `transferencia_id` int(11) NOT NULL AUTO_INCREMENT,
  `clabe` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `numero_cuenta` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `banco` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `beneficiario` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `observacion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_crea` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_actualiza` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`transferencia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cat_transferencia`
--

LOCK TABLES `cat_transferencia` WRITE;
/*!40000 ALTER TABLE `cat_transferencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `cat_transferencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_alumno_suscripcion`
--

DROP TABLE IF EXISTS `inter_alumno_suscripcion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_alumno_suscripcion` (
  `alumno_suscripcion_id` int(11) NOT NULL AUTO_INCREMENT,
  `alumno_id` int(11) DEFAULT NULL,
  `suscripcion_id` int(11) DEFAULT NULL,
  `beca_colegiatura` decimal(6,2) DEFAULT NULL,
  `valor_beca_colegiatura` int(2) DEFAULT NULL COMMENT '1:monto,2:porcentaje',
  `beca_reinscripcion` decimal(6,2) DEFAULT NULL,
  `valor_beca_reinscripcion` int(1) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`alumno_suscripcion_id`),
  KEY `inter_alumno_pago_fk` (`suscripcion_id`),
  CONSTRAINT `inter_alumno_suscripcion_fk` FOREIGN KEY (`suscripcion_id`) REFERENCES `cat_suscripcion` (`suscripcion_id`),
  CONSTRAINT `inter_alumno_suscripcion_FK2` FOREIGN KEY (`alumno_id`) REFERENCES `estudydg`.`personas`(`persona_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_alumno_suscripcion`
--

LOCK TABLES `inter_alumno_suscripcion` WRITE;
/*!40000 ALTER TABLE `inter_alumno_suscripcion` DISABLE KEYS */;
INSERT INTO `inter_alumno_suscripcion` VALUES (1,2,1,44.00,2,1,1000.00,1);
/*!40000 ALTER TABLE `inter_alumno_suscripcion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inter_suscripcion_carrera`
--

DROP TABLE IF EXISTS `inter_suscripcion_carrera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_suscripcion_carrera` (
  `carrera_id` int(11) NOT NULL,
  `suscripcion_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  KEY `fk_ISC_carrera` (`carrera_id`),
  KEY `fk_ISC_suscripcion` (`suscripcion_id`),
  CONSTRAINT `fk_ISC_carrera` FOREIGN KEY (`carrera_id`) REFERENCES `estudydg`.`tr_carrera` (`carrera_id`),
  CONSTRAINT `fk_ISC_suscripcion` FOREIGN KEY (`suscripcion_id`) REFERENCES `cat_suscripcion` (`suscripcion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_suscripcion_carrera`
--

LOCK TABLES `inter_suscripcion_carrera` WRITE;
/*!40000 ALTER TABLE `inter_suscripcion_carrera` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_suscripcion_carrera` ENABLE KEYS */;
UNLOCK TABLES;


--
-- Table structure for table `inter_asignatura_pago`
--

DROP TABLE IF EXISTS `inter_asignatura_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `inter_asignatura_pago` (
  `asignatura_id` int(11) NOT NULL,
  `pago_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_crea` varchar(50) DEFAULT NULL,
  `usuario_actualiza` varchar(50) DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  KEY `fk_IAP_asignatura` (`asignatura_id`),
  KEY `fk_IAP_pago` (`pago_id`),
  CONSTRAINT `fk_IAP_asignatura` FOREIGN KEY (`asignatura_id`) REFERENCES `estudydg`.`cat_asignaturas` (`asignatura_id`),
  CONSTRAINT `fk_IAP_pago` FOREIGN KEY (`pago_id`) REFERENCES `tr_pago` (`pago_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inter_asignatura_pago`
--

LOCK TABLES `inter_asignatura_pago` WRITE;
/*!40000 ALTER TABLE `inter_asignatura_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `inter_asignatura_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_pago`
--

DROP TABLE IF EXISTS `tr_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_pago` (
  `pago_id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_pago_id` int(11) NOT NULL,
  `usuario_crea` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_actualiza` varchar(50) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pago_id`),
  KEY `tr_pago_fk_2` (`tipo_pago_id`),
  CONSTRAINT `tr_pago_fk_2` FOREIGN KEY (`tipo_pago_id`) REFERENCES `cat_tipo_pago` (`tipo_pago_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_pago`
--

LOCK TABLES `tr_pago` WRITE;
/*!40000 ALTER TABLE `tr_pago` DISABLE KEYS */;
INSERT INTO `tr_pago` VALUES (1,3,NULL,NULL,1);
/*!40000 ALTER TABLE `tr_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_pago_externo`
--

DROP TABLE IF EXISTS `tr_pago_externo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_pago_externo` (
  `pago_externo_id` int(11) NOT NULL AUTO_INCREMENT,
  `comprobante` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `solicitud_pago_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pago_externo_id`),
  KEY `tr_pago_externo_fk` (`solicitud_pago_id`),
  CONSTRAINT `tr_pago_externo_fk` FOREIGN KEY (`solicitud_pago_id`) REFERENCES `tr_solicitud_pago` (`solicitud_pago_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_pago_externo`
--

LOCK TABLES `tr_pago_externo` WRITE;
/*!40000 ALTER TABLE `tr_pago_externo` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_pago_externo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_pago_tarjeta_error`
--

DROP TABLE IF EXISTS `tr_pago_tarjeta_error`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_pago_tarjeta_error` (
  `pago_tarjeta_error_id` int(11) NOT NULL AUTO_INCREMENT,
  `solicitud_pago_id` int(11) NOT NULL,
  `descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pago_tarjeta_error_id`),
  KEY `tr_pago_tarjeta_error_fk` (`solicitud_pago_id`),
  CONSTRAINT `tr_pago_tarjeta_error_fk` FOREIGN KEY (`solicitud_pago_id`) REFERENCES `tr_solicitud_pago` (`solicitud_pago_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_pago_tarjeta_error`
--

LOCK TABLES `tr_pago_tarjeta_error` WRITE;
/*!40000 ALTER TABLE `tr_pago_tarjeta_error` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_pago_tarjeta_error` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_pago_tarjeta_exitoso`
--

DROP TABLE IF EXISTS `tr_pago_tarjeta_exitoso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_pago_tarjeta_exitoso` (
  `pago_exitoso_id` int(11) NOT NULL AUTO_INCREMENT,
  `solicitud_pago_id` int(11) NOT NULL,
  `codigo_autorizacion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `transaccion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pago_exitoso_id`),
  KEY `tr_pago_tarjeta_exitoso_fk` (`solicitud_pago_id`),
  CONSTRAINT `tr_pago_tarjeta_exitoso_fk` FOREIGN KEY (`solicitud_pago_id`) REFERENCES `tr_solicitud_pago` (`solicitud_pago_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_pago_tarjeta_exitoso`
--

LOCK TABLES `tr_pago_tarjeta_exitoso` WRITE;
/*!40000 ALTER TABLE `tr_pago_tarjeta_exitoso` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_pago_tarjeta_exitoso` ENABLE KEYS */;
UNLOCK TABLES;



--
-- Table structure for table `tr_pago_referencia`
--

DROP TABLE IF EXISTS `tr_pago_referencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_pago_referencia` (
  `pago_referencia_id` int(11) NOT NULL AUTO_INCREMENT,
  `solicitud_pago_id` int(11) NOT NULL,
  `referencia` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`pago_referencia_id`),
  KEY `tr_pago_referencia_fk` (`solicitud_pago_id`),
  CONSTRAINT `tr_pago_referencia_fk` FOREIGN KEY (`solicitud_pago_id`) REFERENCES `tr_solicitud_pago` (`solicitud_pago_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_pago_referencia`
--

LOCK TABLES `tr_pago_referencia` WRITE;
/*!40000 ALTER TABLE `tr_pago_referencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_pago_referencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_producto`
--

DROP TABLE IF EXISTS `tr_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_producto` (
  `producto_id` int(11) NOT NULL AUTO_INCREMENT,
  `pago_id` int(11) DEFAULT NULL,
  `clave_producto` varchar(20) DEFAULT NULL,
  `nombre_producto` varchar(100) DEFAULT NULL,
  `monto` decimal(6,2) DEFAULT NULL,
  `estatus` int(11) DEFAULT NULL,
  PRIMARY KEY (`producto_id`),
  KEY `tr_producto_fk` (`pago_id`),
  CONSTRAINT `tr_producto_fk` FOREIGN KEY (`pago_id`) REFERENCES `tr_pago` (`pago_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_producto`
--

LOCK TABLES `tr_producto` WRITE;
/*!40000 ALTER TABLE `tr_producto` DISABLE KEYS */;
INSERT INTO tr_producto (pago_id,clave_producto,monto,estatus)
    VALUES (1,'Material',null,1);
/*!40000 ALTER TABLE `tr_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_solicitud_pago`
--

DROP TABLE IF EXISTS `tr_solicitud_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_solicitud_pago` (
  `solicitud_pago_id` int(11) NOT NULL AUTO_INCREMENT,
  `persona_id` int(11) NOT NULL,
  `pago_id` int(11) NOT NULL,
  `estatus_solicitud_pago_id` int(11) NOT NULL,
  `nombre_pago` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `monto` decimal(6,2) NOT NULL,
  `beca` decimal(6,2) DEFAULT NULL,
  `fecha_pago` datetime DEFAULT NULL,
  `forma_pago_id` int(11) NOT NULL,
  `descuento_id` int(11) DEFAULT NULL,
  `monto_final` decimal(6,2) DEFAULT NULL,
  `porcentaje` decimal(6,2) DEFAULT NULL,
  `observacion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `usuario_creacion` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `usuario_actualiza` varchar(255) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`solicitud_pago_id`),
  KEY `solicitud_pago_fk` (`estatus_solicitud_pago_id`),
  KEY `tr_solicitud_pago_fk` (`pago_id`),
  KEY `tr_solicitud_pago_fk_1` (`porcentaje`),
  KEY `tr_solicitud_pago_fk_2` (`forma_pago_id`),
  KEY `tr_solicitud_pago_fk_3` (`persona_id`),
  KEY `tr_solicitud_pago_fk_4` (`descuento_id`),
  CONSTRAINT `solicitud_pago_fk` FOREIGN KEY (`estatus_solicitud_pago_id`) REFERENCES `cat_estatus_solicitud_pago` (`estatus_solicitud_pago_id`),
  CONSTRAINT `tr_solicitud_pago_fk` FOREIGN KEY (`pago_id`) REFERENCES `tr_pago` (`pago_id`),
  CONSTRAINT `tr_solicitud_pago_fk_2` FOREIGN KEY (`forma_pago_id`) REFERENCES `cat_forma_pago` (`forma_pago_id`),
  CONSTRAINT `tr_solicitud_pago_fk_3` FOREIGN KEY (`persona_id`) REFERENCES `estudydg`.`personas` (`persona_id`),
  CONSTRAINT `tr_solicitud_pago_fk_4` FOREIGN KEY (`descuento_id`) REFERENCES `cat_descuento` (`descuento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_solicitud_pago`
--

LOCK TABLES `tr_solicitud_pago` WRITE;
/*!40000 ALTER TABLE `tr_solicitud_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_solicitud_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tr_suscripcion_pago`
--

DROP TABLE IF EXISTS `tr_suscripcion_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr_suscripcion_pago` (
  `suscripcion_pago_id` int(11) NOT NULL AUTO_INCREMENT,
  `suscripcion_id` int(11) NOT NULL,
  `mes` int(2) NOT NULL,
  `anio` int(4) NOT NULL,
  `tipo` int(1) NOT NULL,
  `pago_id` int(11) NOT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT current_timestamp(),
  `fecha_actualiza` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`suscripcion_pago_id`),
  KEY `inter_suscripcion_pago_fk` (`pago_id`),
  KEY `inter_suscripcion_pago_fk_1` (`suscripcion_id`),
  CONSTRAINT `inter_suscripcion_pago_fk` FOREIGN KEY (`pago_id`) REFERENCES `tr_pago` (`pago_id`),
  CONSTRAINT `inter_suscripcion_pago_fk_1` FOREIGN KEY (`suscripcion_id`) REFERENCES `cat_suscripcion` (`suscripcion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr_suscripcion_pago`
--

LOCK TABLES `tr_suscripcion_pago` WRITE;
/*!40000 ALTER TABLE `tr_suscripcion_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `tr_suscripcion_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'estudypl'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-17 13:50:42
