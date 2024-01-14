import express from 'express';
import dotenv from 'dotenv';

import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
connectDB();

const Port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

// Error middleware
app.use(notFound);
app.use(errorHandler);

app.listen(Port, () => console.log(`Serve at http://localhost:${Port}`));
