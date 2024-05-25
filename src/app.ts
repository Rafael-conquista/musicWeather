import express from 'express';
import musicRoute from './routes/musicSelector';

const app = express();

app.use(express.json());
app.use('/api', musicRoute);

export default app;