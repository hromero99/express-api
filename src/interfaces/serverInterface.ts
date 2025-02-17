import mongoose from "mongoose";

interface ServerInterface extends mongoose.Document {
    nombre: string;
    ip: string;
    puerto: number;
    estado: string;
}

export { ServerInterface };