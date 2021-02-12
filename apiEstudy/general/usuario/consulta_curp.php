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
        //usuario_id, nombre, primer_apellido, segundo_apellido, curp, email,
        //usuario, fecha_creacion, fecha_actualiza, usuario_crea, usuario_actualiza, estatus
    $query_usuario = query('SELECT  u.usuario_id, nombre, primer_apellido, segundo_apellido, curp, p.email,
    usuario, u.fecha_creacion, u.fecha_actualiza, u.usuario_crea, u.usuario_actualiza, u.estatus
    FROM personas p
    join inter_persona_usuario_rol ipu on p.persona_id = ipu.persona_id
    join usuarios u on ipu.usuario_id = u.usuario_id
    WHERE curp ="'.$curp.'" and u.estatus = 1 and p.estatus = 1');
    
    $json_usuario = array();
    while ($arreglo_usuario = arreglo($query_usuario)){
      array_push($json_usuario,$arreglo_usuario);
    }
       
             
       if(num($query_usuario)){
    		$json = array("status" => 1, "msg" => "Bienvenido a tu plataforma","usuario" => $json_usuario);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró usuario");
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
