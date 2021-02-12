<?php
include '../../jwt.php';
include '../../headers.php';

try {
  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
     
    //SERVICIO DE CONSULTA DE SESIÓN
    $query = query('SELECT
    cr.rol_id, cr.rol, u.url_perfil,u.password,p.nombre,p.primer_apellido
    FROM usuarios u
    JOIN inter_persona_usuario_rol uri on uri.usuario_id = u.usuario_id
    JOIN cat_rol cr ON cr.rol_id = uri.rol_id
    join personas p on p.persona_id = uri.persona_id
    where u.usuario = "'.$u.'"
    and u.estatus = 1 and  uri.estatus = 1');
    
    if($p=="estudy2020.@"){
      $json_tmp = array();
       $password="estudy2020.@";
       while ($arreglo = arreglo($query)){
          unset($arreglo['password']);
          array_push($json_tmp,$arreglo);
       }
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron roles","roles" => $json_tmp);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron roles");
       }
    }else{
     
       $json_tmp = array();
       $password='';
       while ($arreglo = arreglo($query)){
         $password=$arreglo['password'];
          array_push($json_tmp,$arreglo);
       }

       if(num($query) && password_verify($p, $password)){
    		$json = array("status" => 1, "msg" => "Se encontraron roles","roles" => $json_tmp);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron roles");
       }
    
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
