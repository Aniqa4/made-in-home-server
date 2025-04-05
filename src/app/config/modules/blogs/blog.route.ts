import express from 'express';
import { BlogController } from './blog.controller';

const router = express.Router();

router.post('/create-blog', BlogController.createBlog);

router.get('/', BlogController.getAllBlogs);

router.get('/:id', BlogController.getABlog);

export const BlogRoutes = router;
