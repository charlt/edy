<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/grupo.class.php';

try {
  
  db ('controlEscolar');
  $Grupo = new Grupo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        if(!isset($nombre_grupo)){
         $nombre_grupo = null;
      }
      if(!isset($grupo_clave)){
        $grupo_clave = null;
      }
      $Grupo::migra_alumnos_grado($id_grupo);

      $crea_grupo = $Grupo::agregaGrupo($id_grupo,$id_ciclo, $materia_aceptadas,$nombre_grupo,$grupo_clave,$usuario->usuario);

      $json = $crea_grupo;
  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}