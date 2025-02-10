
export interface ServerInterface {
    id: number;
    nombre: string;
    ip: string;
    purto: number;
    estado: 'activo' | 'inactivo';
}