import { BlogModel } from '../blog.model';
import { Blog } from './blog.interface';

const createBlogToDB = async (blog: Blog) => {
  const result = await BlogModel.create(blog);
  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await BlogModel.find();
  return result;
};

const getABlogFromDB = async (id: string) => {
  const result = await BlogModel.findOne({ id: id });
  return result;
};

export const blogServices = {
  createBlogToDB,
  getAllBlogsFromDB,
  getABlogFromDB,
};
