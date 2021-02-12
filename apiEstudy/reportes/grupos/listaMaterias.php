
<?php
include '../../jwt.php';
include "../../vendor/codigo_qr/phpqrcode/qrlib.php";
require('../../vendor/FPDF/fpdf.php');

$jwt = $_GET['jwt'];
$alumno_id = $_GET['alumno_id'];


$usuario = Auth::GetData(
    $jwt  
);
error_reporting(E_ERROR | E_PARSE);

class PDF extends FPDF
{
    // Cabecera de página
    function Header()
    {

        //$this->Image('UMO.gif' ,145 , 7, 50, 30);
        $this->SetFont('Arial', 'B', 30);
        // Movernos a la derecha
        // $this->Cell(70,10,'Maqueta FPDF', 0, 0,'L');
        // Salto de línea
        $this->Ln(20);

        $this->Image($GLOBALS['url_front'] . 'assets/images/logo.png', 15, 10, 35, 15);
    }

    // Pie de página
    function Footer()
    {
        // Posición: a 1,5 cm del final
        $this->SetY(-15);
        // Arial italic 8
        $this->SetFont('Arial', 'I', 8);
        // Número de página
        $this->Cell(0, 5, utf8_decode('Page ') . $this->PageNo() . '/{nb}', 0, 0, 'C');
    }
}


$pdf = new PDF('P', 'mm', 'A4');
$pdf->AliasNbPages();
$pdf->AddPage();
$fecha_actual = date("d") . '/' . date("m") . '/' . date("Y");

$arreglo_persona = arreglo(query('SELECT p.nombre, p.primer_apellido, p.segundo_apellido, ta.clave_alumno, tc.carrera 
from '.$GLOBALS["db_datosGenerales"].'.personas p 
join '.$GLOBALS["db_controlEscolar"].'.tr_alumno ta on ta.alumno_id = p.persona_id 
join '.$GLOBALS["db_controlEscolar"].'.inter_alumno_plan iap on iap.alumno_id = ta.alumno_id
join '.$GLOBALS["db_datosGenerales"].'.inter_plan_orden ipo on ipo.plan_orden_id = iap.plan_orden_id 
join '.$GLOBALS["db_datosGenerales"].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id 
join '.$GLOBALS["db_datosGenerales"].'.tr_carrera tc on tc.carrera_id = tpe.carrera_id 
where ta.alumno_id='.$alumno_id));

$pdf->SetXY(15, 33);
$pdf->Cell(180, 20, '', 1, 1, 'C', 0);
$pdf->SetFont('Arial', 'B', 10);
$pdf->SetXY(70, 13);
$pdf->Cell(70, 10, 'DEPARTAMENTO DE SERVICIOS ESCOLARES', 0, 1, 'C', 0);
$pdf->SetFont('Arial', '', 10);
$pdf->SetXY(70, 20);
$pdf->Cell(70, 10, utf8_decode('KARDEX'), 0, 1, 'C', 0);
$pdf->SetFont('Arial', '', 8);
$pdf->SetXY(130, 20);
$pdf->Cell(70, 10, utf8_decode('Fecha de expedición: ' . $fecha_actual), 0, 1, 'C', 0);

$marco = 15;
$pdf->Ln(5);
$pdf->SetFont('Arial', '', 8);
$pdf->SetX($marco);
$pdf->Cell(27, 6, 'Nombre del alumno :', 0, 0, 'L', 0);
$pdf->Cell(66, 6, utf8_decode($arreglo_persona['nombre'] . ' ' . $arreglo_persona['primer_apellido'] . ' ' . $arreglo_persona['segundo_apellido']), 0, 0, 'L', 0);
$pdf->Cell(13, 6, utf8_decode("Matrícula:"), 0, 0, 'L', 0);
$pdf->Cell(8, 6,  utf8_decode(strtoupper($arreglo_persona['clave_alumno'])), 0, 1, 'L', 0);

$pdf->SetX($marco);
$pdf->Cell(13, 6, 'Carrera :', 0, 0, 'L', 0);
$pdf->Cell(80, 6, utf8_decode(strtoupper($arreglo_persona['carrera'])), 0, 0, 'L', 0);
$pdf->Cell(35, 6, "", 0, 0, 'L', 0);
$pdf->Cell(50, 6, "", 0, 1, 'L', 0);

$pdf->Ln(13);
$pdf->SetX($marco);
$pdf->Cell(80, 15, 'Materia', 1, 0, 'C', 0);
$pdf->Cell(17.5, 15, utf8_decode('Clave'), 1, 0, 'C', 0);
$pdf->Cell(17.5, 15, utf8_decode('Seriación'), 1, 0, 'C', 0);

$pdf->SetFont('Arial', '', 7);
$pdf->SetXY(130, 65);
$pdf->MultiCell(32.5, 10, utf8_decode("Fecha"), 1, 'C');

$pdf->SetXY(162.5, 65);
$pdf->Cell(32.5, 10, utf8_decode('Calificación'), 1, 0, 'C', 0);

$pdf->SetXY(130, 60);
$pdf->Cell(65, 5, utf8_decode('Calificación definitiva'), 1, 0, 'C', 0);

$query_grado = query('SELECT th.historial_id, th.alumno_id, th.materia_id, coj.orden_jerarquico,
coj.orden_jerarquico_descripcion, coj.orden_jerarquico_id, tab1.suma_calificacion, tab1.num_materias
from '.$GLOBALS["db_controlEscolar"].'.tr_historial th 
join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = th.orden_asignatura_id 
join '.$GLOBALS["db_datosGenerales"].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id 
join '.$GLOBALS["db_datosGenerales"].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id
join (select  th.historial_id,  sum(calificacion) as suma_calificacion, count(*) as num_materias 
from '.$GLOBALS["db_controlEscolar"].'.tr_historial th
join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = th.orden_asignatura_id
join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
join '.$GLOBALS["db_datosGenerales"].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id 
join '.$GLOBALS["db_datosGenerales"].'.cat_orden_jerarquico coj2 on coj2.orden_jerarquico_id = ipo.orden_jerarquico_id 
where alumno_id = '.$alumno_id.' and ca.estatus = 1 and th.estatus = 1 
group by alumno_id, coj2.orden_jerarquico_id) tab1 on tab1.historial_id = th.historial_id 
where th.alumno_id = '.$alumno_id.' group by coj.orden_jerarquico_id order by coj.orden_jerarquico_id asc'); //Sólo trae los grados de las materias que tiene ese alumno

if (num($query_grado)) {
    $json_grado = array();
    while ($arreglo_grado = arreglo($query_grado)) {
        $query_materias = query('select  th.alumno_id, ca.asignatura_clave, ca.asignatura,th.calificacion,th.historial_id, th.fecha_creacion, coj.orden_jerarquico_id, ca.asignatura_padre_id
        from '.$GLOBALS["db_controlEscolar"].'.tr_historial th
        join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = th.orden_asignatura_id
        join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
        join '.$GLOBALS["db_datosGenerales"].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id 
        join '.$GLOBALS["db_datosGenerales"].'.cat_orden_jerarquico coj on coj.orden_jerarquico_id = ipo.orden_jerarquico_id 
        where alumno_id = '.$alumno_id.' and ca.estatus = 1 and th.estatus = 1 and coj.orden_jerarquico_id=' . $arreglo_grado['orden_jerarquico_id']); //trae todas las materias con ese grado

        $json_materias = array();
        while ($arreglo_materias = arreglo($query_materias)) {

            array_push($json_materias, $arreglo_materias);
        }
        $arreglo_grado['materias'] = $json_materias;
        array_push($json_grado, $arreglo_grado);
    }
    
}

$y_cell = 60;
$actividad_nombre = array();
$i=0;
foreach ($json_grado as $grado) {
    $y_cell += 8;
    $i++;
    $pdf->SetFont('Arial', 'B', 9);
    $pdf->SetXY($marco, 7 + $y_cell);
    $pdf->Cell(80, 8, utf8_decode($grado['orden_jerarquico_descripcion']), 1, 0, 'C', 0);
    $pdf->Cell(17.5, 8, (''), 1, 0, 'C', 0);
    $pdf->Cell(17.5, 8, (''), 1, 0, 'C', 0);
    $pdf->Cell(32.5, 8, (''), 1, 0, 'C', 0);
    $pdf->Cell(32.5, 8, (''), 1, 0, 'C', 0);
    if ($grado['materias']){
        foreach ($grado['materias'] as $materias){
            $y_cell += 8;
            $i++;
            if (isset($materias['asignatura_padre_id'])){
                $materia_padre = arreglo(query('SELECT ca.asignatura_clave as asignatura_clave_padre 
                from '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca where ca.asignatura_clave=' . $materias['asignatura_padre_id'] . ' group by ca.asignatura_clave'));
                $materias['seriacion'] = $materia_padre['asignatura_clave'];
            }
            if($i== 26 ||$i == 57) {
                $pdf->AddPage();
                $y_cell = 18;
            }
            
            $pdf->SetFont('Arial', '', 7);
            $pdf->SetXY($marco, 7 + $y_cell);
            $pdf->Cell(80, 8, '', 1, 0, 'C', 0);
            $pdf->SetXY($marco, 7 + $y_cell + 2);
            $pdf->MultiCell(80, 3, utf8_decode($materias['asignatura']));
            $pdf->SetXY($marco + 80, 7 + $y_cell);
            $pdf->Cell(17.5, 8, utf8_decode($materias['asignatura_clave']), 1, 0, 'C', 0);
            $pdf->Cell(17.5, 8, utf8_decode($materias['seriacion']), 1, 0, 'C', 0);
            $pdf->Cell(32.5, 8, utf8_decode(strftime("%d/%m/%Y", strtotime($materias['fecha_creacion']))), 1, 0, 'C', 0);
            $pdf->Cell(32.5, 8, utf8_decode($materias['calificacion']), 1, 0, 'C', 0);
            
        }

    }
}
    $pdf->AddPage();
    $y_cell = 18;
$pdf->SetFont('Arial', 'B', 11);
$pdf->SetXY($marco, $y_cell + 15);
$pdf->Cell(180, 6, ('Promedios por cuatrimestre'), 0, 0, 'L', 0);

$materias_totales = arreglo(query('SELECT count(*) as materias_totales from '.$GLOBALS["db_controlEscolar"].'.tr_historial th where alumno_id = '.$alumno_id.' and th.estatus =1'));

$sumaCalificaciones = 0;
$margen = $marco;
foreach ($json_grado as $grado) {
    $pdf->SetFont('Arial', '', 10);
    $margen += 17;
    $pdf->SetXY($margen - 17, 7 + $y_cell + 15);
    $pdf->Cell(17, 6, ($grado['orden_jerarquico_descripcion']), 1, 0, 'C', 0);
    $pdf->SetXY($margen - 17, 6 + $y_cell + 22);
    $pdf->Cell(17, 6, round(($grado['suma_calificacion'] / $grado['num_materias']), 1, PHP_ROUND_HALF_DOWN), 1, 0, 'C', 0);
    $sumaCalificaciones = $sumaCalificaciones + $grado['suma_calificacion'];
}

$pdf->SetXY(70, 7 + $y_cell + 35);
$pdf->Cell(32, 7, ('Promedio general'), 1, 0, 'C', 0);
$pdf->SetXY(102, 7 + $y_cell + 35);
$pdf->Cell(20, 7, round(($sumaCalificaciones/$materias_totales['materias_totales']),1, PHP_ROUND_HALF_DOWN), 1, 0, 'C', 0);
$pdf->SetXY($marco, $y_cell + 55);
$pdf->Cell(180, 10, '', 1, 0, 'C', 0);

$pdf->SetXY($marco, $y_cell + 53);
$pdf->Cell(52, 15, utf8_decode('Revalidación o equivalencia No:'), 0, 0, 'C', 0);
$pdf->SetXY($marco + 110, $y_cell + 53);
$pdf->Cell(52, 15, 'De fecha:', 0, 0, 'C', 0);

$pdf->SetFont('Arial', 'B', 11);
$pdf->SetXY(22,  $y_cell + 63);
$pdf->Cell(15, 15, 'Observaciones:', 0, 0, 'C', 0);

$pdf->SetXY(160, $y_cell + 70);
$pdf->Cell(35, 35, '', 1, 0, 'C', 0);


$pdf->line(15, $y_cell + 80, 125, $y_cell + 80 );
$pdf->line(15, $y_cell + 90, 125, $y_cell + 90);
$pdf->line(15, $y_cell + 100,125, $y_cell + 100);
$pdf->Output();

?>