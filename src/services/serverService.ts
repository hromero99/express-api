import { ServerInterface } from "../interfaces/serverInterface";
import serverData from "../data/server.json";
import { ServiceInterface } from "../interfaces/serviceInterface";
import { ServerModel } from "../models/server";

export class ServerService implements ServiceInterface<ServerInterface> {

    async fetchAll(): Promise<ServerInterface[]> {
        try {
            const servers: ServerInterface[] = await ServerModel.find();
            return servers;
        } catch (error) {
            console.error('Error al obtener los servidores:', error);
            throw error;
        }
    }

    async fetchById(id: string): Promise<ServerInterface> {
        try {
            const server: ServerInterface | null = await ServerModel.findById(id);
            if (!server) {
                throw new Error('Servidor no encontrado');
            }
            return server;
        } catch (error) {
            console.error('Error al obtener los servidores:', error);
            throw error;
        }
    }

    async create(server: ServerInterface): Promise<ServerInterface> {
        const newServer = new ServerModel(server);
        await newServer.save(); 
        return newServer;
    }

    update(id: string, server: ServerInterface): Promise<ServerInterface | null> {
        return Promise.resolve(null);
    }

    delete(id: string): Promise<boolean> {
        return Promise.resolve(false);
    }
}