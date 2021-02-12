import { SafeHtml } from "@angular/platform-browser";
import { TrActividad } from "./trActividad";

export class CatModulos{

    public modulo_id: number;
    public modulo_nombre: string;
    public modulo_numero: number;
    public estatus: number;

    public actividades: Array<TrActividad>;

    public activo: boolean;
    public nuevaActividad: boolean = false;
}

