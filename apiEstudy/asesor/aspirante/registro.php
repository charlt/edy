<?php
include '../../jwt.php';
include '../../headers.php';
include '../../seguimiento/class/aspirante.class.php';
include '../../extras/correo/class/correo.class.php';

try {
  
  db('datosGenerales');
  $aspirante = new Aspirante();  
  $correo =new Correo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
      $jwt  
    );

    $password= mt_rand(10000,999999);
    

    $resultado = $aspirante::crea_aspirante($nombre,$primer_apellido,$segundo_apellido,$curp,$email,$celular,"","",$email,$password, $color,$carrera_id,$password);


    if($resultado['status']){
      //LISTO PARA ENVIAR CORREO

      $inserta_asesor_persona = inserta($GLOBALS['db_seguimiento'].'.inter_asesor_persona','persona_id,asesor_id,estatus',
      ''.$resultado['id_persona'].', '.$usuario->id.', 1');


      $carrera=arreglo(query('SELECT carrera from  tr_carrera where carrera_id='.$carrera_id));

      if(isset($promocion)){
        $arreglo_promo = arreglo(query('SELECT promocion_id from '.$GLOBALS['db_seguimiento'].'.cat_promocion where clave = "'.$promocion.'"'));
        if(isset($arreglo_promo['promocion_id'])){
          $inserta_promo = inserta($GLOBALS['db_seguimiento'].'.inter_promocion_persona','persona_id, promocion_id',''.$resultado['id_persona'].', '.$arreglo_promo['promocion_id']);        
        }
      }
      
      if($GLOBALS['produccion']==1)
        $mail=$correo::registro_exitoso($resultado['id_persona'], $email,$password, $carrera['carrera']);

      $json = $resultado;
    }else{
      $json = $resultado;
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
