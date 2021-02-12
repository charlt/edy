import { CatAsignaturas } from './catAsignatura';

export class CatOrdenJerarquico{

    public orden_jerarquico_id: number;
    public orden_jerarquico: string;
    public orden_jerarquico_descripcion: string;
    public estatus: string;

    public asignaturas: Array<CatAsignaturas>;
}

