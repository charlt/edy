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

    
    $query = query('SELECT  tm.materia_id, cast(date_format(fecha_actividad,"%m")as SIGNED)as mes,
    cast(date_format(fecha_actividad,"%c") as SIGNED) as actividades_mes, tm.estatus 
    from tr_materia_fecha_actividad tmfa
    join tr_materia tm on tm.materia_id = tmfa.materia_id 
    where tm.alumno_id= '.$id_usuario.' and tmfa.estatus=1  and tm.estatus_materia_id not in (2,5,6) and fecha_actividad is not null group by mes asc');

    $json_materia = array();
    while ($arreglo = arreglo($query)){

      $arreglo_mes=['ENERO','FEBRERO','MARZO','ABRIL', 'MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
      $mes = $arreglo_mes[$arreglo['mes']-1];

      $arreglo['mes']=$mes;
      array_push($json_materia,$arreglo);
      
    }

    //    print_r($json_materia);
              
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron actividades","Mes" =>$json_materia);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron actividades");
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
