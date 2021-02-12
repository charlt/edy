<?php
include '../../jwt.php';
include '../../headers.php';
include './class/fechaActividad.class.php';
try {

  db ('learning');

  $actividad = new FechaActividad();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
              $usuario = Auth::GetData(
                $jwt  
            );

          
          $id_materia_fecha_actividad = 0;
                    
          $arreglo = $actividad::consulta_actividad($id_materia, $id_actividad);

          
          if($actividad::numero()){

            $id_materia_fecha_actividad = $arreglo['materia_fecha_actividad_id'];
            $intento = $arreglo['intento_num'];
            $estatus_actividad_id = $arreglo['estatus_actividad_id'];
            $calificacion = $arreglo['calificacion'];
            $estatus_actividad = $arreglo['estatus_actividad'];

            if($id_tipo_actividad == 2 && $arreglo['estatus_actividad_id'] == 8){
              update('tr_materia_fecha_actividad',
              'estatus_actividad_id = 1',
              'materia_fecha_actividad_id = '.$id_materia_fecha_actividad);
              
              $estatus_actividad_id = 1;
              $estatus_actividad = "Borrador";
            }


          }else{            

            $actividad_vigente = num(query('select actividad_id from tr_actividad where (now() between fecha_inicio and fecha_fin or fecha_inicio is null or fecha_fin is null) and actividad_id ='.$id_actividad));

            if($actividad_vigente){
              $inserta = $actividad::inserta_actividad($id_actividad, $id_materia,1,$id_tipo_actividad);

              $id_materia_fecha_actividad = $inserta;
              $intento = 1;
              $estatus_actividad_id = 1;
              $estatus_actividad = "Borrador";
              $calificacion = null;
            }
            
          }

       
       //ingreso todas las carreras que tiene
       
       if($id_materia_fecha_actividad){
    		$json = array("status" => 1, "msg" => "Se encontró la actividad registrada", "materiaFechaActividad" =>  array("materia_fecha_actividad_id" => $id_materia_fecha_actividad, "intento_num" => $intento, "estatus_actividad_id" => $estatus_actividad_id, "estatus_actividad" => $estatus_actividad, "calificacion"=> $calificacion ) );
    	 }else{
         if(!$actividad_vigente){
          $json = array("status" => 0, "msg" => "Esta actividad no es vigente. ");
         }
         else{
          $json = array("status" => 0, "msg" => "No se encontró la actividad registrada");
         }
    		
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
 