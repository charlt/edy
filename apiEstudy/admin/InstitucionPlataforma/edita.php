<?php
include '../../jwt.php';
include '../../headers.php';

try {
 db ('datosGenerales');

  if($_SERVER['REQUEST_METHOD'] == "POST"){
    foreach($_POST as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    
      $usuario = Auth::GetData(
           $jwt  
        );

$carpeta = htmlspecialchars($usuario->id_institucion);
$ruta = htmlspecialchars('../../../assets/institucion/imagen_perfil/');
$directorio = $ruta.$carpeta;

if( !is_dir($directorio) )
{
    $crear = mkdir($directorio);
    if(!$crear){
        
        $json = array("status" => 0, "msg" => "No se logró insertar");
     }

}


$uploadOk = 1;
$basename = basename($_FILES["fileToUpload"]["name"]);

$imageFileType = strtolower(pathinfo($basename,PATHINFO_EXTENSION));
$target_dir = $directorio;
$target_file = $target_dir ."/color_perfil.".$imageFileType;





// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
             $uploadOk = 1;
    } else {
        //echo "File is not an image.";
        $json = array ("status" => 0, "msg" => "El archivo no es una imagen.");
        $uploadOk = 0;
    }
}
// Check if file already exists
/*if (file_exists($target_file)) {
    $json = array("status" => 0, "msg" => "Archivo ya existe.");
    //echo "Archivo ya existe.";
    $uploadOk = 0;
}*/
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    $json = array("status" => 0, "msg" => "Archivo demasiado grande.");
    //echo "Archivo demasiado grande.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    $json = array("status" =>0, "msg" => "Solo están permitidos JPG, JPEG, PNG y GIF.");
    //echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    //echo "No se logro subir archivo.";
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            $res = substr($target_file,8);
            $edita = update('plataforma_institucion',
            'color = "'.$color.'",
            url_perfil = "'.$res.'"',
            'institucion_id = '.$usuario->id_institucion);

            if($edita){
                $json = array("status" => 1, "msg" => "Foto de perfil se editó correctamente.");
        //echo "El archivo ". basename( $_FILES["fileToUpload"]["name"]). " se subio correctamente.";
            }   
    } else {
        //echo "Sorry, there was an error uploading your file.";
        $json = array("status" => 0, "msg" => "No se logró subir el archivo.");
    }
}

/* Output header */
}else{
    $json = array("status" => 0, "msg" => "Método no aceptado");
}

echo json_encode($json);

} catch (Exception $e) {
    $json = array("status" => 0, "msg" =>  $e->getMessage());

    echo json_encode($json);
}

?>