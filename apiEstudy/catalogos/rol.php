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

    $query_rol = query('SELECT * FROM `cat_rol` ca where ca.estatus = 1 ');

       $json_rol = array();
       while ($arreglo_rol = arreglo($query_rol)){
          array_push($json_rol,$arreglo_rol);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_rol)){
    		$json = array("status" => 1, "msg" => "Se encontraron rol","rol" => $json_rol);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron rol");
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
