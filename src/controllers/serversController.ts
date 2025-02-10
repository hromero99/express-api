import { Request, Response } from 'express';
import { ServerService } from '../services/serverService';
import { Router } from 'express';

export const serverRouter = Router();
const serverService = new ServerService();
/**
 * @swagger
 * tags:
 *   - name: Servers
 *     description: Operaciones relacionadas con servidores
 */
/**
 * @swagger
 * /api/v1/servers :
 *   get:
 *     summary: Obtiene una lista de servidores
 *     tags: [Servers]
 *     responses:
 *       200:
 *         description: Lista de servidores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: Servidor 1
 *                   ip:
 *                     type: string
 *                     example: 192.168.1.1
 *                   puerto:
 *                     type: integer
 *                     example: 8080
 *                   estado:
 *                     type: string
 *                     example: activo
 */
serverRouter.get('/', (req: Request, res: Response) => {
    const serversList = serverService.fetchAll();
    res.json(serversList);
});

serverRouter.get('/:id', (req: Request, res: Response) => {
    const server = serverService.fetchById(parseInt(req.params.id));
    if (server) {
        res.json(server);
    } else {
        res.status(404).json({ message: 'Server not found' });
    }
});

serverRouter.post('/', (req: Request, res: Response) => {
    const newServer = serverService.create(req.body);
    res.status(201).json(newServer);
});

serverRouter.put('/:id', (req: Request, res: Response) => {
    const updatedServer = serverService.update(parseInt(req.params.id), req.body);
    if (updatedServer !== null) {
        res.status(204).json(updatedServer);
    } else {
        res.status(404).json({ message: 'Server not found' });
    }
});

serverRouter.delete('/:id', (req: Request, res: Response) => {
    const deletedServer = serverService.delete(parseInt(req.params.id));
    if (deletedServer) {
        res.status(204).json({ message: 'Server deleted' });
    } else {
        res.status(404).json({ message: 'Server not found' });
    }
});
