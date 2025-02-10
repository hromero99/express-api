import { ServerInterface } from "../interfaces/serverInterface";
import serverData from "../data/server.json";

export class ServerService {
    private servers: ServerInterface[] = serverData as ServerInterface[];

    fetchAll(): ServerInterface[] {
        return this.servers;
    }

    fetchById(id: number): ServerInterface | undefined {
        return this.servers.find((server) => server.id === id);
    }

    create(server: ServerInterface): ServerInterface {
        const newServer = { ...server, id: this.servers.length + 1 };
        this.servers.push(newServer);
        return newServer;
    }

    update(id: number, server: ServerInterface): ServerInterface | null {
        const serverToUpdate = this.servers.filter((server) => server.id === id);
        if (serverToUpdate.length > 0) {
            const updatedServer = { ...serverToUpdate[0], ...server };
            const finalList = this.servers.filter((server) => server.id !== id);
            finalList.push(updatedServer);
            this.servers = finalList;
            return updatedServer;
        }
        return null;
    }

    delete(id: number): boolean {
        const serverToDelete = this.servers.filter((server) => server.id === id);
        if (serverToDelete.length > 0) {
            this.servers = this.servers.filter((server) => server.id !== id);
            return true;
        }
        return false;
    }
}