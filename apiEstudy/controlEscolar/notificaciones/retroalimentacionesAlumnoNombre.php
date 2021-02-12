<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db ('learning');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
              $usuario = Auth::GetData(
                $jwt  
            );

        // print_r($usuario);

        $query=query('select idag.docente_id, tr.persona_id ,tmfa.materia_id,tmfa.actividad_id, tr.origen,
         tr.texto , tr.visto, per.nombre, 
        per.primer_apellido, per.segundo_apellido,
         count(tr.persona_id) as num_retros
        from tr_retroalimentacion tr
        join '.$GLOBALS['db_datosGenerales'].'.personas per on tr.persona_id = per.persona_id 
        join tr_materia_fecha_actividad tmfa on tmfa.materia_fecha_actividad_id = tr.materia_fecha_actividad_id 
        join tr_materia tm on tmfa.materia_id = tm.materia_id 
        join '.$GLOBALS['db_controlEscolar'].'.inter_docente_asignatura_grupo idag on idag.asignatura_grupo_id = tm.asignatura_grupo_id
        where (docente_id = '.$usuario->id.') and (origen = 2) and (visto = 0 or visto is null)
        group by nombre, primer_apellido, segundo_apellido, actividad_id
        limit 0,5');
        
        $json_retros =array();
        while($arreglo= arreglo($query)){
          array_push($json_retros, $arreglo);
        }

        if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron retroalimentaciones", "retroalimentaciones" => $json_retros);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron retroalimentaciones");
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
