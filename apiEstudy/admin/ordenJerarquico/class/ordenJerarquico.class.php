<?php

class OrdenJerarquico{ 
    //public $aMemberVar = 'aMemberVar Member Variable'; 
    //public $aFuncName = 'aMemberFunc'; 
    public static $query;
    
    
    public static function consulta($id) { 

        self::$query = query('SELECT institucion_id, institucion_clave, institucion, inst.tipo_institucion_id,
        cat.tipo_institucion, origen, inst.fecha_creacion, inst.fecha_creacion, inst.fecha_actualiza,
        inst.fecha_actualiza, inst.usuario_crea, inst.usuario_actualiza, inst.estatus
        FROM cat_instituciones inst 
        join cat_tipo_instituciones cat on cat.tipo_institucion_id = inst.tipo_institucion_id
        where institucion_id = '.$id.' and inst.estatus =1');
            
       $json= array();
       while ($arreglo = arreglo(self::$query)){
          array_push($json,$arreglo);
       }

       return $json;
        
    } 

    public static function numero(){

        return num(self::$query);
    }

    public static function inserta($clave_institucion,$institucion_nombre,$tipo_institucion_id,$origen){

        $inserta = inserta('cat_instituciones', 'institucion_clave, institucion, tipo_institucion_id,
        origen, fecha_creacion, usuario_crea, estatus',
       '"'.$clave_institucion.'","'.$institucion_nombre.'", '.$tipo_institucion_id.',
       "'.$origen.'", now(), current_user() ,1');

        return $inserta;

    }

    
    public static function suma(){

        return sum(self::$query);
    }
    
    public static function update($clave_institucion,$institucion_nombre,$id_institucion_tipo,$origen,$id_institucion){
        $update = update('cat_instituciones',
          'institucion_clave = "'.$clave_institucion.'",
          institucion = "'.$institucion_nombre.'",
          tipo_institucion_id = '.$id_institucion_tipo.',
          origen = "'.$origen.'",
          fecha_actualiza = now(),
          usuario_actualiza = current_user()',
          'institucion_id = '.$id_institucion);

        return $update;
    }
} 
