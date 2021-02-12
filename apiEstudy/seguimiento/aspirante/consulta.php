<?php
include '../../jwt.php';
include '../../headers.php';


db ('seguimiento');


try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        // $query=query('select ta.*,carrera from tr_aspirante ta join '.$GLOBALS["db_datosGenerales"].'.tr_carrera tc on tc.carrera_id = ta.carrera_id where aspirante_id = '.$id_aspirante);
        $query = query('SELECT ta.*, carrera, iap.asesor_id, p.nombre AS nombre_tutor, p.primer_apellido AS primer_apellido_tutor, 
          p.segundo_apellido AS segundo_apellido_tutor, asesor_persona_id, clave_asesor FROM tr_aspirante ta 
          JOIN '.$GLOBALS["db_datosGenerales"].'.tr_carrera tc ON tc.carrera_id = ta.carrera_id 
          LEFT JOIN inter_asesor_persona iap ON ta.aspirante_id = iap.persona_id
          LEFT JOIN '.$GLOBALS["db_datosGenerales"].'.personas p ON iap.asesor_id = p.persona_id
          LEFT JOIN tr_asesor tas ON iap.asesor_id = tas.asesor_id
          WHERE aspirante_id = '.$id_aspirante);

        

        $arreglo = arreglo($query);
        $arreglo['seleccion_asesor'] = $GLOBALS['seleccion_asesor']; 

        if(num($query)){
          $json = array("status" => 1, "msg" => "Se encontro información de aspirante","aspirante"=>$arreglo);
        }else{
          $json = array("status" => 0, "msg" => "No se encontró la información");
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