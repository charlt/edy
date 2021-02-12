<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt = $_POST["jwt"];
    $id_respuesta =$_POST["id_respuesta"];
    $categoria_desc = $_POST["categoria_desc"];
    if (isset($_POST["id_categoria"])) {    
    $id_categoria = $_POST["id_categoria"];
    }
    
    $usuario = Auth::GetData(
      $jwt  
      );
        
      // $query_consulta = query('SELECT pregunta_id from tr_mc_categorias where pregunta_id= '.$id_pregunta.'');

      
      $num_registros = sizeof($categoria_desc);
      // $elimina = query('delete from tr_mc_categorias where pregunta_id = '.$id_pregunta);
      for ($i=0; $i <$num_registros ; $i++) { 
          if(isset($id_categoria[$i])){
            $edita = update('tr_mc_categorias', 'categoria_desc="'.$categoria_desc[$i].'",
             fecha_actualiza= now()','categoria_id='.$id_categoria[$i].'');
                   
          }else{
            $inserta = inserta('tr_mc_categorias','respuesta_id, categoria_desc, fecha_creacion, estatus',
            ''.$id_respuesta.',"'.$categoria_desc[$i].'", now(), 1');  
          }
        }
       
        if(isset($edita)){
          $json = array("status" => 1, "msg" => "Se modificó correctamente");
        }elseif(isset($inserta)){
          $json = array("status" => 1, "msg" => "Se insertó la categoria correctamente");
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