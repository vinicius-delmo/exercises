import express from 'express';
import bikes from './routes/bikes.js';
const app = express();

app.use(express.json());
app.use('/api/bikes', bikes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`A aplicação está rodando na porta ${port}`);
});
