
CREATE TABLE `cat_estado` (
  `estado_id` int(11) NOT NULL AUTO_INCREMENT,
  `clave_estado` varchar(255) DEFAULT NULL,
  `nombre_estado` varchar(255) DEFAULT NULL,
  `fecha_creacion` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualiza` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `estatus` int(1) DEFAULT NULL,
  PRIMARY KEY (`estado_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


INSERT INTO cat_estado (clave_estado,nombre_estado,fecha_creacion,fecha_actualiza,estatus) VALUES 
('AS','Aguascalientes','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('BC','Baja California','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('BS','Baja California Sur','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('CC','Campeche','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('CS','Chiapas','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('CH','Chihuahua','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('DF','Ciudad de México','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('CL','Coahuila','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('CM','Colima','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('DG','Durango','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
;
INSERT INTO cat_estado (clave_estado,nombre_estado,fecha_creacion,fecha_actualiza,estatus) VALUES 
('GT','Guanajuato','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('GR','Guerrero','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('HG','Hidalgo','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('JC','Jalisco','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('MC','México','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('MN','Michoacán','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('MS','Morelos','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('NT','Nayarit','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('NL','Nuevo León','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('OC','Oaxaca','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
;
INSERT INTO cat_estado (clave_estado,nombre_estado,fecha_creacion,fecha_actualiza,estatus) VALUES 
('PL','Puebla','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('QO','Querétaro','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('QR','Quintana Roo','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('SP','San Luis Potosí','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('SL','Sinaloa','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('SR','Sonora','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('TC','Tabasco','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('TS','Tamaulipas','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('TL','Tlaxcala','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('VZ','Veracruz','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
;
INSERT INTO cat_estado (clave_estado,nombre_estado,fecha_creacion,fecha_actualiza,estatus) VALUES 
('YN','Yucatán','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
,('ZS','Zacatecas','2020-03-24 14:22:27.0','2020-03-24 14:23:15.0',1)
;