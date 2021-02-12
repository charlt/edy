<?php
include '../../learning/datosPregunta/class/pregunta.class.php';
include '../../learning/actividad/class/reactivo.class.php';
include '../../learning/actividad/class/respuesta.class.php';

class Actividad
{
    //public $aMemberVar = 'aMemberVar Member Variable'; 
    //public $aFuncName = 'aMemberFunc'; 
    public static $query;

    public $pregunta;
    public static $shuffle;


    public static function consulta($id)
    {

        self::$query = query('SELECT ta.actividad_padre_id, ta.actividad_id, actividad_clave, actividad_nombre, ta.dificultad_id, cd.dificultad_nombre,
        ta.tipo_actividad_id, cta.tipo_actividad_nombre, modulo_id, numero_mostrado, instruccion, ta.ponderacion,ta.portafolio,
        ta.num_intentos, num_total_preguntas, num_preguntas_mostrar, ta.aleatorio as shuffle, ta.orden, UNIX_TIMESTAMP(ta.fecha_inicio) as fecha_inicio, UNIX_TIMESTAMP(ta.fecha_fin) as fecha_fin,
        ta.fecha_creacion, ta.usuario_crea, ta.estatus,ta.aleatorio, metodo_resolver_id,ta.unica,tipo_calificacion,rubrica_id,ta.importancia_actividad_id
         FROM tr_actividad ta
         join cat_dificultad cd on cd.dificultad_id = ta.dificultad_id    
         join cat_tipos_actividad cta on cta.tipo_actividad_id = ta.tipo_actividad_id
         WHERE ta.actividad_id = ' . $id .' and ta.estatus=1 order by ta.orden');

        $json = array();
        while ($arreglo = arreglo(self::$query)) {


            array_push($json, $arreglo);
        }

        return $json;
    }

    public static function numero()
    {

        return num(self::$query);
    }

    public static function consulta_preguntas($id)
    {
        
        $pregunta = new Pregunta();

        self::$query = query('SELECT datos_pregunta_id,  tp.dificultad_id, tp.orden,
        tp.ponderacion, ta.aleatorio as shuffle,tp.aleatorio as pregunta_shuffle, tp.tipo_pregunta_id, tp.actividad_id, tp.estatus, tipo_pregunta_nombre, retroalimentacion, retroalimentacion_docente,
        ctp.reactivos
        FROM tr_datos_pregunta tp 
        join cat_tipo_pregunta ctp on ctp.tipo_pregunta_id = tp.tipo_pregunta_id
        join tr_actividad ta on ta.actividad_id = tp.actividad_id  
        WHERE tp.actividad_id = ' . $id . ' and tp.estatus = 1 
        order by tp.orden');

        $json = array();
        while ($arreglo = arreglo(self::$query)) {
            $arreglo_contenido = $pregunta::contenido_pregunta($arreglo['datos_pregunta_id'], $arreglo['tipo_pregunta_id']);

            if(isset($arreglo_contenido['pregunta_id']))
                $arreglo['pregunta_id'] =   $arreglo_contenido['pregunta_id'];  
            else
                $arreglo['pregunta_id'] = null;

            if(isset($arreglo_contenido['pregunta']))
                $arreglo['pregunta'] =   $arreglo_contenido['pregunta'];  
            else
                $arreglo['pregunta'] = null;
            

            if(isset($arreglo_contenido))
                $arreglo['contenido_pregunta'] =   $arreglo_contenido; 
            else
                $arreglo['contenido_pregunta'] = null;



            self::$shuffle = $arreglo['shuffle'];
            array_push($json, $arreglo);
        }
        return $json;
    }

    public static function consulta_respuestas($id_materia_fecha_actividad)
    {

        $pregunta = new Pregunta();

        self::$query = query('SELECT valor,calificacion,datos_pregunta_id
        FROM tr_respuesta tr
        WHERE materia_fecha_actividad_id = ' . $id_materia_fecha_actividad . '  and tr.estatus = 1
        order by datos_pregunta_id');

        $json = array();
        while ($arreglo = arreglo(self::$query)) {
            array_push($json, $arreglo);
        }
        return $json;
    }








    public static function orden($orden_nuevo, $id_modulo, $id_actividad)
    {
        //1er paso: query de todos los ids actividad que existen con el id_modulo
        $query_tmp = query('SELECT orden, modulo_id, actividad_id from tr_actividad where modulo_id = ' . $id_modulo.' and estatus = 1');
        $query_tmp_act = query('SELECT orden from tr_actividad where actividad_id =' . $id_actividad);
        $arreglo_tmp_act = arreglo($query_tmp_act);

        $orden_anterior = $arreglo_tmp_act['orden'];

        //2do paso; update del parametro id_actividad donde se actualiza el orden nuevo
        $update = update('tr_actividad', 'orden = ' . $orden_nuevo . '', 'actividad_id =' . $id_actividad);
        //3er paso: usar este while para comparar los valores de la activdad con el orden nuevo
        $json = array();
        while ($arreglo = arreglo($query_tmp)) {
            //aqui se van a pintar los valores del orden por arreglo
            if ($arreglo['actividad_id'] != $id_actividad) {
                // echo $arreglo['orden'].'='.$orden_anterior.'?'.$arreglo['orden'].'='.$orden_nuevo.'?,';     

                //4to paso comparaciòn del orden anterior con el arreglo[orden]
                if ($arreglo['orden'] > $orden_anterior) {
                    if ($arreglo['orden'] > $orden_nuevo) {
                        // echo 'queda igual';
                    } else {
                        // $arreglo['orden']=orden($arreglo['orden']-1);
                        $resta = $arreglo['orden'] - 1;
                        $update = update("tr_actividad", "orden='" . $resta . "'", "actividad_id='" . $arreglo['actividad_id'] . "'");
                        // echo 'se resta';
                    }
                } else {
                    if ($arreglo['orden'] < $orden_nuevo) {
                        // echo 'queda igual';
                    } else {
                        //   $arreglo['orden']=orden($arreglo['orden']+1);
                        $suma = $arreglo['orden'] + 1;
                        $update = update("tr_actividad", "orden='" . $suma . "'", "actividad_id='" . $arreglo['actividad_id'] . "'");
                        // echo 'se suma'.'<br>';
                    }
                }
            } else {
                // echo ' no hace nada';
            }
        }
        /*
        foreach ($actividad_id =  actividad_id) {
            echo "Se modifican";
            for ($i=0; $i < ; $i++) {
            }

        }*/
        return $json;
    }




    public static function clonarActividad($id_actividad,$id_modulo,$usuario)
    {
        $arreglo_actividad = arreglo(query('SELECT actividad_clave,actividad_nombre, dificultad_id, tipo_actividad_id, modulo_id, metodo_resolver_id, importancia_actividad_id,
                numero_mostrado, instruccion, ponderacion, num_intentos, num_total_preguntas, num_preguntas_mostrar, aleatorio, unica,
                portafolio,rubrica_id, orden,visible,estatus,tipo_calificacion FROM tr_actividad  WHERE actividad_id = ' . $id_actividad));
        if (!empty($arreglo_actividad)) {
            if (empty($arreglo_actividad['rubrica_id'])) {
                $arreglo_actividad['rubrica_id'] = 'null';
            }
            if ($arreglo_actividad['dificultad_id'] == "") {
                $arreglo_actividad['dificultad_id'] = 0; 
            }
            if ($arreglo_actividad['metodo_resolver_id'] == "") {
                $arreglo_actividad['metodo_resolver_id'] = 0;

            }if ($arreglo_actividad['numero_mostrado'] == "") {
                $arreglo_actividad['numero_mostrado'] = 0;
            
            }if ($arreglo_actividad['importancia_actividad_id'] == "" || $arreglo_actividad['importancia_actividad_id'] == 0 ) {
                $arreglo_actividad['importancia_actividad_id'] =1;

            }if ($arreglo_actividad['ponderacion'] == "" ) {
                $arreglo_actividad['ponderacion'] = 0;

            }if ($arreglo_actividad['num_intentos'] == "" ) {
                $arreglo_actividad['num_intentos'] = 0;
            }
            if ($arreglo_actividad['aleatorio'] == "" ) {
                $arreglo_actividad['aleatorio'] = 0;
            }
            if ($arreglo_actividad['unica'] == "" ) {
                $arreglo_actividad['unica'] = 0;
            }
            if ($arreglo_actividad['portafolio'] == "") {
                $arreglo_actividad['portafolio'] = 0;
            }
            if ($arreglo_actividad['orden'] == "" ) {
                $arreglo_actividad['orden'] = 0;
            }
            if ($arreglo_actividad['visible'] == "" ) {
                $arreglo_actividad['visible'] = 1;
            }
            $inserta_actividad = inserta_last_id(
                'tr_actividad',
                'actividad_clave,actividad_nombre, dificultad_id, tipo_actividad_id, modulo_id, metodo_resolver_id, importancia_actividad_id,
            numero_mostrado, instruccion, ponderacion, num_intentos, num_total_preguntas, num_preguntas_mostrar, aleatorio, unica,
            portafolio,rubrica_id, orden,visible,estatus,tipo_calificacion,usuario_crea',
                '"' . $arreglo_actividad['actividad_clave'] . '","' . escape_cara($arreglo_actividad['actividad_nombre']) . '",' . $arreglo_actividad['dificultad_id'] . ',' . $arreglo_actividad['tipo_actividad_id'] . ', ' . $id_modulo . ',' . $arreglo_actividad['metodo_resolver_id'] . ',' . $arreglo_actividad['importancia_actividad_id'] . ',
            ' . $arreglo_actividad['numero_mostrado'] . ', "' . escape_cara($arreglo_actividad['instruccion']) . '", ' . $arreglo_actividad['ponderacion'] . ',' . $arreglo_actividad['num_intentos'] . ', ' . $arreglo_actividad['num_total_preguntas'] . ',' . $arreglo_actividad['num_preguntas_mostrar'] . ',' . $arreglo_actividad['aleatorio'] . ',' . $arreglo_actividad['unica'] . ',
            ' . $arreglo_actividad['portafolio'] . ',' . $arreglo_actividad['rubrica_id'] . ',' . $arreglo_actividad['orden'] . ',' . $arreglo_actividad['visible'] . ',' . $arreglo_actividad['estatus'] . ',' . $arreglo_actividad['tipo_calificacion'] . ',"'.$usuario.'"'
            );

            if ($inserta_actividad) {
                $arreglo_contenido = arreglo(query('select actividad_id, url_contenido,estatus,nombre,visto from tr_contenido_actividad where actividad_id=' . $id_actividad . ' and estatus= 1 '));
                if (!empty($arreglo_contenido)) {
                    $inserta_contenido = inserta(
                        'tr_contenido_actividad',
                        'actividad_id,url_contenido, estatus, nombre,visto',
                        '' . $inserta_actividad . ',"' . $arreglo_contenido['url_contenido'] . '",1,"' . $arreglo_contenido['nombre'] . '", ' . $arreglo_contenido['visto'] . ''
                    );
                }

                $query_datos_pregunta = query('select datos_pregunta_id, tipo_pregunta_id, actividad_id, dificultad_id, orden, ponderacion, aleatorio, retroalimentacion, 
                retroalimentacion_docente, numero_intentos, estatus from tr_datos_pregunta where actividad_id =' . $id_actividad . ' and estatus=1');

                while ($arreglo_datos_preguntas = arreglo($query_datos_pregunta)) {
                    if ( $arreglo_datos_preguntas['numero_intentos'] == "") {
                        $arreglo_datos_preguntas['numero_intentos'] = "null";
                    }
                    if ( $arreglo_datos_preguntas['dificultad_id'] == "") {
                        $arreglo_datos_preguntas['dificultad_id'] = 0;
                    }
                    $inserta_datos_pregunta = inserta_last_id(
                        'tr_datos_pregunta',
                        'tipo_pregunta_id,actividad_id,dificultad_id,orden,ponderacion,aleatorio,retroalimentacion, retroalimentacion_docente,numero_intentos, estatus',
                        '' . $arreglo_datos_preguntas['tipo_pregunta_id'] . ',' . $inserta_actividad . ',' . $arreglo_datos_preguntas['dificultad_id'] . ',
                    ' . $arreglo_datos_preguntas['orden'] . ',' . $arreglo_datos_preguntas['ponderacion'] . ',' . $arreglo_datos_preguntas['aleatorio'] . ',
                    "' . $arreglo_datos_preguntas['retroalimentacion'] . '","' . $arreglo_datos_preguntas['retroalimentacion_docente'] . '",
                     ' . $arreglo_datos_preguntas['numero_intentos'] . ',1'
                    );

                    $pregunta = new Pregunta();
                    $tabla_p = $pregunta::obtiene_tabla($arreglo_datos_preguntas['tipo_pregunta_id'], 'pregunta');
                    $query_preguntas = query('select * from ' . $tabla_p . ' where datos_pregunta_id=' . $arreglo_datos_preguntas['datos_pregunta_id']);
                    while ($arreglo_preguntas = arreglo($query_preguntas)) {
                        switch ($arreglo_datos_preguntas['tipo_pregunta_id']) {

                            case '1':
                                $arreglo_pa = arreglo(query('select datos_pregunta_id, pregunta, contenido, estatus from tr_pa_pregunta where pregunta_id=' . $arreglo_preguntas['pregunta_id']));
                                $inserta_pa = inserta(
                                    'tr_pa_pregunta',
                                    'datos_pregunta_id, pregunta, contenido, estatus',
                                    '' . $inserta_datos_pregunta. ',"' . escape_cara($arreglo_pa['pregunta']) . '", "' . $arreglo_pa['contenido'] . '",1'
                                );
                                break;

                            case '2':
                                $inserta_preguntas = inserta_last_id(
                                    '' . $tabla_p . '',
                                    'datos_pregunta_id, pregunta, contenido, tipo, estatus',
                                    '' . $inserta_datos_pregunta . ',"' . escape_cara($arreglo_preguntas['pregunta']) . '","' . $arreglo_preguntas['contenido'] . '",' . $arreglo_preguntas['tipo'] . ',1'
                                );

                                $tabla_r = $pregunta::obtiene_tabla($arreglo_datos_preguntas['tipo_pregunta_id'], 'reactivos');
                                $query_reactivos = query('select reactivo,ponderacion, contenido, retroalimentacion from ' . $tabla_r . ' where pregunta_id=' . $arreglo_preguntas['pregunta_id']);
                                while ($arreglo_reactivos = arreglo($query_reactivos)) {
                                    $inserta_reactivos = inserta(
                                        '' . $tabla_r . '',
                                        'pregunta_id, reactivo, ponderacion, contenido, retroalimentacion, estatus',
                                        '' . $inserta_preguntas . ',"' . escape_cara($arreglo_reactivos['reactivo']) . '",' . $arreglo_reactivos['ponderacion'] . ', "' . $arreglo_reactivos['contenido'] . '","' . $arreglo_reactivos['retroalimentacion'] . '",1'
                                    );
                                }

                                break;
                            case '3':
                                $inserta_pregunta_rc = inserta_last_id(
                                    '' . $tabla_p . '',
                                    'datos_pregunta_id, pregunta, contenido, estatus',
                                    '' . $inserta_datos_pregunta . ',"' . escape_cara($arreglo_preguntas['pregunta']) . '","' . $arreglo_preguntas['contenido'] . '",1'
                                );

                                $tabla_r = $pregunta::obtiene_tabla($arreglo_datos_preguntas['tipo_pregunta_id'], 'reactivos');
                                $query_reactivos_rc = query('select columna_a_id, columna_b_id, columna_a_desc, columna_b_desc, ponderacion, retroalimentacion from ' . $tabla_r . ' where pregunta_id=' . $arreglo_preguntas['pregunta_id']);
                                while ($arreglo_reactivos_rc = arreglo($query_reactivos_rc)) {
                                    $inserta_reactivos = inserta(
                                        '' . $tabla_r . '',
                                        'pregunta_id,columna_a_id, columna_b_id, columna_a_desc, columna_b_desc, ponderacion, retroalimentacion, estatus',
                                        '' . $inserta_pregunta_rc . ',"' . $arreglo_reactivos_rc['columna_a_id'] . '","' . $arreglo_reactivos_rc['columna_b_id'] . '","' . $arreglo_reactivos_rc['columna_a_desc'] . '","' . $arreglo_reactivos_rc['columna_b_desc'] . '", ' . $arreglo_reactivos_rc['ponderacion'] . ',"' . $arreglo_reactivos_rc['retroalimentacion'] .'",1');
                                }    
                            break;

                            case '4':
                                $inserta_pregunta_zi = inserta_last_id(
                                    '' . $tabla_p . '',
                                    'datos_pregunta_id, pregunta, contenido, estatus',
                                    '' . $inserta_datos_pregunta . ',"' . escape_cara($arreglo_preguntas['pregunta']) . '","' . $arreglo_preguntas['contenido'] . '",1'
                                );

                                $tabla_r = $pregunta::obtiene_tabla($arreglo_datos_preguntas['tipo_pregunta_id'], 'reactivos');
                                
                                $query_reactivos_zi = query('select reactivo_desc,imagen,alto,ancho,posicion_x,posicion_y,color  from ' . $tabla_r . ' where pregunta_id=' . $arreglo_preguntas['pregunta_id']);
                                while ($arreglo_reactivos_zi = arreglo($query_reactivos_zi)) {
                                    $inserta_reactivos_zi = inserta(
                                        '' . $tabla_r . '',
                                        'pregunta_id, reactivo_desc,imagen,alto,ancho,posicion_x,posicion_y,color, estatus',
                                        '' . $inserta_pregunta_zi . ',"' . $arreglo_reactivos_zi['reactivo_desc'] . '", 
                                        "' . $arreglo_reactivos_zi['imagen'] . '",' . $arreglo_reactivos_zi['alto'] .',' . $arreglo_reactivos_zi['ancho'] .',
                                        ' . $arreglo_reactivos_zi['posicion_x'] .',' . $arreglo_reactivos_zi['posicion_y'] .',"' . $arreglo_reactivos_zi['color'] .'",1');
                                }    
                                break;

                            case '5':
                                $inserta_pregunta_dd = inserta_last_id(
                                    '' . $tabla_p . '',
                                    'datos_pregunta_id, pregunta, orientacion, contenido, estatus',
                                    '' . $inserta_datos_pregunta . ',"' . escape_cara($arreglo_preguntas['pregunta']) . '","' . $arreglo_preguntas['orientacion'] . '","' . $arreglo_preguntas['contenido'] . '",1'
                                );

                                $tabla_r = $pregunta::obtiene_tabla($arreglo_datos_preguntas['tipo_pregunta_id'], 'reactivos');
                                $query_reactivos_dd = query('select reactivo_desc, imagen, ancho, alto,orden from ' . $tabla_r . ' where pregunta_id=' . $arreglo_preguntas['pregunta_id']);
                                while ($arreglo_reactivos_dd = arreglo($query_reactivos_dd)) {
                                    $inserta_reactivos_dd = inserta(
                                        '' . $tabla_r . '',
                                        'pregunta_id,reactivo_desc, imagen, ancho, alto,orden, estatus',
                                        '' . $inserta_pregunta_dd . ',"' . $arreglo_reactivos_dd['reactivo_desc'] . '","' . $arreglo_reactivos_dd['imagen'] . '", ' . $arreglo_reactivos_dd['ancho'] . ',' . $arreglo_reactivos_dd['alto'] .',' . $arreglo_reactivos_dd['orden'] .',1');
                                }    
                                break;
                            case '6':
                                $arreglo_qq = arreglo(query('select pregunta,contenido,pregunta1,pregunta2,pregunta3,estatus from tr_qq_pregunta where pregunta_id=' . $arreglo_preguntas['pregunta_id']));
                                $inserta_qq = inserta(
                                    'tr_qq_pregunta',
                                    'datos_pregunta_id,pregunta,contenido,pregunta1,pregunta2,pregunta3,estatus',
                                    '' . $inserta_datos_pregunta . ',"' . escape_cara($arreglo_qq['pregunta']) . '","' . $arreglo_qq['contenido'] . '","' .escape_cara($arreglo_qq['pregunta1']). '","'.escape_cara($arreglo_qq['pregunta2']).'","'. escape_cara($arreglo_qq['pregunta3']) .'",1');
                                break;
                            case '7':
                                $arreglo_zq = arreglo(query('select pregunta,momento, visualiza_flg,contenido,estatus from tr_zq_pregunta where pregunta_id=' . $arreglo_preguntas['pregunta_id']));
                                $inserta_zq = inserta(
                                    'tr_qq_pregunta',
                                    'datos_pregunta_id,pregunta,momento, visualiza_flg,contenido,estatus',
                                    '' . $inserta_datos_pregunta . ',"' . escape_cara($arreglo_zq['pregunta']) . '","' . $arreglo_zq['momento'] . '","' .$arreglo_zq['visualiza_flg']. '","'.$arreglo_zq['contenido'].'",1');

                                break;
                            case '8':
                                break;
                            case '9':
                                break;

                            case '10':
                                $arreglo_fr = arreglo(query('select datos_pregunta_id, foro_titulo, foro_descripcion,pregunta,contenido,  estatus from tr_fr_pregunta where pregunta_id=' . $arreglo_preguntas['pregunta_id']));
                                $inserta_fr = inserta(
                                    'tr_fr_pregunta',
                                    'datos_pregunta_id, foro_titulo, foro_descripcion,pregunta,contenido, estatus',
                                    '' . $inserta_datos_pregunta . ',"' . $arreglo_fr['foro_titulo'] . '","' . $arreglo_fr['foro_descripcion'] . '","' . escape_cara($arreglo_fr['pregunta']) . '","' . escape_cara($arreglo_fr['contenido']) . '",1'
                                );

                                break;

                            case '11':
                                $arreglo_ad = arreglo(query('select datos_pregunta_id,pregunta,contenido,num_archivos,cat_formato_id, estatus from tr_ad_pregunta where pregunta_id=' . $arreglo_preguntas['pregunta_id']));
                                $inserta_ad = inserta(
                                    'tr_ad_pregunta',
                                    'datos_pregunta_id,pregunta,contenido,num_archivos,cat_formato_id, estatus',
                                    '' . $inserta_datos_pregunta. ',"'.escape_cara($arreglo_ad['pregunta']).'","' .$arreglo_ad['contenido']. '",' . $arreglo_ad['num_archivos'] . ', ' . $arreglo_ad['cat_formato_id'] . ',1'
                                );
                                break;
                            default:
                                # code...
                                break;
                        }
                    }
                }

                return 1;
            }else{
                $elimina_activiad =query('delete from tr_actividad where actividad_id ='.$inserta_actividad);
                return 0;
            }
        }else{
            return 0;
        }
        
        
    }

    public static function consulta_preguntas_respuestas($id, $id_mfa, $intentos) {

        $pregunta = new Pregunta();
        $reactivo = new Reactivo();
        $respuesta = new Respuesta();

        self::$query = query('SELECT datos_pregunta_id,  tp.dificultad_id, tp.orden,
        tp.ponderacion, ta.aleatorio as shuffle,tp.aleatorio as pregunta_shuffle, tp.tipo_pregunta_id, tp.actividad_id, tp.estatus, tipo_pregunta_nombre, retroalimentacion, retroalimentacion_docente,
        ctp.reactivos
        FROM tr_datos_pregunta tp 
        join cat_tipo_pregunta ctp on ctp.tipo_pregunta_id = tp.tipo_pregunta_id
        join tr_actividad ta on ta.actividad_id = tp.actividad_id  
        WHERE tp.actividad_id = ' . $id . ' and tp.estatus = 1
        order by tp.orden');

        $json = array();
        while ($arreglo = arreglo(self::$query)) {
            $arreglo_contenido = $pregunta::contenido_pregunta($arreglo['datos_pregunta_id'], $arreglo['tipo_pregunta_id']);

            if(isset($arreglo_contenido['pregunta_id']))
                $arreglo['pregunta_id'] =   $arreglo_contenido['pregunta_id'];  
            else
                $arreglo['pregunta_id'] = null;

            if(isset($arreglo_contenido['pregunta']))
                $arreglo['pregunta'] =   $arreglo_contenido['pregunta'];  
            else
                $arreglo['pregunta'] = null;            

            if(isset($arreglo_contenido))
                $arreglo['contenido_pregunta'] = $arreglo_contenido; 
            else
                $arreglo['contenido_pregunta'] = null;

            if(isset($arreglo_contenido['pregunta'])){
                switch ($arreglo['tipo_pregunta_id']) {
                    case '1':
                        $arreglo_reactivos = $respuesta::preguntaAbierta($arreglo['pregunta_id'], $id_mfa);                    
                        break;
                    case '2':
                        $arreglo_reactivos = $reactivo::opcionMultiple(
                            $arreglo['pregunta_id'], $arreglo['pregunta_shuffle'], $intentos, $id_mfa);                    
                        break;
                    case '3':
                        $arreglo_reactivos = $reactivo::relacionColumnas($arreglo['pregunta_id'], $id_mfa);                    
                        break;
                    case '4':
                        $arreglo_reactivos = $reactivo::zonaImagenes($arreglo['pregunta_id'], $id_mfa);                    
                        break;
                    case '5':
                        $arreglo_reactivos = $reactivo::dragDrop($arreglo['pregunta_id'], $id_mfa);                    
                        break;
                    case '6':
                        $arreglo_reactivos = $respuesta::diagnostica($arreglo['pregunta_id'], $id_mfa);                    
                        break;
                    case '8':
                        $arreglo_reactivos = $respuesta::cuadroComparativo($arreglo['pregunta_id'], $id_mfa);                    
                        break;
                    case '9':
                        $arreglo_reactivos = $respuesta::mapaCognitivo($arreglo['pregunta_id'], $id_mfa);                    
                        break;
                    case '10':
                        $arreglo_reactivos = $respuesta::foro($arreglo['pregunta_id'], $id_mfa);                    
                        break;
                    case '11':
                        $arreglo_reactivos = $respuesta::cargaArchivos($arreglo['pregunta_id'], $id_mfa);                    
                        break;
                    default:
                        $arreglo_reactivos = null;
                        break;
                }
                

                $arreglo['arreglo_reactivos'] = $arreglo_reactivos;

                self::$shuffle = $arreglo['shuffle'];
            }else{
                $arreglo['arreglo_reactivos'] = [];
            }
            array_push($json, $arreglo);
        }
        return $json;
    }

    public static function moverModulo($id_actividad,$orden,$id_modulo,$id_modulo_nuevo){

        $update_orden = query('update tr_actividad set orden = orden -1 where modulo_id = '.$id_modulo.' and orden > '.$orden.' and  estatus = 1');

        $query_nuevo_orden = query('select max(orden) as nuevo_orden from tr_actividad where modulo_id ='.$id_modulo_nuevo.' and estatus = 1 and orden < 99');

        $arreglo_nuevo_orden = arreglo($query_nuevo_orden);

        $nuevo_orden = $arreglo_nuevo_orden['nuevo_orden'] != '' ? $arreglo_nuevo_orden['nuevo_orden'] : 1; 

        $update_modulo = query('update tr_actividad set modulo_id = '.$id_modulo_nuevo.',orden = '.$nuevo_orden.' where actividad_id = '.$id_actividad);

        
        return $update_modulo;


    }








}
