<?php
include '../jwt.php';
include '../headers.php';

db('datosGenerales');

try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_asignaturas = query('SELECT * FROM `cat_tipo_asignaturas` where estatus = 1');

       $json_asignaturas = array();
       while ($arreglo_asignaturas = arreglo($query_asignaturas)){
          array_push($json_asignaturas,$arreglo_asignaturas);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_asignaturas)){
    		$json = array("status" => 1, "msg" => "Se encontraron asignaturas","asignaturas" => $json_asignaturas);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron asignaturas");
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