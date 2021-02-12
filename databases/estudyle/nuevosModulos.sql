INSERT INTO cat_tipos_actividad (tipo_actividad_clave,tipo_actividad_nombre,tipo_evaluacion,bullet,aleatorio,num_intentos,metodo_resolucion,ponderacion,dificultad,unica,importancia_actividad,portafolio,fecha_creacion,fecha_actualiza,estatus)
	VALUES ('5','Calificación módulo',0,0,0,0,0,0,0,0,0,0,'2019-07-16 13:48:17.0','2020-02-06 13:26:03.0',0);


update cat_modulos set modulo_numero = 1, modulo_nombre = 'Actividades del grupo' where modulo_nombre like '%Actividades del grupo%';

insert into tr_actividad(modulo_id,tipo_actividad_id,actividad_nombre,dificultad_id,orden,unica,ponderacion,visible,estatus)
select modulo_id,5,'Calificación de actividades',1,99,0,0,1,1 from cat_modulos cm where modulo_nombre  = 'Actividades del grupo'

