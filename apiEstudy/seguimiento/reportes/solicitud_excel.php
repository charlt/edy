<?php

include '../../jwt.php';
require_once '../../vendor/phpoffice/phpexcel/Classes/PHPExcel.php';


try {

  function num2alpha($n)
  {
    for($r = ""; $n >= 0; $n = intval($n / 26) - 1)
        $r = chr($n%26 + 0x41) . $r;
    return $r;
  }

  
  
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
      $num_campo= num($query_campo);


    $query_alumno= query('SELECT aspirante_id, nombre, primer_apellido, segundo_apellido,celular,email,tc.carrera, curp, DATE_FORMAT(ta.fecha_creacion,"%d/%m/%Y") as fecha_registro
     from '.$GLOBALS["db_datosGenerales"].'.personas p 
    join tr_aspirante ta on ta.aspirante_id = persona_id
    join '.$GLOBALS["db_datosGenerales"].'.tr_carrera tc on tc.carrera_id = ta.carrera_id where ta.estatus = 1');

    $query=query('SELECT documento_id from cat_documento where estatus=1');
    $num_documentos = 100/num($query);
    
     $json_alumno = array();
       while ($arreglo_aspirante = arreglo($query_alumno)){

         
         $documentos_aspirantes = query('SELECT expediente_id FROM inter_expediente where aspirante_id ='.$arreglo_aspirante['aspirante_id'].' and estatus=1');
         $documentos_aspirante= num($documentos_aspirantes);
         $documentos=round($num_documentos*$documentos_aspirante);
         // echo $documentos;
         
         $año=substr($arreglo_aspirante['curp'], 4,-12);
         $mes=substr($arreglo_aspirante['curp'], 6,-10);
         $dia=substr($arreglo_aspirante['curp'], 8,-8);
         
         if ($arreglo_aspirante['curp']){
          $sexo=substr($arreglo_aspirante['curp'], 10,-7);
          if($sexo == 'H'){
            $sexo='Hombre';
          }else{
            $sexo='Mujer';
          }
                  $cumpleaños = new DateTime($año.'-'.$mes.'-'.$dia);
                  $hoy = new DateTime();
                  $años = $hoy->diff($cumpleaños);
          }
               
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
              if ($arreglo_aspirante['curp']) {
                $arreglo_aspirante['edad']=$años->y;
                $arreglo_aspirante['sexo']=$sexo;
              }else{
                $arreglo_aspirante['edad']='';
                $arreglo_aspirante['sexo']='';
              }         
                $arreglo_aspirante['campos']=$json_respuesta;

                array_push($json_alumno,$arreglo_aspirante);
       }


       
      
      $registro_campo=sizeof($json_campo);
      $registro_alumno=sizeof($json_alumno); 

  $objPHPExcel = new PHPExcel();
  $objPHPExcel->setActiveSheetIndex(0);  
   $objPHPExcel->getProperties()
   ->setCreator("Temporaris")
   ->setLastModifiedBy("Temporaris")
   ->setTitle("Template Relevé des heures intérimaires")
   ->setSubject("Template excel")
   ->setDescription("Template excel permettant la création d'un ou plusieurs relevés d'heures")
   ->setKeywords("Template excel");
   $objPHPExcel->setActiveSheetIndex(0);
   $objPHPExcel->setActiveSheetIndex(0)
    ->setCellValue('A1', 'Nombre')
    ->setCellValue('B1', 'Primer apellido')
    ->setCellValue('C1', 'Segundo apellido')
    ->setCellValue('D1', 'fecha de registro')
    ->setCellValue('E1', 'celular')
    ->setCellValue('F1', 'email')
    ->setCellValue('G1', 'CURP')
    ->setCellValue('H1', 'edad')
    ->setCellValue('I1', 'sexo')
    ->setCellValue('J1', 'carrera')
    ->setCellValue('K1', 'porcentaje documentos')
    ->setCellValue('L1', 'celular')
    ;

    for($i=0; $i<($num_documentos); $i++){
      $alfa = num2alpha($i);
      $objPHPExcel->getActiveSheet()->getColumnDimension($alfa)->setWidth(20);
    }


    for($i=0; $i<$registro_campo; $i++){
      $alfa = num2alpha($i+12);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue($alfa.'1', $json_campo[$i]);
    }

    for($i=0; $i<$registro_alumno; $i++){
      $num = $i+2;
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('A'.$num, $json_alumno[$i]['nombre']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('B'.$num, $json_alumno[$i]['primer_apellido']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('C'.$num, $json_alumno[$i]['segundo_apellido']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('D'.$num, $json_alumno[$i]['fecha_registro']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('E'.$num, $json_alumno[$i]['celular']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('F'.$num, $json_alumno[$i]['email']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('G'.$num, $json_alumno[$i]['curp']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('H'.$num, $json_alumno[$i]['edad']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('I'.$num, $json_alumno[$i]['sexo']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('J'.$num, $json_alumno[$i]['carrera']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('K'.$num, $json_alumno[$i]['porcentaje_documentos']);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('L'.$num, $json_alumno[$i]['celular']);
      

      for($j=0; $j<$num_campo; $j++){
        $alfab = num2alpha($j+12);
        $numb = $i+2;
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue($alfab.$numb, $json_alumno[$i]['campos'][$j]);
      }
      
    }

   $writer = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');  
   header('Content-Type: application/vnd.ms-excel');
   header('Content-Disposition: attachment;filename="excel.xls"');
   header('Cache-Control: max-age=0');
   $writer->save('php://output');


    }else{
      $json = array("status" => 0, "msg" => "Método no aceptado");
    }
  
    /* Output header */
  
    echo json_encode($json);
  
  } catch (Exception $e) {
      echo  $e->getMessage();
  }
  

  