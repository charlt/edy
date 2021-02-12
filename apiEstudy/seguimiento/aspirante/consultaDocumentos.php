<?php
include '../../jwt.php';
include '../../headers.php';

try {
  
  db('seguimiento');

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
    $usuario = Auth::GetData(
        $jwt  
    );


    $query = 'SELECT cd.nombre_documento,documento_desc,obligatorio,expediente_desc,expediente_id,ie.estado_documento_id,url, ie.nombre_documento as estatus_documento, cd.documento_id
    FROM cat_documento cd 
    join inter_documento_carrera idc on idc.documento_id = cd.documento_id 
    join tr_aspirante ta on ta.carrera_id = idc.carrera_id
    left join (select expediente_id,expediente_desc,aspirante_id,documento_id,ced.nombre_documento,ced.estado_documento_id,url from inter_expediente ie
    join cat_estado_documento ced on ced.estado_documento_id = ie.estado_documento_id
    where aspirante_id ='.$id_aspirante.' and ie.estatus=1) as ie on ie.aspirante_id = ta.aspirante_id and ie.documento_id = cd.documento_id 
    where cd.estatus = 1 and ta.aspirante_id = '.$id_aspirante.' order by documento_id';

   if ($filtro != 0) {
    $query = 'SELECT cd.nombre_documento,documento_desc,obligatorio,expediente_desc,expediente_id,ie.estado_documento_id,url, ie.nombre_documento as estatus_documento, cd.documento_id
    FROM cat_documento cd 
    join inter_documento_carrera idc on idc.documento_id = cd.documento_id 
    JOIN inter_etiqueta_documento ied ON cd.documento_id = ied.id_documento
    join tr_aspirante ta on ta.carrera_id = idc.carrera_id
    left join (select expediente_id,expediente_desc,aspirante_id,documento_id,ced.nombre_documento,ced.estado_documento_id,url from inter_expediente ie
    join cat_estado_documento ced on ced.estado_documento_id = ie.estado_documento_id
    where aspirante_id = '.$id_aspirante.' and ie.estatus=1) as ie on ie.aspirante_id = ta.aspirante_id and ie.documento_id = cd.documento_id 
    where cd.estatus = 1 and ta.aspirante_id = '.$id_aspirante.' AND id_etiqueta = '.$filtro.' order by cd.documento_id';   
   }
    $query_documento = query($query);

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
