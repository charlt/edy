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

        $arreglo_asistencia = arreglo(query('select clase_id,asignatura_grupo_id,nombre_clase, desc_clase,unix_timestamp(fecha_clase) as fecha_clase from tr_clase where clase_id ='.$id_clase.' and estatus= 1'));
       
       if($arreglo_asistencia){
    		$json = array("status" => 1, "msg" => "Se encotró clase", "clase"=>$arreglo_asistencia);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró clase");
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
