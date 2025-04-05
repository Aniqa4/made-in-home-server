import { Request, Response } from 'express';
import { blogServices } from './blog.service';

const createBlog = async (req: Request, res: Response) => {
  try {
    const { blog: blogData } = req.body;

    const result = await blogServices.createBlogToDB(blogData);

    res.status(200).json({
      sucess: true,
      message: 'Blog is added successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const result = await blogServices.getAllBlogsFromDB();

    res.status(200).json({
      sucess: true,
      message: 'Blogs are retrieved successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const getABlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await blogServices.getABlogFromDB(id);

    res.status(200).json({
      sucess: true,
      message: 'Blog is retrieved successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const BlogController = {
  createBlog,
  getAllBlogs,
  getABlog,
};
