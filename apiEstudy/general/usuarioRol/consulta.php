<?php
include '../../jwt.php';
include '../../headers.php';

try {
  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    
     
    //SERVICIO DE CONSULTA DE SESIÓN
    $query = query('SELECT
    cr.rol_id, cr.rol, u.url_perfil
    FROM usuarios u
    JOIN inter_persona_usuario_rol uri on uri.usuario_id = u.usuario_id
    JOIN cat_rol cr ON cr.rol_id = uri.rol_id
    where uri.persona_id = '.$id_persona.'
    and u.estatus = 1 and  uri.estatus = 1');
    
      $json_tmp = array();

       while ($arreglo = arreglo($query)){
          array_push($json_tmp,$arreglo);
       }

       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron roles","roles" => $json_tmp);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron roles");
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
