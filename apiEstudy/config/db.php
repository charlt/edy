<?php

/*
 * Emmanuel Isaias Zamora Rivera
 * 2013
 */

/*función que permite la conexión a la base de datos, es invocada desde
 * las funciones de base de datos, insert, select, update, etc.
 */

//desarrollo = 0
$GLOBALS['produccion']=0;


if($GLOBALS['produccion'] == 1){
    require_once "conf.php";
    require_once "global.php";
}else{
    require_once "conf_debug.php";
    require_once "global_debug.php";
}


function db($modulo)
{
    switch ($modulo) {
        case "certificaciontitulacion":
            $GLOBALS['mysqldb_estudy'] = $GLOBALS["db_certificaciontitulacion"];
            break;
        case "pagos":
            $GLOBALS['mysqldb_estudy'] = $GLOBALS["db_pagos"];
            break;
        case "controlEscolar":
            $GLOBALS['mysqldb_estudy'] = $GLOBALS["db_controlEscolar"];
            break;
        case "learning":
            $GLOBALS['mysqldb_estudy'] = $GLOBALS["db_learning"];
            break;
        case "SMTP":
            $GLOBALS['mysqldb_estudy'] = $GLOBALS["db_SMTP"];
            break;
        case "UMO":
            $GLOBALS['mysqldb_estudy'] = $GLOBALS["db_UMO"];
            break;
        case "tec":
            $GLOBALS['mysqldb_estudy'] = $GLOBALS["db_tec"];
            break;
        case "seguimiento":
            $GLOBALS['mysqldb_estudy'] = $GLOBALS["db_seguimiento"];
            break;
        case "reporte":
            $GLOBALS['mysqldb_estudy'] = $GLOBALS["db_reporte"];
            break;           
        default:
            $GLOBALS['mysqldb_estudy'] = $GLOBALS["db_datosGenerales"];
            break;
        
    }
}

function conecta($tipo)
{
    if(!isset($GLOBALS['connection'])){
        $server = $GLOBALS['ip'];
        $port = $GLOBALS['port'];
        $db = $GLOBALS['mysqldb_estudy'];
        switch ($tipo) {
            case 1://case que permite solo seleccionar
                $user = "";
                $pass = "";
                break;
            case 2://case que permite actualizar e insertar, pero no borrar
                $user = "";
                $pass = "";
                break;
            case 3://case que permite modificar todos los datos (insert, update, delete)
                $user = $GLOBALS['user_db'];
                $pass = $GLOBALS['pass_db'];
                break;
            default://nada
                $user = "";
                $pass = "";
                break;
        }


        $GLOBALS['connection'] = mysqli_connect($server, $user, $pass, $db);
    

        if (mysqli_connect_errno()) {
            echo "Error de base de datos. <br>Intente m&aacute;s tarde o consulte al administrador." . mysqli_connect_error();
        }
    }
    
    $con = $GLOBALS['connection'];

    return $con;
}

function cierra($conexion)
{
    mysqli_close($conexion);
}

function replace($tabla, $cols, $values)
{
    $conexion = conecta(3);
    $ins = "replace into $tabla ($cols) values ($values);";
    // echo $ins;
    mysqli_query($conexion, "SET NAMES 'utf8'");
    $res = mysqli_query($conexion, $ins) or die(mysqli_error($conexion));

    //cierra($conexion);
    return $res;

}

function inserta($tabla, $cols, $values)
{
    $conexion = conecta(3);
    $ins = "insert into $tabla ($cols) values ($values);";
    // echo $ins;
    mysqli_query($conexion, "SET NAMES 'utf8'");
    $res = mysqli_query($conexion, $ins) or die(mysqli_error($conexion));

    //cierra($conexion);
    return $res;

}

function inserta_last_id($tabla, $cols, $values)
{
    $conexion = conecta(3);
    $ins = "insert into $tabla ($cols) values ($values);";
    // echo $ins;
    mysqli_query($conexion, "SET NAMES 'utf8'");
    mysqli_query($conexion, $ins) or die(mysqli_error($conexion));
    $last_id = mysqli_insert_id($conexion);
    // //cierra($conexion);
    return $last_id;
}


function select($campos, $tabla, $cond)
{
    $conexion = conecta(3);
    $sel = 'select ' . $campos . ' from ' . $tabla . ' where ' . $cond . '';
    mysqli_query($conexion, "SET NAMES 'utf8'");
    $res = mysqli_query($conexion, $sel) or die(mysqli_error($conexion));
    //cierra($conexion);
    return $res;
}

function update($tabla, $valor, $cond)
{
    $conexion = conecta(3);
    mysqli_query($conexion, "SET NAMES 'utf8'");
    $upd = "update $tabla set $valor where $cond;";
    // echo $upd;
    $res = mysqli_query($conexion, $upd) or die(json_encode(mysqli_error($conexion)));
    //cierra($conexion);
    return $res;
}

function delete($tabla, $cond)
{
    $conexion = conecta(3);
    $del = "delete from $tabla where $cond;";
    $res = mysqli_query($conexion, $del) or die(json_encode(mysqli_error($conexion)));
    //cierra($conexion);
    return $res;
}

function num($query)
{
    $res = mysqli_num_rows($query);
    return $res;
}

function arreglo($query)
{
    $res = mysqli_fetch_array($query, 1);
    return $res;
}

function escape_cara($query)
{
    $conexion = conecta(3);
    $res = mysqli_real_escape_string($conexion, $query);
    //cierra($conexion);
    return $res;
}

function error_base()
{
    //$res = mysqli_error();
    //return $res;
}

function row($query)
{
    $res = mysqli_fetch_row($query);
    return $res;
}

function query($query)
{
    $conexion = conecta(3);
    mysqli_query($conexion, "SET NAMES 'utf8'");
//  echo $query;
    $res = mysqli_query($conexion, $query) or die(json_encode(mysqli_error($conexion)));
    //cierra($conexion);
    return $res;
}

?>