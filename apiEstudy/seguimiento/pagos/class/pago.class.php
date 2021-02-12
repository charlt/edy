<?php

class Pago{

    public static $query;


    public static function inserta_solicitud($aspirante_id, $id_tipo_pago, $id_forma_pago, $monto){

        $inserta=inserta_last_id('tr_solicitud_pago','aspirante_id, tipo_pago_id, forma_pago_id, monto, estatus',
        ''.$aspirante_id.','.$id_tipo_pago.', '.$id_forma_pago.','.$monto.',1');

        return $inserta;
    }
    

    public static function inserta_tarjeta($id_solicitud_pago, $autorizacion, $estatus){

        $inserta_tarjeta=inserta('tr_tarjeta','solicitud_pago_id, autorizacion, estatus',
        ''.$id_solicitud_pago.', "'.$autorizacion.'", '.$estatus.'');

        return $inserta_tarjeta;
    }

    
    public static function inserta_tienda($id_solicitud_pago, $referencia, $estatus){

        $inserta_tarjeta=inserta('tr_tienda','solicitud_pago_id, referencia, estatus',
        ''.$id_solicitud_pago.', "'.$referencia.'", '.$estatus.'');

        return $inserta_tarjeta;
    }

    public static function inserta_suscripcion($id_solicitud_pago, $cliente_id,$tarjeta_id,$suscripcion_id, $estatus){

        $inserta_suscripcion=inserta('tr_suscripcion','solicitud_pago_id, idCliente, idTarjeta, idSuscripcion, estatus',
        ''.$id_solicitud_pago.', "'.$cliente_id.'", "'.$tarjeta_id.'", "'.$suscripcion_id.'", '.$estatus.'');

        return $inserta_suscripcion;
    }
}




?>