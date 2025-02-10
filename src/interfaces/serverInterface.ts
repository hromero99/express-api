
export interface ServerInterface {
    id: number;
    nombre: string;
    ip: string;
    puerto: number;
    estado: 'activo' | 'inactivo';
}