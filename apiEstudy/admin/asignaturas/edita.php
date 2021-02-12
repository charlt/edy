<?php
include '../../jwt.php';
include '../../headers.php';

try {

  db('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
            $jwt  
        );
         
        if(isset($id_asignatura_padre) && $id_asignatura_padre != ""){
          $asignatura_padre_id = 'asignatura_padre_id = '.$id_asignatura_padre;
          
        }else{
          $asignatura_padre_id = 'asignatura_padre_id = null';
        }

        $edita = query('UPDATE cat_asignaturas 
        set asignatura_clave = "'.$asignatura_clave.'",
        asignatura = "'.$asignatura.'",
        creditos = '.$creditos.',
        '.$asignatura_padre_id.',
        calif_min = '.$calif_min.',
        calif_max = '.$calif_max.',
        tipo_asignatura_id = '.$tipo_asignatura_id.',
        fecha_actualiza = now(),
        usuario_actualiza = current_user()
        where asignatura_id = '.$id_asignatura);


        if (isset($plan_estudio_id) && isset($orden_jerarquico_id)){ //sólo si se mandan los valores
          $query_plan_orden = query('SELECT plan_orden_id from inter_plan_orden where plan_estudio_id = '.$plan_estudio_id.' and orden_jerarquico_id='.$orden_jerarquico_id);//se obtiene el plan_orden_id nuevo
          $json_plan_orden = array();
          if($query_plan_orden){ //si existe el nuevo plan_orden consulta si tiene registro en inter_orden_asignatura
            while ($arreglo_plan_estudios = arreglo($query_plan_orden)){
              array_push($json_plan_orden,$arreglo_plan_estudios);
            }
            $consulta_inter_orden_asignatura = query('SELECT orden_asignatura_id from inter_orden_asignatura where  asignatura_id ='.$id_asignatura.'');
            if(num($consulta_inter_orden_asignatura)){ // si existe sólo edita el plan_orden_id en inter_orden_asignatura, si no agrega uno nuevo
              $edita_plan_orden = query('UPDATE inter_orden_asignatura set plan_orden_id='.$json_plan_orden[0]['plan_orden_id'].' where asignatura_id='.$id_asignatura);
            }else{//se agrega un nuevo registro a inter_orden_asignatura
              $inserta_orden_asignatura = inserta('inter_orden_asignatura',
              'plan_orden_id,
              asignatura_id,
              estatus',
              ''.$json_plan_orden[0]['plan_orden_id'].',
              '.$id_asignatura.',
              1');
            }
            $inter_plan_orden_id = null;
          }else{ // se agrega un nuevo registro en inter_plan_orden
            $inter_plan_orden_id = inserta_last_id('inter_plan_orden',
            'plan_estudio_id ,
             orden_jerarquico_id',
             ''.$plan_estudio_id.',
             '.$orden_jerarquico_id.'');

            if($inter_plan_orden_id){
              $inserta_orden_asignatura = inserta('inter_orden_asignatura',
              'plan_orden_id,
              asignatura_id,
              estatus',
              ''.$inter_plan_orden_id.',
              '.$id_asignatura.',
              1');
            }else{
              echo('valio');
            }
          }

        }
       
       if(($edita && $inter_plan_orden_id) || ($edita && $edita_plan_orden) || ($edita && $inserta_orden_asignatura)){
    		$json = array("status" => 1, "msg" => "Se actualizó la asignatura correctamente");
    	 }else{
    		$json = array("status" => 0, "msg" => "No se logró actualizar la asignatura");
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
