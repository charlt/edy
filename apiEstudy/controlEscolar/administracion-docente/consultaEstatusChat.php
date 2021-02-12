<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('controlEscolar');
  

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      
         
        

        $query = query('select activa_chat,docente_id from tr_docente td where estatus = 1 ');

        $activos = $inactivos = 0;

        while($arreglo = arreglo($query)){
          if($arreglo['activa_chat'] == 1){
            $activos++;
          }else if($arreglo['activa_chat'] == 0){
            $inactivos++;
          }

        }

        
      if($activos > 0 ){
        $situacion = 1;//solo activos
      }else if($inactivos > 0 ){
        $situacion = 0; //solo inactivos
      }
      
      if($inactivos > 0  && $activos > 0) {
        $situacion = -1;
      }

        if(num($query)){
          $json = array("status" => 1, "msg" => "situacion del chat en docentes", "activos"=> $activos, "inactivos"=> $inactivos,"situacion"=>$situacion);
        }else{
          $json = array("status" => 0, "msg" => "No se logro actualizar");
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