<?php
include '../../jwt.php';
include '../../headers.php';
try {

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    $usuario = Auth::GetData(
      $jwt  
  );       

    $query_organizaciones = query('select carrera_id from estudyfe.inter_carrera_organizacion where institucion_id='.$usuario->id_institucion); 
    $json_carr=array();

    while($arreglo_org = arreglo($query_organizaciones)){
      array_push($json_carr,$arreglo_org);
    }
    if(num($query_organizaciones)){
      $json = array("status" => 1, "msg" => "Se encontraron carreras","organizaciones" => $json_carr);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron carreras");
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
