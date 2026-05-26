import express from 'express';
import helloRoutes from './routes/helloRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import userRoutes from './routes/userRoutes.js';
// import { getAllProducts } from './models/productModel.js';
import prodcutRoutes from './routes/productRoutes.js';
import logger from './middlesware/logger.js';

const app = express();
app.use(express.json());
app.use(logger);

app.use('/hello', helloRoutes);
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/products', prodcutRoutes);

// console.log(getAllProducts());

app.listen(3000, () => console.log('Server running on port 3000.'));    