<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    // $usuario = Auth::GetData(
    //     $jwt  
    // );

    $query_paso = query('select count(tas.aspirante_id) as num_aspirantes,paso,
    tc.carrera ,tas.carrera_id, tas.estatus as estatus_aspirante
    from tr_aspirante tas  
    join '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc on tc.carrera_id = tas.carrera_id
    where tc.estatus= 1 and tas.estatus = 1 group by carrera_id,paso, tas.estatus order by carrera_id, paso');
    $json_aspirantes = array();
    while($arreglo = arreglo($query_paso)){
      switch ($arreglo['paso']) {
        case 0:
          $arreglo['paso_nombre']='Registro inicial';
        break;
        case 1:
          $arreglo['paso_nombre']='Llenado de solicitud de información';
        break;
        case 2:
          $arreglo['paso_nombre']='Aceptación de términos';
        break;
        case 3:
          $arreglo['paso_nombre']='Documentación completa';
        break;
        case 4:
          $arreglo['paso_nombre']='Pago completado';
        break;
                            
      }
        array_push($json_aspirantes, $arreglo);
    }

   if(num($query_paso)){
      $json = array("status" => 1, "msg" => "Se encontraron aspirantes","aspirantes"=>$json_aspirantes);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron aspirantes");
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
