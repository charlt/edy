<?php
include '../../jwt.php';
include '../../headers.php';


db ('seguimiento');


try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        $query = query('SELECT a.*,
        nombre, primer_apellido, segundo_apellido, curp, rfc, fecha_nacimiento, p.email, sexo_id, otros_datos_id, u.url_perfil,color, tc.carrera
        FROM tr_aspirante a
        join '.$GLOBALS["db_datosGenerales"].'.personas p on aspirante_id = p.persona_id 
        join '.$GLOBALS["db_datosGenerales"].'.inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id
        join '.$GLOBALS["db_datosGenerales"].'.usuarios u on ipur.usuario_id = u.usuario_id
        join '.$GLOBALS["db_datosGenerales"].'.tr_carrera tc on tc.carrera_id = a.carrera_id
        WHERE aspirante_id = '.$id.' and rol_id = 4');
            
       $arreglo = arreglo($query);

        

       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontro información de aspirante","aspirante"=>$arreglo);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró la información");
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









