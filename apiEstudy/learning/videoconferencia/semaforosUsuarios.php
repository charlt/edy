<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

       
    $usuario = Auth::GetData(
        $jwt  
    );


    //SE REMUEVEN TODOS LAS ASIGNATURAS VIEJAS
    // $update_usuarios_viejos = query('update tr_usuario_zoom tuz 
    // join tr_videoconferencia tv on tv.videoconferencia_id = tuz.videoconferencia_id
    // set tuz.semaforo = 0, tuz.videoconferencia_id = null
    // where !(now() between  tv.fecha_inicio and tv.fecha_fin)');

    //(interval 15 minute + fecha_fin)
        $update_usuarios_viejos = query('SELECT videoconferencia_zoom_id, ivz.videoconferencia_id from inter_videoconferencia_zoom ivz 
            join (select videoconferencia_id, fecha_inicio, fecha_fin, estatus  from tr_videoconferencia where  !(now() between fecha_inicio and fecha_fin)) as t1 
            on t1.videoconferencia_id = ivz.videoconferencia_id
            where ivz.estatus =1 and t1.estatus=1');

    while($arreglo_usuarios_viejos = arreglo($update_usuarios_viejos)){
        $delete_conferencias = delete('inter_videoconferencia_zoom','videoconferencia_zoom_id = '.$arreglo_usuarios_viejos['videoconferencia_zoom_id']);
    }

    
    //SE DAN DE BAJA LAS MATERIAS NO DISPONIBLES
    /*$update_baja_conferencias = query('update tr_videoconferencia 
    set estatus =0
    where now() > fecha_fin ');*/

    //REVISO CUALES CONFERENCIAS ACTIVAS Y EN CURSO TIENE EL DOCENTE ACTUALMENTE
    // $query_videoconferencia_activa = query('select tv.videoconferencia_id,tv.nombre,tv.fecha_inicio,tv.fecha_fin,idag.docente_id,
    // tuz.usuario_zoom_id,apikey,apisecret,idmeeting,usuario,password
    //  from tr_videoconferencia tv
    // join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = tv.asignatura_grupo_id
    // left join tr_usuario_zoom  tuz on tv.videoconferencia_id = tuz.videoconferencia_id 
    // where docente_id = '.$usuario->id.' and idag.estatus = 1 and now() between fecha_inicio and fecha_fin and tv.estatus = 1 ');


    $query_videoconferencia_activa = query('SELECT tv.videoconferencia_id,tv.nombre,UNIX_TIMESTAMP(tv.fecha_inicio) as fecha_inicio,UNIX_TIMESTAMP(tv.fecha_fin) as fecha_fin,idag.docente_id,
    ivz.usuario_zoom_id,apikey,apisecret,idmeeting,usuario,password
    from tr_videoconferencia tv
    left join inter_videoconferencia_zoom  ivz on tv.videoconferencia_id = ivz.videoconferencia_id   
    left join tr_usuario_zoom tuz on tuz.usuario_zoom_id = ivz.usuario_zoom_id
    join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = tv.asignatura_grupo_id
    where docente_id = '.$usuario->id.' and now() between fecha_inicio and fecha_fin and tv.estatus = 1 and idag.estatus=1');
    
    $nombre_meet=$fecha_ini = $fecha_fin = null;
    if(num($query_videoconferencia_activa)){
       $arreglo_videoconferencias_sin = array();
       $arreglo_videoconferencias_con = array();

           while($arreglo_videoconferencia_activa = arreglo($query_videoconferencia_activa)){

            $nombre_meet=$arreglo_videoconferencia_activa['nombre'];
            $fecha_inicio = $arreglo_videoconferencia_activa['fecha_inicio'];
            $fecha_fin = $arreglo_videoconferencia_activa['fecha_fin'];
            $videoconferencia_id = $arreglo_videoconferencia_activa['videoconferencia_id'];
             

           if($arreglo_videoconferencia_activa['usuario_zoom_id'] == '' ){
            array_push($arreglo_videoconferencias_sin, $arreglo_videoconferencia_activa);
           }else{
            array_push($arreglo_videoconferencias_con, $arreglo_videoconferencia_activa);
           }
        }


        if(empty($arreglo_videoconferencias_con)){

        if($arreglo_videoconferencias_sin[0]['usuario_zoom_id'] == "" ){//NO ESTA ASIGNADO A UNA SALA
            //busco salas disponibles
            // $query_salas = query('select usuario_zoom_id,apikey,apisecret,idmeeting,usuario,password from tr_usuario_zoom where semaforo != 1');
            $query_salas = query('select usuario_zoom_id,apikey,apisecret,idmeeting,usuario,password from tr_usuario_zoom 
            where usuario_zoom_id not in (select usuario_zoom_id from inter_videoconferencia_zoom) and estatus = 1');


            if(num($query_salas)){

                $arreglo_salas = arreglo($query_salas);

                // $edita_video = update('tr_usuario_zoom', 
                // 'semaforo=1, videoconferencia_id ='.$arreglo_videoconferencia_activa['videoconferencia_id'].'','usuario_zoom_id = '.$arreglo_salas['usuario_zoom_id']);
                
                 $edita_video = update('tr_videoconferencia', 
                 'usuario_zoom_id ='.$arreglo_salas['usuario_zoom_id'].'','videoconferencia_id = '.$videoconferencia_id);
                
                foreach ($arreglo_videoconferencias_sin as $value) {
                    $inserta_inter_videoconferencia = inserta('inter_videoconferencia_zoom','usuario_zoom_id, videoconferencia_id, estatus',
                    ''.$arreglo_salas['usuario_zoom_id'].','.$value['videoconferencia_id'].',1');
                
                }
                

                $arreglo_videoconferencia_activa['usuario_zoom_id'] = $arreglo_salas['usuario_zoom_id'];
                $arreglo_videoconferencia_activa['apikey'] = $arreglo_salas['apikey'];
                $arreglo_videoconferencia_activa['apisecret'] = $arreglo_salas['apisecret'];
                $arreglo_videoconferencia_activa['idmeeting'] = $arreglo_salas['idmeeting'];
                $arreglo_videoconferencia_activa['videoconferencia_id'] = $videoconferencia_id;

                $arreglo_videoconferencia_activa['usuario'] = $arreglo_salas['usuario'];
                $arreglo_videoconferencia_activa['password'] = $arreglo_salas['password'];
                $arreglo_videoconferencia_activa['nombre'] =$nombre_meet; 
                $arreglo_videoconferencia_activa['fecha_inicio'] = $fecha_inicio;
                $arreglo_videoconferencia_activa['fecha_fin'] = $fecha_fin;

                    
                    if($inserta_inter_videoconferencia){
                        $json = array("status" => 1, "msg" => "Usuario vinculado exitosamente","conferencia"=>$arreglo_videoconferencia_activa);
                    }else{
                        $json = array("status" => 0, "msg" => "No se logró vincular");
                    }
        
            }else{// si no encontramos salas disponibles mandamos el error
                $json = array("status" => 2, "msg" => "No hay salas disponibles");
            }

        }else{
            $usuario_zoom = array();

            $json = array("status" => 1, "msg" => "Videoconferencia vinculada anteriormente","conferencia"=>$arreglo_videoconferencias_con[0]);
        }
    }else{
        $usuario_zoom = array();

                
        foreach ($arreglo_videoconferencias_sin as $value) {

            $inserta_inter_videoconferencia = inserta('inter_videoconferencia_zoom','usuario_zoom_id, videoconferencia_id, estatus',
            ''.$arreglo_videoconferencias_con[0]['usuario_zoom_id'].','.$value['videoconferencia_id'].',1');
        
        }


        $json = array("status" => 1, "msg" => "Videoconferencia vinculada anteriormente","conferencia"=>$arreglo_videoconferencias_con[0]);
    }     

    }else{
        $json = array("status" => 0, "msg" => "No tienes clases en línea en este momento");
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
