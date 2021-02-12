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


        $inserta = inserta_last_id('tr_om_reactivos', 
        'pregunta_id,ponderacion,retroalimentacion,
          fecha_creacion,estatus',
        $id_pregunta.','.$ponderacion.',"'.$retroalimentacion.'",now(),1');


        $documento=$archivo::guardar_archivo(
            "asignaturas/preguntas_multiples", //la ruta a insertar
            $inserta, //id de la ruta
            $_FILES["imagen"],//la variable tipo file donde viene el archivo
            "imagen",//nombre del archivo
            null, 
            null); //tamaño de la extensiomn    

        if($documento['status'] == 1){          
            $edita=update('tr_om_reactivos','contenido = "'.$documento['url'].'"','reactivo_id='.$inserta );
            $json = array("status" => 1, "msg" => "opcion múltiple con imagen guardada correctamente", "idReactivo" => $inserta);
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

