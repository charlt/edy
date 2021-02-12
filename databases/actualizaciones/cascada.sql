
  
 
alter table estudysg.tr_aspirante drop foreign key FK1_Persona_Aspirante; 
alter table estudysg.tr_aspirante add constraint FK1_Persona_Aspirante foreign key(aspirante_id) references estudydg.personas (persona_id) on delete cascade;


alter table estudyce.tr_alumno drop foreign key FK1_Persona_Alumno; 
alter table estudyce.tr_alumno add constraint FK1_Persona_Alumno foreign key(alumno_id) references estudydg.personas (persona_id) on delete cascade

alter table estudyce.tr_docente drop foreign key FK1_Persona_Docente; 
alter table estudyce.tr_docente add constraint FK1_Persona_Docente foreign key(docente_id) references estudydg.personas (persona_id) on delete cascade


alter table estudydg.inter_persona_usuario_rol drop foreign key FK1_Inter_PUR_Persona; 
alter table inter_persona_usuario_rol add constraint FK1_Inter_PUR_Persona foreign key(persona_id) references personas (persona_id) on delete cascade;
alter table inter_persona_usuario_rol drop foreign key FK2_Inter_PUR_Usuario; 
alter table inter_persona_usuario_rol add constraint FK2_Inter_PUR_Usuario foreign key(usuario_id) references usuarios (usuario_id) on delete cascade;


alter table estudyce.inter_alumno_plan drop foreign key FK1_PA; 
alter table estudyce.inter_alumno_plan add constraint FK1_PA foreign key(alumno_id) references tr_alumno (alumno_id) on delete cascade;


alter table estudyce.inter_alumno_asignatura_grupo drop foreign key FK1_IAGA_asignatura_grupo; 
alter table estudyce.inter_alumno_asignatura_grupo add constraint FK1_IAGA_asignatura_grupo foreign key(alumno_id) references tr_alumno (alumno_id) on delete cascade;


alter table estudyce.inter_alumno_grupo drop foreign key FK1_IALG_Alumno; 
alter table estudyce.inter_alumno_grupo add constraint FK1_IALG_Alumno foreign key(alumno_id) references tr_alumno (alumno_id) on delete cascade;


alter table estudydg.tr_token_pass drop foreign key FK1_persona_token; 
alter table estudydg.tr_token_pass add constraint FK1_persona_token foreign key(persona_id) references personas (persona_id) on delete cascade;
