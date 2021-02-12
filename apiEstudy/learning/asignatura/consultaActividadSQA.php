<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    // if(isset($id_plan_estudios))
    //   $cond_plan_estudios = ' and plan_estudio_id = '.$id_plan_estudios;
    // else
    //   $cond_plan_estudios = '';
    

      $usuario = Auth::GetData(
            $jwt  
        );

    $query = query('SELECT actividad_id, asignatura_id from
    tr_actividad ta
    join inter_modulos_asignaturas ima on ima.modulo_id = ta.modulo_id
    where ta.tipo_actividad_id = 4 and ima.asignatura_id ='.$id_asignatura.' and ta.estatus=1' );

      //  $arreglo = arreglo($query);
       

       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron actividades SQA en la asignatura","actividadesSQA" => num($query));
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron actividades SQA");
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
