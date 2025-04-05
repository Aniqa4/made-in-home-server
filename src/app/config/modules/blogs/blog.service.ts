import { BlogModel } from '../blog.model';
import { Blog } from './blog.interface';

const createBlogToDB = async (blog: Blog) => {
  const result = await BlogModel.create(blog);
  return result;
};

export const blogServices = {
  createBlogToDB,
};
