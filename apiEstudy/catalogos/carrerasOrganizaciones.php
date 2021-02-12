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

    $query_carreras = query('SELECT cc.carrera_id,cc.institucion_id, cc.nivel_estudios_id, cc.carrera_clave, cc.carrera, cc.imagen_url, cc.objetivo,
    cne.nivel_estudios_id, cne.nivel_estudios_clave, cne.nivel_estudios
    FROM tr_carrera cc
        join cat_nivel_estudios cne on cc.nivel_estudios_id = cne.nivel_estudios_id  
    where institucion_id ='.$usuario->id_institucion.' and cc.estatus = 1');

       $json_carreras = array();
       while ($arreglo_carreras = arreglo($query_carreras)){
          array_push($json_carreras,$arreglo_carreras);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_carreras)){
    		$json = array("status" => 1, "msg" => "Se encontraron carreras","carreras" => $json_carreras);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron carreras");
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
