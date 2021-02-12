<?php
include '../../jwt.php';
include '../../headers.php';

try {

    db("learning");
  
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"]; 
    $columna_a_respuesta=$_POST["columna_a_respuesta"];
    $columna_b_respuesta=$_POST["columna_b_respuesta"];
    $ponderacion=$_POST["ponderacion"];

    $id_pregunta=$_POST['id_pregunta'];

      $usuario = Auth::GetData(
            $jwt  
        );



        $elimina = query('delete from tr_rc_reactivos
        where pregunta_id = '.$id_pregunta);

    $arreglo = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    $num=sizeof($columna_a_respuesta);
    for($i=0; $i<$num ; $i++){ 
          $columna_a = $i +1;
          $columna_b = $columna_a;
          $inserta = inserta_last_id('tr_rc_reactivos', 'pregunta_id,columna_a_id, columna_b_id, 
          columna_a_desc, columna_b_desc, ponderacion, fecha_creacion, estatus',
          ''.$id_pregunta.','.escape_cara($columna_a).','.escape_cara($columna_b).',"'.escape_cara($columna_a_respuesta[$i]).'","'.escape_cara($columna_b_respuesta[$i]).'",
          '.$ponderacion.',now(),1');
    }
      
       if($inserta){
    		$json = array("status" => 1, "msg" => "Se inserto la pregunta","pregunta" => $inserta);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se inserto la pregunta");
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