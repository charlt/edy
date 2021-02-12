<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/asignaturagrupo.class.php'; 

try {
  db('learning');
  $grupo = new AsignaturaGrupo();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    // $usuario = Auth::GetData(
    //       $jwt  
    //   );       

    $modulos_calificados = $grupo::calificaMateria($id_asignatura_grupo,$revision);
  
  if($modulos_calificados){
    $json = array("status" => 1, "msg" => "Se insertó calificación correctamente");
    }else{
    $json = array("status" => 0, "msg" => "No se logró insertar calificación");
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
