<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('controlEscolar');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query_documento = query('SELECT cd.nombre_documento,documento_desc,obligatorio,expediente_desc,
    expediente_id,ie.estado_documento_id,url, ie.nombre_documento as estatus_documento, cd.documento_id
        FROM cat_documento_docente cd 
        left join (select expediente_id,expediente_desc,documento_id,ced.nombre_documento,
        ced.estado_documento_id,url from inter_expediente_docente ie
        join cat_estado_documento_docente ced on ced.estado_documento_id = ie.estado_documento_id
        where docente_id = '.$id_persona.' and ie.estatus=1) as ie on ie.documento_id = cd.documento_id 
        where cd.estatus = 1 order by documento_id');

    $json_documento = array();
    while($arreglo_documento = arreglo($query_documento)){
      array_push($json_documento,$arreglo_documento);
    }
  

    if(num($query_documento)){
      $json = array("status" => 1, "msg" => "Se encontro documento","documentos" => $json_documento);
     }else{
      $json = array("status" => 0, "msg" => "No se encontro documento");
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
