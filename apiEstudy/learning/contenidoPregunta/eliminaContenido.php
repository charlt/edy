<?php
include '../../jwt.php';
include '../../headers.php';
include '../datosPregunta/class/pregunta.class.php';

try {

  db ('learning');

  $objPregunta = new Pregunta();


  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );

        $tabla = $objPregunta::obtiene_tabla($id_tipo_pregunta, 'pregunta');        


        
        $arreglo_contenido = arreglo(query('select contenido from '.$tabla.' where pregunta_id='.$id_pregunta));
        
        if($arreglo_contenido['contenido'] != ''){
            
            $elimina_contenido=unlink('../../..'.$arreglo_contenido['contenido']);
            $update=query('update '.$tabla.' set contenido=null where pregunta_id ='.$id_pregunta);
            $msg = "Se eliminó el contenido correctamente";
        }else{
            
            $elimina_contenido=1;
            $msg='No tiene contenido';
        }


    
        if($elimina_contenido){
            $json = array("status" => 1, "msg" => $msg, "idPregunta"=> $id_pregunta);
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