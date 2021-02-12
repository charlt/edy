<?php
require_once '../config/db.php';
require('../vendor/FPDF/fpdf.php');
db('Pagos');

$id_alumno = $_GET['id_alumno'];

class PDF extends FPDF
{
// Cabecera de página
function Header()
{
    // C:\xampp\htdocs\estudy_new\estudy\assets\images\logoWhite.png
    $this->Image($GLOBALS['url_front'].'assets/images/logoWhite.png',15 ,15, 30, 28);
    $this->SetFont('Arial','B',10);
    // Movernos a la derecha
    $this->SetXY(105,15);
    $this->Cell(30,8,'IGM Plantel Norte', 0, 0,'L');
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

$pdf = new PDF('P','mm','A4');
$pdf->AliasNbPages();
$pdf->AddPage();

$arreglo = arreglo(query('select p.nombre,p.primer_apellido, p.segundo_apellido,cne.nivel_estudios ,tc.carrera,
tsp.monto,cfp.descripcion,tsp.nombre_pago as descripcion_pago, DATE_FORMAT(now(), "%d/%m/%Y") as fecha
from '.$GLOBALS['db_pagos'].'.tr_solicitud_pago tsp 
join '.$GLOBALS['db_pagos'].'.inter_alumno_suscripcion ias on ias.alumno_id = tsp.persona_id
join '.$GLOBALS['db_pagos'].'.cat_suscripcion cs on cs.suscripcion_id = ias.suscripcion_id
join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = tsp.persona_id
join '.$GLOBALS['db_datosGenerales'].'.tr_carrera tc on tc.carrera_id = cs.carrera_id
join '.$GLOBALS['db_datosGenerales'].'.cat_nivel_estudios cne on cne.nivel_estudios_id = tc.nivel_estudios_id
join '.$GLOBALS['db_pagos'].'.cat_forma_pago cfp on cfp.forma_pago_id = tsp.forma_pago_id
where p.persona_id = '.$id_alumno.' and estatus_solicitud_pago_id in (1,2)'));

$pdf->SetXY(110,5);
$pdf->SetFont('Arial','',8);
$pdf->Cell(12,6,'Recibo de Pago',0,0,'C', 0);

$pdf->SetXY(96,24);
$pdf->SetFont('Arial','B',10);
$pdf->Cell(50,6,'COMPROBANTE DE INGRESO', 0,0,'C', 0);

$pdf->SetFont('Arial','',10);
$pdf->SetXY(50,33);
$pdf->Cell(12,6,'No. 187',0,0,'C', 0);

$pdf->SetFont('Arial','',10);
$pdf->SetXY(50,37);
$pdf->Cell(12,6,'Fecha:',0,0,'R', 0);
$pdf->Cell(18,6, $arreglo['fecha'] ,0,0,'R', 0);
$pdf->SetXY(4,5);
$pdf->SetFont('Arial','',8);
$pdf->Cell(20,6, $arreglo['fecha'] , 0,0,'C', 0);    

$pdf->SetXY(15,58);
$pdf->SetTextColor(183,188,186);
$pdf->SetFont('Arial','',10);
$pdf->Cell(35,7, "Nombre", 0,0,'L', 0);    
$pdf->Cell(95,7, "Concepto",0,0,'L', 0);    
$pdf->Cell(25,7, "Importe", 0,0,'L', 0);    
$pdf->Cell(25,7, utf8_decode("Método de Pago"),0,1,'L', 0);    

$pdf->SetTextColor(0,0,0);
$pdf->SetXY(15,66);
$pdf->SetFont('Arial','B',9);
$pdf->MultiCell(35,5, utf8_decode($arreglo['nombre'].' '.$arreglo['primer_apellido'].' '.$arreglo['segundo_apellido']),0,'L');    
$pdf->SetXY(50,66);
$pdf->MultiCell(95,5, utf8_decode("COLEGIATURA ".$arreglo['nivel_estudios']." - COLEGIATURA MENSUAL (ORIGINAL) DE ".$arreglo['descripcion_pago'].""),0,'L');    
$pdf->SetXY(145,66);
$pdf->MultiCell(25,10, utf8_decode("$".$arreglo['monto'].""),0,'L');    
$pdf->SetXY(170,66);
$pdf->MultiCell(25,10, utf8_decode($arreglo['descripcion']),0,'L');    

$pdf->Ln(4);
$pdf->SetX(15);
$pdf->Cell(182,15, utf8_decode(""),1,0,'L', 0);    
$pdf->SetX(15);
$pdf->Cell(182,15, utf8_decode(""),1,0,'L', 0);    
$pdf->SetX(15);
$pdf->Cell(182,15, utf8_decode(""),1,0,'L', 0);    
$pdf->SetX(15);
$pdf->Cell(182,15, utf8_decode(""),1,0,'L', 0);    
$pdf->SetX(15);
$pdf->Cell(29,15, utf8_decode("Cantidad en letra:"),0,0,'L', 0);    
$pdf->SetX(44);
function basico($numero) {
    $valor = array ('un','dos','tres','cuatro','cinco','seis','siete','ocho',
    'nueve','diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve',
    'veinte', 'veintiuno','veintidós', 'veintitrés','veinticuatro','veinticinco',
    'veintiséis','veintisiete','veintiocho','veintinueve');
    return $valor[$numero - 1];
    }
    
    function decenas($n) {
    $decenas = array (30=>'treinta',40=>'cuarenta',50=>'cincuenta',60=>'sesenta',
    70=>'setenta',80=>'ochenta',90=>'noventa');
    if( $n <= 29) return basico($n);
    $x = $n % 10;
    if ( $x == 0 ) {
    return $decenas[$n];
    } else return $decenas[$n - $x].' y '. basico($x);
    }
    
    function centenas($n) {
    $cientos = array (100 =>'cien',200 =>'doscientos',300=>'trecientos',
    400=>'cuatrocientos', 500=>'quinientos',600=>'seiscientos',
    700=>'setecientos',800=>'ochocientos', 900 =>'novecientos');
    if( $n >= 100) {
    if ( $n % 100 == 0 ) {
    return $cientos[$n];
    } else {
    $u = (int) substr($n,0,1);
    $d = (int) substr($n,1,2);
    return (($u == 1)?'ciento':$cientos[$u*100]).' '.decenas($d);
    }
    } else return decenas($n);
    }
    
    function miles($n) {
    if($n > 999) {
    if( $n == 1000) {return 'mil';}
    else {
    $l = strlen($n);
    $c = (int)substr($n,0,$l-3);
    $x = (int)substr($n,-3);
    if($c == 1) {$cadena = 'mil '.centenas($x);}
    else if($x != 0) {$cadena = centenas($c).' mil '.centenas($x);}
    else $cadena = centenas($c). ' mil';
    return $cadena;
    }
    } else return centenas($n);
    }
    
    function millones($n) {
    if($n == 1000000) {return 'un millón';}
    else {
    $l = strlen($n);
    $c = (int)substr($n,0,$l-6);
    $x = (int)substr($n,-6);
    if($c == 1) {
    $cadena = ' millón ';
    } else {
    $cadena = ' millones ';
    }
    return miles($c).$cadena.(($x > 0)?miles($x):'');
    }
    }
    function convertir($n) {
    switch (true) {
    case ( $n >= 1 && $n <= 29) : return basico($n); break;
    case ( $n >= 30 && $n < 100) : return decenas($n); break;
    case ( $n >= 100 && $n < 1000) : return centenas($n); break;
    case ($n >= 1000 && $n <= 999999): return miles($n); break;
    case ($n >= 1000000): return millones($n);
    }
    }
    
    $div_num= explode(".",$arreglo['monto']);
    $num_1 = intval($div_num[0]);
    $num_1=ucfirst(convertir($num_1));
    $num_2 = intval($div_num[1]);
    $num_2=ucfirst(convertir($num_2));
if(empty($num_2)){
    $pdf->Cell(153,15, utf8_decode("".$num_1." pesos."),0,0,'L', 0);    
}else{
    $pdf->Cell(153,15, utf8_decode("".$num_1." pesos y ".$num_2." centavos."),0,0,'L', 0);    
}

$pdf->Ln(); 
$pdf->SetX(15);
$pdf->SetX(15);
$pdf->SetFont('Arial','',9);
$pdf->SetTextColor(330,0,0);
$pdf->Cell(182,15, utf8_decode("Este recibo no es válido si no esta firmado y sellado por el cajero "),0,1,'L', 0);    
$pdf->SetTextColor(0,0,0);
$pdf->Line(50,140,165,140);
$pdf->SetXY(15,140);
$pdf->Cell(182,8, utf8_decode("Firma y Sello"),0,0,'C', 0);    


// segunda comprobante--------------------------------------------------------------------------------------//

$pdf->Image($GLOBALS['url_front'].'assets/images/logoWhite.png',15 ,160, 30, 28);
$pdf->SetFont('Arial','B',10);
$pdf->SetXY(105,160);
$pdf->Cell(30,8,'IGM Plantel Norte', 0, 0,'L');

$pdf->SetXY(96,169);
$pdf->SetFont('Arial','B',10);
$pdf->Cell(50,6,'COMPROBANTE DE INGRESO', 0,0,'C', 0);

$pdf->SetFont('Arial','',10);
$pdf->SetXY(50,178);
$pdf->Cell(12,6,'No. 187',0,0,'C', 0);

$pdf->SetFont('Arial','',10);
$pdf->SetXY(50,182);
$pdf->Cell(12,6,'Fecha:',0,0,'R', 0);
$date = date('d/m/yy');
$pdf->Cell(18,6, $arreglo['fecha']  ,0,0,'R', 0);

$pdf->SetXY(15,203);
$pdf->SetTextColor(183,188,186);
$pdf->SetFont('Arial','',10);
$pdf->Cell(35,7, "Nombre", 0,0,'L', 0);    
$pdf->Cell(95,7, "Concepto",0,0,'L', 0);    
$pdf->Cell(25,7, "Importe", 0,0,'L', 0);    
$pdf->Cell(25,7, utf8_decode("Método de Pago"),0,1,'L', 0);    

$pdf->SetTextColor(0,0,0);
$pdf->SetXY(15,211);
$pdf->SetFont('Arial','B',9);
$pdf->MultiCell(35,5, utf8_decode($arreglo['nombre'].' '.$arreglo['primer_apellido'].' '.$arreglo['segundo_apellido']),0,'L');    
$pdf->SetXY(50,211);
$pdf->MultiCell(95,5, utf8_decode("COLEGIATURA ".$arreglo['nivel_estudios']." - COLEGIATURA MENSUAL (ORIGINAL) DE ABRIL"),0,'L');    
$pdf->SetXY(145,211);
$pdf->MultiCell(25,10, utf8_decode("$".$arreglo['monto'].""),0,'L');    
$pdf->SetXY(170,211);
$pdf->MultiCell(25,10, utf8_decode($arreglo['descripcion']),0,'L');    

$pdf->Ln(4);
$pdf->SetX(15);
$pdf->Cell(182,15, utf8_decode(""),1,0,'L', 0);    
$pdf->SetX(15);
$pdf->Cell(182,15, utf8_decode(""),1,0,'L', 0);    
$pdf->SetX(15);
$pdf->Cell(182,15, utf8_decode(""),1,0,'L', 0);    
$pdf->SetX(15);
$pdf->Cell(182,15, utf8_decode(""),1,0,'L', 0);    
$pdf->SetX(15);
$pdf->Cell(29,15, utf8_decode("Cantidad en letra:"),0,0,'L', 0);    
$pdf->SetX(44);
if(empty($num_2)){
    $pdf->Cell(153,15, utf8_decode("".$num_1." pesos."),0,0,'L', 0);    
}else{
    $pdf->Cell(153,15, utf8_decode("".$num_1." pesos y ".$num_2." centavos."),0,0,'L', 0);    
}

$pdf->Ln(); 
$pdf->SetX(15);
$pdf->SetX(15);
$pdf->SetFont('Arial','',9);
$pdf->SetTextColor(330,0,0);
$pdf->Cell(182,15, utf8_decode("Este recibo no es válido si no esta firmado y sellado por el cajero "),0,1,'L', 0);    
$pdf->SetTextColor(0,0,0);
$pdf->Line(50,264,165,264);
$pdf->SetXY(15,263);
$pdf->Cell(182,8, utf8_decode("Firma y Sello"),0,0,'C', 0);    



$pdf->Output('I','Ficha_de_Pago.pdf');
?>
