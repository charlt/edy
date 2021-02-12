<?php

class Matricula { 
    


    
    public static function obtieneMatricula(){

        $query_matricula = query('select ultimo_consecutivo from ' . $GLOBALS['db_controlEscolar'] . '.matricula');
        $arreglo_matricula = arreglo($query_matricula);
        $consecutivo = $arreglo_matricula['ultimo_consecutivo'];
            
        $c=sprintf("%'.05d", $consecutivo);
        return "2020".$c;

    }
    public static function incrementaMatricula(){
        $update_matricula = update($GLOBALS['db_controlEscolar'] . '.matricula', 'ultimo_consecutivo=ultimo_consecutivo+1', ' id_institucion=1');
    }
    
    public static function actualiza_matricula($id_alumno,$matricula_alumno){

        $matricula = null;

        if ($matricula_alumno == "") { //matricula no definida, comienza matriculación automática
          
            if($GLOBALS['matriculacion_especial'] == 1){
            
                $matricula = self::obtieneMatricula();

                $update_alumno = update($GLOBALS['db_controlEscolar'].'.tr_alumno','clave_alumno= "'.$matricula.'"','alumno_id='.$id_alumno);

                if($update_alumno){
                    self::incrementaMatricula();
                }
                
            }else{  
                //matrícula será el id del alumno
                $matricula = $id_alumno;
                $update_alumno = update($GLOBALS['db_controlEscolar'].'.tr_alumno','clave_alumno= "'.$matricula.'"','alumno_id='.$id_alumno);

            }
            
        } else {
            $matricula = $matricula_alumno;
            $update_alumno = update($GLOBALS['db_controlEscolar'].'.tr_alumno','clave_alumno= "'.$matricula.'"','alumno_id='.$id_alumno);
        }

        return $matricula;
        
    }

}