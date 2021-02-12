/*REPORTE DE AVANCE POR MATERIA*/

select p.nombre,p.primer_apellido,p.segundo_apellido,p.email,tal.clave_alumno,tm.materia_id, realizados,totales, (realizados/totales)*100 as avance 
from (select * from (select @id_asignatura :=12 i)as vista, asignaturas_totales) as t1
join (select * from (select @id_asignatura :=12 i)as vista, materia_asignatura_realizada) as t2 on t1.asignatura_id = t2.asignatura_id
join tr_materia tm on tm.materia_id = t2.materia_id
join estudyce.tr_alumno tal on tal.alumno_id = tm.alumno_id
join estudydg.personas p on p.persona_id = tm.alumno_id group by nombre;



create view asignaturas_totales as
SELECT ima.asignatura_id,count(ta.actividad_id) as totales
FROM tr_actividad ta
join inter_modulos_asignaturas ima on ima.modulo_id = ta.modulo_id
where ta.estatus=1 and ta.tipo_actividad_id != 1 and ta.ponderacion > 0 and ima.asignatura_id = id_asignatura()
group by ima.asignatura_id;

create view materia_asignatura_realizada as 
select tm.materia_id,ioa.asignatura_id, count(tmfa1.calificacion) as realizados
from tr_materia_fecha_actividad tmfa1
join tr_materia tm on tm.materia_id = tmfa1.materia_id
join estudyce.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
join estudydg.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
where ioa.asignatura_id = id_asignatura() and tmfa1.estatus =1 and estatus_actividad_id in (2,4)
group by materia_id;