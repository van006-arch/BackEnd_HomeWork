import express from 'express';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
app.use(express.json());

app.use('/tasks', taskRoutes);

app.listen(3000, () => console.log('Mini modular app running on :3000'));