
export class TrFrRespuesta{
    public respuesta_id: number;
    public respuesta_padre_id: number;
    public pregunta_id: number;
    public persona_id: number;
    public estatus_respuesta_id: number;
    public respuesta: string;
    public flg_moderador: number;
    public fecha_creacion: number;
    public fecha_actualiza: number;
    public estatus: number;
    public statusTextArea: number = 0;
    public statusTextEdita: number = 0;
    public statusArchivo: number = 0;

    public sub_respuesta: Array<TrFrRespuesta>;
    
}
