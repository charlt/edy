<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
        $jwt  
    );
    
    
    // $str = '[{"descripcion": "Descripcion 1",
    //   "error": "error", 
    //   "obligatorio":"1" ,
    //   "pregunta":"Pregunta 1",
    //    "regex":Expresion si es un tipo Texto,
    //   "tipo_campo":"1"},
    //    {"descripcion": "Descripcion 2",
    //     "error": "", 
    //     "obligatorio":"1" ,
    //     "pregunta":"Pregunta 2",
    //     "tipo_campo":"2"},
    //      {"descripcion": "Descripcion 3",
    //       "error": "error", 
    //       "obligatorio":"0" ,
    //       "pregunta":"Pregunta 3",
    //        "regex":"Expresion si es un tipo Texto",
    //       "tipo_campo":"1"}
    //    ]';

    $arreglo = json_decode(stripslashes($preguntas));


    $num_arreglo = sizeof($arreglo);
    for ($i=0; $i <$num_arreglo ; $i++) { 
      $regex = null;
      if(isset($arreglo[$i]->regex)) $regex = $arreglo[$i]->regex;
        
        $inserta = inserta('tr_campo_encuesta','pregunta, descripcion, encuesta_id, tipo_campo_id, obligatorio, regex, mensaje_error, estatus',
        '"'.$arreglo[$i]->pregunta.'","'.$arreglo[$i]->descripcion.'",'.$id_encuesta.','.$arreglo[$i]->tipo_campo.',"'.$arreglo[$i]->obligatorio.'","'.$regex.'", "'.$arreglo[$i]->error.'", 1');      
    }
            
    if($inserta){
      $json = array("status" => 1, "msg" => "Se guardaron campos correctamente");
      }else{
      $json = array("status" => 0, "msg" => "No se insertaron campos");
    }

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}