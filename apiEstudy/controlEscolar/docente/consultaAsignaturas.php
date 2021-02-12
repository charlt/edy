<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/docente.class.php';

try {
  
  db ('controlEscolar');

  $docente = new Docente();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

      $query = $docente::consultaAsignaturas($usuario, $id_docente);


      //asignatura_grupo_id - retroalimentaciones
       $json_docente= array();
       while ($arreglo_docente = arreglo($query)){



        $query_retroalimentacion=$docente::Retroalimentaciones($arreglo_docente['asignatura_grupo_id']);
          $arreglo_docente['retroalimentacion']= num($query_retroalimentacion);

        $query_mensajes=$docente::mensajes($arreglo_docente['asignatura_grupo_id']);
        $arreglo_docente['mensaje']= num($query_mensajes);


          $query_antigua = $docente::actividadesPendientes($arreglo_docente['asignatura_grupo_id']);

          $fecha_antigua="";
          $bandera = 0;
          $arreglo_antigua = arreglo($query_antigua);

          $fecha_antigua=$arreglo_antigua;
          $bandera=1;
            
          
          $arreglo_docente['actividades_pendientes']= num($query_antigua);
          $arreglo_docente['actividad_antigua']= $fecha_antigua;

            array_push($json_docente,$arreglo_docente);

       }
       
       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron asignaturas","Asignaturas" => $json_docente);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron asignaturas");
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