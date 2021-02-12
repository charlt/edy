ALTER TABLE inter_campo_persona ADD switch_encuesta_id int(11) NULL;
ALTER TABLE inter_campo_persona ADD CONSTRAINT inter_campo_persona_FK FOREIGN KEY (switch_encuesta_id) REFERENCES estudysg.tr_switch_encuesta(switch_encuesta_id);
