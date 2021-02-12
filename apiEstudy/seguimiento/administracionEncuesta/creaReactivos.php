<?php
include '../../jwt.php';
include '../../headers.php';


db('seguimiento');


try {
    if ($_SERVER['REQUEST_METHOD'] == "POST") {

        foreach($_POST as $clave => $valor){
            ${$clave} = escape_cara($valor);
        }

        // $jwt = $_POST["jwt"];

        // $encuesta_id = $_POST["encuesta_id"];
        // $campo_encuesta_id = $_POST["campo_encuesta_id"];
        // $reactivo = $_POST["reactivo"];

        $usuario = Auth::GetData(
            $jwt
        );

        
        $query_preguntas = query('SELECT campo_encuesta_id,pregunta, tce.tipo_campo_id, nombre_tipo_campo  
        from tr_campo_encuesta tce
        join cat_tipo_campo ctc on tce.tipo_campo_id = ctc.tipo_campo_id
        where  encuesta_id=' . $encuesta_id . ' and tce.tipo_campo_id in (3,4,5)');

        $arreglo_json = json_decode(stripslashes($preguntas));
        $num_preguntas = sizeof($arreglo_json);

        for ($i=0; $i < $num_preguntas ; $i++) { 
            $existe = 0;
            for ($j=0; $j < sizeof($arreglo_json[$i]->reactivos); $j++) { 
                $arreglo_pregunta = arreglo(query('SELECT campo_encuesta_id FROM tr_reactivos_campo_encuesta 
                WHERE campo_encuesta_id = '.$arreglo_json[$i]->campo_encuesta_id));
                if ($arreglo_pregunta) {
                    $query_a = query('delete from tr_reactivos_campo_encuesta where campo_encuesta_id =' . $arreglo_pregunta['campo_encuesta_id'] . '');
                }
            }
            for ($j=0; $j < sizeof($arreglo_json[$i]->reactivos); $j++) { 
                if (!$existe) {
                    $inserta = inserta(
                        'tr_reactivos_campo_encuesta',
                        'campo_encuesta_id,reactivo_desc,estatus',
                        '' . $arreglo_json[$i]->campo_encuesta_id . ', "' . $arreglo_json[$i]->reactivos[$j]->reactivo_desc . '", 1'
                    );
                }
            }
        }
        // $query_reactivos = query('SELECT campo_encuesta_id,pregunta, tce.tipo_campo_id, nombre_tipo_campo  
        // from tr_campo_encuesta tce
        // join cat_tipo_campo ctc on tce.tipo_campo_id = ctc.tipo_campo_id
        //  where  encuesta_id=' . $encuesta_id . ' and tce.tipo_campo_id in (3,4,5)');

        // $num_arreglo = count($campo_encuesta_id);
        // for ($i = 0; $i < $num_arreglo; $i++) {
        //     $existe = 0;
        //     while ($arreglo = arreglo($query_reactivos)) {

        //         if ($arreglo['campo_encuesta_id'] == $campo_encuesta_id[$i]) {

        //             $query_a = query('delete from tr_reactivos_campo_encuesta where campo_encuesta_id =' . $arreglo['campo_encuesta_id'] . '');
        //         }
        //     }

        //     if (!$existe) {
        //         $inserta = inserta(
        //             'tr_reactivos_campo_encuesta',
        //             'campo_encuesta_id,reactivo_desc,estatus',
        //             '' . $campo_encuesta_id[$i] . ', "' . $reactivo[$i] . '", 1'
        //         );
        //     }
        // }




        if ($inserta) {
            $json = array("status" => 1, "msg" => "Se insertaron reactivos correctamente");
        } else {
            $json = array("status" => 0, "msg" => "Hubo un problema al insertar reactivos");
        }
    } else {
        $json = array("status" => 0, "msg" => "Método no aceptado");
    }

    /* Output header */

    echo json_encode($json);
} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
