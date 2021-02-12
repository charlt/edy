<?php
include '../../jwt.php';
include '../../headers.php';


db ('seguimiento');


try {
    if($_SERVER['REQUEST_METHOD'] == "POST"){
    
        $jwt=$_POST["jwt"];
    
        $encuesta_id=$_POST["encuesta_id"];
        $campo_encuesta_id=$_POST["campo_encuesta_id"];
        $respuesta=$_POST["respuesta"];

        $usuario = Auth::GetData(
            $jwt  
        );

        
        $query_respuesta = query('SELECT campo_persona_id, ica.campo_encuesta_id, persona_id
        from inter_campo_persona ica
        join tr_campo_encuesta tcf on tcf.campo_encuesta_id = ica.campo_encuesta_id
         where persona_id='.$usuario->id.' and encuesta_id='.$encuesta_id);  
    
        $num_arreglo= count($campo_encuesta_id);
        for ($i=0; $i <$num_arreglo ; $i++){
            $existe=0;
            while($arreglo=arreglo($query_respuesta)){

                if($arreglo['campo_encuesta_id']==$campo_encuesta_id[$i]){
                    
                $query_a=query('select * from inter_campo_persona ica
                    join tr_campo_encuesta tcf on tcf.campo_encuesta_id = ica.campo_encuesta_id 
                    where encuesta_id = '.$encuesta_id.' and persona_id='.$usuario->id);     
                while($arreglo_borrar=arreglo($query_a)){
                    $query_b=query('delete from inter_campo_persona where campo_encuesta_id ='.$arreglo_borrar['campo_encuesta_id'].' and persona_id='.$usuario->id);
                }
            //    $edita=update('inter_campo_persona','respuesta="'.$respuesta[$i].'"','campo_encuesta_id='.$arreglo['campo_encuesta_id'] );
            //     $existe=1;
            //     break;
            }
            
           
            }

            if(!$existe){
                $inserta=inserta('inter_campo_persona','campo_encuesta_id,persona_id,respuesta,estatus',
                ''.$campo_encuesta_id[$i].', '.$usuario->id.', "'.$respuesta[$i].'", 1');
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