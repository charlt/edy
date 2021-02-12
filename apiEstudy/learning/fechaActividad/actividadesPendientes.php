<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('learning');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    
    
        $query_asignatura = query('select tm.asignatura_grupo_id from tr_materia_fecha_actividad tmfa
        join tr_materia tm on tm.materia_id = tmfa.materia_id 
        where actividad_id ='.$actividad_id.' and tm.materia_id = '.$materia_id);

        if(num($query_asignatura)){

          $arreglo_asignatura = arreglo($query_asignatura);

          $query_pendientes = query('select tmfa.* from tr_materia_fecha_actividad tmfa
          join tr_materia tm on tm.materia_id = tmfa.materia_id 
          join tr_actividad ta on  ta.actividad_id = tmfa.actividad_id
          where asignatura_grupo_id = '.$arreglo_asignatura['asignatura_grupo_id'].' and estatus_actividad_id = 3 and tipo_actividad_id != 4');


          $total_pendientes = num($query_pendientes);

          $pendiente_siguiente; 
          $pendiente_anterior;
          $json_pendientes = array();


          if($total_pendientes > 1) {
            while($arreglo_pendientes = arreglo($query_pendientes)){
              array_push($json_pendientes, $arreglo_pendientes);
            }

            // buscar el anterior y el siguiente
            for($i = 0; $i < $total_pendientes; $i++){

              //actividad donde esta posicionado actualmente
              if($json_pendientes[$i]['actividad_id'] == $actividad_id && $json_pendientes[$i]['materia_id'] == $materia_id){

                //si es el primer registro
                if($i == 0){
                  $pendiente_anterior =  $json_pendientes[$total_pendientes -1]; 
                }else{
                  $pendiente_anterior =  $json_pendientes[$i -1]; 
                }

                //si es el último registro
                if($i == $total_pendientes -1){
                  $pendiente_siguiente =  $json_pendientes[0]; 
                }else{
                  $pendiente_siguiente =  $json_pendientes[$i + 1]; 
                }
              }
            }


            $json = array("status" => 1,
              "pendientes"=> num($query_pendientes),
              "msg" => "Pendientes de la asignatura",
              "pendienteAnterior" =>  $pendiente_anterior,
              "pendienteSiguiente" => $pendiente_siguiente
            );

            
          }else //no hay ningun pendiente
            $json = array("status" => 1, "pendientes"=> 0,  "msg" => "no hay pendientes");

            
           

        }else{
          $json = array("status" => 0, "msg" => "No existe la actividad");  
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
