
<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/aspirante.class.php';

try {
  
  db('seguimiento');

  $aspirante=new Aspirante();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $modifica_carrera = update('tr_aspirante','carrera_id ='.$id_carrera, 'aspirante_id='.$id_aspirante);

    if($modifica_carrera){
      $json = array("status" => 1, "msg" => "Se modificó carrera correctamente");
     }else{
      $json = array("status" => 0, "msg" => "No se modificó");
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
