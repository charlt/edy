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
      
  

      $query_suscripciones = query('select tsp.solicitud_pago_id from tr_solicitud_pago tsp 
      join tr_pago tp on tp.pago_id = tsp.pago_id 
      join tr_suscripcion_pago tsp2 on tsp2.pago_id = tsp.pago_id 
      where tsp.estatus = 1  and tp.estatus = 1 and tsp2.tipo = 3 and tsp.persona_id = '.$id_alumno);  
 
      $json_suscripciones=array();

      while($arreglo_suscripciones = arreglo($query_suscripciones)){
        array_push($json_suscripciones,$arreglo_suscripciones);
      }
      
    

    if(num($query_suscripciones)){
      $json = array("status" => 1, "msg" => "Se encontraron registros de inscripción del alumno","inscripcion" => $json_suscripciones);
     }else{
      $json = array("status" => 0, "msg" => "No se encontraron inscripciones");
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
