ALTER TABLE inter_encuesta_persona DROP FOREIGN KEY FK2_IFA_encuesta;
ALTER TABLE inter_encuesta_persona CHANGE encuesta_id switch_encuesta_id int(11) NOT NULL;

ALTER TABLE inter_encuesta_persona ADD CONSTRAINT inter_encuesta_persona_FK FOREIGN KEY (switch_encuesta_id) REFERENCES tr_switch_encuesta(switch_encuesta_id);
