import express from 'express';
import { serverRouter } from './controllers/serversController';
const app = express();
const port = 3000;


app.use("/api/v1/servers", serverRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
