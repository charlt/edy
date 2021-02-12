<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    //faltó nombre alumno
        
    $consulta_docente = query('SELECT td.docente_id, nombre, primer_apellido, segundo_apellido,iag.asignatura_grupo_id, orden_asignatura_id, grupo_id, iag.estatus,curp,td.clave_profesor as clave_docente
    FROM inter_asignatura_grupo iag
    join inter_docente_asignatura_grupo ida on ida.asignatura_grupo_id = iag.asignatura_grupo_id
    join tr_docente td on td.docente_id = ida.docente_id
    join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id = td.docente_id
    where iag.asignatura_grupo_id = '.$id_asignatura_grupo.' and td.estatus=1 and iag.estatus=1 and ida.estatus =1 ');      
       
       $json_docente = array();
       while ($arreglo_docente = arreglo($consulta_docente)){
          array_push($json_docente,$arreglo_docente);
       }

       if(num($consulta_docente)){
    		$json = array("status" => 1, "msg" => "Se encontró docente","docente" => $json_docente);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró docente");
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
