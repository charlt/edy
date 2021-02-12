<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/materia.class.php';


try {

  db ('learning');

  $materia = new Materias();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    

    $usuario = Auth::GetData(
          $jwt  
    );
    
    $query = $materia::materiasActivas($id_usuario);

    $total_actividades=0;

       $json_materia = array();
       
       while ($arreglo = arreglo($query)){      
         
        $json_actividad=array();
        
        $arreglo_actividades = $materia::avanceDetalladoMateria($arreglo['materia_id']);
        $arreglo_actividades['asignatura'] = $arreglo['asignatura'];
        $arreglo_actividades['calificacion'] = $arreglo['calificacion'];


        array_push($json_materia,$arreglo_actividades);    
        
      }
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron materias.","Materias" =>$json_materia);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontró actividad");
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
