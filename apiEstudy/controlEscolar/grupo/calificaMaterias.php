<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/grupo.class.php';
include '../class/asignaturagrupo.class.php';

try {

  db('controlEscolar');
  
  $Grupo = new Grupo();
  $AsignaturaGrupo = new AsignaturaGrupo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    /*$usuario = Auth::GetData(
            $jwt 
    );*/

    $query_grupo = $Grupo::consulta_asignatura_grupo($id_grupo);
    
    
  $alumnos = 0;
  $resuelto = 0;
  $aprobados = 0;
  $reprobados = 0;
  $egresados = 0;

    while ($arreglo_asignatura = arreglo($query_grupo)){
      if($arreglo_asignatura['situacion_asignatura_grupo_id'] != 4){
        $resuelto = $AsignaturaGrupo::calculaCalificaciones($arreglo_asignatura['asignatura_grupo_id'],$revision);
      }
      $alumnos += $resuelto;
        
    }

    if($revision == 1){
      $cierra_ciclo = update('tr_grupo','situacion_grupo_id = 2','grupo_id = '.$id_grupo);
    }else if($revision == 2){
      $cierra_ciclo = update('tr_grupo','situacion_grupo_id = 3','grupo_id = '.$id_grupo);
      
    }else if($revision == 3){
      $cierra_ciclo = update('tr_grupo','situacion_grupo_id = 4','grupo_id = '.$id_grupo);     
    }
    

          
      
      $json = array("status" => 1, "msg" => "Se realizaron acciones en ".$alumnos." elementos");
      

  }else{
  	$json = array("status" => 0, "msg" => "Método no aceptado");
  }

  /* Output header */

  echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
