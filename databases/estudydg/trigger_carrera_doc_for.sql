/*triggers para insertar formularios y documentos cada que se crea una carrera*/

DELIMITER |

CREATE TRIGGER inserta_documento after INSERT ON estudydg.tr_carrera
  FOR EACH ROW BEGIN
		  insert into inter_documento_carrera (carrera_id, documento_id, estatus )
		   select new.carrera_id, documento_id,1 from cat_documento where estatus = 1 and documento_id in (2,4,5);
	END
|
DELIMITER ;



DELIMITER |

CREATE TRIGGER inserta_formulario after INSERT ON estudydg.tr_carrera
  FOR EACH ROW BEGIN
		  insert into inter_formulario_carrera (carrera_id, formulario_id, estatus )
		   select new.carrera_id, formulario_id,1 from tr_formulario where estatus = 1 AND obligatorio = 1;
	END
|
DELIMITER ;
