import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from "./swagger.json";

import { router } from './routes';

// config
const app = express();
app.use(express.json());

//documentation
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

// routes
app.use(router);

app.listen(3333, () => {
  'Server is running on PORT 3333';
});
