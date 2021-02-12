<?php
include '../../learning/actividad/class/actividad.class.php';

class Asignatura
{
   public static $query;

   public static function consultaModulosExtras($id_asignatura)
   {
      $query = query('select * from (select @asignatura_id :=' . $id_asignatura . ' asignatura_id) as modulos,' . $GLOBALS['db_learning'] . '.modulos_extra_asignatura');
      return $query;
   }
   public static function consultaModulos($id_asignatura)
   {
      $query = query('select * from (select @asignatura_id :=' . $id_asignatura . ' asignatura_id) as modulos,' . $GLOBALS['db_learning'] . '.modulos_asignatura order by modulo_numero');
      return $query;
   }

   public static function consultaTodosModulos($id_asignatura)
   {
      $query = query('
         select * from (select @asignatura_id :=' . $id_asignatura . ' asignatura_id) as modulos,' . $GLOBALS['db_learning'] . '.modulos_asignatura
         UNION
         select * from (select @asignatura_id :=' . $id_asignatura . ' asignatura_id) as modulos,' . $GLOBALS['db_learning'] . '.modulos_extra_asignatura
         
       ');

      return $query;
   }


   public static function clonarAsignatura($id_asignatura,$usuario)
   {

      $actividad = new Actividad();

      $arreglo_asignatura = arreglo(query('select asignatura_id,asignatura_clave,asignatura,tipo_asignatura_id,calif_min,calif_max,creditos,bienvenida_desc,objetivos_desc,evaluacion_desc,bibliografia_desc,url_imagen,url_imagen_previa,url_contenido from '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas where asignatura_id = '.$id_asignatura));

      $inserta_asignatura = inserta_last_id($GLOBALS['db_datosGenerales'].'.cat_asignaturas',
         'asignatura_clave,asignatura,tipo_asignatura_id,calif_min,calif_max,creditos,bienvenida_desc,objetivos_desc,evaluacion_desc,bibliografia_desc,url_imagen,url_imagen_previa,url_contenido,estatus',
         '"'.$arreglo_asignatura['asignatura_clave'].'","'.$arreglo_asignatura['asignatura'].'","'.$arreglo_asignatura['tipo_asignatura_id'].'","'.$arreglo_asignatura['calif_min'].'","'.$arreglo_asignatura['calif_max'].'","'.$arreglo_asignatura['creditos'].'","'.escape_cara($arreglo_asignatura['bienvenida_desc']).'","'.escape_cara($arreglo_asignatura['objetivos_desc']).'","'.escape_cara($arreglo_asignatura['evaluacion_desc']).'","'.escape_cara($arreglo_asignatura['bibliografia_desc']).'","'.escape_cara($arreglo_asignatura['url_imagen']).'","'.escape_cara($arreglo_asignatura['url_imagen_previa']).'","'.escape_cara($arreglo_asignatura['url_contenido']).'",1');


      $query = self::consultaModulos($id_asignatura);
      if (num($query)) {
         while ($arreglo_modulo = arreglo($query)) {
            $inserta_modulo = inserta_last_id(
                'cat_modulos',
                'modulo_numero, modulo_nombre, fecha_inicio, fecha_fin, estatus',
                '"' . $arreglo_modulo['modulo_numero'] . '","' . $arreglo_modulo['modulo_nombre'] . '","' . $arreglo_modulo['fecha_inicio'] . '","' . $arreglo_modulo['fecha_fin'] . '",1'
            );

            $inserta_modulo_asignatura = inserta('inter_modulos_asignaturas', 'modulo_id, asignatura_id,estatus', '' . $inserta_modulo . ',' . $inserta_asignatura. ',1');

            $query_actividades = query('select ta.actividad_padre_id, ta.actividad_id, ta.actividad_nombre, 
            ta.ponderacion, ta.tipo_actividad_id, ta.fecha_inicio, ta.fecha_fin,ta.tipo_calificacion from '.$GLOBALS['db_learning'].'.tr_actividad ta where modulo_id ='.$arreglo_modulo['modulo_id'].' and estatus =1 and tipo_actividad_id != 1' );
   
               while($arreglo_actividades= arreglo($query_actividades)){ 
                  $json_actividad = $actividad::clonarActividad($arreglo_actividades['actividad_id'],$inserta_modulo,$usuario);
               }
            
         }
      }
      return $inserta_asignatura;
   }


   public static function consultaPendientesCarga(){
      $query_pendientes = query('SELECT ima.asignatura_id,ca.asignatura,tdp.actividad_id,ta.actividad_nombre,top.pregunta_id,
        tor.reactivo_id,tor.ponderacion 
        from tr_datos_pregunta tdp  
        join tr_actividad ta on ta.actividad_id = tdp.actividad_id
        join inter_modulos_asignaturas ima on ima.modulo_id = ta.modulo_id
        join '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca on ca.asignatura_id = ima.asignatura_id
        join tr_om_pregunta top on tdp.datos_pregunta_id = top.datos_pregunta_id
        left join tr_om_reactivos tor on tor.pregunta_id = top.pregunta_id
        where tipo_pregunta_id = 2 and tdp.estatus=1 and top.estatus=1');
        $json_pendientes=array();
        while ($arreglo_pendientes = arreglo($query_pendientes)) {
            if($arreglo_pendientes['reactivo_id']==""){
                $arreglo_pendientes['tipo']="Sin reactivos";
                array_push($json_pendientes, $arreglo_pendientes);
            }else{
                if($arreglo_pendientes['ponderacion']=="" ){
                    $arreglo_pendientes['tipo']="Sin ponderación";
                    array_push($json_pendientes, $arreglo_pendientes);
                }
            }

            
        }
        return $json_pendientes;
   }



   public static function consultaActividadesAsignatura($id_asignatura){
      $consulta_asignatura_grupo = query('SELECT ca.asignatura_id,asignatura,ioa.plan_orden_id, iag.asignatura_grupo_id 
      from '.$GLOBALS['db_datosGenerales'].'.cat_asignaturas ca
      join '.$GLOBALS['db_datosGenerales'].'.inter_orden_asignatura ioa on ioa.asignatura_id = ca.asignatura_id
      join '.$GLOBALS['db_controlEscolar'].'.inter_asignatura_grupo iag on iag.orden_asignatura_id = ioa.orden_asignatura_id
      where ca.asignatura_id = '.$id_asignatura.' and ca.estatus=1 and ioa.estatus=1 and iag.estatus=1');
      
      $arreglo_modulos = array();
      while($arreglo_asignatura_grupo = arreglo($consulta_asignatura_grupo)){
         $modulos = self::consultaTodosModulos($arreglo_asignatura_grupo['asignatura_id']);
         while($arreglo_modulo = arreglo($modulos)){
            array_push($arreglo_modulos, $arreglo_modulo);
         }
      }

      $actividades = array();
      foreach($arreglo_modulos as $arreglo_modulos_tpm){
         $query_actividades= query('SELECT actividad_id,actividad_clave,actividad_nombre,modulo_id 
         FROM tr_actividad  WHERE estatus=1 and modulo_id = ' . $arreglo_modulos_tpm['modulo_id']);   
         while($arreglo_actividades = arreglo($query_actividades)){
            array_push($actividades, $arreglo_actividades);
         }
      }

      return $actividades;
   }



}
