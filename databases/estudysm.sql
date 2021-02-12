CREATE DATABASE IF NOT EXISTS estudysm /*!40100 DEFAULT CHARACTER SET latin1*/;
USE estudysm;

CREATE TABLE IF NOT EXISTS tr_configura_correo (
configura_correo_id	int(11) NOT NULL AUTO_INCREMENT,
servidor varchar(255) NOT NULL,	
puerto int(11),
protocolo varchar(255),
autenticacion varchar(255),	
mecanismo_autenticacion varchar(255),
usuario_correo varchar(255),
password_correo varchar(255),
fecha_creacion datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
fecha_actualiza datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
usuario_crea  varchar(50),
usuario_actualiza varchar (50),
estatus int(1),
PRIMARY KEY ConfiguraCorreoID_PK(configura_correo_id)
);

create table cat_estatus_correo(
estatus_correo_id int(11) NOT NULL AUTO_INCREMENT,
estatus_correo_clave varchar(255)  ,
estatus_correo varchar(255),
fecha_creacion datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
fecha_actualiza datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
usuario_crea  varchar(50),
usuario_actualiza varchar (50),
estatus int(1),
PRIMARY KEY EstatusCorreoID_PK(estatus_correo_id)
)
;

CREATE TABLE IF NOT EXISTS tr_correo
(
correo_id int(11) NOT NULL AUTO_INCREMENT,
correo_from varchar(255) NOT NULL,
correo_to varchar(255) NOT NULL,
correo_cc varchar(255) ,
correo_bco varchar(255) ,
correo_subject varchar(255),
correo_attachment text,
correo_body text,
fecha_envio datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ,
configuracion_id	int(11), 
estatus_correo_id int (11) NOT NULL,
institucion_id int(11) NOT NULL,
fecha_creacion datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
fecha_actualiza datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
usuario_crea  varchar(50),
usuario_actualiza varchar (50),
estatus int(1),
PRIMARY KEY CorreoID_PK(correo_id),
FOREIGN KEY FK1_ConfiguraCorreo (configuracion_id) REFERENCES tr_configura_correo(configura_correo_id),
FOREIGN KEY FK2_EstatusCorreo (estatus_correo_id) REFERENCES cat_estatus_correo(estatus_correo_id),
FOREIGN KEY FK3_InstitucionCorreo (institucion_id) REFERENCES cat_instituciones(institucion_id)
);


CREATE TABLE IF NOT EXISTS cat_grupo_correo(
grupo_correo_id	int(11) NOT NULL AUTO_INCREMENT,
grupo_correo varchar(255) NOT NULL,
fecha_creacion datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
fecha_actualiza datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
usuario_crea  varchar(50),
usuario_actualiza varchar (50),
estatus int(1),
PRIMARY KEY GrupoCorreoID_PK(grupo_correo_id)
);

CREATE TABLE IF NOT EXISTS tr_grupo_correo
(
grupo_correo_id	int(11) NOT NULL,
institucion_id int(11) NOT NULL,
persona_id  int(11) NOT NULL,
fecha_creacion datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
fecha_actualiza datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
usuario_crea  varchar(50),
usuario_actualiza varchar (50),
estatus int(1),
PRIMARY KEY TrGrupoCorreoID_PK(grupo_correo_id,institucion_id, persona_id),
FOREIGN KEY FK1_TrGrupoCorreoGru (grupo_correo_id) REFERENCES cat_grupo_correo(grupo_correo_id),
FOREIGN KEY FK2_TrGrupoCorreoUsu (persona_id) REFERENCES estudydg.personas(persona_id),
FOREIGN KEY FK3_TrGrupoCorreoIns (institucion_id) REFERENCES cat_instituciones(institucion_id)
);