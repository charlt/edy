<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_notasMate = query('SELECT * FROM tr_nota trn
    join tr_actividad tra ON trn.actividad_id = tra.actividad_id
    WHERE materia_id ='.$id_materia.' and docente_id ='.$id_docente.' order by orden');

    
       $json_notasMate= array();
       while ($arreglo_notasMate = arreglo($query_notasMate)){
          array_push($json_notasMate,$arreglo_notasMate);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_notasMate)){
    		$json = array("status" => 1, "msg" => "Se encontro las Notas","notasMateria" => $json_notasMate);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Notas");
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