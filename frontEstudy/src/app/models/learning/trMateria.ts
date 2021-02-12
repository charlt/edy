import { SafeHtml } from "@angular/platform-browser";
import { CatAsignaturas } from "../datosGenerales/catAsignatura";

export class TrMateria extends CatAsignaturas{

    public materia_id: number;
    public alumno_id: number;
    public asignatura_id: number;
    public grupo_id: number;
    public estatus_materia_id: number;
    public fecha_fin;
    public fecha_inicio;
    public url_imagen;
    public url_imagen_previa;
    public activa;
    public estado;
    public url_contenido;
    public validacion;
    


    
    public activo: boolean;
}

