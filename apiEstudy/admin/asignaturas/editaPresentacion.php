<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
      
      
      
      switch ($columna) {
          case '1':
              $cadena ="bienvenida_desc";
          break;

          case '2':
              $cadena ="objetivos_desc";
          break;

          case '3':
              $cadena ="evaluacion_desc";  
          break;

          case '4':
              $cadena ="bibliografia_desc";
          break;
        
        default:
           $cadena = "";
          break;
     
        }
    
     
      $edita = update('cat_asignaturas', 
      ''.$cadena.' = "'.$tex.'"',
      'asignatura_id = '.$id_asignatura);
  
    

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
    		$json = array("status" => 1, "msg" => "Se actualizó $cadena correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar la asignatura");
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
