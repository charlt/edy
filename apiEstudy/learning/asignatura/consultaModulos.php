<?php
include '../../jwt.php';
include '../../headers.php';
include '../../controlEscolar/class/asignatura.class.php';
include '../../controlEscolar/class/asignaturagrupo.class.php';



try {
  
  db ('learning');
  $Asignatura = new Asignatura();
  $AsignaturaGrupo = new AsignaturaGrupo();


  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }

      $usuario = Auth::GetData(
            $jwt  
        );

       
        if($tipo == 1){
          $query = $Asignatura::consultaModulos($id_asignatura);
        }else if($tipo == 2){
          $query = $Asignatura::consultaModulosExtras($id_asignatura);
        }else if($tipo == 3){
          // id_asignatura es id_asignatura_grupo
          $query = $AsignaturaGrupo::consultaSoloModulos($id_asignatura);
        }
      


        

       $json_modulos=array();
       while ($arreglo=arreglo($query)) {
        array_push($json_modulos,$arreglo);
       }
       
       if(num($query)){
    		$json = array("status" => 1, "msg" => "Se encontraron modulos","modulos" => $json_modulos);
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron modulos");
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
