<?php
include '../jwt.php';
include '../headers.php';

try {

  db("datosGenerales");

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $query_nivelestudios = query('SELECT * FROM cat_nivel_estudios where estatus=1');

       $json_nivelestudios = array();
       while ($arreglo_nivelestudios = arreglo($query_nivelestudios)){
          array_push($json_nivelestudios,$arreglo_nivelestudios);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_nivelestudios)){
    		$json = array("status" => 1, "msg" => "Se encontraron nivel estudios","nivelEstudios" => $json_nivelestudios);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron nivel de estudios");
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
