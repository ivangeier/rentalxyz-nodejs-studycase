import express, { response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
   return response.json({ message: 'Hello world' });
});

app.listen(3333, () => {
   'Server is running on PORT 3333';
});
