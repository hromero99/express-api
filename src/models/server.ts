import mongoose from "mongoose";
import { ServerInterface } from "../interfaces/serverInterface";


const ServerSchema = new mongoose.Schema<ServerInterface>({
    nombre: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true
    },
    puerto: { 
        type: Number,
        required: true
    },
    estado: {
        type: String,
        required: true,
        enum: ['activo', 'inactivo']
    }
});

export const ServerModel = mongoose.model<ServerInterface>('Server', ServerSchema);