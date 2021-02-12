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

    $query = query('SELECT tipo_reporte_id, clave_tipo_reporte, descripcion_tipo_reporte, 
    fecha_creacion, estatus
    FROM cat_tipo_reporte where estatus=1');

       $json = array();
       while ($arreglo = arreglo($query)){
          array_push($json,$arreglo);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron tipos de reportes","reportes" => $json);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron reportes");
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
