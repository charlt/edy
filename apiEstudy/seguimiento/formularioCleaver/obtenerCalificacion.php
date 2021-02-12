<?php
include '../../jwt.php';
include '../../headers.php';

db('seguimiento');

try {
  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        $query = query('SELECT ica.cleaver_aspirante_id, ica.aspirante_id, ica.cleaver_base_id, respuesta_id,nombre_reactivo,C,D,I,S  from inter_cleaver_aspirante ica
        join cat_reactivos_cleaver_base crcb on ica.cleaver_base_id=crcb.cleaver_base_id 
        where aspirante_id ='.$id_aspirante);
        $cleaver=array();
        $C1=0; $C2=0; $D1=0; $D2=0; $I1=0; $I2=0; $S1=0; $S2=0;
        while($arreglo=arreglo($query)){
          
          if(isset($arreglo['C'])){

            if($arreglo['respuesta_id']==1 && $arreglo['C']==3){
              $C1++;
            }elseif($arreglo['respuesta_id']==2 && $arreglo['C']==3){
               $C2++;             
            }else {
              if($arreglo['respuesta_id']==1 && $arreglo['C']==1){  
               $C1++;
              }elseif($arreglo['respuesta_id']==2 && $arreglo['C']==2){
                $C2++;
              }
            }

              
          }
          
          if(isset($arreglo['D'])){
            if($arreglo['respuesta_id']==1 && $arreglo['D']==3){
              $D1++;
            }elseif($arreglo['respuesta_id']==2 && $arreglo['D']==3){
               $D2++;             
            }else {
              if($arreglo['respuesta_id']==1 && $arreglo['D']==1){  
                $D1++;
              }elseif($arreglo['respuesta_id']==2 && $arreglo['D']==2){
                $D2++;
              }
            }
              
          }

          if(isset($arreglo['I'])){
            if($arreglo['respuesta_id']==1 && $arreglo['I']==3){
              $I1++;
            }elseif($arreglo['respuesta_id']==2 && $arreglo['I']==3){
               $I2++;          
            }else {
              if($arreglo['respuesta_id']==1 && $arreglo['I']==1){  
                $I1++;
              }elseif($arreglo['respuesta_id']==2 && $arreglo['I']==2){
                $I2++;
              }
            }
          }

          if(isset($arreglo['S'])){
            if($arreglo['respuesta_id']==1 && $arreglo['S']==3){
              $S1++;
            }elseif($arreglo['respuesta_id']==2 && $arreglo['S']==3){
               $S2++;          
            }else {
              if($arreglo['respuesta_id']==1 && $arreglo['S']==1){  
                $S1++;
              }elseif($arreglo['respuesta_id']==2 && $arreglo['S']==2){
                $S2++;
              }
            }
          }
        }

        $M=['D' =>$D2,'I'=>$I2,'S'=>$S2,'C'=> $C2];
        $L=['D' =>$D1,'I'=>$I1,'S'=>$S1,'C'=> $C1];

        $T=["D"=>($M['D']-$L['D']),"I"=>($M['I']-$L['I']),"S"=>($M['S']-$L['S']),"C"=> ($M['C']-$L['C'])];

        $F=array_sum($T);
        
       if($query){
        $json = array("status" => 1, "msg" => "Cleaver Calificado","M"=>$M, "L"=>$L, "T"=>$T, "calificacionCleaver"=>$F);
       }else{
        $json = array("status" => 0, "msg" => "No se logró calificar");
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