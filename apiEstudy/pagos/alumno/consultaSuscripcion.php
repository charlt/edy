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
      
  

      $query_suscripciones = query('select alumno_suscripcion_id,ias.suscripcion_id,ias.beca_colegiatura,valor_beca_colegiatura,beca_reinscripcion,valor_beca_reinscripcion,cs.nombre_suscripcion,descripcion_suscripcion,monto_reinscripcion,monto_colegiatura from inter_alumno_suscripcion ias
      join cat_suscripcion cs on cs.suscripcion_id = ias.suscripcion_id
      where alumno_id = '.$id_alumno);  
 
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
        array_push($json_suscripciones,$arreglo_suscripciones);
        
      }
      
    

    if(num($query_suscripciones)){
      $json = array("status" => 1, "msg" => "Se encontraron suscripciones de alumno","suscripcion" => $json_suscripciones);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron suscripciones");
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
