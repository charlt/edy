<?php
include '../../jwt.php';
include '../../headers.php';
try {

    db('datosGenerales');
  
    if($_SERVER['REQUEST_METHOD'] == "GET"){
      foreach($_GET as $clave => $valor){
        ${$clave} = escape_cara($valor);
      }
      
        $usuario = Auth::GetData(
              $jwt  
          );


$contraseña=arreglo(query('SELECT password from usuarios where usuario_id='.$id_usuario));
// print_r($contraseña);
if (password_verify("$password", $contraseña['password'])) {
    $json = array("status" => 1, "msg" => "Contraseña Correcta");
}else{
    $json = array("status" => 0, "msg" => "Contraseña Incorrecta");

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

?>