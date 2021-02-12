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

        
      $actividades = 0;
      $query = $Asignatura::consultaModulos($id_asignatura);
      $json_asignaturas= array();
      while ($arreglo_modulos = arreglo($query)){
         $query_actividades = query('select ta.actividad_padre_id, ta.actividad_id, ta.actividad_nombre, 
         ta.ponderacion, ta.tipo_actividad_id, ta.fecha_inicio, ta.fecha_fin,ta.tipo_calificacion from '.$GLOBALS['db_learning'].'.tr_actividad ta where modulo_id ='.$arreglo_modulos['modulo_id'].' and estatus =1 and tipo_actividad_id != 1' );

            while($arreglo_actividades= arreglo($query_actividades)){ 
  
              $arreglo_actividades['modulo_id']=$arreglo_modulos['modulo_id'];
              $arreglo_actividades['modulo_nombre']=$arreglo_modulos['modulo_nombre'];
              $actividades++;

              array_push($json_asignaturas,$arreglo_actividades);

         }  


      }
       
       if($actividades > 0){
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