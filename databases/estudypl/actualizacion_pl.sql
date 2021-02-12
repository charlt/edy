UPDATE cat_situacion_pago
	SET estatus=0
	WHERE situacion_pago_id=4;


ALTER TABLE estudypl.cat_tipo_pago CHANGE transferencia fisico int(1) DEFAULT 0 NULL;
ALTER TABLE estudypl.cat_tipo_pago CHANGE tienda transferencia int(1) DEFAULT 0 NULL;

UPDATE estudypl.tr_producto SET pago_id=1 WHERE producto_id=1;

ALTER TABLE unisant_estudypl.cat_suscripcion ADD clave_suscripcion varchar(10) NULL;
ALTER TABLE estudypl.cat_suscripcion MODIFY COLUMN descripcion_suscripcion TEXT NULL;
ALTER TABLE estudypl.cat_suscripcion ADD clave_suscripcion varchar(50) NULL;

