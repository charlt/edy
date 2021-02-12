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
        
        $arreglo= arreglo(query('select imag.modulo_id, cm.modulo_nombre, cm.fecha_inicio, cm.fecha_fin from inter_modulos_asignatura_grupo imag
        join cat_modulos cm on cm.modulo_id = imag.modulo_id
        where asignatura_grupo_id ='.$id_asignatura_grupo));

        if(is_null($arreglo)){
            $inserta_modulo = inserta_last_id('cat_modulos','modulo_nombre,modulo_numero, fecha_inicio, fecha_fin,estatus',
            '"'.$nombre_modulo.'",0,null,null,1');
            if($inserta_modulo){
                $inserta_modulo_asignatura_grupo = inserta('inter_modulos_asignatura_grupo',
                'modulo_id, asignatura_grupo_id,estatus',''.$inserta_modulo.', '.$id_asignatura_grupo.',1');
                
                $arreglo_inserta= arreglo(query('select imag.modulo_id, cm.modulo_nombre, cm.fecha_inicio, cm.fecha_fin from inter_modulos_asignatura_grupo imag
                join cat_modulos cm on cm.modulo_id = imag.modulo_id
                where imag.modulo_id ='.$inserta_modulo));     

                $json = array("status" => 1, "msg" => "Se insertó moduló correctamnete","modulo"=>$arreglo_inserta);
            }

        }else{       
        //ingreso todas las escuelas que tiene este profesor
             $json = array("status" => 1, "msg" => "Se encontró modulo","modulo"=> $arreglo);
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