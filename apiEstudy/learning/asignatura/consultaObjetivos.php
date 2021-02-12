<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/asignatura.class.php';


try {
  
  db ('learning');
  $Asignatura = new Asignatura();


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

        
      $query = $Asignatura::consultaTodosModulos($id_asignatura);
      $json= array();

      while ($arreglo_modulos = arreglo($query)){
         $query_actividades = query('select ta.actividad_id,ta.actividad_nombre,ta.ponderacion from '.$GLOBALS['db_learning'].'.tr_actividad ta where modulo_id ='.$arreglo_modulos['modulo_id'].' and tipo_actividad_id = 2 and ponderacion != 0 and estatus = 1' );


         

            while($arreglo_actividades= arreglo($query_actividades)){ 

              $query_objetivos= query('select objetivo_alumno, objetivo_docente, objetivos_actividad_id from tr_objetivos_actividad where actividad_id ='.$arreglo_actividades['actividad_id']);

              $arreglo_objetivos = arreglo($query_objetivos);
              $arreglo_actividades['modulo_id']=$arreglo_modulos['modulo_id'];
              $arreglo_actividades['modulo_nombre']=$arreglo_modulos['modulo_nombre'];
              $arreglo_actividades['grupo_id']=$arreglo_modulos['grupo_id'];
              $arreglo_actividades['asignatura_id']=$arreglo_modulos['asignatura_id'];

              if(num($query_objetivos)){
                $arreglo_actividades['objetivo_alumno']=$arreglo_objetivos['objetivo_alumno'];
                $arreglo_actividades['objetivo_docente']=$arreglo_objetivos['objetivo_docente'];
                $arreglo_actividades['objetivos_actividad_id']=$arreglo_objetivos['objetivos_actividad_id'];  
              }else{
                $arreglo_actividades['objetivo_alumno']=null;
                $arreglo_actividades['objetivo_docente']=null;
                $arreglo_actividades['objetivos_actividad_id']=null; 
              }
              



              array_push($json,$arreglo_actividades);

         }  

         
        


      }


       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron objetivos","objetivos" => $json);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron objetivos");
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