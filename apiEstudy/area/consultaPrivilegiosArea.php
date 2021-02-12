<?php
include '../jwt.php';
include '../headers.php';

try {

    db('controlEscolar');

    if ($_SERVER['REQUEST_METHOD'] == "GET") {
        foreach ($_GET as $clave => $valor) {
            ${$clave} = escape_cara($valor);
        }

        $usuario = Auth::GetData(
            $jwt
        );

        //SERVICIO DE CONSULTA DE SESIÓN
        $query_rol = query('select ca.area_id, ca.area_desc, ca.area_nombre, ipa.privilegio_id, ipa.privilegio_area_id, cp.privilegio, cp.icono, cp.privilegio_clave, cp.url, cp.privilegio_padre_id  from cat_area ca 
        join inter_privilegio_area ipa on ipa.area_id = ca.area_id 
        join '.$GLOBALS["db_datosGenerales"].'.cat_privilegios cp on cp.privilegio_id = ipa.privilegio_id 
        WHERE ca.estatus = 1 and ca.area_id =' . $id_area . ' and privilegio_padre_id is null');



        $tmp_json = array();
        while ($arreglo = arreglo($query_rol)) {


            $query1 = query('select ca.area_id, ca.area_desc, ca.area_nombre, ipa.privilegio_id, ipa.privilegio_area_id, cp.privilegio, cp.icono, cp.privilegio_clave, cp.url, cp.privilegio_padre_id  from cat_area ca 
            join inter_privilegio_area ipa on ipa.area_id = ca.area_id 
            join '.$GLOBALS["db_datosGenerales"].'.cat_privilegios cp on cp.privilegio_id = ipa.privilegio_id 
            WHERE ca.estatus = 1 and ca.area_id =' . $id_area . ' and privilegio_padre_id = ' . $arreglo['privilegio_id']);

            $tmp_json1 = array();

            while ($arreglo1 = arreglo($query1)) {
                array_push($tmp_json1, $arreglo1);
            }
            $arreglo['sub_privilegios'] = $tmp_json1;

            array_push($tmp_json, $arreglo);
        }

        //ingreso todas las escuelas que tiene este profesor

        if (num($query_rol)) {
            $json = array("status" => 1, "msg" => "Se encontraron privilegios", "privilegios" => $tmp_json);
        } else {
            $json = array("status" => 0, "msg" => "No se encontraron privilegios");
        }
    } else {
        $json = array("status" => 0, "msg" => "Método no aceptado");
    }


    echo json_encode($json);
} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}
