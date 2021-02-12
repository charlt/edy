<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

    $json_campo=array();
    $query_campo = query('SELECT pregunta from tr_campo_formulario where estatus=1 order by campo_formulario_id');
      while($arreglo = arreglo($query_campo)){
        array_push($json_campo, $arreglo['pregunta']);
      }
    

    $query_alumno= query('SELECT aspirante_id, nombre, primer_apellido, segundo_apellido,email,tc.carrera, curp, celular, DATE_FORMAT(ta.fecha_creacion,"%d/%m/%Y") as fecha_registro
     from '.$GLOBALS["db_datosGenerales"].'.personas p 
    join tr_aspirante ta on ta.aspirante_id = persona_id
    join '.$GLOBALS["db_datosGenerales"].'.tr_carrera tc on tc.carrera_id = ta.carrera_id where ta.estatus = 1');

    $query=query('SELECT documento_id from cat_documento where estatus=1');
    $num_documentos = 100/num($query);
    // echo $num_documentos;
    
     $json_alumno = array();
       while ($arreglo_aspirante = arreglo($query_alumno)){

                $sexo=substr($arreglo_aspirante['curp'], 10,-7);
                if($sexo == 'H'){
                  $sexo='Hombre';
                }else{
                  $sexo='Mujer';
                }

                $documentos_aspirantes = query('SELECT expediente_id FROM inter_expediente where aspirante_id ='.$arreglo_aspirante['aspirante_id'].' and estatus=1');
                $documentos_aspirante= num($documentos_aspirantes);
                $documentos=round($num_documentos*$documentos_aspirante);
                // echo $documentos;

                $año=substr($arreglo_aspirante['curp'], 4,-12);
                $mes=substr($arreglo_aspirante['curp'], 6,-10);
                $dia=substr($arreglo_aspirante['curp'], 8,-8);

                $cumpleaños = new DateTime($año.'-'.$mes.'-'.$dia);
                $hoy = new DateTime();
                $años = $hoy->diff($cumpleaños);
               
                $query_respuesta=query('SELECT respuesta from tr_campo_formulario tcf
                left join (select respuesta, campo_formulario_id from inter_campo_aspirante where aspirante_id='.$arreglo_aspirante['aspirante_id'].') as ica on ica.campo_formulario_id = tcf.campo_formulario_id 
                where tcf.estatus=1 order by tcf.campo_formulario_id');
            
                $json_respuesta=array();
                while($arreglo_respuesta = arreglo($query_respuesta)){   
                  
                  if($arreglo_respuesta['respuesta']==''){
                      $arreglo_respuesta['respuesta']='';
                    }              

                    array_push($json_respuesta, $arreglo_respuesta['respuesta']);
   
              }
              $arreglo_aspirante['porcentaje_documentos']=$documentos;              
                $arreglo_aspirante['edad']=$años->y;
                $arreglo_aspirante['sexo']=$sexo;
                $arreglo_aspirante['campos']=$json_respuesta;
                array_push($json_alumno,$arreglo_aspirante);
       }
       
       
       if(num($query_alumno)){
    		$json = array("status" => 1, "msg" => "Se encontró aspirante","encabezado"=>$json_campo, "aspirante" => $json_alumno);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró grupo");
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
