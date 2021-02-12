create view asistencia_videoconferencia as 
select tv.videoconferencia_id,tv.nombre,tv.fecha_inicio,tv.fecha_fin,
count(tav.acceso_videoconferencia_id) as asistencia 
from tr_acceso_videoconferencia tav
join tr_videoconferencia tv on tv.videoconferencia_id = tav.videoconferencia_id
group by tv.videoconferencia_id
having asistencia > 1;
