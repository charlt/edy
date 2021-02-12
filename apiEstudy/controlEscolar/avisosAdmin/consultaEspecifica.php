<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_aviso = query('SELECT ta.aviso_id, ta.importancia_aviso_id, ta.titulo, ta.mensaje, ta.adjunto, ta.administrador_id,
      ta.fecha_inicio, ta.fecha_fin, iap.persona_id FROM tr_avisos ta
      LEFT JOIN inter_aviso_persona iap ON ta.aviso_id = iap.aviso_id and persona_id = '.$usuario->id.'
      WHERE ta.aviso_id = '.$id_aviso.' and ta.estatus = 1');
    
      $json_aviso = array();

       while ($arreglo_aviso = arreglo($query_aviso)){
         if ($arreglo_aviso['persona_id'] != null || $arreglo_aviso['persona_id'] != '') {
          $arreglo_aviso['visto'] = 1;
         }else {
          $arreglo_aviso['visto'] = 0;
         }
          array_push($json_aviso,$arreglo_aviso);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_aviso)){
    		$json = array("status" => 1, "msg" => "Se encontraron avisos","aviso" => $json_aviso);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontron avisos");
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
