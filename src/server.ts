import express from 'express';

import { router } from './routes';

// config
const app = express();
app.use(express.json());

// routes
app.use(router);

app.listen(3333, () => {
  'Server is running on PORT 3333';
});
