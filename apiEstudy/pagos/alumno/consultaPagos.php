<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/alumno.class.php';

try {
  
  db('pagos');

  $alumno=new Alumno();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt
    );
      
    if(!isset($busqueda)) 
      $script_busqueda = ''; //si no existe el parámetro de busqueda forzar a que busque algo
    else
      $script_busqueda = ' and (p.nombre like "%'.$busqueda.'%" or p.primer_apellido like "%'.$busqueda.'%" or p.segundo_apellido like "%'.$busqueda.'%")';
  

      $query_alumno = query('select ta.alumno_id,p.nombre, p.primer_apellido, p.segundo_apellido,ta.clave_alumno,ta.situacion_pago_id,situacion_pago_descripcion,nombre_suscripcion
      from '.$GLOBALS['db_datosGenerales'].'.personas  p
      join '.$GLOBALS['db_controlEscolar'].'.tr_alumno ta on ta.alumno_id = p.persona_id
      left join inter_alumno_suscripcion ias on ias.alumno_id = ta.alumno_id
      left join cat_suscripcion cs on cs.suscripcion_id = ias.suscripcion_id
      join '.$GLOBALS['db_controlEscolar'].'.cat_situacion_pago csa on ta.situacion_pago_id = csa.situacion_pago_id
      where p.estatus = 1 and ta.estatus = 1 
      '.$script_busqueda.' 
      order by p.persona_id
      limit 0,50');  
 
      $json_adeudos=array();

      while($arreglo_alumno = arreglo($query_alumno)){
        
        $query_solicitud_pago = query('select solicitud_pago_id from tr_solicitud_pago where persona_id = '.$arreglo_alumno['alumno_id'].' and estatus = 1 and estatus_solicitud_pago_id in (1,2)');

        $arreglo_alumno['pendientes_pago'] = num($query_solicitud_pago);

        array_push($json_adeudos,$arreglo_alumno);



      }
      
    

    if(num($query_alumno)){
      $json = array("status" => 1, "msg" => "Se encontraron alumnos","alumnos" => $json_adeudos);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron alumnos");
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
