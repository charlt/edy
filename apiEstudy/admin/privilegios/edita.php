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

        if(isset($privilegio_padre_id)){
          $sql_privilegio_padre_columna = 'privilegio_padre_id = '.$privilegio_padre_id.',';
          
        }else{
          $sql_privilegio_padre_columna = 'privilegio_padre_id = null,';
        }


        if(!isset($icono)) $icono = '';
        if(!isset($url)) $url = '';
         
        
        $edita = update('cat_privilegios',
        'privilegio_clave= "'.$privilegio_clave.'",
         privilegio = "'.$privilegio.'",
         '.$sql_privilegio_padre_columna.'
         icono = "'.$icono.'",
         url = "'.$url.'",
         fecha_actualiza= now(),
         usuario_actualiza= current_user(),
         usuario_actualiza= current_user()',   
         'privilegio_id = '.$id_privilegio);


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($edita){
        $json = array("status" => 1, "msg" => "Se actualizo el privilegio correctamente");
       }else{
        $json = array("status" => 0, "msg" => "No se logró insertar");
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