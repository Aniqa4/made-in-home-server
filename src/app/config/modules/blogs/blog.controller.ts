import { Request, Response } from 'express';
import { blogServices } from './blog.service';

const createBlog = async (req: Request, res: Response) => {
  try {
    const blog = req.body;

    const result = await blogServices.createBlogToDB(blog);

    res.status(200).json({
      sucess: true,
      message: 'Blog is added successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const BlogController = {
  createBlog,
};
