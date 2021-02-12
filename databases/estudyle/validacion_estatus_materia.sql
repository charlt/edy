ALTER TABLE estudyle.cat_estatus_materia ADD validacion int(1) DEFAULT 0 NULL;


--  Auto-generated SQL script #202012011132
UPDATE estudyle.cat_estatus_materia
	SET validacion=1
	WHERE estatus_materia_id=1;
UPDATE estudyle.cat_estatus_materia
	SET validacion=1
	WHERE estatus_materia_id=3;
UPDATE estudyle.cat_estatus_materia
	SET validacion=1
	WHERE estatus_materia_id=4;
