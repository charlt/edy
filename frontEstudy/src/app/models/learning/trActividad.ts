import { SafeHtml } from "@angular/platform-browser";
import { TrDatosPreguntas } from "./trDatosPreguntas";
import { CatModulos } from "./catModulos";

export class TrActividad{

    public actividad_id: number;
    public actividad_clave: string;
    public actividad_nombre: string;
    public contenido_pedagogico: string;
    public instruccion: string;
    public numero_mostrado: number;
    public tipo_actividad_id: number;
    public tipo_actividad_nombre: string;
    public actividad_padre_id: string;

    public dificultad_id: number;

    public modulo_id: number;
    
    public fecha_inicio: any;
    public fecha_fin: any;
    // public fechaInicio : Array<CatModulos>;
    // public fechaFin : Array<CatModulos>; 
    public ponderacion: string;
    public metodo_resolver_id: number;
    public importancia_actividad_id: number;
    public num_intentos: number;
    public num_total_preguntas: number;
    public num_preguntas_mostrar: number;
    public aleatorio: number;
    public orden: number;
    public estatus: number;
    public tipo_calificacion: string;
    public rubrica_id;

    public unica: number;
    public portafolio: string;

    //elementos extra que no vienen en la base de datos

    public instruccion_html: SafeHtml;
    public editar: boolean;
    public mostrarPreguntas: boolean = false;
    public nuevaPregunta: boolean = false;
    

    
    


    public preguntas: Array<TrDatosPreguntas>;


    

}

