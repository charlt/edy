<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );


if(isset($_FILES['excel']) && $_FILES['excel']['error']==0) {

    require_once "../../vendor/PHPExcel-1.8/Classes/PHPExcel.php";

    $tmpfname = $_FILES['excel']['tmp_name'];

    $excelReader = PHPExcel_IOFactory::createReaderForFile($tmpfname);

    $excelObj = $excelReader->load($tmpfname);

    $worksheet = $excelObj->getSheet(0);

    $lastRow = $worksheet->getHighestRow();
  }


if($_FILES['excel']["type"]=="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || $_FILES['excel']["type"]=="application/vnd.ms-excel"){




$encabezado=array();
$hoja=array();
$letras = array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
// $contador = $columna;

      

    for ($row = 2; $row <= $lastRow ; $row++) {
      // if ($row==1) {
 
      //   // for ($i=0; $i < $contador; $i++) { 
      //   //   array_push($encabezado, $worksheet->getCell($letras[$i].$row)->getValue());
      //   // }
      // }



       $inserta=inserta('cat_asignaturas','asignatura_clave,asignatura,creditos','"'.$worksheet->getCell('C'.$row)->getValue().'","'.$worksheet->getCell('D'.$row)->getValue().'","'.$worksheet->getCell('E'.$row)->getValue().'"');

    }


      if($inserta){
        $json = array("status" => 1, "msg" => "Se insertó la asignatura correctamente");
       }else{
        $json = array("status" => 0, "msg" => "No se logró insertar");
       }


  }else{
    $json = array("status" => 0, "msg" => "Por favor selecciona un formato valido");
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