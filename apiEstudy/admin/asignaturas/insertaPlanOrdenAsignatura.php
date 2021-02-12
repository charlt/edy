<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        if($id_plan_orden != 'null'){
          $inserta = inserta('inter_orden_asignatura',
          'plan_orden_id, asignatura_id,asignatura_origen,estatus',
          ''.$id_plan_orden.','.$id_asignatura.','.$origen.',1');
        }else{
          $query_plan_orden = query('SELECT plan_orden_id from inter_plan_orden where plan_estudio_id = '.$plan_estudio_id.' and orden_jerarquico_id='.$orden_jerarquico_id);//se obtiene el plan_orden_id nuevo
          if($query_plan_orden){
            $arreglo_plan_estudios = arreglo($query_plan_orden);
            $inserta = inserta('inter_orden_asignatura',
            'plan_orden_id, asignatura_id,asignatura_origen,estatus',
            ''.$arreglo_plan_estudios['plan_orden_id'].','.$id_asignatura.','.$origen.',1');
          }
          // while ($arreglo_plan_estudios = arreglo($query_plan_orden)){
          //   array_push($json_plan_orden,$arreglo_plan_estudios);
          // }
        }
       
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se vinculó la asignatura correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró vincular");
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
