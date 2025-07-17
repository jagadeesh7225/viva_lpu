// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

mongoose.connect("mongodb://localhost:27017/")
  .then(() => {
    console.log('Connected to DB');
    app.listen(3000, () => {
      console.log("Server running on");
    });
  })
  .catch((err) => console.error(err));
