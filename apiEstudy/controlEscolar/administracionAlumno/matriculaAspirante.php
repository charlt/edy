<?php

include '../../jwt.php';
include '../../headers.php';
include '../../seguimiento/class/aspirante.class.php';
include '../../controlEscolar/class/matricula.class.php';
include '../../extras/correo/class/correo.class.php';

try {
  
  db('seguimiento');

  $aspirante = new Aspirante();
  $correo = new Correo();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );
    
    if(empty($id_campus)){
      $id_campus="null";
    }

    $matriculado =  $aspirante::transicion_aspirante($id_aspirante,$matricula, $id_campus);

    if($matriculado['status']){
      $query_carrera = query('select carrera from '.$GLOBALS['db_seguimiento'].'.tr_aspirante ta join '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc on tc.carrera_id = ta.carrera_id where ta.aspirante_id = '. $id_aspirante);
      $arreglo_carrera = arreglo($query_carrera);
      if($GLOBALS['produccion'] == 1)
        $correo::matriculacion_exitosa($id_aspirante,$matriculado['matricula'],$arreglo_carrera['carrera']);
        
      $json = array("status" => 1, "msg" => "Se matriculó y envió correo con matricula correctamnte");
     }else{
      $json = array("status" => 0, "msg" => "No se crearón alumnos");
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
