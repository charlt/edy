<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/alumno.class.php';

try {
  
  db('pagos');

  $alumno=new Alumno();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt
    );
      
  
    if($id_rol == 2){
      $script_suscripcion = ' and tipo in (1,2)';
    }else if($id_rol == 4){
      $script_suscripcion = ' and tipo = 3';
    }

      $query_suscripciones = query('select alumno_suscripcion_id,ias.suscripcion_id,tipo,ias.beca_colegiatura,valor_beca_colegiatura,beca_reinscripcion,valor_beca_reinscripcion,cs.nombre_suscripcion,descripcion_suscripcion,monto_reinscripcion,monto_colegiatura,monto_inscripcion,mes,anio,tp.pago_id
      from inter_alumno_suscripcion ias
      join cat_suscripcion cs on cs.suscripcion_id = ias.suscripcion_id
      left join tr_suscripcion_pago isp on isp.suscripcion_id = cs.suscripcion_id '.$script_suscripcion.'
      left join tr_pago tp on tp.pago_id = isp.pago_id
      where alumno_id = '.$id_persona.' and tp.estatus = 1 and isp.estatus = 1 and cs.estatus = 1');  
 
      $json_suscripciones=array();

      while($arreglo_suscripciones = arreglo($query_suscripciones)){
        if($arreglo_suscripciones['valor_beca_colegiatura'] == 1){
          $arreglo_suscripciones['descuento_colegiatura'] = $arreglo_suscripciones['monto_colegiatura'] - $arreglo_suscripciones['beca_colegiatura'];
        }else if($arreglo_suscripciones['valor_beca_colegiatura'] == 2){
          $arreglo_suscripciones['descuento_colegiatura'] = round($arreglo_suscripciones['monto_colegiatura'] - ($arreglo_suscripciones['monto_colegiatura'] * $arreglo_suscripciones['beca_colegiatura'])/100,2);
        }else{
          $arreglo_suscripciones['descuento_colegiatura'] = $arreglo_suscripciones['monto_colegiatura'];
          $arreglo_suscripciones['beca_colegiatura'] = 0;

        }

        if($arreglo_suscripciones['valor_beca_reinscripcion'] == 1){
          $arreglo_suscripciones['descuento_reinscripcion'] = $arreglo_suscripciones['monto_reinscripcion'] - $arreglo_suscripciones['beca_reinscripcion'];
        }else if($arreglo_suscripciones['valor_beca_reinscripcion'] == 2){
          $arreglo_suscripciones['descuento_reinscripcion'] = round($arreglo_suscripciones['monto_reinscripcion'] - ($arreglo_suscripciones['monto_reinscripcion'] * $arreglo_suscripciones['beca_reinscripcion'])/100,2);
        }else{
          $arreglo_suscripciones['descuento_reinscripcion'] = $arreglo_suscripciones['monto_reinscripcion'];
          
          $arreglo_suscripciones['beca_reinscripcion'] = 0;
        }

        switch($arreglo_suscripciones['mes']){
          case 1: $nombre_mes = "Enero"; break;
          case 2: $nombre_mes = "Febrero"; break;
          case 3: $nombre_mes = "Marzo"; break;
          case 4: $nombre_mes = "Abril"; break;
          case 5: $nombre_mes = "Mayo"; break;
          case 6: $nombre_mes = "Junio"; break;
          case 7: $nombre_mes = "Julio"; break;
          case 8: $nombre_mes = "Agosto"; break;
          case 9: $nombre_mes = "Septiembre"; break;
          case 10: $nombre_mes = "Octubre"; break;
          case 11: $nombre_mes = "Noviembre"; break;
          case 12: $nombre_mes = "Diciembre"; break;
          default: $nombre_mes = ""; break;
        }

        if($arreglo_suscripciones['tipo'] == 1){
          $nombre_tipo = 'Reinscripción';
          $arreglo_suscripciones['monto']  =  $arreglo_suscripciones['monto_reinscripcion'];
          $arreglo_suscripciones['beca']  =  $arreglo_suscripciones['beca_reinscripcion'];
          $arreglo_suscripciones['valor_beca']  =  $arreglo_suscripciones['valor_beca_reinscripcion'];
          $arreglo_suscripciones['descuento']  =  $arreglo_suscripciones['descuento_reinscripcion'];

        }else if($arreglo_suscripciones['tipo'] == 2){
          $nombre_tipo = 'Colegiatura';
          $arreglo_suscripciones['monto'] =  $arreglo_suscripciones['monto_colegiatura'];
          $arreglo_suscripciones['beca']  =  $arreglo_suscripciones['beca_colegiatura'];
          $arreglo_suscripciones['valor_beca']  =  $arreglo_suscripciones['valor_beca_colegiatura'];
          $arreglo_suscripciones['descuento']  =  $arreglo_suscripciones['descuento_colegiatura'];

        }else if($arreglo_suscripciones['tipo'] == 3){
          $nombre_tipo = 'Inscripción';
          $arreglo_suscripciones['monto'] =  $arreglo_suscripciones['monto_inscripcion'];
          $arreglo_suscripciones['descuento']  =  $arreglo_suscripciones['monto_inscripcion'];

        }

        unset($arreglo_suscripciones['monto_reinscripcion']);
        unset($arreglo_suscripciones['monto_colegiatura']);
        unset($arreglo_suscripciones['beca_reinscripcion']);
        unset($arreglo_suscripciones['beca_colegiatura']);
        unset($arreglo_suscripciones['valor_beca_reinscripcion']);
        unset($arreglo_suscripciones['valor_beca_colegiatura']);
        unset($arreglo_suscripciones['descuento_reinscripcion']);
        unset($arreglo_suscripciones['descuento_colegiatura']);
        
        
        if(isset($nombre_mes)){
          $arreglo_suscripciones['nombre_mes'] = $nombre_mes;
        }

        if(isset($nombre_mes)){
          $arreglo_suscripciones['nombre_mes'] = $nombre_mes;
        }
        if($arreglo_suscripciones['anio'] == 0) $arreglo_suscripciones['anio'] = '';

        if(isset($nombre_tipo)){
          $arreglo_suscripciones['nombre_pago']  =$nombre_tipo.' '.$nombre_mes.' '.$arreglo_suscripciones['anio'].' '.$arreglo_suscripciones['nombre_suscripcion'];
        }
        
        
      

        array_push($json_suscripciones,$arreglo_suscripciones);
        
      }
      
    

    if(num($query_suscripciones)){
      if(!empty($json_suscripciones[0]['pago_id'])){
        $json = array("status" => 1, "msg" => "Se encontraron pagos disponibles","suscripcionPago" => $json_suscripciones);
      }else{
        $json = array("status" => 0, "msg" => "Esta suscripción no cuenta con meses vinculados","codigoError"=>2,"idSuscripcion"=>$json_suscripciones[0]['suscripcion_id']);
      }
     }else{
      $json = array("status" => 0, "msg" => "El alumno no cuenta con suscripciones","codigoError"=>1);
    }

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

/* Output header */

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
