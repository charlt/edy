<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/materia.class.php';

try {
  
  db ('learning');

  $materia = new Materias();
  

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

      $query_materias = $materia::materiasActivas($id_persona);
      $arreglo_persona_usuario = arreglo(query('SELECT persona_id, usuario_id, rol_id FROM '.$GLOBALS['db_datosGenerales'].'.inter_persona_usuario_rol WHERE persona_id = '.$id_persona.' AND estatus = 1;'));
        
      if(num($query_materias)){
        $porcentaje_final = 0;
        
          while($arreglo_materias = arreglo($query_materias)){
            $porcentaje = $materia::avanceMateria($arreglo_materias['materia_id']);
            $porcentaje_final += $porcentaje;
          }

          $porcentaje_final = ceil($porcentaje_final/num($query_materias));
    		$json = array("status" => 1, "msg" => "Porcentaje de avance general", "porcentaje"=>$porcentaje_final, "usuario" => $arreglo_persona_usuario);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró avance en materia", "usuario" => $arreglo_persona_usuario);
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