<?php 

class Grupo{

    public static function consulta_asignatura_grupo($id_grupo){
        $query= query('select asignatura_grupo_id,situacion_asignatura_grupo_id from inter_asignatura_grupo where estatus = 1 and grupo_id = '.$id_grupo);
  
        return $query;

    }

    public static function inserta_grupo($id_ciclo,$grupo, $nombre_grupo, $estatus, $id_plan_orden,$descripcion, $cupo,$id_campus,$id_grupo_origen,$usuario){

        if(empty($id_campus)){
            $id_campus="null";
          }

          if(empty($cupo)){
            $cupo = "1000";
          }

          if($id_grupo_origen == null){
            $id_grupo_origen = "null";
          }
        
        $inserta_grupo = inserta_last_id('tr_grupo','ciclo_id, plan_orden_id, grupo, nombre_grupo,descripcion,cupo,situacion_grupo_id,campus_id, estatus,grupo_origen_id,usuario_crea',
        ''.$id_ciclo.','.$id_plan_orden.',"'.$grupo.'","'.$nombre_grupo.'","'.$descripcion.'",'.$cupo.',1,'.$id_campus.','.$estatus.','.$id_grupo_origen.',"'.$usuario.'"');

        return $inserta_grupo;
    }


    public static function inserta_asignatura_grupo($id_plan_orden, $id_grupo, $asignaturas){
        if($asignaturas[0]=="" ) {
                   $asignaturas=0;
           }else{
            $asignaturas = implode(",",$asignaturas);
           }

        $query_orden_asignatura = query('SELECT orden_asignatura_id
        from  '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura 
        where plan_orden_id ='.$id_plan_orden.' and asignatura_id not in ('.$asignaturas.')  and estatus = 1');

        while($arreglo_orden_asignatura = arreglo($query_orden_asignatura)){

            $inserta_asignatura_grupo = inserta ('inter_asignatura_grupo','orden_asignatura_id,grupo_id,situacion_asignatura_grupo_id, estatus',''.$arreglo_orden_asignatura['orden_asignatura_id'].','.$id_grupo.',1,1');
            $inserta_asignatura_grupo=1;
        }

        return $inserta_asignatura_grupo;        
    }


    public static function alumno_grupo($id_plan_orden, $id_grupo, $alumnos){
        if($alumnos[0]==""){
            $alumnos=0;
           }else{
            $alumnos = implode(",",$alumnos);
        }
              

        $query_alumnos = query('select ta.alumno_id, clave_alumno from inter_alumno_plan iap
        join tr_alumno ta on ta.alumno_id = iap.alumno_id
        where plan_orden_id ='.$id_plan_orden.' and ta.alumno_id not in ('.$alumnos.') and ta.estatus = 1 and iap.estatus = 1');

        if(num($query_alumnos)){
            while($arreglo = arreglo($query_alumnos)){
                    $inserta_alumnos = inserta('inter_alumno_grupo','alumno_id, grupo_id, estatus',''.$arreglo['alumno_id'].','.$id_grupo.',1');
               $inserta_grupo=1;
            }    
        }else{
            $inserta_alumnos=0;
        }
        
        return $inserta_alumnos;

    }

    public static function busca_alumnos_aprobados($id_grupo,$materia_aceptadas){

        if(empty($materia_aceptadas)){
            $materia_aceptadas = 100;
        }
        $query_alumnos = query('select alumno_id from inter_alumno_grupo where estatus =1 and grupo_id ='.$id_grupo);
        $json_aprobados = array();
        $json_reprobados = array();

        while($arreglo_alumnos = arreglo($query_alumnos)){

            //obtiene las materias reprobadas del alumno en el historial
            $materias_reprobadas = num(query('select iap.alumno_id,ioa.orden_asignatura_id,th.calificacion 
            from '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa 
            join inter_alumno_plan iap on iap.plan_orden_id = ioa.plan_orden_id
            left join tr_historial th on th.alumno_id = iap.alumno_id and th.orden_asignatura_id = ioa.orden_asignatura_id and th.calificacion > 6
            where iap.alumno_id = '.$arreglo_alumnos['alumno_id'].'
            and calificacion is null and iap.estatus =1 and ioa.estatus =1'));
            
            
            //si cumple el minimo de materias reprobadas se acepta
            if($materias_reprobadas <= $materia_aceptadas){
                
                array_push($json_aprobados, $arreglo_alumnos['alumno_id']);
                    
            }else{
                array_push($json_reprobados, $arreglo_alumnos['alumno_id']);

            }                        
        }

        return array('aprobados' => $json_aprobados, 'reprobados'=> $json_reprobados);
    }

    public static function obtiene_plan_grado($id_grupo){
        $arreglo = arreglo(query('select grupo,ciclo_id,nombre_grupo,descripcion,cupo,tg.plan_orden_id,campus_id,tpe.minimo_materias_grado,orden_jerarquico_id
        campus_id,ipo.plan_estudio_id,ipo.orden_jerarquico_id from tr_grupo tg 
        join '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden ipo on ipo.plan_orden_id = tg.plan_orden_id
        join '.$GLOBALS['db_datosGenerales'].'.tr_plan_estudios tpe on tpe.plan_estudio_id = ipo.plan_estudio_id
        where grupo_id ='.$id_grupo.' and tg.estatus= 1 and ipo.estatus= 1'));
        return $arreglo;

    }

    public static function migra_alumnos_grado($id_grupo){

        $arreglo_grupo = self::obtiene_plan_grado($id_grupo);
        $arreglo_grupo['orden_jerarquico_id'] = $arreglo_grupo['orden_jerarquico_id'] + 1;
        $query_plan_orden = query('select plan_orden_id,orden_jerarquico_id from '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden where plan_estudio_id ='.$arreglo_grupo['plan_estudio_id'].' and orden_jerarquico_id='.$arreglo_grupo['orden_jerarquico_id']);
  
        if(num($query_plan_orden)){
            
          $arreglo_plan_orden = arreglo($query_plan_orden);
          $resultado_alumnos =self::busca_alumnos_aprobados($id_grupo,$arreglo_grupo['minimo_materias_grado']);
  
          $inter_alumnos_plan = "INSERT INTO inter_alumno_plan(alumno_id, plan_orden_id,asignado_grupo,estatus) VALUES";
  
          foreach ($resultado_alumnos['aprobados'] as $alumnos_tmp) {
            $inter_alumnos_plan .= '(' . $alumnos_tmp . ',' . $arreglo_plan_orden['plan_orden_id']  . ',0,1),';
          }
  
          $aprobados = sizeof($resultado_alumnos['aprobados']);
          $reprobados = sizeof($resultado_alumnos['reprobados']);
  
          if($aprobados){
            $inter_alumnos_plan = trim($inter_alumnos_plan, ',');
            $inserta_alumnos_plan = query($inter_alumnos_plan);
            query('delete iap from inter_alumno_grupo iag 
            join tr_grupo tg on tg.grupo_id = iag.grupo_id
            join inter_alumno_plan iap on iap.alumno_id =iag.alumno_id  and iap.plan_orden_id = tg.plan_orden_id
            where iag.alumno_id in ('. implode(',',$resultado_alumnos['aprobados']).') and  iag.grupo_id  = '.$id_grupo.'');
          }
          if($reprobados){
            query('update  inter_alumno_grupo iag 
            join tr_grupo tg on tg.grupo_id = iag.grupo_id
            join inter_alumno_plan iap on iap.alumno_id =iag.alumno_id  and iap.plan_orden_id = tg.plan_orden_id
            set asignado_grupo = 0 where iag.alumno_id in('. implode(',',$resultado_alumnos['reprobados']).') and  tg.grupo_id  = '.$id_grupo.'');
         }
    
        }else{ //egresados
          $resultado_alumnos = self::busca_alumnos_aprobados($id_grupo,0);
          $egresados = sizeof($resultado_alumnos['aprobados']);
          $reprobados = sizeof($resultado_alumnos['reprobados']);
  
          if($egresados){// alumnos que si egresaron
              query("update tr_alumno set situacion_alumno_id = 4 where alumno_id in (". implode(',',$json_alumnos_aprobados['aprobados']).")");
  
              query("update  inter_alumno_grupo iag 
              join tr_grupo tg on tg.grupo_id = iag.grupo_id
              join inter_alumno_plan iap on iap.alumno_id =iag.alumno_id  and iap.plan_orden_id = tg.plan_orden_id
              set estatus = 0,asignado_grupo = 0 where iag.alumno_id in (". implode(',',$json_alumnos_aprobados['aprobados']).") and tg.grupo_id =".$id_grupo);
          }
            if($reprobados){// alumnos que si egresaron
              query("update  inter_alumno_grupo iag 
              join tr_grupo tg on tg.grupo_id = iag.grupo_id
              join inter_alumno_plan iap on iap.alumno_id =iag.alumno_id  and iap.plan_orden_id = tg.plan_orden_id
              set asignado_grupo = 0 where iag.alumno_id in (". implode(',',$json_alumnos_aprobados['reprobados']).") and tg.grupo_id =".$id_grupo);
          }
        }

        return 1;

    }



    public static function agregaGrupo($id_grupo, $id_ciclo,$materia_aceptadas,$nombre_grupo,$grupo_clave, $usuario){
                   
        $arreglo_grupo = self::obtiene_plan_grado($id_grupo);

        if($arreglo_grupo['ciclo_id'] != $id_ciclo){
            $arreglo_grupo['orden_jerarquico_id'] = $arreglo_grupo['orden_jerarquico_id'] + 1;
            $query_plan_orden = query('select plan_orden_id,orden_jerarquico_id from '.$GLOBALS['db_datosGenerales'].'.inter_plan_orden where plan_estudio_id ='.$arreglo_grupo['plan_estudio_id'].' and orden_jerarquico_id='.$arreglo_grupo['orden_jerarquico_id']);

            if(num($query_plan_orden)){
                $arreglo_plan_orden = arreglo($query_plan_orden);

                if($nombre_grupo == null){
                    $nombre_grupo = $arreglo_grupo['nombre_grupo'];
                }

                if($grupo_clave == null){
                    $grupo_clave = $arreglo_grupo['grupo'];
                }
                
                $arreglo_grupo['campus_id'] = empty($arreglo_grupo['campus_id']) ? $arreglo_grupo['campus_id'] : 'null'; 

                
                $id_grupo_nuevo = self::inserta_grupo($id_ciclo,$grupo_clave, $nombre_grupo, 1, $arreglo_plan_orden['plan_orden_id'], $arreglo_grupo['descripcion'],
                 $arreglo_grupo['cupo'], $arreglo_grupo['campus_id'],$id_grupo,$usuario);
                 
                if($id_grupo_nuevo){                    
                   $query_alumnos = query('select iap.alumno_id 
                   from tr_grupo tg  
                   join inter_alumno_grupo iag  on iag.grupo_id  = tg.grupo_id 
                   join inter_alumno_plan  iap  on iap.alumno_id = iag.alumno_id
                   where tg.grupo_id = '.$id_grupo.' and iap.plan_orden_id  = '.$arreglo_plan_orden['plan_orden_id']);

                   $alumno_asignatura_grupo = array();

                    $nuevas_asignatura_grupos = self::inserta_asignatura_grupo($arreglo_plan_orden['plan_orden_id'],$id_grupo_nuevo,array(""));

                    if( num($query_alumnos)){
                        $query_nuevos_asignatura_grupo = self::consulta_asignatura_grupo($id_grupo_nuevo);
                        
                        $json_nuevos_asignatura_grupo = array();

                        while($arreglo_nuevos_asignatura_grupo = arreglo($query_nuevos_asignatura_grupo)){
                            array_push($json_nuevos_asignatura_grupo,$arreglo_nuevos_asignatura_grupo);
                        }

                        $inter_alumnos_grupo = "INSERT INTO inter_alumno_grupo(alumno_id, grupo_id, estatus) VALUES";
                        $inter_alumnos_materia = "INSERT INTO ".$GLOBALS['db_learning'].".tr_materia(alumno_id,asignatura_grupo_id,tipo_materia_id,estatus_materia_id,estatus) VALUES";

                        while($arreglo_alumnos = arreglo($query_alumnos)){
                            $inter_alumnos_grupo .= '(' . $arreglo_alumnos['alumno_id'] . ',' . $id_grupo_nuevo  . ',1),';

                            foreach ($json_nuevos_asignatura_grupo as $asignaturas_tmp) {
                                $inter_alumnos_materia .= '(' . $arreglo_alumnos['alumno_id'] . ',' . $asignaturas_tmp['asignatura_grupo_id']  . ', 1,1,1),';
                            }
                        }

                        $inter_alumnos_grupo = trim($inter_alumnos_grupo, ',');
                        $inserta_alumnos_grupo = query($inter_alumnos_grupo);

        
                        $inter_alumnos_materia = trim($inter_alumnos_materia, ',');
                        $inserta_materia = query($inter_alumnos_materia);
                    

                        if($inserta_materia){

                            query('update  inter_alumno_grupo iag 
                            join tr_grupo tg on tg.grupo_id = iag.grupo_id
                            join inter_alumno_plan iap on iap.alumno_id =iag.alumno_id  and iap.plan_orden_id = tg.plan_orden_id
                            set asignado_grupo = 1 where tg.grupo_id  = '.$id_grupo_nuevo.'');
                  
          
                            update('tr_grupo','situacion_grupo_id = 5 ','grupo_id='.$id_grupo);
                                
                            return array('status'=>1,'msg'=> 'Grupo transferido exitosamente');
    
                        }else{
             
                            query('delete tm
                            from '.$GLOBALS['db_learning'].'.tr_materia tm
                            join inter_asignatura_grupo iag on iag.asignatura_grupo_id = tm.asignatura_grupo_id 
                            where iag.grupo_id = '.$id_grupo_nuevo.'');
    
                            delete('inter_asignatura_grupo','grupo_id = '.$id_grupo_nuevo);
                            delete('inter_alumno_grupo','grupo_id = '.$id_grupo_nuevo);
                            delete('tr_grupo','grupo_id = '.$id_grupo_nuevo);
    
                            return array('status'=>0,'msg'=> 'No se pudieron agregar los alumnos');
                        }
                        
                    }else{

                        delete('inter_asignatura_grupo','grupo_id = '.$id_grupo_nuevo);
                        delete('tr_grupo','grupo_id = '.$id_grupo_nuevo);

                        return array('status'=>0,'msg'=> 'Este grupo no tiene alumnos regulares');
                    }

    
               

                }else{
                    return array('status'=>0,'msg'=> 'No se pudo crear el grupo nuevo');

                }          


            }else{
                update('tr_grupo','situacion_grupo_id = 5 ','grupo_id='.$id_grupo);

                return array('status'=>1,'msg'=> 'Los alumnos del grupo han pasado a egresado');
                
            }
        }else{
            return array('status'=>0,'msg'=> 'Debes seleccionar un ciclo escolar diferente');

        }
        

    }





}






?>