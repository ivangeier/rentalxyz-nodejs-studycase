import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

// config
const app = express();
app.use(express.json());

// routes
app.use('/categories', categoriesRoutes);

app.listen(3333, () => {
  'Server is running on PORT 3333';
});
