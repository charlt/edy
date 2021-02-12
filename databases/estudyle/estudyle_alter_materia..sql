/*tables cc */
alter table tr_cc_elementos drop foreign key FK1_cc_elemento; 
alter table tr_cc_elementos add constraint FK1_cc_elemento foreign key(respuesta_id) references tr_cc_respuesta (respuesta_id) on delete cascade; 


alter table tr_cc_categorias drop foreign key FK1_cc_categoria; 
alter table tr_cc_categorias add constraint FK1_cc_categoria foreign key(respuesta_id) references tr_cc_respuesta (respuesta_id) on delete cascade; 

alter table tr_cc_respuestas_finales drop foreign key FK1_cc_respuestas; 
alter table tr_cc_respuestas_finales add constraint FK1_cc_respuestas foreign key(elemento_id) references tr_cc_elementos (elemento_id) on delete cascade; 

alter table tr_cc_respuestas_finales drop foreign key FK2_cc_respuestas;
alter table tr_cc_respuestas_finales add constraint FK2_cc_respuestas foreign key(categoria_id) references tr_cc_categorias (categoria_id) on delete cascade; 


/* tables mc*/ 

alter table tr_mc_elementos drop foreign key FK1_mc_elemento;
alter table tr_mc_elementos add constraint FK1_mc_elemento foreign key(respuesta_id) references tr_mc_respuesta (respuesta_id) on delete cascade; 

alter table tr_mc_categorias drop foreign key FK1_mc_categoria; 
alter table tr_mc_categorias add constraint FK1_mc_categoria foreign key(respuesta_id) references tr_mc_respuesta (respuesta_id) on delete cascade; 

alter table tr_mc_respuestas_finales drop foreign key FK1_mc_respuestas; 
alter table tr_mc_respuestas_finales add constraint FK1_mc_respuestas foreign key(elemento_id) references tr_mc_elementos (elemento_id) on delete cascade; 

alter table tr_mc_respuestas_finales drop foreign key FK2_mc_respuestas;
alter table tr_mc_respuestas_finales add constraint FK2_mc_respuestas foreign key(categoria_id) references tr_mc_categorias (categoria_id) on delete cascade; 
