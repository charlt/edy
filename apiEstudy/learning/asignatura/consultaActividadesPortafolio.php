<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/asignatura.class.php';
try {
  
  db ('learning');

  $Asignatura = new Asignatura();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
          $jwt  
      );

    
      $query = $Asignatura::consultaModulos($id_asignatura);
      $json_asignaturas= array();
      while ($arreglo_modulos = arreglo($query)){
         $query_actividades = query('select ta.actividad_padre_id, cm.modulo_id, cm.modulo_nombre, ta.actividad_id, ta.actividad_nombre, ta.ponderacion, ta.fecha_inicio, ta.fecha_fin
         from tr_actividad ta where modulo_id ='.$arreglo_modulos['modulo_id'].' and portafolio = 1');

            while($arreglo_actividades= arreglo($query_actividades)){ 
              
              $arreglo_actividades['modulo_id']=$arreglo_modulos['modulo_id'];
              $arreglo_actividades['modulo_nombre']=$arreglo_modulos['modulo_nombre'];
              $actividades++;

              array_push($json_asignaturas,$arreglo_actividades);

         }  
      }

    
       $json_asignaturas= array();
       while ($arreglo_asignaturas = arreglo($query)){
          array_push($json_asignaturas,$arreglo_asignaturas);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron Actividades","Actividades" => $json_asignaturas);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Actividades");
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