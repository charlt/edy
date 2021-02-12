<?php
include '../jwt.php';
include '../headers.php';

try {

  db ('datosGenerales');
  
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    

      $usuario = Auth::GetData(
            $jwt  
        );
    
    $query_plan_estudios = query('SELECT 
    cpe.*,
    ctp.periodo,
    cc.carrera_id,cc.carrera,
    ctpe.tipo_plan_estudio
    FROM tr_plan_estudios cpe
    join cat_tipo_plan_estudios ctpe on cpe.tipo_plan_estudio_id = ctpe.tipo_plan_estudio_id
    join cat_tipo_periodo ctp on ctp.tipo_periodo_id = cpe.tipo_periodo_id
    join tr_carrera cc on cc.carrera_id = cpe.carrera_id
     where institucion_id ='.$usuario->id_institucion.' and cpe.estatus = 1 ');

     
    
  
       $json_plan_estudios = array();
       while ($arreglo_plan_estudios = arreglo($query_plan_estudios)){
          array_push($json_plan_estudios,$arreglo_plan_estudios);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_plan_estudios)){
    		$json = array("status" => 1, "msg" => "Se encontraron planes de estudio","planEstudio" => $json_plan_estudios);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron planes de estudio");
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