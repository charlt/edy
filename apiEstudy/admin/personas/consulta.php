<?php
include '../../jwt.php';
include '../../headers.php';
include '../class/persona.class.php';
use Facturapi\Facturapi;

try {
  
  db ('datosGenerales');

  $persona = new Persona();

  if($_SERVER['REQUEST_METHOD'] == "GET"){
    foreach($_GET as $clave => $valor){
      ${$clave} = escape_cara($valor);
    }
    require_once('../../vendor/autoload.php');
    $facturapi = new Facturapi( "sk_test_mWyw3QDN56JP3R6RAbNo5jnkdaeVGoAq" );


    /***
     * 
     * crear cliente
     * 
     */ $customer = $facturapi->Customers->create (array(  
      "email" => "charly.bernabee@estudy.com.mx",
      "legal_name" => "Charly bernabe ",
      "tax_id" => "BEBC9505092T9"
    ));

    $invoice = array(
      "customer" => "6011b153efc63a001b10c6da",
      "items" => array(
        array(
          "quantity" => 1, // Optional. Defaults to 1.
          "product" => array(
            "description" => "plan de estudios 1",
            "product_key" => "86141700",
            "price" => 420.69,
            "sku" => "ABC4567"
          ) // You can also pass a product object instead
        ),
        array(
          "quantity" => 2,
          "product" => array(
            "description" => "plan de estudios 2",
            "product_key" => "86141700",
            "price" => 420.69,
            "sku" => "ABC4567"
          )
        ) // Add as many products as you want to include in your invoice
      ),
      "payment_form" => \Facturapi\PaymentForm::EFECTIVO,
      "folio_number" => "581",
      "series" => "F"
    );
    
    $new_invoice = $facturapi->Invoices->create( $invoice );

      if(isset($id_rol))
        $json_personas = $persona::consulta($id_persona, $id_rol);
      else
        $json_personas = $persona::consulta_persona($id_persona);

       
       //ingreso todas las escuelas que tiene este profesor
       
       if($json_personas != null){
       $json = array("status" => 1, "msg" => "Se encontró persona","persona" => $json_personas,"invoice"=>$new_invoice/*,"cliente"=>$customer*/ );
    	 }else{
    		$json = array("status" => 0, "msg" => "No se encontraron las persona");
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
