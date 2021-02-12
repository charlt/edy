CREATE TABLE cat_privilegios_docente (
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
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;
 
INSERT INTO cat_privilegios_docente VALUES 
(1,'_cargarContenido','fa-book','button',NULL,NULL,NULL,'vistaContenido','btn-outline-primary',1),
(2,'_vistaEstudiante','fa-desktop','button',NULL,NULL,NULL,'vistaAlumno','btn-outline-primary',1),
(3,'_horario','fa-calendar','router','/docente/horario/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1),
(4,'_videoconferencias','fa-users','router','/docente/video-conferencia/',NULL,'Activa tu clase online aquí',NULL,'btn-outline-primary',1),
(5,'_avisos','fa-telegram','router','/docente/avisos/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1),
(6,'_objetivosPonderaciones','fa-pie-chart','router','/docente/objetivos-actividad/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1),
(7,'_calcularPromedio','fa-calculator','button',NULL,NULL,NULL,'calculoCalificacion','btn-outline-primary',1),
(8,'Acta de calificaciones','fa-cubes','router','/docente/reportes/','asignaturaGrupo',NULL,NULL,'btn-outline-primary',1);


CREATE TABLE cat_privilegios_alumno (
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

INSERT INTO cat_privilegios_alumno VALUES 
(1,'Materia','Ir a mis actividades','primary','fa-book','col-xl-3 col-lg-6','/learning/materia/',1,1),
(2,'Historial','Ver mis calificaciones','success','fa-list-alt','col-xl-3 col-lg-6','/learning/historial/',1,0),
(3,'Mi expediente','Revisar mi expediente','danger','fa-archive','col-xl-3 col-lg-6','/learning/expediente/',1,0),
(4,'Notificaciones y tickets',NULL,'bg-primary','fa-ticket','col-xl-2 col-lg-3','/learning/tickets/',2,1),
(5,'Avisos',NULL,'bg-primary','fa-bell','col-xl-2 col-lg-3','/learning/avisos/1',2,1),
(6,'Información de inscripción',NULL,'bg-primary','fa-file-text','col-xl-2 col-lg-3','/learning/solicitud/',2,0),
(7,'Biblioteca',NULL,'bg-primary','fa-university','col-xl-2 col-lg-3','/learning/biblioteca/',2,0),
(8,'Calendario',NULL,'bg-primary','fa-calendar','col-xl-2 col-lg-3','/learning/calendario/',2,0),
(9,'Servicios',NULL,'bg-success','fa-cubes','col-xl-2 col-lg-3','/learning/serviciosAcademicos/',2,0),
(10,'Normateca',NULL,'bg-success','fa-legal','col-xl-2 col-lg-3','',2,0),
(12,'Pagos',NULL,'bg-danger','fa-credit-card','col-xl-2 col-lg-3','/learning/pagos/',2,0),
(13,'Diploma',NULL,'bg-primary','fa-university','col-xl-2 col-lg-3','/learning/diploma/',2,0)
(14,'Grabaciones',NULL,'bg-info','fa-video','col-xl-2 col-lg-3','/learning/grabaciones/',2,0)
;
