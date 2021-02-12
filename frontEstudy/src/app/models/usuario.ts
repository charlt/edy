import { Persona } from './persona'
export class Usuario extends Persona {
    
    public usuario_id: number;
    public usuario: string;
    public url_perfil: string;
    public estatus: string;
    public password: string;
    public color: string;
    public administrador;
    public edicion;
}
