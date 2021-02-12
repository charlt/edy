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
