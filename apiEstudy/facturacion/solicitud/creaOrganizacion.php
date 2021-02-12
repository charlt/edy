<?php
include '../../jwt.php';
include '../../headers.php';
use Facturapi\Facturapi;
require_once('../../vendor/autoload.php');
$facturapi = new Facturapi( "sk_user_jz8LYm2gWNdP7pkxlGwzBEA6KROwryZx" );
try {
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
      $usuario = Auth::GetData(
            $jwt  
        );       
        $organizationNew = $facturapi->Organizations->create(array(
            "name" => $nombreComercial
        ));
        $arregloCarreras=explode("|",$carrerasLigadas);
        $organization = $facturapi->Organizations->updateLegal(
            $organizationNew->id, array(
            "name"=>$nombreComercial,
              "legal_name" =>$nombreLegal,
              "tax_system" => $regimenFiscal,
              "address" => array(
                "exterior" => $numex,
                "zip" => $cp,
                "street" => $calle
              ) 
            )
          );
          foreach($arregloCarreras as $item) {
            $arregloItem=explode("/",$item);
            if($arregloItem[0]){
                $inserta_solicitud = inserta('estudyfe.inter_carrera_organizacion','carrera_id, organizacion_id, estatus, institucion_id',
                ''.$arregloItem[0].',"'.$organizationNew->id.'",1,'.$usuario->id_institucion);
            }
        }
        $inserta_solicitud = inserta('estudyfe.inter_organizacion_institucion',' organizacion_id, estatus, institucion_id',
        '"'.$organizationNew->id.'",1,'.$usuario->id_institucion);
        $json = array("status" => 1, "msg" => "Se insertó la solicitud correctamente","req"=>sizeOf($arregloCarreras),"carr"=>gettype($arregloCarreras));


  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}


