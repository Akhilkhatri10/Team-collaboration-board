import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import taskRoutes from './routes/task.route.js';
import boardRoutes from './routes/boards.route.js';   



dotenv.config({});


const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cookieParser())

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}
app.use(cors(corsOptions))


const PORT = process.env.PORT || 3000;

//API's
app.use('/api/boards', boardRoutes);
app.use('/api/tasks', taskRoutes); 


app.listen(PORT, () => {
    connectDB();
    console.log("Connected to MongoDB");
  console.log(`Server is running on http://localhost:${PORT}`);
});