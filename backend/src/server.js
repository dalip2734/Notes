import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import notesRoutes from './routes/notesRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
connectDB();

app.use('/api/notes', notesRoutes);

app.listen(5001, () => {
  console.log('Server started on PORT:5001');
});
