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
    
    $consultaActividadesDocente=$grupo::consultaActividadesDocente($id_asignatura_grupo);    
        
        
    $consulta_alumnos = $grupo::consultaAlumnosRetroalimentaciones($id_asignatura_grupo);
    $json_alumno_asignatura_grupo= array();
   while ($arreglo_alumno_asignatura_grupo = arreglo($consulta_alumnos)){
  
    
    $numMensajesAlumno=$grupo::numMensajesAlumno($arreglo_alumno_asignatura_grupo['materia_id']);
    
    $arreglo_alumno_asignatura_grupo['numero_mensajes']=$numMensajesAlumno;
    
    $arregloactividades = $grupo::consultaRetroalimentacionesActividad($arreglo_alumno_asignatura_grupo['materia_id'],$consultaActividadesDocente['actividades']);
    
    $arreglo_alumno_asignatura_grupo['actividadesAlumno']=$arregloactividades;
    
    array_push($json_alumno_asignatura_grupo,$arreglo_alumno_asignatura_grupo);
    
    

   }
    

       if($consulta_alumnos){
    		$json = array("status" => 1, "msg" => "Se encontraron Alumnos en Asignatura y Grupo","Alumnos" => $json_alumno_asignatura_grupo, "actividades"=>$consultaActividadesDocente['actividades']);
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