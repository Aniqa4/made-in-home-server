import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { BlogRoutes } from './app/config/modules/blogs/blog.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1/blogs', BlogRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};
app.get('/', getAController);

export default app;
