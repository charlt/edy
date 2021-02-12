<?php

class Modulos{ 
    public static $query;
    
    
    public static function orden($orden_nuevo,$id_asignatura,$id_modulo){
        //1er paso: query de todos los ids actividad que existen con el id_modulo
        $query_tmp = query('SELECT cm.modulo_numero, ima.asignatura_id, cm.modulo_id
        from cat_modulos cm join inter_modulos_asignaturas ima on ima.modulo_id = cm.modulo_id 
        where asignatura_id = '.$id_asignatura);
        
        $query_tmp_act = query('SELECT modulo_numero from cat_modulos where modulo_id ='.$id_modulo);
        $arreglo_tmp_act = arreglo($query_tmp_act);

        $orden_anterior = $arreglo_tmp_act['modulo_numero'];

        //2do paso; update del parametro id_actividad donde se actualiza el orden nuevo
        $update = update('cat_modulos', 'modulo_numero = '.$orden_nuevo.'', 'modulo_id ='.$id_modulo);
        //3er paso: usar este while para comparar los valores de la activdad con el orden nuevo
        $json= array();
        while ($arreglo = arreglo($query_tmp)){
            //aqui se van a pintar los valores del orden por arreglo
            if($arreglo['modulo_id'] != $id_modulo){
                // echo $arreglo['orden'].'='.$orden_anterior.'?'.$arreglo['orden'].'='.$orden_nuevo.'?,';     

            //4to paso comparaciòn del orden anterior con el arreglo[orden]
            if($arreglo['modulo_numero'] > $orden_anterior ){
                if($arreglo['modulo_numero'] > $orden_nuevo ){
                    // echo 'queda igual';
                }else{
                    // $arreglo['orden']=orden($arreglo['orden']-1);
                    $resta=$arreglo['modulo_numero']-1;
                    $update=update("cat_modulos","modulo_numero='".$resta."'","modulo_id='".$arreglo['modulo_id']."'");
                    // echo 'se resta';
                }
            }else{
              if($arreglo['modulo_numero'] < $orden_nuevo){
                // echo 'queda igual';
              }else{
                //   $arreglo['orden']=orden($arreglo['orden']+1);
                $suma=$arreglo['modulo_numero']+1;
                $update=update("cat_modulos","modulo_numero='".$suma."'","modulo_id='".$arreglo['modulo_id']."'");
                // echo 'se suma'.'<br>';
              }  
            }

        
        }else{
            // echo ' no hace nada';
        }
            
            
        }
/*
        foreach ($actividad_id =  actividad_id) {
            echo "Se modifican";
            for ($i=0; $i < ; $i++) {
            }

        }*/
        return $json;


    }

} 



