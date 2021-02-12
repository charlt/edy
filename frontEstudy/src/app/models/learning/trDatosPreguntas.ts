import { SafeHtml } from "@angular/platform-browser";
import { TrPreguntaOpcionMultiple } from "./trPreguntaOpcionMultiple";

export class TrDatosPreguntas{

    public datos_pregunta_id: number;

    public contenido: string;
    public tipo_pregunta_id: number;

    public dificultad_id: number;

    public actividad_id: number;
    
    public ponderacion: string;
    public shuffle: number;
    public orden: number;
    public retroalimentacion: string;
    public estatus: string;

    //elementos extra que no vienen en la base de datos
    public contenido_html: SafeHtml;
    public activo: boolean;
    public nuevaPregunta: boolean = false;
    public editar:boolean = false;
    public valor: string = "";    
    public calificacion: number = null;


    public preguntasMultiple: Array<TrPreguntaOpcionMultiple>;

    public pregunta_id;
    
    public incompleto: boolean = false;



}

