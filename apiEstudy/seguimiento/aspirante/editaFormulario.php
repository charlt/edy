<?php
include '../../jwt.php';
include '../../headers.php';


db ('seguimiento');


try {
    if($_SERVER['REQUEST_METHOD'] == "POST"){
    
        $jwt=$_POST["jwt"];
    
        $formulario_id=$_POST["formulario_id"];
        $campo_formulario_id=$_POST["campo_formulario_id"];
        $respuesta=$_POST["respuesta"];
        $aspirante_id=$_POST["aspirante_id"];;

        $usuario = Auth::GetData(
            $jwt  
        );
        
        $query_respuesta = query('SELECT campo_aspirante_id, ica.campo_formulario_id, aspirante_id
        from inter_campo_aspirante ica
        join tr_campo_formulario tcf on tcf.campo_formulario_id = ica.campo_formulario_id
         where aspirante_id='.$aspirante_id.' and formulario_id='.$formulario_id);  
  
        $num_arreglo= count($campo_formulario_id);
        for ($i=0; $i <$num_arreglo ; $i++){
            $existe=0;
            while($arreglo=arreglo($query_respuesta)){

                if($arreglo['campo_formulario_id']==$campo_formulario_id[$i]){
                    
                $query_a=query('select * from inter_campo_aspirante ica
                    join tr_campo_formulario tcf on tcf.campo_formulario_id = ica.campo_formulario_id 
                    where formulario_id = '.$formulario_id.' and aspirante_id='.$aspirante_id);     
                while($arreglo_borrar=arreglo($query_a)){
                    $query_b=query('delete from inter_campo_aspirante where campo_formulario_id ='.$arreglo_borrar['campo_formulario_id'].' and aspirante_id='.$aspirante_id);
                }
            //    $edita=update('inter_campo_aspirante','respuesta="'.$respuesta[$i].'"','campo_formulario_id='.$arreglo['campo_formulario_id'] );
            //     $existe=1;
            //     break;
            }
            
           
            }

            if(!$existe){
                $inserta=inserta('inter_campo_aspirante','campo_formulario_id,aspirante_id,respuesta,estatus',
                ''.$campo_formulario_id[$i].', '.$aspirante_id.', "'.$respuesta[$i].'", 1');
                }
            


        }
        



       if(num($query_respuesta)){
            $json = array("status" => 1, "msg" => "Se editaron respuestas correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "Hubo un problema al editar respuestas");
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