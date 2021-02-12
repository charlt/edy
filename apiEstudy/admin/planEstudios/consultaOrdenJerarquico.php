<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
     

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_ordenJerarquico = query('SELECT  ipoa.*,coj.*
    FROM inter_plan_orden ipoa
    join cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipoa.orden_jerarquico_id
    WHERE ipoa.plan_estudio_id = '.$id_plan_estudio.' and coj.estatus =1 and ipoa.estatus=1
    order by coj.orden_jerarquico_id
    ');
    
       $json_ordenJerarquico = array();
       while ($arreglo_ordenJerarquico = arreglo($query_ordenJerarquico)){

          if ($arreglo_ordenJerarquico['orden_jerarquico_id'] != null){
            $query_asignatura = query('SELECT  ca.*,ipoa.orden_asignatura_id
            FROM cat_asignaturas ca
            join inter_orden_asignatura ipoa on ipoa.asignatura_id = ca.asignatura_id
            WHERE plan_orden_id = '.$arreglo_ordenJerarquico['plan_orden_id'].'
            and ipoa.estatus = 1 and ca.estatus = 1');

            $json_asignatura = array();
            while ($arreglo_asignatura = arreglo($query_asignatura)){
              array_push($json_asignatura,$arreglo_asignatura); 
            }

            $arreglo_ordenJerarquico['asignaturas'] = $json_asignatura;

          }else{
            $arreglo_ordenJerarquico['asignaturas'] = [];
          }


          array_push($json_ordenJerarquico,$arreglo_ordenJerarquico);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_ordenJerarquico)){



    		$json = array("status" => 1, "msg" => "Se encontraron ordenes jerarquicos","ordenJerarquico" => $json_ordenJerarquico);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron ordenes jerarquicos");
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
