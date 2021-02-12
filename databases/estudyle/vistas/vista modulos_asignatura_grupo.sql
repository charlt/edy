

/*Variable*/
create function id_asignatura_grupo() returns integer deterministic no sql return @asignatura_grupo_id;
create function id_asignatura() returns integer deterministic no sql return @asignatura_id;

drop table if exists modulos_base_asignatura_grupo;
drop table if exists modulos_asignatura_grupo;
drop table if exists modulos_extra_asignatura;
drop table if exists modulos_asignatura;

create view modulos_base_asignatura_grupo as 
select distinct ima.modulo_id,cm.modulo_nombre, cm.fecha_inicio, cm.fecha_fin,cm.modulo_numero
from estudyce.inter_asignatura_grupo iag 
join estudydg.inter_orden_asignatura ioa on iag.orden_asignatura_id = ioa.orden_asignatura_id
join inter_modulos_asignaturas ima on ima.asignatura_id = ioa.asignatura_id
join cat_modulos cm on cm.modulo_id = ima.modulo_id
where asignatura_grupo_id= id_asignatura_grupo() and iag.estatus=1 and ioa.estatus=1 and ima.estatus=1 and cm.estatus=1;


create view modulos_asignatura_grupo as
select imag.modulo_id,cm.modulo_nombre, cm.fecha_inicio, cm.fecha_fin,cm.modulo_numero
from inter_modulos_asignatura_grupo imag
join cat_modulos cm on cm.modulo_id = imag.modulo_id
join inter_modulos_asignatura_grupo ima on ima.modulo_id = cm.modulo_id
where ima.asignatura_grupo_id = id_asignatura_grupo() and imag.estatus=1 and cm.estatus=1 and ima.estatus=1;


create view modulos_extra_asignatura as 
select imag.modulo_id,cm.modulo_nombre, iag.fecha_inicio, iag.fecha_fin, tg.grupo_id,tg.grupo,tg.nombre_grupo,cm.modulo_numero
from estudyce.inter_asignatura_grupo iag 
join estudydg.inter_orden_asignatura ioa on iag.orden_asignatura_id = ioa.orden_asignatura_id
join inter_modulos_asignatura_grupo imag on imag.asignatura_grupo_id = iag.asignatura_grupo_id
join estudyce.tr_grupo tg on tg.grupo_id = iag.grupo_id
join cat_modulos cm on cm.modulo_id = imag.modulo_id
where ioa.asignatura_id = id_asignatura() and imag.estatus = 1 and cm.estatus = 1;

create view modulos_asignatura as 
select ima.modulo_id,cm.modulo_nombre, cm.fecha_inicio, cm.fecha_fin , null as grupo_id,null as grupo, null as nombre_grupo,cm.modulo_numero
from inter_modulos_asignaturas ima
join cat_modulos cm on cm.modulo_id = ima.modulo_id
where ima.asignatura_id =id_asignatura() and ima.estatus = 1 and cm.estatus = 1;










/*consulta vista con variable*/
select * from (select @asignatura_grupo_id := "id" asignatura_grupo_id) as vistas, modulos_asignatura_grupo;
