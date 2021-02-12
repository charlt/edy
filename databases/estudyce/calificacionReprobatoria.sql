DROP TABLE IF EXISTS cat_situacion_calificacion_reprobatoria;

CREATE TABLE cat_situacion_calificacion_reprobatoria (
  situacion_id INT(11) NOT NULL AUTO_INCREMENT,
  situacion_clave VARCHAR(50) NOT NULL DEFAULT '0',
  situacion_descripcion VARCHAR(255) NOT NULL DEFAULT '0',
  fecha_creacion DATETIME NOT NULL DEFAULT current_timestamp(),
  fecha_actualiza DATETIME NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  usuario_crea VARCHAR(50) DEFAULT NULL,
  usuario_actualiza VARCHAR(50) DEFAULT NULL,
  estatus INT(1) DEFAULT NULL,
  PRIMARY KEY (situacion_id)
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
;

INSERT INTO cat_situacion_calificacion_reprobatoria (situacion_clave, situacion_descripcion, estatus) VALUES ('NC', 'No curso', 1), ('NA', 'No acreditó', 1), ('NP', 'No presentó', 1), ('B', 'Baja', 1);

ALTER TABLE tr_historial ADD situacion_reprobatoria_id INT(11) DEFAULT NULL, 
ADD CONSTRAINT FK5_Situacion_Reprobatoria
FOREIGN KEY (situacion_reprobatoria_id) REFERENCES cat_situacion_calificacion_reprobatoria(situacion_id);