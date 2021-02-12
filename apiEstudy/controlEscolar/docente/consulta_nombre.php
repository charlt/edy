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



    $cadena = escape_cara($busqueda);
    if (strlen($cadena) > 0) {
        if (ctype_digit($cadena[0])) {
            $tipo = 1;
            $cadena = str_replace(' ', ',', $cadena);
            $query_tr_docente = query("SELECT persona_id, nombre, primer_apellido, segundo_apellido,
            cat_sexo.sexo_id, cat_sexo.sexo_descripcion, fecha_nacimiento, email,
            rfc, curp 
            from personas p
            join cat_sexo on cat_sexo.sexo_id = p.sexo_id
            WHERE  persona_id IN (" . $cadena . ") AND estatus = (1)");
        } else if ($cadena == '') {
            $tipo = 0;  
        } else {
            $tipo = 2;
            $arreglo_cadena = explode(' ', $cadena);
            // print_r($arreglo_cadena);
            $consulta_tr_docente = "SELECT persona_id, nombre, primer_apellido, segundo_apellido,
            cat_sexo.sexo_id, cat_sexo.sexo_descripcion, fecha_nacimiento, email,
            rfc, curp 
            from personas p
            join cat_sexo on cat_sexo.sexo_id = p.sexo_id WHERE ";
            for ($i = 0; $i < sizeof($arreglo_cadena); $i++) {
                if ($i != 0)
                    $consulta_tr_docente .= ' and ';
                $consulta_tr_docente .= '(nombre like "%' . $arreglo_cadena[$i] . '%" or primer_apellido like "%' . $arreglo_cadena[$i] . '%" or segundo_apellido like "%' . $arreglo_cadena[$i] . '%")  ';
            }

            $consulta_tr_docente .= ' and p.estatus = (1) order by primer_apellido, segundo_apellido, nombre limit   0,6';
            $query_tr_docente = query($consulta_tr_docente);
        }
    } else {
        $query_tr_docente = query('select * from personas where estatus = 1 limit 1');
    }

    

    
       $json_tr_docente = array();
       while ($arreglo_tr_docente = arreglo($query_tr_docente)){
          array_push($json_tr_docente,$arreglo_tr_docente);
       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_tr_docente)){
    		$json = array("status" => 1, "msg" => "Se encontró el docente","docente" => $json_tr_docente);
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
