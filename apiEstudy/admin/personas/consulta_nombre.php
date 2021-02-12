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

        $cadena = escape_cara($busqueda);
        if (strlen($cadena) > 0) {
            
            $arreglo_cadena = explode(' ', $cadena);

            

            $consulta_personas = "SELECT distinct p.persona_id, nombre, primer_apellido, segundo_apellido, curp, rfc, fecha_nacimiento,
            p.email, sexo_id, otros_datos_id, p.fecha_creacion, p.estatus
            FROM personas p
            ".$join_tipo."
            JOIN inter_persona_usuario_rol upu on upu.persona_id =  p.persona_id
            join usuarios u on u.usuario_id = upu.usuario_id
            JOIN cat_rol cr ON cr.rol_id = upu.rol_id
            WHERE ";

            for ($i = 0; $i < sizeof($arreglo_cadena); $i++) {
                if ($i != 0)
                    $consulta_personas .= ' and ';
                $consulta_personas .= ' (nombre like "%' . $arreglo_cadena[$i] . '%" or primer_apellido like "%' 
                . $arreglo_cadena[$i] . '%" or segundo_apellido like "%' . $arreglo_cadena[$i]
                 . '%" or curp like "%' . $arreglo_cadena[$i] . '%")  ';
            }

            $consulta_personas .= ' and p.estatus = (1) order by primer_apellido, segundo_apellido, nombre limit   0,6';
            //echo $consulta_personas;
            $query_personas = query($consulta_personas);
        } else {
          
            $query_personas = query('select p.persona_id, p.nombre, p.primer_apellido, p.segundo_apellido, p.curp, p.rfc, p.fecha_nacimiento, p.email,
            p.celular, p.sexo_id, p.otros_datos_id, p.estatus  
            from personas p '.$join_tipo.'  where p.estatus = 1 limit 0,6');
        }

    
       $json_personas = array();
       while ($arreglo_personas = arreglo($query_personas)){
          array_push($json_personas,$arreglo_personas);
       }
       
             
       if(num($query_personas)){
    		$json = array("status" => 1, "msg" => "Se encontraron coincidencias","usuario" => $json_personas);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron coincidencias");
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
