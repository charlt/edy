<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php'; 

try {

  db('learning');

  $archivo = new Archivo();

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    
    $jwt=$_POST["jwt"];
    $reactivo_desc=$_POST["reactivo_desc"];
    $posicion_x = $_POST["posicion_x"];
    $posicion_y = $_POST["posicion_y"];
    $alto = $_POST["alto"];
    $ancho = $_POST["ancho"];
    $id_pregunta = $_POST['id_pregunta'];
    $color = $_POST['color'];
    $imagen_ancho=$_POST['imagen_ancho'];
    $imagen_alto=$_POST['imagen_alto'];


      $usuario = Auth::GetData(
            $jwt  
        );
        
          if(isset($_FILES["imagen"]) ){//valida que existe la imagen.
              $tipo_archivo = $_FILES["imagen"];
              $tipo_extension = "imagen";

              $imagen=$archivo::guardar_archivo(
                "asignaturas/zona_imagenes", //la ruta a insertar
                $id_pregunta, //id de la ruta
                $_FILES["imagen"],//la variable tipo file donde viene el archivo
                "imagen_zona",//nombre del archivo
                null, 
                null); //tamaño de la extensiomn    
            
            
            if($imagen['status'] == 1){          

              $edita = update('tr_zi_pregunta', 'imagen_alto ='.$imagen_alto.', imagen_ancho='.$imagen_ancho.',imagen ="'.$imagen['url'].'"',
              'pregunta_id = '.$id_pregunta);

              $num_registros = sizeof($reactivo_desc);
              $elimina = query('delete from tr_zi_reactivos where pregunta_id = '.$id_pregunta);
              for ($i=0; $i <$num_registros ; $i++) { 
                  $inserta = inserta('tr_zi_reactivos','pregunta_id, reactivo_desc, alto, ancho,
                  posicion_x, posicion_y,color, fecha_creacion, estatus',
                  ''.$id_pregunta.',"'.$reactivo_desc[$i].'",'.$alto[$i].', '.$ancho[$i].', '.$posicion_x[$i].',
                  '.$posicion_y[$i].',"'.$color[$i].'", now(), 1');           


                }
              
              
              if($inserta){
                $json = array("status" => 1, "msg" => "Se insertó el reactivo correctamente");
              }else{
                $json = array("status" => 0, "msg" => "No se logró insertar");
              }




             }else{
              $json = $documento;
             }
          
          }else {
            $num_registros = sizeof($reactivo_desc);
            $elimina = query('delete from tr_zi_reactivos where pregunta_id = '.$id_pregunta);
            for ($i=0; $i <$num_registros ; $i++) { 
              $inserta = inserta('tr_zi_reactivos','pregunta_id, reactivo_desc, alto, ancho,
              posicion_x, posicion_y,color, fecha_creacion, estatus',
              ''.$id_pregunta.',"'.$reactivo_desc[$i].'",'.$alto[$i].', '.$ancho[$i].', '.$posicion_x[$i].',
              '.$posicion_y[$i].',"'.$color[$i].'", now(), 1');           
            }
            
            if($inserta){
              $json = array("status" => 1, "msg" => "Se insertó el reactivo correctamente");
            }else{
              $json = array("status" => 0, "msg" => "No se logró insertar");
            }

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