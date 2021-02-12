<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('datosGenerales');


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $query_alumno = query('select alumno_id,clave_alumno from '.$GLOBALS['db_controlEscolar'].'.tr_alumno where clave_alumno = "'.$busqueda.'"');
      $query_docente = query('select docente_id,clave_profesor from '.$GLOBALS['db_controlEscolar'].'.tr_docente where clave_profesor = "'.$busqueda.'"');

      

      if(num($query_alumno)){
        $arreglo_alumno = arreglo($query_alumno);
        $id_persona =$arreglo_alumno['alumno_id'];
        $id_rol = 2;
      } 
      if(num($query_docente)){
        $arreglo_docente = arreglo($query_docente);
        $id_persona =$arreglo_docente['docente_id'];
        $id_rol = 3;
      } 

      if(isset($id_persona)){//se encontró coincidencia
        $consulta = 'ipur.persona_id  = '.$id_persona.' and p.estatus=1';
      }else{
        $consulta = 'usuario = "'.$busqueda.'" and p.estatus=1';
      }


        $query = query('SELECT u.usuario,u.password,p.persona_id, nombre, primer_apellido, segundo_apellido, curp, rfc, fecha_nacimiento,ipur.rol_id,
        p.email, sexo_id, otros_datos_id,celular FROM personas p
        join inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id 
        join usuarios u on u.usuario_id = ipur.usuario_id
        WHERE '.$consulta);

        $arreglo = arreglo($query);

        if($arreglo['persona_id']){
          
          $id_rol = $arreglo['rol_id'];
          $id_persona = $arreglo['persona_id'];
          
          if($id_rol == 2){
            $query_a = query('select clave_alumno from '.$GLOBALS['db_controlEscolar'].'.tr_alumno where alumno_id = '.$id_persona);
            $arreglo_a = arreglo($query_a);
            $clave = $arreglo_a['clave_alumno'];
          }else if($id_rol == 3){
            $query_a = query('select clave_profesor from '.$GLOBALS['db_controlEscolar'].'.tr_docente where docente_id = '.$id_persona);
            $arreglo_a = arreglo($query_a);
            $clave = $arreglo_a['clave_profesor'];
          }
          $arreglo['clave'] = $clave;
          
            if($arreglo['usuario'] == $arreglo['password'])
                $usuario_actualizado = 0;
            else
                $usuario_actualizado = 1;

            $json = array("status" => 1, "msg" => "Se encontró una coincidencia","persona" => $arreglo,"usuarioActualizado" => $usuario_actualizado);
        
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
