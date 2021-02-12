<?php
include '../../jwt.php';
include '../../headers.php';
include '../../general/bitacoraAccion/class/bitacoraAccion.class.php';

try {

  db('datosGenerales');

  $accion = new bitacoraAccion();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
        //MD5() sirve para incriptar contraseña
        $pass_cifrado= password_hash("$contraseña", PASSWORD_BCRYPT, array('cost'=>12));

        $edita = update('usuarios',
        'password = "'.$pass_cifrado.'"',
        'usuario_id = '.$id_usuario);

        if($edita){
          $inserta_accion =  $accion::insertaAccion(1, $id_usuario);
        }
               
               
       //ingreso todas las escuelas que tiene este profesor       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó el usuario correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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
