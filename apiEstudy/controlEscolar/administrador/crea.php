<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/administrador.class.php';


try {

  db('datosGenerales');


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      // $usuario = Auth::GetData(
      //       $jwt  
      //   );       
        
        
      if(isset($clave_admin)){
          $clave_admin = $clave_admin;
        }else{
          $clave_admin="";
        }

        if(isset($vista)){
          $vista = $vista;
        }else{
          $vista=0;
        }
        

        $admin = new Administrador();

        
        $nuevo_administrador = $admin::crea_administrador($nombre,$primer_apellido,$segundo_apellido,$curp,$email,$celular,$rfc,$fecha_nacimiento, $email,$clave_admin, $color,$clave_admin,1,$vista,$edicion,$id_area);

      if($nuevo_administrador['status']){
        $json = array("status" => 1, "msg" => "Se insertó el administrador correctamente");
      }else{
        $json = $nuevo_administrador;
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


