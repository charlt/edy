<?php
include '../../jwt.php';
include '../../headers.php';


db ('seguimiento');


try {
  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        $query=query('SELECT tf.formulario_id, titulo, instruccion, persona_id, obligatorio,porcentaje, formulario_aspirante_id, ifa.aspirante_id 
        FROM tr_formulario tf
        join inter_formulario_carrera ifc on ifc.formulario_id = tf.formulario_id        
        left join (select formulario_aspirante_id,aspirante_id ,formulario_id from inter_formulario_aspirante where aspirante_id = '.$id_aspirante.') as ifa  on ifa.formulario_id = tf.formulario_id
        join tr_aspirante ta on ta.carrera_id = ifc.carrera_id
        WHERE ta.aspirante_id ='.$id_aspirante.' and tf.estatus=1 order by tf.orden');
        
        $json=array();
        while($arreglo=arreglo($query)){
                if($arreglo['formulario_aspirante_id'] !='' ){
                    $arreglo['contestado']=1;
                }else{
                    $arreglo['contestado']=0;

                }
                array_push($json, $arreglo);

            }
            

       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron formularios","formulario"=>$json);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron los formularios");
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