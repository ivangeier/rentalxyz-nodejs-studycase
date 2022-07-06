import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';
import { specificationRoutes } from './routes/specification.routes';

// config
const app = express();
app.use(express.json());

// routes
app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationRoutes);

app.listen(3333, () => {
  'Server is running on PORT 3333';
});
