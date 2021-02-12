<?php
include '../../jwt.php';
include '../../headers.php';
include '../../general/class/accesos.class.php';

try {

  db ('datosGenerales');  
  
  $accesos = new Accesos();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
      $jwt  
    );

    $query_sesion = query('select tiempo_sesion from cat_rol where rol_id = 3');
    $arreglo_sesion = arreglo($query_sesion);

    $sesion = $accesos::consultaSesionActiva($id_docente,$arreglo_sesion['tiempo_sesion']);


    $query_chat = query('select activa_chat from '.$GLOBALS['db_controlEscolar'].'.tr_docente where docente_id ='.$id_docente);

    $arreglo_chat = arreglo($query_chat);    
        

      if($sesion != -1){
        if($sesion == 1  ){

          $query_mensajes = query('SELECT mensaje_id 
          FROM '.$GLOBALS['db_learning'].'.tr_mensaje_materia WHERE 
          materia_id = '.$id_materia.' and origen != '.$usuario->id_rol.' and (visto = 0 or visto is null)'
          );

          $num_mensajes=num($query_mensajes);

        }else{
          $num_mensajes = 0;
        }

        if($arreglo_chat['activa_chat'] == 0) $sesion = 0;  
        
    		$json = array("status" => 1, "msg" => "Estatus del docente", "activo"=>$sesion, "numMensajes"=>$num_mensajes);
    	 }else{
    		$json = array("status" => 0, "msg" => "Docente no existe");
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
