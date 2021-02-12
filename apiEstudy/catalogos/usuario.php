<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    
    $query_usuario = query('SELECT  u.usuario_id,p.persona_id, nombre, primer_apellido, segundo_apellido, curp, u.email,usuario,
    cr.rol_id, GROUP_CONCAT(distinct cr.rol order by cr.rol) as rol
    FROM usuarios u
    JOIN inter_persona_usuario_rol uri on uri.usuario_id =  u.usuario_id 
    join personas p  on uri.persona_id =  p.persona_id
    JOIN cat_rol cr
    ON cr.rol_id = uri.rol_id
    WHERE u.estatus = 1 and uri.estatus = 1 group by p.persona_id
    LIMIT '.$limite);

    $json_usuario = array();
    while($arreglo_usuario = arreglo($query_usuario)){
      array_push($json_usuario,$arreglo_usuario);
    }
  

    if(num($query_usuario) > 0 ){
      $json = array("status" => 1, "msg" => "Se encontraron usuarios","usuario" => $json_usuario);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron usuarios");
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
