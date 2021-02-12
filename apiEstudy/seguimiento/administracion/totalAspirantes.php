<?php
include '../../jwt.php';
include '../../headers.php';

try {
  

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );

    // if($tipo == 1){ // todos
    //   $condicion = 'ta.validado_administrador in (0,1)' ;
    // }else if($tipo == 2){ //validado sin carrera
    //   $condicion = 'ta.validado_administrador = 1';
    // }else if($tipo == 3){ // sin validar sin carrera
    //   $condicion = 'ta.validado_administrador = 0' ;
    // }else if($tipo == 4){// validados de una carrera
    //   $condicion = 'ta.validado_administrador = 1 and ta.carrera_id ='.$carrera_id;
    // }else if($tipo == 5){// sin validar de una carrera
    //   $condicion = 'ta.validado_administrador = 0 and ta.carrera_id ='.$carrera_id;
    // }else if($tipo == 6){// solo carrera
    //   $condicion = 'ta.carrera_id ='.$carrera_id;
    // }

    if($tipo == 1){ // todos
      $condicion = 'and ta.validado_administrador in (0,1)' ;
    }else if($tipo == 4){//todos con carrera y con fecha 
      $condicion = 'and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'" and carrera_id = '.$carrera_id;
  }else if($tipo == 5){//todos con carrera y sin fecha 
      $condicion = 'and carrera_id = '.$carrera_id;
  }else if($tipo == 6){//todos sin carrera y con fecha 
      $condicion = 'and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'"';
  }

  
  else if($tipo == 2){//validado sin carrera y sin fecha 
      $condicion = 'and ta.validado_administrador = 1';
  }else if($tipo == 7){//validado con carrera y con fecha 
      $condicion = 'and ta.validado_administrador = 1 and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'" and carrera_id = '.$carrera_id;
  }else if($tipo == 8){//validado con carrera y sin fecha 
      $condicion = 'and ta.validado_administrador = 1 and carrera_id = '.$carrera_id;
  }else if($tipo == 9){//validado sin carrera y con fecha 
      $condicion = 'and ta.validado_administrador = 1 and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'"';
  }
  

  else if($tipo == 3){//sin validar sin carrera y sin fecha 
      $condicion = 'and ta.validado_administrador = 0';
  }else if($tipo == 10){//sin validar con carrera y con fecha 
      $condicion = 'and ta.validado_administrador = 0 and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'" and carrera_id = '.$carrera_id;
  }else if($tipo == 11){//sin validar con carrera y sin fecha 
      $condicion = 'and ta.validado_administrador = 0 and carrera_id = '.$carrera_id;
  }else if($tipo == 12){//sin validar sin carrera y con fecha 
      $condicion = 'and ta.validado_administrador = 0 and p.fecha_creacion between "'.$fecha_inicio.'" and "'.$fecha_fin.'"';
  }

    $query = query('SELECT * FROM  '.$GLOBALS["db_datosGenerales"].'.personas p
    JOIN '.$GLOBALS["db_datosGenerales"].'.inter_persona_usuario_rol ipu on ipu.persona_id =  p.persona_id 
    JOIN '.$GLOBALS["db_seguimiento"].'.tr_aspirante ta on ta.aspirante_id = p.persona_id
    where rol_id =4 and ipu.estatus=1 and ta.estatus = 1 '.$condicion.'');
      
    if(num($query)){
      $json = array("status" => 1, "msg" => "Total de aspirantes","total"=> num($query));
     }else{
      $json = array("status" => 1, "msg" => "No se encontraron aspirantes");
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