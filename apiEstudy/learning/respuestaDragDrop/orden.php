<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
   db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
      $usuario = Auth::GetData(
            $jwt  
        );
   
        $query_tmp = query('SELECT dr2.respuesta_id, dr1.reactivo_id,dr1.reactivo_desc, dr2.orden
          FROM tr_dd_reactivos dr1
          JOIN  tr_dd_respuesta dr2  on dr1.reactivo_id = dr2.reactivo_id
          where materia_fecha_actividad_id = '.$id_materia_fecha_actividad.' and pregunta_id = '.$id_pregunta.' and dr1.estatus = 1 order by orden');

        $query_respuesta = query('select orden from tr_dd_respuesta where respuesta_id ='.$id_respuesta);

        $arreglo_respuesta = arreglo($query_respuesta);

        $orden_anterior = $arreglo_respuesta['orden'];
        
        //2do paso; update del parametro id_actividad donde se actualiza el orden nuevo
        $update = update('tr_dd_respuesta', 'orden = '.$orden_nuevo.'', 'respuesta_id ='.$id_respuesta);
        //3er paso: usar este while para comparar los valores de la activdad con el orden nuevo
        $json= array();
        while ($arreglo = arreglo($query_tmp)){
            //aqui se van a pintar los valores del orden por arreglo
            if($arreglo['respuesta_id'] != $id_respuesta){
                // echo $arreglo['orden'].'='.$orden_anterior.'?'.$arreglo['orden'].'='.$orden_nuevo.'?,';     

            //4to paso comparaciòn del orden anterior con el arreglo[orden]
            if($arreglo['orden'] > $orden_anterior ){
                if($arreglo['orden'] > $orden_nuevo ){
                    // echo 'queda igual';
                }else{
                    // $arreglo['orden']=orden($arreglo['orden']-1);
                    $resta=$arreglo['orden']-1;
                    $update=update("tr_dd_respuesta","orden='".$resta."'","respuesta_id='".$arreglo['respuesta_id']."'");
                    // echo 'se resta';
                }
            }else{
              if($arreglo['orden'] < $orden_nuevo){
                // echo 'queda igual';
              }else{
                //   $arreglo['orden']=orden($arreglo['orden']+1);
                $suma=$arreglo['orden']+1;
                $update=update("tr_dd_respuesta","orden='".$suma."'","respuesta_id='".$arreglo['respuesta_id']."'");
                // echo 'se suma'.'<br>';
              }  
            }

        
        }else{
            // echo ' no hace nada';
        }
    }
            
            

        
       if(1){
    		$json = array("status" => 1, "msg" => "Se ordenó correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró ordenar");
       }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  //  Output header 

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
