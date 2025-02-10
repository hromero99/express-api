import { ServerInterface } from "../interfaces/serverInterface";
import serverData from "../data/server.json";

export class ServerService {
    private servers: ServerInterface[] = serverData;

    constructor() {
        this.servers = [];
    }
}