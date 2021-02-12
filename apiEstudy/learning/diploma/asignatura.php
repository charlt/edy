<?php
include '../../jwt.php';
 include '../../headers.php';
include "../../vendor/codigo_qr/phpqrcode/qrlib.php";    
require('../../vendor/FPDF/fpdf.php');

$jwt = $_GET['jwt'];
$id = $_GET['id'];
    
    $usuario = Auth::GetData(
        $jwt  
    );

    // print_r($usuario);
class PDF extends FPDF
{
 //Cabecera de página
    function Header(){
        
        //$this->Image('UMO.gif' ,145 , 7, 50, 30);
        $this->SetFont('Arial','B',30);
        // Movernos a la derecha
        $this->Cell(70,10,'Maqueta FPDF', 0, 0,'L');
        // Salto de línea
        $this->Ln(20);    
        
        // $this->Image('../../../estudy/assets/images/reporte.png',0, 0, 210, 298);
    }

    // Pie de página

    function Footer()
    {
        // Posición: a 1,5 cm del final
        $this->SetY(-15);
        // Arial italic 8
        $this->SetFont('Arial','I',8);
        // Número de página
        // $this->Cell(0,5,utf8_decode('Page ').$this->PageNo().'/{nb}',0,0,'C');
    }
}

$arreglo_alumno = arreglo(query('SELECT tm.materia_id,tm.alumno_id, p.nombre, p.primer_apellido, p.segundo_apellido,iag.asignatura_grupo_id, ca.asignatura, clave_alumno,estatus_materia_id,tm.calificacion
FROM '.$GLOBALS["db_learning"].'.tr_materia tm
join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag ON tm.asignatura_grupo_id = iag.asignatura_grupo_id    
join inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
join cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
join personas p on p.persona_id = tm.alumno_id
join '.$GLOBALS["db_controlEscolar"].'.tr_alumno ta on ta.alumno_id = p.persona_id
WHERE tm.materia_id = '.$id.' and ta.alumno_id ='.$usuario->id.' and iag.estatus = 1 and ta.situacion_alumno_id =1'));
if(isset($arreglo_alumno['estatus_materia_id'])){
    $dir = '../../../assets/qr/';
    
    if (!file_exists($dir))
        mkdir($dir);
        
    $id = $_GET['id'];

    $filename = $dir.$id.'.png';
    QRcode::png($GLOBALS['url_front'].'apiEstudy/learning/diploma/validaAsignatura.php?id_materia='.$id,$filename);
    unlink('../../vendor/codigo_qr/phpqrcode/'.$id.'.png-errors.txt');


if($arreglo_alumno['estatus_materia_id']==2 && $arreglo_alumno['calificacion'] >= 6){

$pdf=new FPDF('L','mm','A4');
$pdf->AliasNbPages();
$pdf->AddPage();
   
$pdf->Image('../../../estudy/assets/images/learning/diploma_azul.jpg',0, 0, 298, 210);
$pdf->Image('../../../estudy/assets/images/learning/logo.png',100,18,90,0);


$num_caracteres_nom= strlen($arreglo_alumno['nombre']);
$num_caracteres_pa= strlen($arreglo_alumno['primer_apellido']);
$num_caracteres_sa= strlen($arreglo_alumno['segundo_apellido']);

 $caracteres_num= $num_caracteres_nom+$num_caracteres_pa+$num_caracteres_sa;

// $pdf->Ln(85);
if($caracteres_num > 32 && $caracteres_num < 42  ){   
    $pdf->SetXY(0, 113);

    $pdf->SetFont('Arial','B',23);   
 
    $pdf->Cell(300,12, utf8_decode($arreglo_alumno['nombre'].' '.$arreglo_alumno['primer_apellido'].' '.$arreglo_alumno['segundo_apellido']),0,1,'C');
}elseif($caracteres_num > 43){
    $pdf->SetXY(0, 113);

    $pdf->SetFont('Arial','B',20);    
    $pdf->Cell(300,12, utf8_decode($arreglo_alumno['nombre'].' '.$arreglo_alumno['primer_apellido'].' '.$arreglo_alumno['segundo_apellido']),0,1,'C');
}else{
    $pdf->SetXY(0, 113);
    $pdf->SetFont('Arial','B',26);    
    $pdf->Cell(300,12, utf8_decode($arreglo_alumno['nombre'].' '.$arreglo_alumno['primer_apellido'].' '.$arreglo_alumno['segundo_apellido']),0,1,'C');

}

// $pdf->Ln(3);
//$pdf->SetXY(7, 121);
//$pdf->SetFont('Arial','B',17);    
//$pdf->Cell(148,20, $arreglo_alumno['clave_alumno'],0,0,'R', 0);

// $pdf->Ln(32);

$pdf->SetFont('Arial','B',15);    
$pdf->SetXY(0, 131);
$pdf->MultiCell(300,28,utf8_decode($arreglo_alumno['asignatura']),0,'C', 0);

$pdf->SetXY(158,236);
$pdf->Image('../../../assets/qr/'.$id.'.png',240,155,40,40);


$pdf->Output();

}elseif($arreglo_alumno['estatus_materia_id'] ==1 ){
$pdf = new PDF('P','mm','A4');
$pdf->AliasNbPages();
$pdf->AddPage();
   $pdf->Ln(5);
$pdf->SetFont('Arial','B',12);    
$pdf->Cell(40,10, 'Materia en curso:',0,0,'C', 0);
$pdf->MultiCell(100,10,utf8_decode($arreglo_alumno['asignatura']),0,'D', 0);

$pdf->Output();
}elseif($arreglo_alumno['calificacion'] <6 ){
    $pdf = new PDF('P','mm','A4');
    $pdf->AliasNbPages();
    $pdf->AddPage();
       $pdf->Ln(5);
    $pdf->SetFont('Arial','B',12);    
    $pdf->Cell(40,10, 'Materia no aprobada: ',0,0,'C', 0);
    $pdf->MultiCell(100,10,utf8_decode($arreglo_alumno['asignatura']),0,'D', 0);
    
    $pdf->Output();
}

}else{
    $pdf = new PDF('P','mm','A4');
    $pdf->AliasNbPages();
    $pdf->AddPage();
       $pdf->Ln(10);
    $pdf->SetFont('Arial','B',12);    
    $pdf->Cell(190,10, 'Alumno no cursa la Materia',0,0,'C', 0);    
    $pdf->Output();
    
}

 /*
$pdf=new FPDF('L','mm','A4');
//Primera página
$pdf->AddPage();
$pdf->SetFont('Arial','B',12);
$pdf->Cell(40,20);
$pdf->Image('../../../estudy/assets/images/learning/diploma_azul.jpg',0, 0, 298, 210);
$pdf->Image('../../../estudy/assets/images/learning/logo.png',110,18,90,0);
$pdf->SetFont('Arial','B',15);
$pdf->SetXY(50, 113);
$pdf->Cell(183,12, utf8_decode('Nombredel alumno'),0,1,'C');
$pdf->SetFont('Arial','B',15);    
$pdf->SetXY(125, 131);
$pdf->MultiCell(550,28,utf8_decode('Nombre del Bloque'),0,'D', 0);
$pdf->Output();*/
?>
