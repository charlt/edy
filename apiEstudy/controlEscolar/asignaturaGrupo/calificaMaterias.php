<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/asignaturagrupo.class.php';


try {

  $grupo = new AsignaturaGrupo();
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //se agrega tipo revisión 1: suave (sólo los alumnos que han terminado), revision 2: hard (alumnos terminados y sin terminar)
        
    $materias_calificados = $grupo::calculaCalificaciones($id_asignatura_grupo,$revision);


       if($materias_calificados){
    		$json = array("status" => 1, "msg" => "Se hizo el cálculo para ".$materias_calificados.' elementos ');
    	 }else{
    		$json = array("status" => 0, "msg" => "No se insertaron calificaciones");
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