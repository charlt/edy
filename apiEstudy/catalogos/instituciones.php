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

    $query_instituciones = query('SELECT institucion_id, institucion_clave, institucion, ci.tipo_institucion_id, ci.estatus, tipo_institucion
    FROM cat_instituciones ci
    join cat_tipo_instituciones cti on cti.tipo_institucion_id = ci.tipo_institucion_id
    where ci.estatus = 1');

       $json_instituciones = array();
       while ($arreglo_instituciones = arreglo($query_instituciones)){
          array_push($json_instituciones,$arreglo_instituciones);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_instituciones)){
    		$json = array("status" => 1, "msg" => "Se encontraron instituciones","instituciones" => $json_instituciones);
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
