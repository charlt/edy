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
          $sql_privilegio_padre_columna = 'privilegio_padre_id,';
          $sql_privilegio_padre_valor = $privilegio_padre_id.',';
        }else{
          $sql_privilegio_padre_columna = '';
          $sql_privilegio_padre_valor = '';
        }

        if(!isset($icono)) $icono = '';
        if(!isset($url)) $url = '';
         
        // if ($plan_estudio_db != $plan_estudio_clave) {
        $inserta = inserta('cat_privilegios',
        'privilegio_clave,privilegio,icono,url,'.$sql_privilegio_padre_columna.'estatus',
        '"'.$privilegio_clave.'","'.$privilegio.'","'.$icono.'","'.$url.'",'.$sql_privilegio_padre_valor.'1');


       
       //ingreso todas las escuelas que tiene este profesor
       
       if($inserta){
        $json = array("status" => 1, "msg" => "Se insertó el privilegio correctamente");
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