<?php
include '../../jwt.php';
include '../../headers.php';
include './class/cleaver.class.php';


try {
  
  db('seguimiento');
  $cleaver=new Cleaver();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $consulta_reactivos = query('SELECT cleaver_aspirante_id from  inter_cleaver_aspirante where aspirante_id='.$id_aspirante);
    $contestadas = num($consulta_reactivos);

    $sector=$cleaver::sector($contestadas);


    
    if(num($consulta_reactivos)){
      $json = array("status" => 1, "msg" => "Numero total de preguntas", "preguntas"=>$contestadas, "sector"=>$sector);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron preguntas", "preguntas"=>0,"sector"=>0);
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
