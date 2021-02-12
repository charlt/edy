
--13/02/2020
ALTER TABLE estudydg.tr_bitacora_sesion ADD ventana varchar(100) NULL;
ALTER TABLE estudyle.tr_contenido_actividad ADD nombre varchar(100) NULL;

--29/02/2020
alter table estudydg.usuarios ADD conectado int(1) NULL;
insert into estudydg.cat_tipo_asignaturas(tipo_asignatura, estatus) values("tronco comun",1);
ALTER TABLE estudydg.cat_rol ADD tiempo_sesion INT(4) NULL;


--01/03/2020
ALTER TABLE estudyce.inter_alumno_plan ADD orden_jerarquico_id int(11) NULL;
ALTER TABLE estudyce.inter_alumno_plan ADD CONSTRAINT inter_alumno_plan_FK FOREIGN KEY (orden_jerarquico_id) REFERENCES estudydg.cat_orden_jerarquico(orden_jerarquico_id);

--10/04/2020
ALTER TABLE estudyce.tr_docente ADD edicion_contenido int(1) DEFAULT 1 NULL COMMENT '0: ninguno, 1: para grupo 2: para todos';

--11/04/2020
ALTER TABLE estudyle.tr_videoconferencia ADD usuario_zoom_id int(11) NULL;
ALTER TABLE estudyle.tr_videoconferencia ADD CONSTRAINT tr_videoconferencia_fk FOREIGN KEY (usuario_zoom_id) REFERENCES tr_usuario_zoom(usuario_zoom_id);

--24/04/2020
ALTER TABLE tr_fr_respuesta ADD asignatura_grupo_id INT(11) NULL;
ALTER TABLE tr_fr_respuesta ADD CONSTRAINT tr_fr_respuesta_fk FOREIGN KEY (asignatura_grupo_id) REFERENCES estudyce.inter_asignatura_grupo(asignatura_grupo_id);
