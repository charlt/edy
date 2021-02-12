
update estudyce.tr_docente td
join estudyce.inter_docente_asignatura_grupo idag on idag.docente_id = td.docente_id
join inter_modulos_asignatura_grupo imag on imag.asignatura_grupo_id = idag.asignatura_grupo_id
join tr_actividad ta on ta.modulo_id = imag.modulo_id
join estudydg.inter_persona_usuario_rol ipur on ipur.persona_id  = td.docente_id 
join estudydg.usuarios u on u.usuario_id = ipur.usuario_id 
set ta.usuario_crea = u.usuario 
where ta.usuario_crea is null