import express, { Request, Response } from 'express';
import { serverRouter } from './controllers/serversController';
import { loginRouter } from './controllers/loginController';
import dotenv from 'dotenv';
import { connectDB } from './utils/database';

const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

dotenv.config();
const app = express();
const port = 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentación de mi API',
      version: '1.0.0',
      description: 'Descripción de mi API',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/controllers/*.ts'], // Ruta a tus archivos de rutas
};

app.use(express.json());
app.use("/login", loginRouter);
app.use("/api/v1/server", serverRouter);

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.get('/live', (req: Request, res: Response) => {
  res.send(`${new Date().toISOString()}`);
});

app.use("", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


const runServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

runServer();



