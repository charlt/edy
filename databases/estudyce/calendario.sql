CREATE TABLE cat_eventos_calendario (
	evento_id INT(11) NOT NULL AUTO_INCREMENT,
	persona_id INT(11) NOT NULL,
	ciclo_id INT(11) NOT NULL,
	evento_nombre VARCHAR(100) NULL DEFAULT NULL,
	evento_desc VARCHAR(255) NOT NULL,
	color VARCHAR(50),
	fecha_inicio DATE NULL DEFAULT NULL,
	fecha_fin DATE NULL DEFAULT NULL,
	fecha_creacion DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	fecha_actualiza DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	estatus INT(1) NULL DEFAULT NULL,
	PRIMARY KEY (evento_id),
	CONSTRAINT FK1_PersonaId FOREIGN KEY (persona_id) REFERENCES estudydg.personas (persona_id),
	CONSTRAINT FK1_CicloId FOREIGN KEY (ciclo_id) REFERENCES cat_ciclo (ciclo_id)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=3
;