<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('datosGenerales');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
     

      $usuario = Auth::GetData(
            $jwt  
        );


        $join_tipo = "";

        switch($rol){
          case "2":
            $join_tipo = "JOIN ".$GLOBALS["db_controlEscolar"].".tr_alumno ta on ta.alumno_id = p.persona_id ";
          break;
          case "3":
            $join_tipo = "JOIN ".$GLOBALS["db_controlEscolar"].".tr_docente td on td.docente_id = p.persona_id ";
          break;
        }

        //usuario_id, nombre, primer_apellido, segundo_apellido, curp, email,
        //usuario, fecha_creacion, fecha_actualiza, usuario_crea, usuario_actualiza, estatus
    $query_usuario = query('SELECT  p.persona_id, nombre, primer_apellido, segundo_apellido, curp,rfc, fecha_nacimiento, email,
    sexo_id, otros_datos_id, p.fecha_creacion, p.usuario_crea, p.estatus
    FROM personas p
    '.$join_tipo.'
    WHERE curp like "%'.$curp.'%" and p.estatus = 1');

    
       $json_usuario = array();
       while ($arreglo_usuario = arreglo($query_usuario)){
          array_push($json_usuario,$arreglo_usuario);
       }
       
             
       if(num($query_usuario)){
    		$json = array("status" => 1, "msg" => "Bienvenido a tu plataforma","usuario" => $json_usuario);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró usuario");
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
