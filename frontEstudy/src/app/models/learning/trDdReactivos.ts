
export class TrDdRespuesta{
    public respuesta_id: number;
    public reactivo_id: number;
    public alumno_id: number;
    public estatus_respuesta_id: number;
    public orden: number;
    public intento_num: number;
    
}
export class TrDdReactivos{
    public reactivo_id: number;
    public pregunta_id: number;
    public reactivo_desc: string;
    public imagen: string;
    public ancho: number;
    public alto: number;
    public orden: number;

    public correcta: boolean =true;


    public respuesta: TrDdRespuesta; 

    public seleccionado: boolean=false;
    public respuesta_id: number;

}
