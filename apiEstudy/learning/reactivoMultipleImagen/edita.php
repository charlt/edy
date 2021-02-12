<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';
try {
 db ('learning');

 $archivo = new Archivo();



  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
           $jwt  
        );


        $edita = update('tr_om_reactivos', 
        'ponderacion = '.$ponderacion.',
        retroalimentacion ="'.$retroalimentacion.'",
        fecha_actualiza = now()',
        'reactivo_id ='.$id_reactivo);

        $documento=$archivo::guardar_archivo(
            "asignaturas/preguntas_multiples", //la ruta a insertar
            $id_reactivo, //id de la ruta
            $_FILES["imagen"],//la variable tipo file donde viene el archivo
            "imagen",//nombre del archivo
            null, 
            null); //tamaño de la extensiomn    

        if($documento['status'] == 1){          
            $edita=update('tr_om_reactivos','contenido = "'.$documento['url'].'"','reactivo_id='.$id_reactivo );
            $json = array("status" => 1, "msg" => "opcion múltiple con imagen guardada correctamente", "idReactivo" => $id_reactivo);
        }else{
            $archivo::elimina_archivo($documento['url']);
            $json = $documento;
        }      

/* Output header */
}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


 
?>

