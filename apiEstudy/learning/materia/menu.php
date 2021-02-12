<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/asignaturagrupo.class.php';

try {

  $AsignaturaGrupo = new AsignaturaGrupo();

  db('learning');

  if ($_SERVER['REQUEST_METHOD'] == "GET") {
    foreach ($_GET as $clave => $valor) {
      ${$clave} = escape_cara($valor);
    }

    $usuario = Auth::GetData(
      $jwt
    );



    $query_modulos = $AsignaturaGrupo::consultaTodosModulos($id_asignatura_grupo);


    $momento = 0;
    $m_completado = 0;

    $json_modulos = array();
    while ($arreglo_modulos = arreglo($query_modulos)) {
      $actividades = 0;
      $query_respuesta = query('select actividad_id,estatus_actividad_id 
      from tr_materia_fecha_actividad tmfa where materia_id = ' . $id_materia . ' and tmfa.estatus = 1');
      $arreglo_respuesta = arreglo($query_respuesta);
      //SERVICIO DE CONSULTA DE SESIÓN
      if ($usuario->id_rol == 2) {
        if(num($query_respuesta) && $arreglo_respuesta['estatus_actividad_id'] != 1)
          $script = "and (visible = 1 or estatus_actividad_id != 1)";
        else
          $script = 'and visible = 1';
      } elseif ($usuario->id_rol == 1 || $usuario->id_rol == 3) {
        $script = '';
      }

      $query_actividad = query('select ta.actividad_id, ta.tipo_actividad_id,ta.actividad_nombre,ta.actividad_clave,ta.num_intentos,ta.actividad_nombre,tmfa.estatus_actividad_id, estatus_actividad,icono
      FROM tr_actividad ta
      left join (select actividad_id, tmfa1.estatus_actividad_id,estatus_actividad,icono from 
      tr_materia_fecha_actividad tmfa1 join cat_estatus_actividad cea on cea.estatus_actividad_id = tmfa1.estatus_actividad_id where materia_id = ' . $id_materia . ' and tmfa1.estatus = 1) tmfa on tmfa.actividad_id = ta.actividad_id 
      where ta.estatus=1 and ta.tipo_actividad_id != 5 and  modulo_id = ' . $arreglo_modulos['modulo_id'] . ' '.$script.' ORDER BY orden');


      $json_actividad = array();
      while ($arreglo_actividad = arreglo($query_actividad)) {

        $actividades++;

        /*$query_fecha_actividad = query('SELECT taf.alumno_id,taf.calificacion,taf.fecha_actividad, taf.intento_num,
          taf.estatus_actividad_id,cea.estatus_actividad
          from tr_alumno_fecha_actividad taf
          join cat_estatus_actividad cea on taf.estatus_actividad_id = cea.estatus_actividad_id
          where alumno_id = '.$usuario->id.' and actividad_id = '.$arreglo_actividad["actividad_id"]);   

        $arreglo_fecha_actividad = arreglo($query_fecha_actividad);

        
          $arreglo_actividad['fecha_actividad'] = $arreglo_fecha_actividad;*/
        if ($arreglo_actividad['estatus_actividad_id']  == '') {
          $arreglo_actividad['estatus_actividad_id'] = 0;
          $arreglo_actividad['estatus_actividad'] = "Sin realizar";
          $arreglo_actividad['icono'] = "fa-circle-o";
        }



        if ($arreglo_actividad['tipo_actividad_id'] == 4) {
          $momento++;

          if ($momento == 1) {
            if ($arreglo_actividad['estatus_actividad_id'] == 3) { //significa que la actividad ya está enviada
              $m_completado = 1;
            } else {
              array_push($json_actividad, $arreglo_actividad);
            }
          }

          if ($momento == 2) {
            if ($arreglo_actividad['estatus_actividad_id'] == 3) { //significa que la actividad ya está enviada
              $m_completado = 2;
            } else if ($m_completado == 1) {
              array_push($json_actividad, $arreglo_actividad);
            }
          }
          if ($momento == 3) {
            if ($m_completado == 2) {
              array_push($json_actividad, $arreglo_actividad);
            }
          }
        } else {
          array_push($json_actividad, $arreglo_actividad);
        }



        $arreglo_modulos['actividades'] = $json_actividad;
      }

      if ($actividades > 0)
        array_push($json_modulos, $arreglo_modulos);
    }



    //ingreso todas las escuelas que tiene este profesor

    if (num($query_modulos)) {
      $json = array("status" => 1, "msg" => "Se encontraron los Bloques", "modulo" => $json_modulos);
    } else {
      $json = array("status" => 0, "msg" => "No se encontraron Bloques");
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
