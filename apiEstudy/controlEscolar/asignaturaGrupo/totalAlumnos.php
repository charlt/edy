<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/asignaturagrupo.class.php';


try {

  $grupo = new AsignaturaGrupo();
  
  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    
    
    
        
    $consulta_alumnos = $grupo::consultaAlumnos($id_asignatura_grupo,null,null);

    $num_alumno = num($consulta_alumnos);
    
       if($num_alumno){
    		$json = array("status" => 1, "msg" => "Total de alumnos","totalAlumnos" => $num_alumno);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron Alumnos");
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