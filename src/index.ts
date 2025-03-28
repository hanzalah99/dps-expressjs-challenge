import express, { Express } from 'express';
import dotenv from 'dotenv';
import projectsRoutes from './routes/projectsRoutes'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req,res)  => {
	res.json({ message: 'Backend project' });
});

app.use('/projects', projectsRoutes)



app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
