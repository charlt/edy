<?php
include '../../jwt.php';
include '../../headers.php';
use Facturapi\Facturapi;
require_once('../../vendor/autoload.php');
$facturapi = new Facturapi( "sk_user_jz8LYm2gWNdP7pkxlGwzBEA6KROwryZx" );
try {

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    $usuario = Auth::GetData(
      $jwt  
  );       

    $query_organizaciones = query('select organizacion_id from estudyfe.inter_organizacion_institucion where institucion_id='.$usuario->id_institucion.' order by fecha_creacion desc'); 
    $json_org=array();

    while($arreglo_org = arreglo($query_organizaciones)){
      $organization = $facturapi->Organizations->retrieve($arreglo_org['organizacion_id']);
      array_push($json_org,$organization);
    }
    if(num($query_organizaciones)){
      $json = array("status" => 1, "msg" => "Se encontraron organizaciones","organizaciones" => $json_org);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron organizaciones");
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
