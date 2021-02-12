
ALTER TABLE estudydg.tr_plan_estudios ADD minimo_materias_grado int(2) DEFAULT null ;
INSERT INTO estudyle.cat_estatus_materia (clave_estatus_materia,descripcion_estatus_materia,fecha_creacion,fecha_actualiza,estatus)
	VALUES ('i','Registrado por el administrador','2019-08-29 11:01:59.0','2019-08-29 11:02:38.0',1);


update inter_alumno_grupo iag set estatus  = 1 where estatus  is null;

ALTER TABLE inter_alumno_plan ADD asignado_grupo int(1) NOT NULL;

ALTER TABLE tr_grupo ADD grupo_origen_id int(11) NULL;

INSERT INTO cat_situacion_grupo (situacion_grupo_clave,situacion_grupo_descripcion,fecha_creacion,fecha_actualiza,estatus)
	VALUES ('trans','Cerrado y transferido','2020-05-26 23:10:26.0','2020-08-09 16:32:27.0',1);
	
INSERT INTO cat_situacion_alumno (situacion_alumno_clave,situacion_alumno_descripcion,fecha_creacion,fecha_actualiza,estatus)
	VALUES ('bl','Bloqueado','2019-07-28 03:08:13.0','2020-05-06 01:31:46.0',1);

INSERT INTO unicon_estudyce.cat_tipo_ticket (clave_tipo_ticket,tipo_ticket,rol_id,fecha_creacion,fecha_actualiza,estatus)
	VALUES ('bl','Bloqueo de la plataforma',0,'2020-05-17 17:13:13.0','2020-07-08 23:13:43.0',1);


update inter_alumno_plan iap
join inter_alumno_grupo iag  on iag.alumno_id  = iap.alumno_id 
join tr_grupo tg on tg.grupo_id  = iag.grupo_id and iap.plan_orden_id  = tg.plan_orden_id
set iap.asignado_grupo =1
where tg.estatus  =1 and tg.situacion_grupo_id  = 1 and iag.estatus = 1
