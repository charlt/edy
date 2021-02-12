<?php
include '../../jwt.php';
include '../../headers.php';
require_once '../../vendor/autoload.php';

use Kunnu\Dropbox\Dropbox;
use Kunnu\Dropbox\DropboxApp;

try {

     db('learning');

     if($_SERVER['REQUEST_METHOD'] == "POST"){
          foreach($_POST as $clave => $valor){
          ${$clave} = escape_cara($valor);
          }

          function accessProtected($obj, $prop) {
               $reflection = new ReflectionClass($obj);
               $property = $reflection->getProperty($prop);
               $property->setAccessible(true);
               return $property->getValue($obj);
          }

          // $dropboxKey ="fsl8q25b2pqtarx";
          // $dropboxSecret ="36birlucazggpyb";
          // $dropboxToken="y3KhzgULAdEAAAAAAAAAAd1LebYZb-WcmqXeZ4ATuIvVcb2gTynUvCSyTpwC3kbT";

          $dropboxKey ="e2iv1x9yahkmsfb";
          $dropboxSecret ="bmdn1ksy3jfdwl6";
          $dropboxToken="rR5Lgbruv84AAAAAAAAAAU4uhHkfD22rZgLKqH15hFtpFmWaMyRHlbOJp1xYmZW6";

          $app = new DropboxApp($dropboxKey,$dropboxSecret,$dropboxToken);
          $dropbox = new Dropbox($app);
            
          if(!empty($_FILES)){
               $tempfile = $_FILES['file']['tmp_name'];
               $ext = explode(".",$_FILES['file']['name']);
               $ext = end($ext);
               
               $folder_universidad = "/videos/".$GLOBALS["db_datosGenerales"];
               $nombredropbox = "$folder_universidad/$asignatura_grupo_id/clase_$videoconferencia_id"."_".$fecha.".".$ext;
               $fileSize = $_FILES['file']['size'];

               try{     
                    $listFolderContents = $dropbox->listFolder($folder_universidad);
                    $folders = $listFolderContents->getItems();
                    $lista_folders = $folders->all();

                    $arreglo_folders = array();
                    $existe_folder = false;

                    for ($i=0; $i < count($lista_folders); $i++) { 
                         $obj = accessProtected($lista_folders[$i], 'data');
                         // array_push($arreglo, array("nombre" => $obj['name'], 'ruta' => $obj['path_lower']));
                         array_push($arreglo_folders, $obj['path_lower']);
                    }
                    if (in_array("$folder_universidad/$asignatura_grupo_id", $arreglo_folders)) { 
                         $existe_folder = true; 
                    }else {
                         $folder = $dropbox->createFolder("$folder_universidad/$asignatura_grupo_id");
                         $folder->getName();
                         $existe_folder = true;
                    }

                    if ($existe_folder) {
                         $listFolderContents = $dropbox->listFolder("$folder_universidad/$asignatura_grupo_id");
                         $items = $listFolderContents->getItems();
                         $datos = $items->all();

                         $arreglo = array();
                         $duplicado = false;
                         $bandera = true;

                         for ($i=0; $i < count($datos); $i++) { 
                              $obj = accessProtected($datos[$i], 'data');
                              // array_push($arreglo, array("nombre" => $obj['name'], 'ruta' => $obj['path_lower']));
                              array_push($arreglo, $obj['path_lower']);
                         }

                         if (in_array($nombredropbox, $arreglo)) { $duplicado = true; }
                         if ($duplicado && $reemplazar_video == 'true') {
                              $deletedFolder = $dropbox->delete($nombredropbox);
                              $name = $deletedFolder->getName();
                         }else if ($duplicado && $reemplazar_video == 'false') {
                              $bandera = false;
                              $json = array("status" => 2, "msg" => "¿Deseas reemplazar el video?");
                         }

                         if ($bandera) {
                              // $file = $dropbox->simpleUpload($tempfile, $nombredropbox, ['autorename' => true]);
                              // $file = $dropbox->upload($tempfile, $nombredropbox, ['autorename' => true]);
                              
                              //Chunk Size
                              // $chunkSize = $fileSize / 4;
                              $chunkSize = intval($fileSize / 4);
                              $close = true;
                              // var_dump($_FILES);

                              // print_r($_FILES['file']);

                              // echo $chunkSize;
                              // echo $fileSize;

                              // $start = $dropbox->startUploadSession($tempfile, $chunkSize, $close);
                              // print_r($start);
                              // $end = finishUploadSession($tempfile, string $sessionId, int $offset, int $remaining, string $path, array $params = array())
                              $file = $dropbox->uploadChunked($tempfile, $nombredropbox, $fileSize, $chunkSize, ['autorename' => true]);

                              //Uploaded File
                              // $file->getName();

                              $pathToFile = $nombredropbox;
                              $response = $dropbox->postToAPI("/sharing/create_shared_link_with_settings", [
                                   "path" => $pathToFile
                              ]);
                              $data = $response->getDecodedBody();
                              $update = update('tr_videoconferencia', 'url_descarga = "'.$data['url'].'"', 'videoconferencia_id = '.$videoconferencia_id);

                              $json = array("status" => 1, "msg" => "Video cargado correctamente", "url" => $data['url']);
                         }
                    }
               }catch(\exception $e){
                    $json = array("status" => 0, "error" => $e);
               }
          }          
     }else{
          $json = array("status" => 0, "msg" => "Método no aceptado");
     }
   
     echo json_encode($json);
   
} catch (Exception $e) {
     $json = array("status" => 0, "msg" =>  $e->getMessage());
     echo json_encode($json);
}

?>