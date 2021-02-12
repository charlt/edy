<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/matricula.class.php';

try {

    $matricula = new Matricula();
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    $arreglo_consecutivo = arreglo(query('select ultimo_consecutivo from '.$GLOBALS['db_controlEscolar'].'.matricula'));
    $consecutivo = $arreglo_consecutivo['ultimo_consecutivo'];

    $matriculado = $matricula::generaClave($consecutivo);

    
    $json = array("status" => 1, "msg" => "Esta es la matrícula","matricula" => $matriculado);
     

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

/* Output header */

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
