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

    $query_personas = query('SELECT  u.usuario_id, ipu.persona_id, nombre, primer_apellido, segundo_apellido, curp, u.email,
    usuario, p.fecha_creacion, p.usuario_crea, u.url_perfil, p.estatus, rol_id, sexo_id, rfc, fecha_nacimiento 
    FROM personas p
    join inter_persona_usuario_rol ipu on ipu.persona_id = p.persona_id
    join usuarios u on u.usuario_id = ipu.usuario_id 
    WHERE u.usuario_id ='.$id_usuario.' and  ipu.rol_id = '.$id_rol.' p.estatus = 1');

    $json_personas = array();
    while ($arreglo_usuario = arreglo($query_personas)){
      array_push($json_personas,$arreglo_usuario);
    }
       
             
    if(num($query_personas)){
    $json = array("status" => 1, "msg" => "Se encontró usuario","usuario" => $json_personas);
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
