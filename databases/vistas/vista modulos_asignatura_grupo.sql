/*Variable*/
create function id_asignatura_grupo() returns integer deterministic no sql return @asignatura_grupo_id;

/*vista con la variable asignada*/

create view modulos_asignatura_grupo as 
select distinct ima.modulo_id,cm.modulo_nombre, iag.fecha_inicio, iag.fecha_fin from estudyce.inter_asignatura_grupo iag 
join estudydg.inter_orden_asignatura ioa on iag.orden_asignatura_id = ioa.orden_asignatura_id
join inter_modulos_asignaturas ima on ima.asignatura_id = ioa.asignatura_id
join cat_modulos cm on cm.modulo_id = ima.modulo_id
where asignatura_grupo_id= id_asignatura_grupo()
union all 
select imag.modulo_id,cm.modulo_nombre, imag.fecha_inicio, imag.fecha_fin from inter_modulos_asignatura_grupo imag
join estudyle.cat_modulos cm on cm.modulo_id = imag.modulo_id
where asignatura_grupo_id = id_asignatura_grupo();

/*consulta vista con variable*/
select * from (select @asignatura_grupo_id := "id" asignatura_grupo_id) as vistas, modulos_asignatura_grupo;
