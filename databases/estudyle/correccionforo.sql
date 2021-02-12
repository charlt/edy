update tr_fr_respuesta tfr 
join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tfr.materia_fecha_actividad_id
join tr_materia tm on tm.materia_id = tmfa.materia_id
join enlace_estudyce.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
set tfr.asignatura_grupo_id = iag.asignatura_grupo_id