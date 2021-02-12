<?php

class AsignaturaGrupo{
   public static $query;

   public static function busquedaAlumno($id_asignatura_grupo,$busqueda){

        $query = query('SELECT p.nombre, p.primer_apellido, p.segundo_apellido,  ta.alumno_id,ta.clave_alumno, tm.materia_id,tm.calificacion
    from  '.$GLOBALS["db_learning"].'.tr_materia tm
    join '.$GLOBALS["db_controlEscolar"].'.tr_alumno ta on ta.alumno_id=tm.alumno_id
    join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id=tm.alumno_id
    where tm.asignatura_grupo_id ='.$id_asignatura_grupo.' and tm.estatus = 1
    and (primer_apellido like "%'.$busqueda.'%" or segundo_apellido like "%'.$busqueda.'%" or nombre like "%'.$busqueda.'%" )
    order by p.primer_apellido, p.segundo_apellido,p.nombre limit 0,6'
    );
       
       return $query;

    }


    public static function consultaAlumnos($id_asignatura_grupo,$ini,$fin){

      if($ini == null && $fin ==null){
         $limit = '';
      }else{
         $limit = 'limit '.$ini.','.$fin;
      }
      $query = query('SELECT p.nombre, p.persona_id ,p.primer_apellido, p.segundo_apellido,  ta.alumno_id,ta.clave_alumno, tm.materia_id,tm.calificacion,tm.estatus_materia_id
    from  '.$GLOBALS["db_learning"].'.tr_materia tm
    join '.$GLOBALS["db_controlEscolar"].'.tr_alumno ta on ta.alumno_id=tm.alumno_id
    join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id=tm.alumno_id
    where tm.asignatura_grupo_id ='.$id_asignatura_grupo.' and tm.estatus = 1 and ta.estatus=1 and p.estatus =1
    order by p.primer_apellido, p.segundo_apellido,p.nombre '.$limit
    );
       
       return $query;

    }

    
    public static function consultaAlumnosPendientes($id_asignatura_grupo){
      $query = query('SELECT distinct p.nombre, p.primer_apellido, p.segundo_apellido,  ta.alumno_id,ta.clave_alumno, tm.materia_id
      from  '.$GLOBALS["db_learning"].'.tr_materia tm
      join '.$GLOBALS["db_controlEscolar"].'.tr_alumno ta on ta.alumno_id=tm.alumno_id
      join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id=tm.alumno_id
      join '.$GLOBALS["db_learning"].'.tr_materia_fecha_actividad tmfa on tm.materia_id = tmfa.materia_id
      where tm.asignatura_grupo_id ='.$id_asignatura_grupo.' and tm.estatus = 1 and tmfa.estatus =1 and tmfa.estatus_actividad_id = 3
      order by p.primer_apellido, p.segundo_apellido,p.nombre');
     
     return $query;

  }

  public static function consultaAlumnosMensajes($id_asignatura_grupo){
   $query = query('SELECT distinct p.nombre, p.primer_apellido, p.segundo_apellido, ta.alumno_id,ta.clave_alumno, tm.materia_id
   from  '.$GLOBALS["db_learning"].'.tr_materia tm
   join '.$GLOBALS["db_controlEscolar"].'.tr_alumno ta on ta.alumno_id=tm.alumno_id
   join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id=tm.alumno_id
   join '.$GLOBALS["db_learning"].'.tr_mensaje_materia tmm on tm.materia_id = tmm.materia_id
   where tm.asignatura_grupo_id ='.$id_asignatura_grupo.' and tm.estatus = 1 and tmm.estatus=1 and visto=0 and origen=2
   order by p.primer_apellido, p.segundo_apellido,p.nombre');
  
  return $query;

}

public static function consultaAlumnosRetroalimentaciones($id_asignatura_grupo){
   $query = query('SELECT distinct p.nombre, p.primer_apellido, p.segundo_apellido, ta.alumno_id,ta.clave_alumno, tm.materia_id
   from  '.$GLOBALS["db_learning"].'.tr_materia tm
   join '.$GLOBALS["db_controlEscolar"].'.tr_alumno ta on ta.alumno_id=tm.alumno_id
   join '.$GLOBALS["db_datosGenerales"].'.personas p on p.persona_id=tm.alumno_id
   join '.$GLOBALS["db_learning"].'.tr_materia_fecha_actividad tmfa  on tm.materia_id = tmfa.materia_id
   join '.$GLOBALS["db_learning"].'.tr_retroalimentacion tr on tr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
   where tm.asignatura_grupo_id ='.$id_asignatura_grupo.' and tm.estatus = 1 and tmfa.estatus =1 
   order by p.primer_apellido, p.segundo_apellido,p.nombre');
  
  return $query;

}

    public static function consultaActividadesDocente($id_asignatura_grupo){


      $query = self::consultaTodosModulos($id_asignatura_grupo);
      $json_sqa = array();
      $json_asignaturas= array();
      while ($arreglo_modulos = arreglo($query)){
         $query_actividades = query('select actividad_id, actividad_nombre,tipo_actividad_id,visible from '.$GLOBALS['db_learning'].'.tr_actividad where modulo_id ='.$arreglo_modulos['modulo_id'].'
         and tipo_actividad_id != 1 and estatus = 1 order by orden');
            
         while($arreglo_actividades= arreglo($query_actividades)){
            
            if($arreglo_actividades['tipo_actividad_id'] != 4){
               $arreglo_actividades['modulo_id'] = $arreglo_modulos['modulo_id'];
               array_push($json_asignaturas,$arreglo_actividades);
            }else{
               array_push($json_sqa,$arreglo_actividades);
            }
         }  
      }
   $json = array("status" => 1, "msg" => "Se encontraron Actividades","actividades" => $json_asignaturas,"actividadesSQA" => $json_sqa );
       return $json;

   }



   
   public static function consultaRetroalimentacionesActividad($id_materia,$arreglo_actividades){
      $query = query('SELECT tmfa.materia_id, actividad_id,tmfa.materia_fecha_actividad_id, tr.retroalimentacion_id,visto,origen
      from '.$GLOBALS['db_learning'].'.tr_materia_fecha_actividad tmfa
      join '.$GLOBALS["db_learning"].'.tr_retroalimentacion tr on tr.materia_fecha_actividad_id = tmfa.materia_fecha_actividad_id
      where tmfa.materia_id =  '.$id_materia.' and tmfa.estatus = 1 and tmfa.estatus_actividad_id !=8 
      order by actividad_id');

      $tmp_array = array();
      while ($arreglo = arreglo($query)){
         array_push($tmp_array,$arreglo);
      }

      $json_actividades = array();
      forEach($arreglo_actividades as $_actividad){
         $_actividad['vistos'] = 0;
         $_actividad['nuevos'] = 0;
         forEach($tmp_array as $_actividadcontestada){
            if($_actividad['actividad_id'] == $_actividadcontestada['actividad_id']){
               if($_actividadcontestada["visto"] ==0 && $_actividadcontestada["origen"] == 2)
                  $_actividad['nuevos']++;
               else
                  $_actividad['vistos']++;
                  
            }
         }
         array_push($json_actividades, array("actividad_id" => $_actividad['actividad_id'] , "vistos" => $_actividad['vistos'],"nuevos" => $_actividad['nuevos']));
       }

      return $json_actividades;


   }
    public static function consultaActividadesContestadasAlumno($id_materia,$arreglo_actividades){
        $query = query('SELECT tmfa.materia_id, actividad_id, tmfa.calificacion, tmfa.materia_fecha_actividad_id, tmfa.estatus_actividad_id,cea.estatus_actividad,cea.icono
      from '.$GLOBALS['db_learning'].'.tr_materia_fecha_actividad tmfa
      join '.$GLOBALS['db_learning'].'.cat_estatus_actividad cea on cea.estatus_actividad_id = tmfa.estatus_actividad_id
      where tmfa.materia_id =  '.$id_materia.' and tmfa.estatus = 1 and tmfa.estatus_actividad_id !=8
      order by actividad_id');
   
      

       $tmp_array = array();
       while ($arreglo = arreglo($query)){
          array_push($tmp_array,$arreglo);
       }

      $json_actividades = array();
       forEach($arreglo_actividades as $_actividad){
         $contestada = 0;
         forEach($tmp_array as $_actividadcontestada){
            if($_actividad['actividad_id'] == $_actividadcontestada['actividad_id']){
               $_actividadcontestada["tipo_actividad_id"] = $_actividad['tipo_actividad_id'];
               array_push($json_actividades,$_actividadcontestada);
               $contestada = 1;
            }
         }
         if(!$contestada){
            array_push($json_actividades, array("actividad_id" => $_actividad['actividad_id'] , "estatus_actividad_id" => 0,"tipo_actividad_id" => $_actividad['tipo_actividad_id']));
         }
       }

       return $json_actividades;
    }




    public  static function numMensajesAlumno($id_materia){
        $query_msjs=query('SELECT COUNT(
         CASE 
             WHEN visto =1 
             THEN 1 
             ELSE NULL 
         END
     ) AS "vistos", 
     COUNT(
         CASE 
             WHEN visto =0
             THEN 1 
             ELSE NULL 
         END
     ) AS "nuevos"
        from '.$GLOBALS['db_learning'].'.tr_mensaje_materia tmm 
        where tmm.estatus=1 and origen=2 and materia_id ='.$id_materia.'');

        $arreglo_msjs = arreglo($query_msjs);
        

        return  $arreglo_msjs;

    }
    
    public static function consultaSoloModulos($id_asignatura_grupo){
      $query= query('select * from (select @asignatura_grupo_id :='.$id_asignatura_grupo.' asignatura_id) as modulos,'.$GLOBALS['db_learning'].'.modulos_asignatura_grupo');
  

      return $query;
  }

    public static function consultaTodosModulos($id_asignatura_grupo){
       $query= query('
       select *,1 as tipo from (select @asignatura_grupo_id :='.$id_asignatura_grupo.' asignatura_grupo_id) as modulos,'.$GLOBALS['db_learning'].'.modulos_base_asignatura_grupo
       union 
       select *, 2 as tipo from (select @asignatura_grupo_id :='.$id_asignatura_grupo.' asignatura_grupo_id) as modulos,'.$GLOBALS['db_learning'].'.modulos_asignatura_grupo
       order by modulo_numero
       ');
   
       return $query;
   }

   //public static function calculaCalificaciones
   //se agrega tipo revisión 1: suave (sólo los alumnos que han terminado), revision 2: hard (alumnos terminados y sin terminar)
   public static function calculaCalificaciones($id_asignatura_grupo,$revision){

   //obtiene a los alumnos de un grupo en la asignatura 
     $consulta_alumnos = self::consultaAlumnos($id_asignatura_grupo,null,null);


    //obtiene todas las actividadesde una asignatura
    $query = self::consultaTodosModulos($id_asignatura_grupo);

    $json_actividades = array();
    $actividades_totales = 0;
    
    while ($arreglo_modulos = arreglo($query)){
       $query_actividades = query('select actividad_id, ponderacion,unica from '.$GLOBALS['db_learning'].'.tr_actividad where modulo_id ='.$arreglo_modulos['modulo_id'].'
       and tipo_actividad_id != 1 and estatus = 1');
                 
       $actividades_totales += num($query_actividades);
    
       while($arreglo_actividades = arreglo($query_actividades)){
        array_push($json_actividades,$arreglo_actividades);
       }
    }

    $alumnos_calificados = 0;


   //obtiene los alumnos y comienza a calificar
   while ($arreglo_alumno_asignatura_grupo = arreglo($consulta_alumnos)){
    

   $query_actividades_completas = query('select tmfa.calificacion,tmfa.actividad_id 
   from '.$GLOBALS['db_learning'].'.tr_materia_fecha_actividad tmfa 
   where tmfa.materia_id ='.$arreglo_alumno_asignatura_grupo['materia_id'].' and tmfa.estatus=1 and tmfa.estatus_actividad_id in (2,4,9,10)');
  
    $actividades_completas= num($query_actividades_completas);    

    if(($actividades_completas == $actividades_totales && $revision == 1) || $revision == 2 || $revision == 3){
      $calificacion=0;
      $calificacion_especial=0;
      while($arreglo_actividades_completas = arreglo($query_actividades_completas)){

        foreach($json_actividades as $_actividad){

          if($_actividad['actividad_id'] == $arreglo_actividades_completas['actividad_id'] ){
            if($_actividad['unica'] == 1 && $arreglo_actividades_completas['calificacion'] != ""){
              $calificacion_especial = $arreglo_actividades_completas['calificacion'];
            }else{
              $calificacion += $_actividad['ponderacion']*$arreglo_actividades_completas['calificacion'];
            }
          }

        }
      }


      if(!empty($calificacion_especial)){
         $calificacion = $calificacion_especial/100;
         if($revision == 3) 
            $estatus_materia = 5;
         else
            $estatus_materia = 3;

     }else{
         $calificacion = $calificacion/100;
         if($revision == 3)
            $estatus_materia = 2;    
         else
            $estatus_materia = 3;

         if($actividades_completas == 0)
            $estatus_materia = 6;
     }
   
     if($arreglo_alumno_asignatura_grupo['estatus_materia_id'] != 7){ //Buscamos que la calificación de la materia no haya sido registrada por el administrador
      if($GLOBALS['redondeo_promedio'] == 1){
         if($calificacion < 6 ){
            $calificacion = floor($calificacion);
         }else{
            $calificacion = round($calificacion,0,PHP_ROUND_HALF_UP);
         }
      }
      $edita_calificacion = update ($GLOBALS['db_learning'].'.tr_materia','calificacion='.$calificacion.',estatus_materia_id = '.$estatus_materia, 'materia_id ='.$arreglo_alumno_asignatura_grupo['materia_id']);
      $alumnos_calificados++;

      }else{
         $alumnos_calificados++;
      }

   }
    
  }

  if($revision == 1 && $alumnos_calificados != 0){
   $cierra_ciclo = update('inter_asignatura_grupo','situacion_asignatura_grupo_id = 2','asignatura_grupo_id = '.$id_asignatura_grupo);
   return $alumnos_calificados;
 }else if($revision == 2  && $alumnos_calificados != 0){
   $cierra_ciclo = update('inter_asignatura_grupo','situacion_asignatura_grupo_id = 3','asignatura_grupo_id = '.$id_asignatura_grupo);
   return $alumnos_calificados;
 }else if($revision == 3 && $alumnos_calificados != 0){ //se guarda con el historial

   $query_calificaciones_alumno = query('select tm.alumno_id,tm.materia_id, tipo_materia_id,ioa.asignatura_id, ioa.orden_asignatura_id, iag.grupo_id,tg.ciclo_id,tm.calificacion
   from  '.$GLOBALS['db_learning'].'.tr_materia tm
   join '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id
   join '.$GLOBALS['db_controlEscolar'].'.tr_grupo tg on tg.grupo_id = iag.grupo_id
   join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.orden_asignatura_id = iag.orden_asignatura_id
   where tm.estatus = 1 and tm.materia_id != 0 and tm.alumno_id != 0 and iag.asignatura_grupo_id= ' . $id_asignatura_grupo . ' order by alumno_id');

          
   $historial = "INSERT INTO tr_historial(orden_asignatura_id, ciclo_id, alumno_id,calificacion,estatus_historial_id,materia_id, estatus) VALUES";
   
   while ($arreglo_calificaciones_alumno = arreglo($query_calificaciones_alumno)) {

      if(empty($arreglo_calificaciones_alumno['calificacion'])){ //Buscamos que la calificación de la materia no haya sido registrada por el administrador
         $edita_calificacion = update ($GLOBALS['db_learning'].'.tr_materia','calificacion = 0,estatus_materia_id = 6', 'materia_id ='.$arreglo_calificaciones_alumno['materia_id']);
         $arreglo_calificaciones_alumno['calificacion'] = 0;
      }

       $historial .= '(' . $arreglo_calificaciones_alumno['orden_asignatura_id'] . ',' . $arreglo_calificaciones_alumno['ciclo_id']  . ',' . $arreglo_calificaciones_alumno['alumno_id'] . ',' . $arreglo_calificaciones_alumno['calificacion']  . ',' . $arreglo_calificaciones_alumno['tipo_materia_id']  . ',' . $arreglo_calificaciones_alumno['materia_id'] . ',1),';

   }

     $historial= trim($historial, ',');
     $inserta_historial = query($historial);
     if($inserta_historial){
         $cierra_ciclo = update('inter_asignatura_grupo','situacion_asignatura_grupo_id = 4','asignatura_grupo_id = '.$id_asignatura_grupo);
         return $alumnos_calificados;

     }

 }
  
  }

  public static function calculaCalificacionModulo($id_asignatura_grupo,$id_modulo,$id_actividad,$arreglo_actividad_id,$arreglo_ponderacion){

   $i=0;
   foreach ($arreglo_actividad_id as $id_actividad_tmp) {
     update('tr_actividad','ponderacion ='.$arreglo_ponderacion[$i],'actividad_id ='.$id_actividad_tmp);
     $i++;
   }

   query('delete  tmfa from tr_materia_fecha_actividad tmfa join tr_materia tm on tm.materia_id = tmfa.materia_id where asignatura_grupo_id = '.$id_asignatura_grupo.' and actividad_id = '.$id_actividad);

   $script_actividades = implode (",",$arreglo_actividad_id);

   $insert_actividades = query('insert into tr_materia_fecha_actividad(materia_id,actividad_id,estatus_actividad_id,intento_num,fecha_actividad,estatus,calificacion)
   select tm.materia_id,'.$id_actividad.',9,1,now(),1,
   IF(round(sum(tmfa.calificacion*ta.ponderacion)/100,2)  is null, 0,  round(sum(tmfa.calificacion*ta.ponderacion)/100,2)) as calificacion_modulo
   from tr_materia tm 
   left join tr_materia_fecha_actividad tmfa on tmfa.materia_id = tm.materia_id 
   left join tr_actividad ta on ta.actividad_id = tmfa.actividad_id and  ta.actividad_id in ('.$script_actividades.') 
   where tm.asignatura_grupo_id = '.$id_asignatura_grupo.' and tmfa.estatus = 1
   group by tmfa.materia_id');

    update('tr_actividad','ponderacion = 0','actividad_id in ('.$script_actividades.')');  

    return $insert_actividades;

  }


  public static function calculaCalificacionModuloOld($id_asignatura_grupo,$id_modulo,$usuario){

   $consulta_alumnos = self::consultaAlumnos($id_asignatura_grupo,null,null);

   $query = query('select `imag`.`modulo_id`,`cm`.`modulo_nombre` ,`cm`.`fecha_inicio`,`cm`.`fecha_fin` ,`cm`.`modulo_numero` 
   from '.$GLOBALS['db_learning'].'.inter_modulos_asignatura_grupo imag 
   join '.$GLOBALS['db_learning'].'.`cat_modulos` `cm` on `cm`.`modulo_id` = `imag`.`modulo_id`
   join '.$GLOBALS['db_learning'].'.`inter_modulos_asignatura_grupo` `ima` on `ima`.`modulo_id` = `cm`.`modulo_id`
   where `ima`.`asignatura_grupo_id` = '.$id_asignatura_grupo.' and imag.modulo_id = '.$id_modulo.' and `imag`.`estatus` = 1
   and `cm`.`estatus` = 1 and `ima`.`estatus` = 1
   union
   select distinct `ima`.`modulo_id` as `modulo_id`,
       `cm`.`modulo_nombre` as `modulo_nombre`,
       `cm`.`fecha_inicio` as `fecha_inicio`,
       `cm`.`fecha_fin` as `fecha_fin`,
       `cm`.`modulo_numero` as `modulo_numero`
   from '.$GLOBALS['db_controlEscolar'].'.`inter_asignatura_grupo` `iag`
   join '.$GLOBALS['db_datosGenerales'].'.`inter_orden_asignatura` `ioa` on `iag`.`orden_asignatura_id` = `ioa`.`orden_asignatura_id`
   join '.$GLOBALS['db_learning'].'.`inter_modulos_asignaturas` `ima` on `ima`.`asignatura_id` = `ioa`.`asignatura_id`
   join '.$GLOBALS['db_learning'].'.`cat_modulos` `cm` on `cm`.`modulo_id` = `ima`.`modulo_id`
   where`iag`.`asignatura_grupo_id` = '.$id_asignatura_grupo.' and cm.modulo_id = '.$id_modulo.' and `iag`.`estatus` = 1');
  
   $json_actividades = array();
   $actividades_totales = 0;
   while ($arreglo_modulos = arreglo($query)){
      $query_actividades = query('select actividad_id, ponderacion,unica from '.$GLOBALS['db_learning'].'.tr_actividad where modulo_id ='.$arreglo_modulos['modulo_id'].'
      and tipo_actividad_id != 1 and estatus = 1');
                
      $actividades_totales += num($query_actividades);
   
      while($arreglo_actividades = arreglo($query_actividades)){
       array_push($json_actividades,$arreglo_actividades);
      }
   }
         while($arreglo_alumnos = arreglo($consulta_alumnos)){
         $query_actividades_completas = query('select tmfa.materia_fecha_actividad_id, tmfa.calificacion,tmfa.actividad_id 
         from '.$GLOBALS['db_learning'].'.tr_materia_fecha_actividad tmfa 
         where tmfa.materia_id ='.$arreglo_alumnos['materia_id'].' and tmfa.estatus=1 and tmfa.estatus_actividad_id in (2,4,9)');         
         
         $actividades_completas = num($query_actividades_completas);
         if($actividades_totales == $actividades_completas){
            $calificacion=0;
            $calificacion_especial=0;      
            while($arreglo_actividades_completas = arreglo($query_actividades_completas)){
              foreach($json_actividades as $actividad_tmp){
                if($actividad_tmp['actividad_id'] == $arreglo_actividades_completas['actividad_id'] ){
                  if($actividad_tmp['unica'] == 1 && $arreglo_actividades_completas['calificacion'] != ""){
                    $calificacion_especial = $arreglo_actividades_completas['calificacion'];
                  }else{
                    $calificacion += $actividad_tmp['ponderacion']*$arreglo_actividades_completas['calificacion'];
                  }
                } 

              }
         }  
         if(!empty($calificacion_especial)){
            $calificacion = $calificacion_especial/100;
        }else{
            $calificacion = $calificacion/100;
        }
         $edita_calificacion = inserta($GLOBALS['db_learning'].'.inter_materia_modulo',
         'materia_id, modulo_id, calificacion,usuario_crea, estatus',
         ''.$arreglo_alumnos['materia_id'].','.$id_modulo.','.$calificacion.',"'.$usuario.'",1');
      }

      }
      return $edita_calificacion;
  }


  

public static function calificaMateria($id_asignatura_grupo,$revision){
   
   $query = self::consultaTodosModulos($id_asignatura_grupo);
   $num_modulos = num($query);

   $consulta_alumnos = self::consultaAlumnos($id_asignatura_grupo,null,null);
   while($arreglo_alumnos = arreglo($consulta_alumnos)){
      $query_alumos_modulos = query('select materia_id, modulo_id, calificacion from inter_materia_modulo 
    where estatus=1 and materia_id='.$arreglo_alumnos['materia_id']);
      $num_alumno_modulos = num($query_alumos_modulos);
      $suma_calificaciones =0;
      $suma_calificaciones_incompletas=0;
      while($arreglo_alumnos_modulos = arreglo($query_alumos_modulos)){
         if($num_modulos == $num_alumno_modulos){
            $suma_calificaciones +=  $arreglo_alumnos_modulos['calificacion'];
         }else{
            $suma_calificaciones_incompletas += $arreglo_alumnos_modulos['calificacion'];
         }

      }
      if(!empty($suma_calificaciones) && $revision == 1){
         $calificacion = $suma_calificaciones/$num_modulos;
         $edita_materia = update('tr_materia','calificacion='.$calificacion.'','materia_id ='.$arreglo_alumnos['materia_id']);   
      }elseif(!empty($suma_calificaciones) || !empty($suma_calificaciones_incompletas) && $revision == 2){
         if(!empty($suma_calificaciones)){
            $calificacion = $suma_calificaciones/$num_modulos;
         }
         if(!empty($suma_calificaciones_incompletas)){
            $calificacion = $suma_calificaciones_incompletas/$num_modulos;
         }
         $edita_materia = update('tr_materia','calificacion='.$calificacion.'','materia_id ='.$arreglo_alumnos['materia_id']);   
      }   

   }
   return $edita_materia;
   }


 





}




?>