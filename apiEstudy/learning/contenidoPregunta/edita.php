<?php
include '../../jwt.php';
include '../../headers.php';
include '../../extras/archivo/class/archivo.class.php';
include '../datosPregunta/class/pregunta.class.php';

try {

  db ('learning');

  $archivo = new Archivo();
  $objPregunta = new Pregunta();


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        $tabla = $objPregunta::obtiene_tabla($id_tipo_pregunta, 'pregunta');        

          $edita = update(''.$tabla.'',
          'datos_pregunta_id = '.$id_datos_pregunta.',
          pregunta = "'.$pregunta.'",
          fecha_actualiza = now()',
          'pregunta_id = '.$id_pregunta);

          switch($id_tipo_pregunta){
            case '2': 
              update(''.$tabla.'','tipo = '.$tipo,'pregunta_id = '.$id_pregunta);
            break;
            case '5': 
                update(''.$tabla.'','orientacion = '.$orientacion,'pregunta_id = '.$id_pregunta);
            break;
            case '6': 
                update(''.$tabla.'','pregunta1 = "'.$pregunta1.'", pregunta2 = "'.$pregunta2.'", pregunta3 = "'.$pregunta3.'"','pregunta_id = '.$id_pregunta);
            break;
            case '7': 

              $query_sqa = query('SELECT tdp.datos_pregunta_id, ta.actividad_id, asignatura_id from
              tr_actividad ta
              join inter_modulos_asignaturas ima on ima.modulo_id = ta.modulo_id
              join tr_datos_pregunta tdp on tdp.actividad_id = ta.actividad_id
              where ta.tipo_actividad_id = 4 and datos_pregunta_id = '.$id_datos_pregunta);

                $arreglo_sqa = arreglo($query_sqa);

                $query_momento = query('SELECT ta.actividad_id, asignatura_id from
                    tr_actividad ta
                    join inter_modulos_asignaturas ima on ima.modulo_id = ta.modulo_id
                    where ta.tipo_actividad_id = 4 and ima.asignatura_id = '.$arreglo_sqa['asignatura_id']);
                
                $momento = 0;
                $i = 0;
                while($arreglo_momento = arreglo($query_momento)){
                    $i++;
                    if($arreglo_momento['actividad_id'] == $arreglo_sqa['actividad_id']){
                        $momento = $i;
                    }
                }

                update(''.$tabla.'', 'momento = '.$momento,'pregunta_id = '.$id_pregunta);
            break;
            case '11': 
                update(''.$tabla.'','cat_formato_id = '.$id_formato.', num_archivos ='.$num_archivos,'pregunta_id = '.$id_pregunta);
            break;
        }


    

          if($edita){

                    
          if(isset($_FILES["contenido"])){ //valido que exista la imagen
          
            $contenido = $archivo::guardar_archivo(
              "asignaturas/contenido_pregunta", // la ruta del archivo
              $id_pregunta, //el id de la ruta
              $_FILES["contenido"],//la variable tipo file donde viene el archivo
              "contenido_pregunta", //el nombre que va a llevar el archivo a guardar
              null, //tipo de archivo
              50 //tamaño máximo del archivo
            );

            if($contenido['status'] == 1){                   
                $edita=update($tabla,'contenido ="'.$contenido['url'].'"','pregunta_id='.$id_pregunta);
                $json = array("status" => 1, "msg" => "Se actualizó contenido con el adjunto correctamente" , "idPregunta"=> $id_pregunta);
            }else{
                $json = $contenido;
            }       
        }else{
            $json = array("status" => 1, "msg" => "Se actualizó el contenido correctamente", "idPregunta"=> $id_pregunta);
        }

    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar");
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