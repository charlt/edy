<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/asignaturagrupo.class.php';


try {
  
  db ('learning');
  $AsignaturaGrupo = new AsignaturaGrupo();
  
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $ponderacion = 0;
        $query = $AsignaturaGrupo::consultaTodosModulos($id_asignatura_grupo);
        
        $actividades_json = array();
        while ($arreglo_modulos = arreglo($query)){
          
           $query_actividades = query('select ta.actividad_id,ta.actividad_nombre,ta.tipo_actividad_id, ta.ponderacion 
           from '.$GLOBALS['db_learning'].'.tr_actividad ta 
           where modulo_id ='.$arreglo_modulos['modulo_id'].' and estatus =1 and 
           tipo_actividad_id != 1 and unica != 1 order by orden' );
          
          while($arreglo_actividades= arreglo($query_actividades)){ 

              $arreglo_actividades['tipo']=$arreglo_modulos['tipo'];

              array_push($actividades_json,$arreglo_actividades);
              
              $ponderacion += $arreglo_actividades['ponderacion'];
          }  
  
  
        }
     
       if(num($query)){
    		  $json = array("status" => 1, "msg" => "Actividades en la asignatura","actividades"=>$actividades_json,"ponderacionTotal" => $ponderacion);
    	 }else{
          $json = array("status" => 0, "msg" => "No hay ponderacion");
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