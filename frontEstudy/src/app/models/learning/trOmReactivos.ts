import { SafeHtml } from "@angular/platform-browser";

export class TrOmRespuesta{
    public respuesta_id: number;
    public alumno_id: string;
    public estatus_respuesta_id: string;
    public intento_num: number;
    public fecha_actividad: string;
    public ponderacion: string;
    public estatus: string;
    
}
export class TrOmReactivos{
    public reactivo_id: number;
    public pregunta_id: number;
    public reactivo: string;
    public contenido: string;
    public ponderacion: string;
    public retroalimentacion: string;
    public estatus: string;


    public respuesta: TrOmRespuesta 

    public html_reactivo: SafeHtml;


    public checked: boolean;
    public correcta: boolean;

}
