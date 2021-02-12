<?php

include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/alumno.class.php';




try {
  
  db('controlEscolar');

  $alumno = new alumno();
  

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

    $query_alumnos = $alumno::alumnos_iniciados();
    $grupo_a = $grupo_b = $grupo_c = $grupo_sin = 0;


    $id_grupo_a = 4;
    $id_grupo_b = 5;
    $id_grupo_c = 6;
    
    while($arreglo_alumnos = arreglo($query_alumnos)){
      $clave_estado = substr($arreglo_alumnos['curp'], 11, 2);      
      
      switch($clave_estado){
        case 'CS':
        case 'CL':
        case 'CM':
        case 'DG':
        case 'GR':
        case 'HG':
        case 'MS':
        case 'NT':
        case 'OA':
        case 'PL':
        case 'QR':
        case 'SL':
        case 'SR':
        case 'TB':
        case 'TS':
        case 'VZ':
        case 'ZS':
            $grupo_a++;
            query('insert into inter_alumno_grupo (grupo_id,alumno_id,estatus) values ('.$id_grupo_a.','.$arreglo_alumnos['alumno_id'].',1)');
        break;
        
        case 'AS':
        case 'BS':
        case 'CC':
        case 'DF':
        case 'MC':
        case 'JC':
        case 'MN':
        case 'YN':
            query('insert into inter_alumno_grupo (grupo_id,alumno_id,estatus) values ('.$id_grupo_b.','.$arreglo_alumnos['alumno_id'].',1)');
        break;
        
        case 'BC':
        case 'CH':
        case 'GT':
        case 'NL':
        case 'QO':
        case 'QT':
        case 'SP':
        case 'TL':
          query('insert into inter_alumno_grupo (grupo_id,alumno_id,estatus) values ('.$id_grupo_c.','.$arreglo_alumnos['alumno_id'].',1)');
        break;
        default:
        query('insert into inter_alumno_grupo (grupo_id,alumno_id,estatus) values ('.$id_grupo_c.','.$arreglo_alumnos['alumno_id'].',1)');
        break;
      }


    }

    echo ' grupo a'.$grupo_a;
      echo ' grupo b'.$grupo_b;
      echo ' grupo c'.$grupo_c;
      echo ' sin grupo'.$grupo_sin;


    
    /*if(1){
      $json = array("status" => 1, "msg" => "Se matricularon ".$num_aspirantes." de ".$total_aspirantes." alumnos correctamnte");
     }else{
      $json = array("status" => 0, "msg" => "No se crearón alumnos");
     }*/
     $json = array("status" => 0, "msg" => "No se crearón alumnos");

}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

/* Output header */

echo json_encode($json);

} catch (Exception $e) {
  $json = array("status" => 0, "msg" =>  $e->getMessage());

  echo json_encode($json);
}
