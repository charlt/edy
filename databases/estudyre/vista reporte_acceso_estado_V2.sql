/*REPORTE DE ACCESOS CON ESTADO V2*/

create view usuario_ultimoAcceso as 
select usuario_id, max(fecha_inicio) as ultimo_acceso from estudydg.tr_bitacora_sesion tbs GROUP by usuario_id;


create view aspirante_estado as
select ica.aspirante_id,respuesta as estado
from estudysg.tr_campo_formulario tcf
join estudysg.inter_campo_aspirante ica on ica.campo_formulario_id = tcf.campo_formulario_id
where ica.campo_formulario_id = 18 and ica.respuesta != "undefined" and ica.respuesta is not null;

create view accesos_estado as
SELECT p.nombre , p.primer_apellido,p.segundo_apellido,p.curp,p.celular,p.email,ta.clave_alumno,
SUBSTRING(p.curp,11, 1) as sexo, fecha_nacimiento, YEAR(CURDATE())-YEAR(fecha_nacimiento) as edad,
date(acc.ultimo_acceso) as ultimo_acceso,estado,tg.grupo,tg.descripcion
FROM usuarios u
JOIN inter_persona_usuario_rol uri on uri.usuario_id = u.usuario_id
join personas p on p.persona_id = uri.persona_id
join estudyce.tr_alumno ta on ta.alumno_id = p.persona_id
join estudyce.inter_alumno_grupo iag on iag.alumno_id =ta.alumno_id
join estudyce.tr_grupo tg on tg.grupo_id = iag.grupo_id
left join usuario_ultimoacceso as acc on acc.usuario_id = uri.usuario_id /*Vista de la subconsulta ultimo acceso*/
left join aspirante_estado cf on cf.aspirante_id = p.persona_id /*Vista de la subconsulta aspirante estado*/
where u.estatus = 1 and uri.estatus = 1 and p.estatus = 1 and u.usuario_id > 3;


select * from accesos_estado;