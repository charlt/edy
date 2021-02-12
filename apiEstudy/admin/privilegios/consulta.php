<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN
    $query_privilegios = query('SELECT cp.privilegio_padre_id, cp.privilegio_id, cp.privilegio_clave, cp.privilegio,icono,
     cp.url, cp.estatus
    FROM  cat_privilegios cp 
    WHERE cp.estatus=1 and privilegio_id = '.$id_privilegio);

  
      
    $tmp_json = array();
    while ($arreglo = arreglo($query_privilegios)){


      $query1 = query('SELECT cp.privilegio_padre_id, cp.privilegio_id, cp.privilegio_clave, cp.privilegio,icono, cp.url, cp.estatus
      FROM  cat_privilegios cp 
      WHERE cp.estatus=1 and privilegio_padre_id = '.$arreglo['privilegio_id']);

        $tmp_json1 = array();

        while ($arreglo1 = arreglo($query1)){
          array_push($tmp_json1,$arreglo1);

        }
        $arreglo['sub_privilegios'] = $tmp_json1;

        array_push($tmp_json,$arreglo);
        }

       //ingreso todas las escuelas que tiene este profesor
       
       if(num($query_privilegios)){
        $json = array("status" => 1, "msg" => "Se encontraron privilegios","privilegios" => $tmp_json);
       }else{
        $json = array("status" => 0, "msg" => "No se encontraron privilegios");
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