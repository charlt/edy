  <?php
  include '../../jwt.php';
  include '../../headers.php';
  include '../class/docente.class.php';
  include '../../extras/correo/class/correo.class.php';


  try {
    
    db ('controlEscolar');

    $docente = new Docente();
    $correo = new Correo();

    if($_SERVER['REQUEST_METHOD'] == "GET"){
      foreach($_GET as $clave => $valor){
        ${$clave} = escape_cara($valor);
      }

        $usuario = Auth::GetData(
              $jwt  
          );

          $query_docentes = query('SELECT docente_id from tr_docente 
          where estatus = 1');
    
    $json_pendientes=array();
          while($arreglo_docentes = arreglo($query_docentes)){
          $query = $docente::consultaAsignaturas($arreglo_docentes['docente_id']);

        $json_docente= array();
        $suma_retroalimetacion=0;
        $suma_actividades=0;
        while ($arreglo_docente = arreglo($query)){
            $query_retroalimentacion=$docente::Retroalimentaciones($arreglo_docente['asignatura_grupo_id'],$arreglo_docentes['docente_id']);
            $arreglo_docente['retroalimentacion']= num($query_retroalimentacion);
            $suma_retroalimetacion += $arreglo_docente['retroalimentacion'];


            $query_antigua = $docente::actividadesPendientes($arreglo_docente['asignatura_grupo_id']);
            $arreglo_antigua = arreglo($query_antigua);
              
            $arreglo_docente['actividades_pendientes']= num($query_antigua);
            $suma_actividades += $arreglo_docente['actividades_pendientes'];
              array_push($json_docente,$arreglo_docente);

        }

        $query_mensajes=query('SELECT materia_id
          from '.$GLOBALS['db_learning'].'.tr_materia tm
          join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = tm.asignatura_grupo_id
          where idag.docente_id ='.$arreglo_docentes['docente_id'].' and idag.estatus = 1 and tm.estatus = 1');
          $num_mensajes=0;
          while($arreglo = arreglo($query_mensajes)){
          $query_msjs=query('SELECT count(mensaje_id) as num_mensajes from '.$GLOBALS['db_learning'].'.tr_mensaje_materia tmm where tmm.estatus=1 and visto=0 and origen=2 and materia_id = '.$arreglo['materia_id']);
          $arreglo_msjs = arreglo($query_msjs);
          $num_mensajes+=$arreglo_msjs['num_mensajes'];
          }

          $arreglo_pendientes['docente_id']=$arreglo_docentes['docente_id'];            
          $arreglo_pendientes['retroalimentacion']=$suma_retroalimetacion;  
          $arreglo_pendientes['mensajes']=$num_mensajes;  
          $arreglo_pendientes['actividades']=$suma_actividades;  
          array_push($json_pendientes, $arreglo_pendientes);

        }
        
        $num_arreglo_pendientes = count($json_pendientes);
        for ($i=0; $i <$num_arreglo_pendientes ; $i++) { 
            if($json_pendientes[$i]['retroalimentacion'] !=0 || $json_pendientes[$i]['mensajes']!=0 || $json_pendientes[$i]['actividades']!=0){
            $envia_correo = $correo::pendientesDocente($json_pendientes[$i]['docente_id'], $json_pendientes[$i]['retroalimentacion'], $json_pendientes[$i]['mensajes'], $json_pendientes[$i]['actividades']);
          }

        }


        if(num($query)){
          $json = array("status" => 1, "msg" => "Se enviaron Pendientes a Docentes");
        }else{
          $json = array("status" => 0, "msg" => "No se enviaron pendientes");
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