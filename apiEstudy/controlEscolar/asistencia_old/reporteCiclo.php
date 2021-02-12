<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
      $usuario = Auth::GetData(
            $jwt  
        );

    //SERVICIO DE CONSULTA DE SESIÓN

    $query_asistencia = query('SELECT distinct grupo_id as id_grupo, ca.asignatura_clave as clave_materia,ca.asignatura as materia,ipo.plan_estudio_id as grupo 
    ,ipo.orden_jerarquico_id as grado, date_format(iag.fecha_inicio,"%d") as dia_ini,date_format(iag.fecha_inicio,"%b") as mes_ini,cast(date_format(iag.fecha_inicio,"%m") as int)as mes_ini_num,date_format(iag.fecha_inicio,"%Y")
        as anio_ini ,date_format(iag.fecha_fin,"%d") as dia_fin,date_format(iag.fecha_fin,"%b") as mes_fin,cast(date_format(iag.fecha_fin,"%m") as int) as mes_fin_num,date_format(iag.fecha_fin,"%y")
        as anio_fin,p.nombre,p.primer_apellido as apt_pat,p.segundo_apellido as apt_mat ,tpe.plan_estudio as nombre_carrera
    from inter_asignatura_grupo iag
    join inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = iag.asignatura_grupo_id
    join '.$GLOBALS['db_datosGenerales'].'.personas p on p.persona_id = idag.docente_id 
    join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
    join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = ioa.plan_orden_id
    join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
    join '.$GLOBALS['db_learning'].'.tr_materia tm on tm.asignatura_grupo_id = iag.asignatura_grupo_id
    join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca on ca.asignatura_id = ioa.asignatura_id
    where iag.asignatura_grupo_id = '.$id_asignatura_grupo);


    
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


    $json_asistencia ;
       $arreglo_asistencia = arreglo($query_asistencia);
    $json_asistencia = $arreglo_asistencia;
    

       $arreglo_mes = array();
       for ($i=$arreglo_asistencia['mes_ini_num']; $i <=$arreglo_asistencia['mes_fin_num'] ; $i++){
            $nombre_mes =array("nombreMes" => obt_mes($i));
            
        // print_r($nombre_mes);
            //query que busca los dias que tiene cada mes group by fecha
            $query_dias =query('SELECT date_format(fecha,"%d") as dia, cast(date_format(fecha,"%m") as int)as mes,date_format(fecha,"%Y")
            as anio
            FROM asistencia where asignatura_grupo_id= '.$id_asignatura_grupo.' and cast(date_format(fecha,"%m") as int)=0'.$i.' group by dia');           //while(arreglo = arreglo(query))
            $arreglo_dias = array();
            while ($dias = arreglo($query_dias)) { 
                array_push($arreglo_dias, $dias['dia']);
            }
           
            if (num($query_dias)) {
                array_push($arreglo_mes,$nombre_mes);
                array_push($arreglo_mes, array("dias" => $arreglo_dias));
            }


            //guarda los numero con array push a arreglo dias (fuera del while)
            
       }
       $json_asistencia['Alumnos']['mesEncabezado'] = $arreglo_mes;

            //query que busca los alumnos
                        
        $query_alumnos = query('SELECT al.alumno_id as id, asistencia
                FROM asistencia a
                join '.$GLOBALS['db_controlEscolar'].'.tr_alumno al on al.alumno_id = a.alumno_id
                where asignatura_grupo_id = '.$id_asignatura_grupo);
        $arreglo_alumnos =array();
        while ($alumnos =arreglo($query_alumnos)) {
            array_push($arreglo_alumnos, $alumnos);
            

            //asistencia A
        //     $query_fecha_asistencia = query('SELECT fecha, asistencia
        //     from asistencia where asignatura_grupo_id = '.$id_asignatura_grupo.'
        //      and alumno_id= '.$alumnos['id'].' group by fecha');
           
        //    $arreglo_fecha_asistencia =array();
        //     while ($fecha_asistencia = arreglo($query_fecha_asistencia)){
        //         array_push($arreglo_fecha_asistencia, $fecha_asistencia['asistencia']); 
        //     }
        //     array_push($arreglo_alumnos,array("asistencia"=> $arreglo_fecha_asistencia) );


        // asistencia B
        //     $query_fecha_asistencia_b = query('SELECT fecha, asistencia_a,asistencia_b
        //     from asistencia where id_grupo= '.$id_grupo.' and id_materia= '.$id_materia.' 
        //     and id_alumno='.$id_alumno.' group by fecha');
           
        //    $arreglo_fecha_asistencia_b =array();
        //     while ($fecha_asistencia = arreglo($query_fecha_asistencia_b)){
        //         array_push($arreglo_fecha_asistencia_b, $fecha_asistencia['asistencia_b']); 
        //     }
        //     array_push($arreglo_alumnos,array("asistencia_b"=> $arreglo_fecha_asistencia_b) );
        }   
        array_push($json_asistencia, $arreglo_alumnos);
        


    //ingreso todas las escuelas que tiene este profesor
    
    if($json_asistencia){
     $json = array("status" => 1, "msg" => "Se encontraron alumnos","alumnos" => $json_asistencia);
    }else{
     $json = array("status" => 0, "msg" => "No se encontraron alumnos");
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
