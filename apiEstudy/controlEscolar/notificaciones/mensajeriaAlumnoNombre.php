<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
              $usuario = Auth::GetData(
                $jwt  
            );

        // print_r($usuario);

        $query=query('SELECT nombre, primer_apellido, segundo_apellido, tmm.materia_id, count(tmm.mensaje_id) as num_mensajes
        from tr_materia tm
        join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = tm.asignatura_grupo_id
        join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = tm.alumno_id
        join tr_mensaje_materia tmm on tmm.materia_id = tm.materia_id
        where idag.docente_id ='.$usuario->id.' and idag.estatus = 1 and tm.estatus = 1 and tmm.estatus=1 and visto=0 and origen=2
        group by nombre, primer_apellido, segundo_apellido, tmm.materia_id   
        limit 0,5');
        
        $json_mensajes =array();
        while($arreglo= arreglo($query)){
          array_push($json_mensajes, $arreglo);
        }

        if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron mensajes", "mensajes" => $json_mensajes);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron mensajes");
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
