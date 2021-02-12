<!DOCTYPE html>
<html>
<head>
	<title>Diploma</title>
	<style type="text/css">
	</style>
	<link href='https://fonts.googleapis.com/css?family=Bilbo Swash Caps' rel='stylesheet'>
</head>
<body style="background-color: #ccc">
<div class="container" style="background-color: white; margin:5% 10%">
<?php
include '../../jwt.php';


if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
db ('learning');


    $arreglo_alumno = arreglo(query('SELECT tm.materia_id,tm.alumno_id, p.nombre, p.primer_apellido, p.segundo_apellido,iag.asignatura_grupo_id, ca.asignatura, estatus_materia_id,calificacion
    FROM tr_materia tm
    join '.$GLOBALS["db_controlEscolar"].'.inter_asignatura_grupo iag ON tm.asignatura_grupo_id = iag.asignatura_grupo_id    
    join '.$GLOBALS["db_datosGenerales"].'.inter_orden_asignatura ioa ON ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.cat_asignaturas ca ON ca.asignatura_id = ioa.asignatura_id
    join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id = tm.alumno_id
    WHERE tm.materia_id = '.$id_materia.' and  iag.estatus = 1'));

if(isset($arreglo_alumno['materia_id'])){
    if ($arreglo_alumno['estatus_materia_id']==2) {
		if ($arreglo_alumno['calificacion']>=6) {

			if($arreglo_alumno['calificacion'] == "") $arreglo_alumno['calificacion'] = '(Sin calificación)';
	?>  
	<div class="row">
				<div class="col-md-6">
					<img src='../../../estudy/assets/images/logo.png' width="280px;" style="margin:auto;display:block; position: relative;">
				</div>
			</div>
			<div class="row" style="padding: 0px 10%">
				<div class="col-md-12">
					<p style="font-size: 40px; text-align: center;">
						UNIVERSIDAD
					</p>
				</div>
				<div class="col-md-12">
					<p style="font-size: 25px; text-align: justify;">
						Otorga el reconocimiento a:
					</p>
				</div>

				<div class="col-md-12">
				<p style="font-size: 40px; text-align: center; font-family: 'Bilbo Swash Caps'; font-weight: bold;">
				<?=$arreglo_alumno['nombre'].' '.$arreglo_alumno['primer_apellido'].' '.$arreglo_alumno['segundo_apellido']?>
				</p>
				</div>

				<div class="col-md-12">
				<p style="font-size: 25px; text-align: justify;">
					Por haber cursado la materia de:
				</p>
				</div>
				
				<div class="col-md-12">
				<p style="font-size: 30px; text-align: center;">
				<?= $arreglo_alumno['asignatura']?>
				</p>
				<br>
				</div>
				
				<!--div class="col-md-12 ">
				<p  style="text-align: center ">
					CALIFICACION
				</p>
				<h1   style="text-align: center "><?= $arreglo_alumno['calificacion']?></h1>
				</div-->

			</div>
			<footer>
			<!--img src="diploma/img/pie.png" width="100%" height="200px" style="margin-top: -80px;"-->
		</footer>
		</div>

	<?php
		}else{
			?>
			Materia no aprobada.
			<?php
		}
    }else{
        ?>
        Materia en curso.
    <?php    
    }

}else{
    ?>
    Alumno no cursa la Materia.
<?php
}



}else{
  	echo 'Método no aceptado';
}
?>

	
		
		

	 

</body>
</html>

