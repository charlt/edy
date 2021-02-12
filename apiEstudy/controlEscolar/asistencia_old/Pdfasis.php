<?php
require_once '../../config/db.php';
require('../../vendor/FPDF/fpdf.php');
db('controlEscolar');

// $id_grupo = $_GET['id_grupo'];
// $id_materia = $_GET['id_materia'];

$id_asignatura_grupo = $_GET['id_asignatura_grupo'];

class PDF extends FPDF
{
// Cabecera de página
function Header()
{
    $this->Image($GLOBALS['url_front'].'assets/images/email/logo.png',145 , 0, 50, 30);
    $this->SetFont('Arial','B',35);
    // Movernos a la derecha
    $this->Cell(115,10,'Lista de Asistencia', 0, 0,'L');
    // Salto de línea
    $this->Ln(20);
}

// Pie de página
function Footer()
{
    // Posición: a 1,5 cm del final
    $this->SetY(-15);
    // Arial italic 8
    $this->SetFont('Arial','',8);
    // Número de página
    $this->Cell(0,5,utf8_decode('Pagina ').$this->PageNo().'/{nb}',0,0,'C');
}
}

$consulta = 'SELECT distinct grupo_id as id_grupo, ca.asignatura_clave as clave_materia,ca.asignatura as materia,ipo.plan_estudio_id as grupo 
,ipo.orden_jerarquico_id as grado, date_format(iag.fecha_inicio,"%d") as dia_ini,date_format(iag.fecha_inicio,"%b") as mes_ini,cast(date_format(iag.fecha_inicio,"%m") as int)as mes_ini_num,date_format(iag.fecha_inicio,"%Y")
    as anio_ini ,date_format(iag.fecha_fin,"%d") as dia_fin,date_format(iag.fecha_fin,"%b") as mes_fin,cast(date_format(iag.fecha_fin,"%m") as int) as mes_fin_num,date_format(iag.fecha_fin,"%y")
    as anio_fin,p.nombre,p.primer_apellido as ap_pat,p.segundo_apellido as ap_mat ,tpe.plan_estudio as nombre_carrera
from inter_asignatura_grupo iag
join inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = iag.asignatura_grupo_id
join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = idag.docente_id 
join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
join '.$GLOBALS['db_learning'].'.tr_materia tm on tm.asignatura_grupo_id = iag.asignatura_grupo_id
join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
where iag.asignatura_grupo_id ='.$id_asignatura_grupo;
$resultado = arreglo(query($consulta));

$consulta_alumnos = 'SELECT al.alumno_id as id, nombre,primer_apellido as ap_pat, segundo_apellido as ap_mat
FROM asistencia a
join tr_alumno al on al.alumno_id = a.alumno_id
join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = al.alumno_id
where asignatura_grupo_id = '.$id_asignatura_grupo;
$alumno = query($consulta_alumnos);
$num_alu = num($alumno);

// $resul= arreglo($consulta);
function obt_mes($mes){
        if ($mes == 'Jan' || $mes == '1' ) {
            $mes = 'Ene';
        } 
        elseif ($mes == 'Feb' || $mes == '2' ) {
            $mes = 'Feb';
        }  
        elseif ($mes == 'Mar' || $mes == '3' ) {
            $mes = 'Mar';
        } 
        elseif ($mes == 'Apr' || $mes == '4' ) {
            $mes = 'Abr';
        } 
        elseif ($mes == 'May' || $mes == '5' ) {
            $mes = 'May';
        } 
        elseif ($mes == 'Jun' || $mes == '6' ) {
            $mes = 'Jun';
        } 
        elseif ($mes == 'Jul' || $mes == '7' ) {
            $mes = 'Jul';
        } 
        elseif ($mes == 'Aug' || $mes == '8' ) {
            $mes = 'Ago';
        } 
        elseif ($mes == 'Sep' || $mes == '9' ) {
            $mes = 'Sep';
        } 
        elseif ($mes == 'Oct' || $mes == '10' ) {
            $mes = 'Oct';
        } 
        elseif ($mes == 'Nov' || $mes == '11' ) {
            $mes = 'Nov';
        }           
        elseif ($mes == 'Dec' || $mes == '12' ) {
            $mes = 'Dic';
        } 
    
return $mes;
}

// echo obt_mes($resultado['mes_ini']). ' - ' .obt_mes($resultado['mes_fin']);



$pdf = new PDF('P','mm','A4');
$pdf->AliasNbPages();
$pdf->AddPage();

$pdf->Ln();
$pdf->SetFont('Arial','',10);    
$pdf->Cell(30,5, 'Materia',1,0,'C', 0);
$pdf->Cell(100,5, utf8_decode($resultado['materia']),1,0 ,'C', 0);
$pdf->Cell(5,5, '',0,0 ,'C', 0);
$pdf->Cell(50,5, 'CLAVE DE LA MATERIA',1,0 ,'C', 0);

$pdf->Ln();
$pdf->SetFont('Arial','',10);
$pdf->Cell(30,5, 'Carrera',1,0,'C', 0);
$pdf->SetFont('Arial','',10);
$pdf->Cell(100,5, utf8_decode($resultado['nombre_carrera']),1,0 ,'C', 0);
$pdf->Cell(5,5, '',0,0 ,'C', 0);
$pdf->Cell(50,5, ($resultado['clave_materia']),1,0 ,'C', 0);

$pdf->Ln();
$pdf->Cell(21,5, 'Grado',1,0,'C', 0);
$pdf->Cell(10,5, $resultado['grado'],1,0 ,'C', 0);
$pdf->Cell(21,5, 'Grupo',1,0 ,'C', 0);
$pdf->Cell(21,5, $resultado['grupo'],1,0 ,'C', 0);
$pdf->Cell(21,5, 'Periodo',1,0,'C', 0);
$pdf->SetFont('Arial','',9);
$pdf->Cell(36,5,  ("".obt_mes($resultado['mes_ini'])." - ".obt_mes($resultado['mes_fin'])." ".$resultado['anio_ini']." "),1,0,'C', 0);
$pdf->Cell(5,5, '',0,0 ,'C', 0);
$pdf->Cell(50,5, 'TURNO',1,0 ,'C', 0);

$pdf->Ln();
$pdf->SetFont('Arial','',9);
$pdf->Cell(30,5, 'Profesor    ',1,0,'C', 0);
$pdf->Cell(100,5, utf8_decode("".$resultado['nombre']."   ".$resultado['ap_pat']."   ".$resultado['ap_mat']),1,0 ,'C', 0);
$pdf->Cell(5,5, '',0,0 ,'C', 0);
$pdf->Cell(50,5, utf8_decode(''),1,1 ,'C', 0);//falta agregar el turno en la base 


$pdf->Ln();
$pdf->Cell(15,12, 'ID',1,0,'C', 0);
$pdf->Cell(1,12, '',0,0 ,'C', 0);
$pdf->Cell(70,12, 'NOMBRE DEL ALUMNO',1,0,'C', 0);
$pdf->Cell(1,12, '',0,0,'C', 0);

for ($i=$resultado['mes_ini_num']; $i <=$resultado['mes_fin_num'] ; $i++) { 
    
    $pdf->Cell(22.5,6, obt_mes($i),1,0,'C', 0);   
}
$pdf->Cell(8, 12, 'F',1,0,'C', 0);
    $pdf->Ln();
    $pdf->SetXY(97,71);

for ($i=0; $i <20 ; $i++) {
   $pdf->Cell(4.5,6, '',1,0,'C', 0);
   }

    //dias       
   $pdf->Cell(8,6, '',0,0,'C', 0);

    //ID y Nombre del alumno   
$pdf->SetFont('Arial','',8);
$pdf->SetXY(97,71);
for ($i=0; $i < $num_alu ; $i++) {
    $Datos = arreglo($alumno);
$pdf->Ln();
$pdf->Cell(15,6 , $i+1,1,0,'C', 0);
$pdf->Cell(1,6, '',0,0,'C', 0);
$pdf->Cell(70,6,utf8_decode("".$Datos['nombre']." ".$Datos['ap_pat']." ".$Datos['ap_mat']."  "),1,0,'C', 0);
$pdf->Cell(1,6, '',0,0,'C', 0);

    // Cuadro de asistencia
for ($j=0; $j <20 ; $j++) {
   $pdf->Cell(4.5,6, '',1,0,'C', 0);
   }
   $pdf->Cell(8,6, '',1,0,'C', 0);
}

$pdf->Ln(10);
$pdf->Setxy(115,260);
$pdf->Cell(80,11, '',1,1,'C', 0);
$pdf->SetFont('Times','',12);
$pdf->Setxy(115,271);
$pdf->Cell(80,5,'Firma del Profesor', 0,0,'C', 0);

    
$pdf->Output('I','Lista de Asistencia.pdf');
?>
