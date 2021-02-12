<?php
include '../jwt.php';
include '../headers.php';

try {
  
  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );
        
    $query = query('SELECT videoconferencia_id,nombre,descripcion,UNIX_TIMESTAMP(fecha_inicio) as fecha_inicio,UNIX_TIMESTAMP(fecha_fin) as fecha_fin, url_descarga, 
      estatus as estatus_registro FROM tr_videoconferencia 
      WHERE  asignatura_grupo_id = '.$asignatura_grupo_id.' and estatus != 0');

    $json_videoconferencia = array();
    while($arreglo = arreglo($query)){
      array_push($json_videoconferencia,$arreglo);
    }
  

    if(num($query) > 0 ){
      $json = array("status" => 1, "msg" => "Lista de videoconferencias","videoconferencias" => $json_videoconferencia);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron videoconferencias");
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
