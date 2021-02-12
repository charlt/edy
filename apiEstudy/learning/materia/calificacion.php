<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
      $query_calificacion = query('SELECT taf.actividad_id, actividad_nombre, alumno_id, calificacion, ponderacion
      FROM tr_alumno_fecha_actividad taf 
      join tr_actividad ta on ta.actividad_id = taf.actividad_id 
      join inter_modulos_asignaturas ima on ima.modulo_id = ta.modulo_id 
      where alumno_id = '.$id_alumno.' and ima.asignatura_id ='.$id_asignatura);
      
      // $array = array();
      $resultado = 0;     

      for ($i=0; $i <num($query_calificacion) ; $i++) {
        $arreglo_calificacion = arreglo($query_calificacion);
        $resultado += ($arreglo_calificacion['calificacion'] * $arreglo_calificacion['ponderacion']); 

        //array_push($array, $resultado);
        
      }
      //$suma = array_sum($array);
      // echo $resultado;
      $resultado1=$resultado/100;

       if($resultado){
    		$json = array("status" => 1, "msg" => "Calificación de la materia", "Calificacion"=>$resultado1);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró asignatura");
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