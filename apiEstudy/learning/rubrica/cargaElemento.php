<?php
include '../../jwt.php';
include '../../headers.php';


try {

  try {
    

      db('learning');


      if($_SERVER['REQUEST_METHOD'] == "POST"){
        
        $jwt = $_POST["jwt"];
        $id_rubrica =$_POST["id_rubrica"];
        $elemento_desc = $_POST["elemento_desc"];
        if (isset($_POST["id_elemento"])) {
          $id_elemento = $_POST["id_elemento"];  
        }
        

        $usuario = Auth::GetData(
          $jwt  
          );
            
                        
          $num_registros = sizeof($elemento_desc);
          // $elimina = query('delete from tr_mc_elementos where pregunta_id = '.$id_pregunta);
          for ($i=0; $i <$num_registros ; $i++) { 
              if (isset($id_elemento[$i])) {
                $edita = update('tr_rb_elemento','elemento_desc="'.$elemento_desc[$i].'",
                fecha_actualiza= now()', 'elemento_id='.$id_elemento[$i].'');
                
              }else{
              $inserta = inserta('tr_rb_elemento',' elemento_desc, rubrica_id, fecha_creacion, estatus',
              '"'.$elemento_desc[$i].'",'.$id_rubrica.', now(), 1');           
              }
            }
                   
            
            if(isset($edita)){
              $json = array("status" => 1, "msg" => "Se modificó el elemento correctamente");
            }elseif(isset($inserta)){
              $json = array("status" => 1, "msg" => "Se insertó el elemento correctamente");
            }else{
              $json = array("status" => 0, "msg" => "No se logró insertar");
            }
        
          }else{
            $json = array("status" => 0, "msg" => "Método no aceptado");
          }
        
          /* Output header */
    
      echo json_encode($json);
    }catch (QueryException $e){
      echo "Pregunta con Respuesta no se puede eliminar";
    }

    } catch (Exception $e) {
        $json = array("status" => 0, "msg" =>  $e->getMessage());
    
        echo json_encode($json);
    }