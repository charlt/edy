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

        $query = query('select clase_id, nombre_clase, unix_timestamp(fecha_clase) as fecha_clase  from tr_clase where estatus=1 and asignatura_grupo_id='.$id_asignatura_grupo);
        $json_clases = array();
        while($arreglo = arreglo($query)){
            $query_inasistencia = query('select persona_id from tr_inasistencia_clase where clase_id = '.$arreglo['clase_id']);
            $json_insasistencia=array();
            while($arreglo_asistencia = arreglo($query_inasistencia)){
                array_push($json_insasistencia,$arreglo_asistencia);
            }
            $arreglo['inasistencia'] = $json_insasistencia;
            array_push($json_clases, $arreglo);
        }

       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encotró clase", "clases"=>$json_clases);
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
