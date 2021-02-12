<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/docente.class.php';

try {
  
  db('learning');

  $docente = new docente();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    $docente = query('select ta.actividad_id, ta.actividad_nombre
    from '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa
    join  '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.orden_asignatura_id = ioa.orden_asignatura_id
    join inter_modulos_asignatura_grupo imag on imag.asignatura_grupo_id = iag.asignatura_grupo_id
    join tr_actividad ta on ta.modulo_id = imag.modulo_id
    where ta.estatus=1 and ta.usuario_crea like  "'.$clave_usuario.'" and asignatura_id = '.$id_asignatura.' and iag.estatus=1'); 

    $json_docente = array();
    while($arreglo = arreglo($docente)){
        array_push($json_docente, $arreglo);
    }   
       
        if($docente){
    		$json = array("status" => 1, "msg" => "Se encontraron actividades","actividades" => $json_docente);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron actividades");
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
