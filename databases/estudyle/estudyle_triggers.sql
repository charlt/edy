/* trigger tr_pa_respuesta*/
create trigger inserta_bitacora_pa_respuesta
  after insert
  on tr_pa_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.alumno_id, now(),1,1,new.pregunta_id,1); 
end


create trigger elimina_bitacora_pa_respuesta
  after delete
  on tr_pa_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),2 ,1 ,old.pregunta_id,1); 
end


create trigger modifica_bitacora_pa_respuesta
  after update
  on tr_pa_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),3 ,1 ,old.pregunta_id,1); 
end

--------------------------------------------------------------------------------------------------------------------------
/*tr_om_reactivos*/
create trigger inserta_bitacora_om_respuesta
  after insert
  on tr_om_respuesta
  for each row
begin
  set @pregunta = (SELECT tp.pregunta_id FROM tr_om_respuesta tr join tr_om_reactivos tp on tp.reactivo_id = tr.reactivo_id
 where tr.respuesta_id=new.respuesta_id);
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.alumno_id, now(),1,2,@pregunta,1);  
end

create trigger elimina_bitacora_om_respuesta
  after delete
  on tr_om_respuesta
  for each row
begin
  set @pregunta = (SELECT pregunta_id from tr_om_reactivos where reactivo_id=old.reactivo_id);
 insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),2,2,@pregunta,1); 
end


------------------------------------------------------------------------------------------------------------------------------
/*tr_rc_respuesta*/
create trigger inserta_bitacora_rc_respuesta
  after insert
  on tr_rc_respuesta
  for each row
begin
  set @pregunta = (SELECT tp.pregunta_id FROM tr_rc_respuesta tr join tr_rc_reactivos tp on tp.reactivo_id = tr.reactivo_id
 where tr.respuesta_id=new.respuesta_id);
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.alumno_id, now(),1,3,@pregunta,1);  
end

create trigger elimina_bitacora_rc_respuesta
  after delete
  on tr_rc_respuesta
  for each row
begin
  set @pregunta = (SELECT pregunta_id from tr_rc_reactivos where reactivo_id=old.reactivo_id);
 insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),2,3,@pregunta,1); 
end
-----------------------------------------------------------------------------------------------------------------------------

/*tr_zi_respuesta*/
create trigger inserta_bitacora_zi_respuesta
  after insert
  on tr_zi_respuesta
  for each row
begin
  set @pregunta = (SELECT tp.pregunta_id FROM tr_zi_respuesta tr join tr_zi_reactivos tp on tp.reactivo_id = tr.reactivo_id
 where tr.respuesta_id=new.respuesta_id);
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.alumno_id, now(),1,4,@pregunta,1);  
end

create trigger elimina_bitacora_zi_respuesta
  after delete
  on tr_zi_respuesta
  for each row
begin
  set @pregunta = (SELECT pregunta_id from tr_zi_reactivos where reactivo_id=old.reactivo_id);
 insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),2,4,@pregunta,1); 
end

----------------------------------------------------------------------------------------------------------------------------
/*tr_dd_respuesta*/
create trigger inserta_bitacora_dd_respuesta
  after insert
  on tr_dd_respuesta
  for each row
begin
  set @pregunta = (SELECT tp.pregunta_id FROM tr_dd_respuesta tr join tr_dd_reactivos tp on tp.reactivo_id = tr.reactivo_id
 where tr.respuesta_id=new.respuesta_id);
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.alumno_id, now(),1,5,@pregunta,1);  
end

create trigger elimina_bitacora_dd_respuesta
  after delete
  on tr_dd_respuesta
  for each row
begin
  set @pregunta = (SELECT pregunta_id from tr_dd_reactivos where reactivo_id=old.reactivo_id);
 insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),2,5,@pregunta,1); 
end
---------------------------------------------------------------------------------------------------------------------------------

/*trigger tr_qq_respuesta*/
create trigger inserta_bitacora_qq_respuesta
  after insert
  on tr_qq_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.alumno_id, now(),1,6,new.pregunta_id,1);  
end


create trigger elimina_bitacora_qq_respuesta
  after delete
  on tr_qq_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),2,6,old.pregunta_id,1); 
end

---------------------------------------------------------------------------------------------------------------------------------
/*trigger tr_sq_respuesta*/
create trigger inserta_bitacora_sq_respuesta
  after insert
  on tr_sq_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.alumno_id, now(),1,7,new.pregunta_id,1);  
end


create trigger elimina_bitacora_sq_respuesta
  after delete
  on tr_sq_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),2,7,old.pregunta_id,1); 
end
----------------------------------------------------------------------------------------------------------------------
/*trigger tr_cc_respuesta*/
create trigger inserta_bitacora_cc_respuesta
  after insert
  on tr_cc_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.alumno_id, now(),1 ,8,new.pregunta_id,1); 
end

create trigger elimina_bitacora_cc_respuesta
  after delete
  on tr_cc_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),2 ,8,old.pregunta_id,1); 
end
--------------------------------------------------------------------------------------------------------------------------------
/*tr_mc_respuesta*/
create trigger inserta_bitacora_mc_respuesta
  after insert
  on tr_mc_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.alumno_id, now(),1,9,new.pregunta_id,1); 
end


create trigger elimina_bitacora_mc_respuesta
  after delete
  on tr_mc_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),2 , 9,old.pregunta_id,1); 
end
--------------------------------------------------------------------------------------------------------------------------------
/*tr_fr_respuesta*/
create trigger inserta_bitacora_fr_respuesta
  after insert
  on tr_fr_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.persona_id, now(),1,10,new.pregunta_id,1); 
end


create trigger elimina_bitacora_fr_respuesta
  after delete
  on tr_fr_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.persona_id, now(),2 , 10,old.pregunta_id,1); 
end


/*trigger tr_ad_respuesta*/
create trigger inserta_bitacora_ad_respuesta
  after insert
  on tr_ad_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (new.alumno_id, now(),1,11,new.pregunta_id,1); 
end


create trigger elimina_bitacora_ad_respuesta
  after delete
  on tr_ad_respuesta
  for each row
begin
  insert into bitacora_actividad(persona_id,fecha_accion, accion_id,tipo_pregunta_id,pregunta_id,estatus) values
 (old.alumno_id, now(),2 , 11,old.pregunta_id,1); 
end
