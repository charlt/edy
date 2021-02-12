<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/asignatura.class.php';


try {
  
  db ('learning');
  $Asignatura = new Asignatura();
  
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        $ponderacion = 0;
        $query = $Asignatura::consultaModulos($id_asignatura);
        
        while ($arreglo_modulos = arreglo($query)){
           $query_actividades = query('select ta.actividad_id, ta.ponderacion 
           from '.$GLOBALS['db_learning'].'.tr_actividad ta where modulo_id ='.$arreglo_modulos['modulo_id'].' and estatus =1 and tipo_actividad_id != 1 and unica != 1' );
          
              while($arreglo_actividades= arreglo($query_actividades)){ 
                
                $ponderacion += $arreglo_actividades['ponderacion'];
            }  
  
  
        }
     
       if(num($query)){
    		$json = array("status" => 1, "msg" => "La suma de las ponderaciones es","ponderacionTotal" => $ponderacion);
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