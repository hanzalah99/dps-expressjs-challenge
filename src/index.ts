import express, { Express, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import projectsRoutes from './routes/projectsRoutes'
import reportsRoutes from './routes/reportsRoutes'
import invalidRoutes from './routes/invalidRoutes'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req,res)  => {
	res.json({ message: 'Backend project' });
});

app.use('/projects', projectsRoutes);
app.use('/reports', reportsRoutes);
app.use('*', invalidRoutes)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
});


app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
