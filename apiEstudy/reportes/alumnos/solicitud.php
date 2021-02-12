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

  $arreglo_plan=arreglo(query('select plan_estudio, tc.carrera
  from '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe
  join '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc on tpe.carrera_id = tc.carrera_id
  where tpe.estatus =1 and tc.estatus=1 and plan_estudio_id = '.$id_plan_estudios.' and tpe.estatus=1'));
      

    $json_campo=array();
    $query_campo = query('SELECT pregunta from tr_campo_formulario where estatus=1 order by campo_formulario_id');
      while($arreglo = arreglo($query_campo)){
          array_push($json_campo, $arreglo['pregunta']);
      }
    

    $query_alumno= query('SELECT ta.alumno_id, nombre, primer_apellido, segundo_apellido,celular,email,tc.carrera, curp, DATE_FORMAT(ta.fecha_creacion,"%d/%m/%Y") as fecha_registro, clave_alumno
      from '.$GLOBALS['db_datosGenerales'].'.personas p 
     join '.$GLOBALS['db_controlEscolar'].'.tr_alumno ta on ta.alumno_id = persona_id
     join '.$GLOBALS['db_controlEscolar'].'.inter_alumno_plan iap on iap.alumno_id = ta.alumno_id
     join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id
     join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
     join '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc on tc.carrera_id = tpe.carrera_id    
    where p.estatus=1 and ta.estatus = 1 and tpe.estatus=1 and tc.estatus=1 and  iap.estatus = 1 and tpe.plan_estudio_id = '.$id_plan_estudios);

    $query=query('SELECT documento_id from cat_documento where estatus=1');
    $num_documentos = 100/num($query);
    // echo $num_documentos;
    
     $json_alumno = array();
       while ($arreglo_aspirante = arreglo($query_alumno)){

         if($arreglo_aspirante['curp']){

          $sexo=substr($arreglo_aspirante['curp'], 10,-7);
          if($sexo == 'H'){
            $sexo='Hombre';
          }else{
            $sexo='Mujer';
          }
          $año=substr($arreglo_aspirante['curp'], 4,2);
          $mes=substr($arreglo_aspirante['curp'], 6,2);
          $dia=substr($arreglo_aspirante['curp'], 8,2);

          $cumpleaños = new DateTime($año.'-'.$mes.'-'.$dia);
          $hoy = new DateTime();
          $años = $hoy->diff($cumpleaños);
          $edad=$años->y;

         }else{
          $cumpleaños = null;
          $años = null;
          $edad = null;
         }
                

                $documentos_aspirantes = query('SELECT expediente_id FROM inter_expediente where aspirante_id ='.$arreglo_aspirante['alumno_id'].' and estatus=1');
                $documentos_aspirante= num($documentos_aspirantes);
                $documentos=round($num_documentos*$documentos_aspirante);
                // echo $documentos;

            

                
               
                $query_respuesta=query('SELECT respuesta from tr_campo_formulario tcf
                left join (select respuesta, campo_formulario_id from inter_campo_aspirante where aspirante_id='.$arreglo_aspirante['alumno_id'].') as ica on ica.campo_formulario_id = tcf.campo_formulario_id 
                where tcf.estatus=1 order by tcf.campo_formulario_id');
            
                $json_respuesta=array();
                while($arreglo_respuesta = arreglo($query_respuesta)){   
                  
                  if($arreglo_respuesta['respuesta']==''){
                      $arreglo_respuesta['respuesta']='';
                    }              

                    array_push($json_respuesta, $arreglo_respuesta['respuesta']);
   
              }
              $arreglo_aspirante['porcentaje_documentos']=$documentos;              
                $arreglo_aspirante['edad']=$edad;
                $arreglo_aspirante['sexo']=$sexo;
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
   ->setCellValue('A1', 'Plan_estudios')
   ->setCellValue('C1', 'Carrera')

   ->setCellValue('A4', 'Nombre')
    ->setCellValue('B4', 'Primer apellido')
    ->setCellValue('C4', 'Segundo apellido')
    ->setCellValue('D4', 'fecha de registro')
    ->setCellValue('E4', 'celular')
    ->setCellValue('F4', 'email')
    ->setCellValue('G4', 'CURP')
    ->setCellValue('H4', 'edad')
    ->setCellValue('I4', 'sexo')
    ->setCellValue('J4', 'carrera')
    ->setCellValue('K4', 'porcentaje documentos')
    ->setCellValue('L4', 'celular')
    ->setCellValue('M4', 'Matricula')
    ;

    for($i=0; $i<(44+12); $i++){
      $alfa = num2alpha($i);
      $objPHPExcel->getActiveSheet()->getColumnDimension($alfa)->setWidth(20);
    }


    for($i=0; $i<$registro_campo; $i++){
      $alfa = num2alpha($i+13);
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue($alfa.'4', $json_campo[$i]);
    }

    $objPHPExcel->setActiveSheetIndex(0)->setCellValue('A2', $arreglo_plan['plan_estudio']);
    $objPHPExcel->setActiveSheetIndex(0)->setCellValue('C2', $arreglo_plan['carrera']);


    for($i=0; $i<$registro_alumno; $i++){

      $num = $i+5;
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
      $objPHPExcel->setActiveSheetIndex(0)->setCellValue('M'.$num, $json_alumno[$i]['clave_alumno']);
      

      for($j=1; $j<44; $j++){
        $alfab = num2alpha($j+12);
        $numb = $i+5;
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue($alfab.$numb, $json_alumno[$i]['campos'][$j]);
      }
      
    }

   $writer = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');  
   header('Content-Type: application/vnd.ms-excel');
   header('Content-Disposition: attachment;filename="reporteGeneral.xls"');
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
  

  