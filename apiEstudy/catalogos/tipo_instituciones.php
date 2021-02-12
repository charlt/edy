<?php
include '../jwt.php';
include '../headers.php';

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_tipo_instituciones = query('SELECT tipo_institucion_id, tipo_institucion, tipo_institucion_clave,
    fecha_creacion, estatus
    FROM cat_tipo_instituciones where estatus=1');

       $json_tipo_instituciones = array();
       while ($arreglo_tipo_instituciones = arreglo($query_tipo_instituciones)){
          array_push($json_tipo_instituciones,$arreglo_tipo_instituciones);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_tipo_instituciones)){
    		$json = array("status" => 1, "msg" => "Se encontraron instituciones","instituciones" => $json_tipo_instituciones);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron instituciones");
    	 }

    //QUERY Y RESULTADO AQUI
    //
}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

/* Output header */

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
