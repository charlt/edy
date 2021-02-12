<?php
include "../../vendor/phpoffice/phpexcel/Classes/PHPExcel/IOFactory.php";
include '../../jwt.php';
include '../../headers.php';
include '../../general/class/usuario.class.php';


try {

    db('datosGenerales');
  
    $usuario = new Usuario();
  
    if($_SERVER['REQUEST_METHOD'] == "POST"){
      foreach($_POST as $clave => $valor){
        ${$clave} = escape_cara($valor);
      }
      
        /*$usuario = Auth::GetData(
              $jwt  
          );*/
            


    $nombre_archivo = $_FILES['documento_pagos']['tmp_name'];
    $extension = strtoupper(explode(".", $_FILES['documento_pagos']['name'])[1]);

    if($extension == 'XLSX' || $extension == 'ODS'){

        $objPHPExcel = PHPExcel_IOFactory::load($nombre_archivo);



        $objPHPExcel->setActiveSheetIndex(0);

        $numRows=$objPHPExcel ->setActiveSheetIndex(0)->getHighestRow();

        $numColumnas=$objPHPExcel->setActiveSheetIndex(0)->getHighestColumn();


        $sheetData = $objPHPExcel->getActiveSheet(); 
        $highestRow = $sheetData->getHighestRow(); 
        $highestColumn = $sheetData->getHighestColumn(); 
        $highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn); 

        $i =0;


        
        $pagos =array();
        $sin_suscripcion = array();
        if($numColumnas != null){
            for ($i=2; $i <= $numRows ; $i++) { 


                $clave_alumno = $objPHPExcel->getActiveSheet()->getCell('A'.$i)->getCalculatedValue();
                $nombre_pago = $objPHPExcel->getActiveSheet()->getCell('B'.$i)->getCalculatedValue();
                $monto = $objPHPExcel->getActiveSheet()->getCell('C'.$i)->getCalculatedValue();
                $estatus_solicitud_pago_id = $objPHPExcel->getActiveSheet()->getCell('D'.$i)->getCalculatedValue();                
                $fecha_pago = $objPHPExcel->getActiveSheet()->getCell('E'.$i)->getCalculatedValue();
                $timestamp = PHPExcel_Shared_Date::ExcelToPHP($fecha_pago);
                $fecha_php = date("Y-m-d",$timestamp);
                $monto_final = $objPHPExcel->getActiveSheet()->getCell('F'.$i)->getCalculatedValue();
                $mes_numero = $objPHPExcel->getActiveSheet()->getCell('G'.$i)->getCalculatedValue();
                $tipo_pago_id = $objPHPExcel->getActiveSheet()->getCell('I'.$i)->getCalculatedValue();


                $arreglo_suscripcion_alumno = arreglo(query('select suscripcion_id from '.$GLOBALS['db_pagos'].'.inter_alumno_suscripcion where alumno_id = '.$clave_alumno.' and estatus =1'));  
                if($arreglo_suscripcion_alumno['suscripcion_id']){
                $suscripcion = arreglo(query('select pago_id from '.$GLOBALS['db_pagos'].'.tr_suscripcion_pago 
                where suscripcion_id = '.$arreglo_suscripcion_alumno['suscripcion_id'].' and mes = '.$mes_numero.' and estatus =1'));

                    if(empty($suscripcion)){
                        $insert_pago = inserta_last_id($GLOBALS['db_pagos'].'.tr_pago','tipo_pago_id,estatus','1,1');
                        if($insert_pago){
                            $suscripcion_pago = inserta($GLOBALS['db_pagos'].'.tr_suscripcion_pago','suscripcion_id, mes,anio,tipo,pago_id,estatus',
                            ''.$arreglo_suscripcion_alumno['suscripcion_id'].', '.$mes_numero.',2020,2,'.$insert_pago.',1');
                                if($suscripcion_pago){
                                    $suscripcion = arreglo(query('select pago_id from '.$GLOBALS['db_pagos'].'.tr_suscripcion_pago where suscripcion_pago_id ='.$suscripcion_pago));
                                }
                        }
                    }


                    if($clave_alumno == null){
                        $texto = "Clave Alumnos no puede venir vacía";
                    break;
                    }
                    if($nombre_pago == null){
                        $texto = "Nombre Pago no puede venir vacía";
                    break;
                    }
                    if($monto != 0 & $monto == null){
                        $texto = "Monto no puede venir vacía";
                    break;
                    }
                    if($estatus_solicitud_pago_id == null){
                        $texto = "Estatus solicitud pago no puede venir vacía";
                    break;
                    }
                    if($fecha_pago != 0 & $fecha_pago == null){
                        $texto = "Fecha Pago no puede venir vacía";
                    break;
                    }
                    if($monto_final != 0 & $monto_final == null){
                        $texto = "Montó Final no puede venir vacía";
                    break;
                    }
                    if($mes_numero == null){
                        $texto = "Mes número no puede venir vacía";
                    break;
                    }
                    if($tipo_pago_id == null){
                        $texto = "Tipo pago id no puede venir vacía";
                    break;
                    }
            
                    $arreglo['alumno_id'] = $clave_alumno;
                    $arreglo['pago_id'] = $suscripcion['pago_id'];
                    $arreglo['estatus_solicitud_pago_id'] = $estatus_solicitud_pago_id;
                    $arreglo['nombre_pago'] = $nombre_pago;
                    $arreglo['monto'] = $monto;
                    $arreglo['fecha_pago'] = $fecha_php;
                    $arreglo['forma_pago_id'] = $tipo_pago_id;
                    $arreglo['monto_final'] = $monto_final;

                    array_push($pagos, $arreglo);
                }else{
                
                    $arreglo_sin['alumno_id'] = $clave_alumno;
                    $arreglo_nombre = arreglo(query('
                    select nombre, primer_apellido, segundo_apellido,cr.rol,ta.clave_alumno
                                        from personas p
                                        join inter_persona_usuario_rol ipur on ipur.persona_id = p.persona_id
                                        join cat_rol cr on cr.rol_id = ipur.rol_id
                                        left join '.$GLOBALS['db_controlEscolar'].'.tr_alumno ta on ta.alumno_id = ipur.persona_id  
                                        where p.estatus =1 and p.persona_id='.$clave_alumno));

                    $arreglo_sin['nombre'] =  $arreglo_nombre['nombre'].' '.$arreglo_nombre['primer_apellido'].' '.$arreglo_nombre['segundo_apellido'];
                    $arreglo_sin['rol'] = $arreglo_nombre['rol'];
                    $arreglo_sin['clave_alumno'] = $arreglo_nombre['clave_alumno'];
                    $arreglo_sin['nombre_pago'] = $nombre_pago;

                    array_push($sin_suscripcion, $arreglo_sin);
                }


          }
            
            $num_pagos = count($pagos) + 1;
            $num_sin_suscripcion = count($sin_suscripcion);

            if($numRows == ($num_pagos+$num_sin_suscripcion)){
                foreach ($pagos as $pagos_tmp) {
                    $insert_solicitud_pago = inserta($GLOBALS['db_pagos'].'.tr_solicitud_pago','persona_id, pago_id, estatus_solicitud_pago_id, nombre_pago, monto, fecha_pago, forma_pago_id, monto_final,estatus',
                    ''.$pagos_tmp['alumno_id'].','.$pagos_tmp['pago_id'].','.$pagos_tmp['estatus_solicitud_pago_id'].',"'.$pagos_tmp['nombre_pago'].'",'.$pagos_tmp['monto'].','.$pagos_tmp['fecha_pago'].','.$pagos_tmp['forma_pago_id'].','.$pagos_tmp['monto_final'].',1');
                }
                if($num_sin_suscripcion){
                    $json = array("status"=> 1, "msg"=> "Se insertaron pagos correctamente.","alumnos_sin_suscripcion" => $sin_suscripcion);
                }else{
                    $json = array("status"=> 1, "msg"=> "Se insertaron pagos correctamente.");
                }
            }else{

                $json = array("status"=> 0, "msg"=> $texto);
            }


        }




    }else{
        $json = array("status"=> 0, "msg"=>  "Solo acepta documentos Excel");

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

